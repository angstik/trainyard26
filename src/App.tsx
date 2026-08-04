import { useEffect, useMemo, useRef, useState } from "react";
import { DEFAULT_LEVEL, LEVEL_FAMILIES } from "./levels/catalog";
import { analyzeObjects, isImplicitInfrastructureLink, TRAIN_COLORS } from "./levels/feasibility";
import { decodePuzzleString, encodeLevelToPuzzleString } from "./levels/puzzleCodec";
import { parseLevelImport, type LevelIdentity } from "./levels/importFormats";
import type { Direction, LevelDefinition, LevelFamily, LevelObject, TrainColor } from "./levels/types";
import { sampleRailCenterline } from "./rail-motion";

type Point = [number, number];
type EditorTool = "rail" | "erase" | "select" | "outlet" | "station" | "painter" | "splitter" | "obstacle" | "delete";
type EditorDialog = "level" | "object" | "library" | "io" | null;
type JunctionMode = "cross" | "curves-ne-sw" | "curves-nw-se";
type MovingTrain = {
  id: string;
  color: TrainColor;
  previous?: Point;
  cell: Point;
  next: Point;
  progress: number;
  angle: number;
  fromAngle: number;
};
type Explosion = { id: number; x: number; y: number; reason: string };
type ColorBurst = { id: number; x: number; y: number; color: TrainColor; kind: "paint" | "mix" | "split" | "cross" };
type SoundKind = "unmute" | "switch" | "brake" | "explosion" | "split" | "paint" | "station" | "pass";
type LevelProgress = {
  minimumRails: number | null;
  lastRails: number;
  completed: boolean;
  lastTimeMs: number;
  bestTimeMs: number | null;
  edges: string[];
  junctionModes: Record<string, JunctionMode>;
  switchToes: Record<string, Direction>;
  switchPositions: Record<string, number>;
};
type SimData = {
  trains: MovingTrain[];
  emitted: Record<string, number>;
  received: Record<string, number>;
  outletClocks: Record<string, number>;
  switches: Record<string, number>;
  interactions: Set<string>;
  failed: boolean;
};

const GRID = 7;
const APP_VERSION = 27;
const DIR_DELTA: Record<Direction, Point> = { N: [0, -1], E: [1, 0], S: [0, 1], W: [-1, 0] };
const DIR_ANGLE: Record<Direction, number> = { N: 0, E: 90, S: 180, W: 270 };
const OPPOSITE: Record<Direction, Direction> = { N: "S", E: "W", S: "N", W: "E" };
const COLORS = TRAIN_COLORS;
const PROGRESS_STORAGE_KEY = "signal-nocturne-progress-v1";
const COLOR_LABELS: Record<TrainColor, string> = {
  red: "Rouge", blue: "Bleu", yellow: "Jaune", orange: "Orange", green: "Vert",
  purple: "Violet", brown: "Marron", pink: "Rose", cyan: "Cyan", white: "Blanc",
};
const COLOR_HEX: Record<TrainColor, string> = {
  red: "#e92f45", blue: "#258cff", yellow: "#f5bd2e", orange: "#ff941f", green: "#35c978",
  purple: "#a65be2", brown: "#875431", pink: "#ff52bb", cyan: "#35ddf3", white: "#eef7f8",
};
const MIXES: Record<string, TrainColor> = {
  "blue+red": "purple",
  "red+yellow": "orange",
  "blue+yellow": "green",
  "green+red": "brown",
  "blue+orange": "brown",
  "purple+yellow": "brown",
  "purple+red": "pink",
  "blue+green": "cyan",
};
const SPLITS: Partial<Record<TrainColor, [TrainColor, TrainColor]>> = {
  red: ["red", "red"], blue: ["blue", "blue"], yellow: ["yellow", "yellow"],
  purple: ["red", "blue"], orange: ["red", "yellow"], green: ["blue", "yellow"],
  brown: ["red", "green"], pink: ["purple", "red"], cyan: ["green", "blue"],
};

function pointKey(point: Point) {
  return `${point[0]},${point[1]}`;
}

function edgeKey(a: Point, b: Point) {
  const one = pointKey(a);
  const two = pointKey(b);
  return one < two ? `${one}|${two}` : `${two}|${one}`;
}

function add(point: Point, direction: Direction): Point {
  const delta = DIR_DELTA[direction];
  return [point[0] + delta[0], point[1] + delta[1]];
}

function directionBetween(a: Point, b: Point): Direction {
  if (b[1] < a[1]) return "N";
  if (b[0] > a[0]) return "E";
  if (b[1] > a[1]) return "S";
  return "W";
}

function samePoint(a: Point, b: Point) {
  return a[0] === b[0] && a[1] === b[1];
}

function switchGeometry(directions: Direction[], preferredToe?: Direction) {
  if (directions.length !== 3) return null;
  const toe = preferredToe && directions.includes(preferredToe) ? preferredToe : directions[0];
  return {
    toe,
    exits: directions.filter((direction) => direction !== toe),
  };
}

function sameRoute(one: [Direction, Direction], two: [Direction, Direction]) {
  return (one[0] === two[0] && one[1] === two[1]) || (one[0] === two[1] && one[1] === two[0]);
}

function isStraightRoute(route: [Direction, Direction]) {
  return OPPOSITE[route[0]] === route[1];
}

function routesForCell(directions: Direction[], mode: JunctionMode, preferredToe?: Direction): [Direction, Direction][] {
  if (directions.length === 2) return [[directions[0], directions[1]]];
  if (directions.length === 3) {
    const geometry = switchGeometry(directions, preferredToe);
    return geometry ? geometry.exits.map((exit): [Direction, Direction] => [geometry.toe, exit]) : [];
  }
  if (directions.length === 4) {
    return mode === "cross"
      ? [["N", "S"], ["E", "W"]]
      : mode === "curves-ne-sw"
        ? [["N", "E"], ["S", "W"]]
        : [["N", "W"], ["S", "E"]];
  }
  return [];
}

function modeForRoutes(one: [Direction, Direction], two: [Direction, Direction]): JunctionMode {
  const routes = [one, two];
  if (routes.some((route) => sameRoute(route, ["N", "S"])) && routes.some((route) => sameRoute(route, ["E", "W"]))) return "cross";
  if (routes.some((route) => sameRoute(route, ["N", "E"])) && routes.some((route) => sameRoute(route, ["S", "W"]))) return "curves-ne-sw";
  return "curves-nw-se";
}

function pairedExit(entry: Direction, mode: JunctionMode): Direction {
  if (mode === "cross") return OPPOSITE[entry];
  const pairs: [Direction, Direction][] = mode === "curves-ne-sw"
    ? [["N", "E"], ["S", "W"]]
    : [["N", "W"], ["S", "E"]];
  const pair = pairs.find(([a, b]) => a === entry || b === entry);
  return pair?.[0] === entry ? pair[1] : pair?.[0] ?? OPPOSITE[entry];
}

function colorMark(color: TrainColor) {
  return color === "red" || color === "blue" || color === "yellow" ? ""
    : color === "orange" ? "⬡" : color === "green" ? "□" : color === "purple" ? "✦"
      : color === "brown" ? "⬟" : color === "pink" ? "♥" : color === "cyan" ? "✧" : "●";
}

/**
 * Résout un lot de trains arrivant au même tick sur une gare (potentiellement
 * multi-entrées). Algorithme : on déroule le motif attendu de la gare à
 * partir de `startIndex` ; à chaque étape on cherche, parmi les trains
 * restants du lot, celui dont la couleur correspond à la couleur
 * actuellement attendue, et on le retire. Tant qu'il reste des trains, on
 * continue. Si la couleur attendue est introuvable dans les trains
 * restants, ou s'il n'y a plus de couleur attendue alors qu'il reste des
 * trains, c'est un échec (KO). Si le lot se vide entièrement, c'est un
 * succès pour ce lot (acceptedCount trains ont été reçus).
 */
function resolveStationArrivalBatch(
  arrivals: TrainColor[],
  expects: TrainColor[],
  startIndex: number,
): { acceptedCount: number; ok: boolean } {
  const remaining = [...arrivals];
  let index = startIndex;
  while (remaining.length > 0) {
    const expectedColor = expects[index];
    if (expectedColor === undefined) return { acceptedCount: index - startIndex, ok: false };
    const matchPos = remaining.indexOf(expectedColor);
    if (matchPos === -1) return { acceptedCount: index - startIndex, ok: false };
    remaining.splice(matchPos, 1);
    index += 1;
  }
  return { acceptedCount: index - startIndex, ok: true };
}

function mixColors(one: TrainColor, two: TrainColor): TrainColor | null {
  if (one === two) return one;
  return MIXES[[one, two].sort().join("+")] ?? null;
}

function junctionModeForRoute(route: [Direction, Direction]): JunctionMode {
  if (isStraightRoute(route)) return "cross";
  return modeForRoutes(route, [OPPOSITE[route[0]], OPPOSITE[route[1]]]);
}

function areSplitterSiblings(one: MovingTrain, two: MovingTrain) {
  const splitParent = (id: string) => id.replace(/-split-[01]-\d+$/, "");
  return one.id.includes("-split-") && two.id.includes("-split-") && splitParent(one.id) === splitParent(two.id);
}

function routedSplitterOutputs(color: TrainColor, orientation: "H" | "V") {
  const split = SPLITS[color];
  if (!split) return null;
  const redSide: Direction = orientation === "H" ? "N" : "E";
  const blueSide: Direction = orientation === "H" ? "S" : "W";
  const free = [redSide, blueSide];
  const result: { color: TrainColor; direction: Direction }[] = [];
  const assign = (part: TrainColor, preferred?: Direction) => {
    const direction = preferred && free.includes(preferred) ? preferred : free[0];
    free.splice(free.indexOf(direction), 1);
    result.push({ color: part, direction });
  };
  const redIndex = split.indexOf("red");
  const blueIndex = split.indexOf("blue");
  const assigned = new Set<number>();
  if (redIndex >= 0) {
    assign(split[redIndex], redSide);
    assigned.add(redIndex);
  }
  if (blueIndex >= 0 && !assigned.has(blueIndex)) {
    assign(split[blueIndex], blueSide);
    assigned.add(blueIndex);
  }
  split.forEach((part, index) => {
    if (!assigned.has(index)) assign(part);
  });
  return result;
}

function formatTime(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  return `${Math.floor(totalSeconds / 60).toString().padStart(2, "0")}:${(totalSeconds % 60).toString().padStart(2, "0")}`;
}

function metricColor(value: number, target: number) {
  if (value === target) return "#eef7f8";
  if (value < target) {
    const progress = target > 0 ? value / target : 0;
    return `hsl(${205 - progress * 25} 78% ${62 + progress * 8}%)`;
  }
  const overflow = Math.min(1, (value - target) / Math.max(4, target * 0.35));
  return `hsl(${35 - overflow * 35} 88% ${63 - overflow * 7}%)`;
}

function createEmptySim(objects: LevelObject[], switches: Record<string, number> = {}): SimData {
  return {
    trains: [],
    emitted: Object.fromEntries(objects.filter((o) => o.type === "outlet").map((o) => [o.id, 0])),
    received: Object.fromEntries(objects.filter((o) => o.type === "station").map((o) => [o.id, 0])),
    outletClocks: Object.fromEntries(objects.filter((o) => o.type === "outlet").map((o) => [o.id, 999])),
    switches: { ...switches },
    interactions: new Set(),
    failed: false,
  };
}

function TrackGraphic({ directions, mode = "cross", switchToe, switchIndex = 0, preview }: { directions: Direction[]; mode?: JunctionMode; switchToe?: Direction; switchIndex?: number; preview?: boolean }) {
  if (!directions.length) return null;
  const endpoint: Record<Direction, Point> = { N: [50, -3], E: [103, 50], S: [50, 103], W: [-3, 50] };
  let paths: string[] = [];
  if (directions.length === 4) {
    paths = mode === "cross"
      ? ["M 50 -3 L 50 103", "M -3 50 L 103 50"]
      : mode === "curves-ne-sw"
        ? ["M 50 -3 Q 50 50 103 50", "M 50 103 Q 50 50 -3 50"]
        : ["M 50 -3 Q 50 50 -3 50", "M 50 103 Q 50 50 103 50"];
  } else if (directions.length === 3) {
    const geometry = switchGeometry(directions, switchToe);
    if (geometry) {
      paths = geometry.exits.map((exit) => {
        const [sx, sy] = endpoint[geometry.toe];
        const [bx, by] = endpoint[exit];
        return OPPOSITE[geometry.toe] === exit
          ? `M ${sx} ${sy} L ${bx} ${by}`
          : `M ${sx} ${sy} Q 50 50 ${bx} ${by}`;
      });
    }
  } else if (directions.length === 2) {
    const [a, b] = directions;
    const [ax, ay] = endpoint[a];
    const [bx, by] = endpoint[b];
    const opposite = (a === "N" && b === "S") || (a === "S" && b === "N") || (a === "E" && b === "W") || (a === "W" && b === "E");
    paths = [opposite ? `M ${ax} ${ay} L ${bx} ${by}` : `M ${ax} ${ay} Q 50 50 ${bx} ${by}`];
  } else {
    const [x, y] = endpoint[directions[0]];
    paths = [`M 50 50 L ${x} ${y}`];
  }
  const geometry = directions.length === 3 ? switchGeometry(directions, switchToe) : null;
  const activeBranch = geometry?.exits[switchIndex % geometry.exits.length];
  return (
    <>
      <svg className={`track-svg ${preview ? "preview" : ""}`} viewBox="0 0 100 100" aria-hidden="true">
        {paths.map((d, i) => <path key={`bed-${i}`} className="rail-bed" d={d} />)}
        {paths.map((d, i) => <path key={`sleepers-${i}`} className="rail-sleepers" d={d} />)}
        {paths.map((d, i) => <path key={`outer-${i}`} className="rail-outer" d={d} />)}
        {paths.map((d, i) => <path key={`inner-${i}`} className="rail-inner" d={d} />)}
        {directions.length === 4 && mode === "cross" && (
          <g className="cross-upper">
            <path className="cross-gap" d={paths[1]} />
            <path className="rail-bed" d={paths[1]} />
            <path className="rail-sleepers" d={paths[1]} />
            <path className="rail-outer" d={paths[1]} />
            <path className="rail-inner" d={paths[1]} />
          </g>
        )}
        {directions.length === 3 && <circle className="rail-joint" cx="50" cy="50" r="4" />}
      </svg>
      {activeBranch && <span className="switch-indicator" style={{ transform: `rotate(${DIR_ANGLE[activeBranch] - 90}deg)` }}>➤</span>}
      {directions.length === 4 && <span className="junction-mode" aria-hidden="true">{mode === "cross" ? "＋" : "⌁"}</span>}
    </>
  );
}

function Dots({ colors, done = 0, slots = colors.length }: { colors: TrainColor[]; done?: number; slots?: number }) {
  return (
    <div className="dots" aria-label={`${colors.length} trains`}>
      {Array.from({ length: slots }, (_, i) => (
        <i key={i} className={`${colors[i] ?? "empty"} ${i < done ? "done" : ""}`}>
          {colors[i] ? colorMark(colors[i]) : ""}
        </i>
      ))}
    </div>
  );
}

function SteamLoco({ train, future }: { train: MovingTrain; future?: Point }) {
  const incoming = train.previous ?? [
    train.cell[0] - (train.next[0] - train.cell[0]),
    train.cell[1] - (train.next[1] - train.cell[1]),
  ] as Point;
  const onward = future ?? [
    train.next[0] + (train.next[0] - train.cell[0]),
    train.next[1] + (train.next[1] - train.cell[1]),
  ] as Point;
  const halfLength = 0.16;
  const rear = sampleRailCenterline(incoming, train.cell, train.next, onward, train.progress - halfLength);
  const front = sampleRailCenterline(incoming, train.cell, train.next, onward, train.progress + halfLength);
  const x = ((front[0] + rear[0]) / 2) * (100 / GRID);
  const y = ((front[1] + rear[1]) / 2) * (100 / GRID);
  const displayAngle = Math.atan2(front[0] - rear[0], rear[1] - front[1]) * 180 / Math.PI;
  return (
    <div className={`loco ${train.color}`} style={{ left: `${x}%`, top: `${y}%`, transform: `rotate(${displayAngle}deg)` }}>
      <span className="cowcatcher" />
      <span className="front-plate" />
      <span className="wheel left-one" /><span className="wheel right-one" />
      <span className="wheel left-two" /><span className="wheel right-two" />
      <span className="side-rod left" /><span className="side-rod right" />
      <span className="boiler"><i /><i /></span>
      <span className="chimney" />
      <span className="cab"><i /><i /></span>
      <span className="lamp" />
    </div>
  );
}

function TerminalBuilding({ object, done = 0 }: { object: Extract<LevelObject, { type: "outlet" | "station" }>; done?: number }) {
  const colors = object.type === "outlet" ? object.trains : object.expects;
  const facings = object.type === "outlet" ? [object.facing] : object.facings;
  return (
    <div className={`terminal ${object.type}`}>
      {facings.map((facing) => (
        <span key={facing} className="terminal-connector" style={{ transform: `rotate(${DIR_ANGLE[facing]}deg)` }} />
      ))}
      <div className="roof"><span /><i /><i /></div>
      <div className={`terminal-dots ${object.type}-dots ${object.type === "station" && colors.length > 4 ? "scrolling" : ""}`}>
        <Dots colors={colors} done={done} slots={object.type === "outlet" ? 6 : colors.length} />
      </div>
      <span className="pillar left" /><span className="pillar right" />
      <div className="arch">
        {object.type === "outlet" ? <span className="door" /> : <><span className="buffer" /><i className="lantern left" /><i className="lantern right" /></>}
      </div>
    </div>
  );
}

function PainterPiece({ object }: { object: Extract<LevelObject, { type: "painter" }> }) {
  return (
    <div className="painter-piece" style={{ "--paint-color": COLOR_HEX[object.color] } as React.CSSProperties}>
      {object.sides.map((side) => (
        <span key={side} className="painter-connector" style={{ transform: `rotate(${DIR_ANGLE[side]}deg)` }} />
      ))}
      <span className="paint-vat" /><span className="paint-nozzle" /><i>{colorMark(object.color)}</i>
    </div>
  );
}

function SplitterPiece({ object }: { object: Extract<LevelObject, { type: "splitter" }> }) {
  return (
    <div className={`splitter-piece ${object.orientation.toLowerCase()}`}>
      <span className="splitter-axis" /><span className="rainbow-wheel" /><i>{object.orientation}</i>
      <span className="split-output split-red" aria-hidden="true" />
      <span className="split-output split-blue" aria-hidden="true" />
    </div>
  );
}

function ToolIcon({ tool }: { tool: EditorTool }) {
  if (tool === "rail") return <span className="tool-preview rail-preview"><TrackGraphic directions={["E", "W"]} preview /></span>;
  if (tool === "outlet" || tool === "station") {
    const object = tool === "outlet"
      ? { id: "tool-outlet", type: "outlet" as const, x: 0, y: 0, facing: "E" as Direction, trains: ["red" as TrainColor] }
      : { id: "tool-station", type: "station" as const, x: 0, y: 0, facings: ["E" as Direction], expects: ["red" as TrainColor] };
    return <span className="tool-preview terminal-preview"><TerminalBuilding object={object} /></span>;
  }
  if (tool === "painter") return <span className="tool-preview"><PainterPiece object={{ id: "tool-painter", type: "painter", x: 0, y: 0, color: "red", sides: ["N", "S"] }} /></span>;
  if (tool === "splitter") return <span className="tool-preview"><SplitterPiece object={{ id: "tool-splitter", type: "splitter", x: 0, y: 0, orientation: "H" }} /></span>;
  if (tool === "obstacle") return <span className="tool-preview rock-preview" />;
  if (tool === "select") return <span className="tool-glyph">✥</span>;
  return <span className="tool-glyph">{tool === "erase" ? "⌫" : "×"}</span>;
}

export default function App() {
  const [mode, setMode] = useState<"play" | "editor">("play");
  const [families, setFamilies] = useState<LevelFamily[]>(LEVEL_FAMILIES);
  const [activeLevel, setActiveLevel] = useState<LevelDefinition>(DEFAULT_LEVEL);
  const [speed, setSpeed] = useState(1);
  const [muted, setMuted] = useState(true);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [edges, setEdges] = useState<Set<string>>(() => new Set());
  const [junctionModes, setJunctionModes] = useState<Record<string, JunctionMode>>({});
  const [switchToes, setSwitchToes] = useState<Record<string, Direction>>({});
  const [switchPositions, setSwitchPositions] = useState<Record<string, number>>({});
  const [displaySwitchPositions, setDisplaySwitchPositions] = useState<Record<string, number>>({});
  const [objects, setObjects] = useState<LevelObject[]>(DEFAULT_LEVEL.objects);
  const [railLimit, setRailLimit] = useState(DEFAULT_LEVEL.railLimit);
  const [family, setFamily] = useState(DEFAULT_LEVEL.family);
  const [editorTool, setEditorTool] = useState<EditorTool>("rail");
  const [history, setHistory] = useState<Set<string>[]>([]);
  const [gesture, setGesture] = useState<Point[]>([]);
  const [gestureBaseEdges, setGestureBaseEdges] = useState<Set<string>>(() => new Set());
  const [trains, setTrains] = useState<MovingTrain[]>([]);
  const [emitted, setEmitted] = useState<Record<string, number>>({});
  const [received, setReceived] = useState<Record<string, number>>({});
  const [explosions, setExplosions] = useState<Explosion[]>([]);
  const [colorBursts, setColorBursts] = useState<ColorBurst[]>([]);
  const [result, setResult] = useState<"idle" | "success" | "failed">("idle");
  const [status, setStatus] = useState("TRACEZ LES VOIES");
  const [selectedObject, setSelectedObject] = useState<string | null>(null);
  const [editorDialog, setEditorDialog] = useState<EditorDialog>(null);
  const [sequenceSlot, setSequenceSlot] = useState(0);
  const [newFamilyName, setNewFamilyName] = useState("");
  const [saveStatus, setSaveStatus] = useState("");
  const [levelProgress, setLevelProgress] = useState<Record<string, LevelProgress>>({});
  const [editingElapsedMs, setEditingElapsedMs] = useState(0);
  const [libraryFamilyId, setLibraryFamilyId] = useState<string | null>(null);
  const [importText, setImportText] = useState("");
  const [importFeedback, setImportFeedback] = useState("");
  const [importedIdentity, setImportedIdentity] = useState<LevelIdentity | null>(null);
  const [exportFeedback, setExportFeedback] = useState("");

  const boardRef = useRef<HTMLDivElement>(null);
  const drawingRef = useRef(false);
  const gestureRef = useRef<Point[]>([]);
  const gestureStartEdges = useRef<Set<string>>(new Set());
  const selectGestureRef = useRef<{ objectId: string; startCell: Point; moving: boolean } | null>(null);
  const longPressTimerRef = useRef<number | null>(null);
  const [movingObjectId, setMovingObjectId] = useState<string | null>(null);
  const [moveGhostCell, setMoveGhostCell] = useState<Point | null>(null);
  const simRef = useRef<SimData>(createEmptySim(DEFAULT_LEVEL.objects));
  const mutedRef = useRef(true);
  const activeAudioRef = useRef<Set<HTMLAudioElement>>(new Set());
  const explosionId = useRef(0);
  const burstId = useRef(0);
  const objectId = useRef(0);
  const dialogBodyRef = useRef<HTMLDivElement>(null);
  const libraryScrollOffsets = useRef<Record<string, number>>({});

  const outlets = useMemo(() => objects.filter((o): o is Extract<LevelObject, { type: "outlet" }> => o.type === "outlet"), [objects]);
  const stations = useMemo(() => objects.filter((o): o is Extract<LevelObject, { type: "station" }> => o.type === "station"), [objects]);
  const navigableLevels = useMemo(
    () => families.filter((item) => mode === "editor" || item.playable).flatMap((item) => item.levels),
    [families, mode],
  );
  const activeLevelIndex = navigableLevels.findIndex((level) => level.id === activeLevel.id);
  const trackCells = useMemo(() => {
    const cells = new Set<string>();
    edges.forEach((edge) => edge.split("|").forEach((cell) => cells.add(cell)));
    return cells.size;
  }, [edges]);
  const railCount = edges.size;
  const feasibility = useMemo(() => analyzeObjects(objects, GRID, GRID), [objects]);
  const invalidObjectIds = useMemo(() => new Set(feasibility.structuralIssues.map((issue) => issue.objectId)), [feasibility.structuralIssues]);
  const railMetricColor = metricColor(railCount, railLimit);

  useEffect(() => {
    if (running || result !== "idle") return;
    let lastTick = Date.now();
    const timer = window.setInterval(() => {
      const now = Date.now();
      setEditingElapsedMs((value) => value + now - lastTick);
      lastTick = now;
    }, 1000);
    return () => window.clearInterval(timer);
  }, [running, result]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem("signal-nocturne-level-repository");
        if (stored) {
          const localFamilies = JSON.parse(stored) as LevelFamily[];
          const bundled = new Set(LEVEL_FAMILIES.map((item) => item.id));
          setFamilies([...LEVEL_FAMILIES, ...localFamilies.filter((item) => !bundled.has(item.id))]);
        }
        const storedProgress = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
        if (storedProgress) setLevelProgress(JSON.parse(storedProgress) as Record<string, LevelProgress>);
        const storedLibraryFamily = window.localStorage.getItem("signal-nocturne-library-family");
        if (storedLibraryFamily) setLibraryFamilyId(storedLibraryFamily);
        const storedLibraryOffsets = window.sessionStorage.getItem("signal-nocturne-library-scroll");
        if (storedLibraryOffsets) libraryScrollOffsets.current = JSON.parse(storedLibraryOffsets) as Record<string, number>;
      } catch {
        setSaveStatus("DÉPÔT LOCAL ILLISIBLE");
      }
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (editorDialog !== "library") return;
    const key = libraryFamilyId ?? "families";
    const frame = window.requestAnimationFrame(() => {
      if (dialogBodyRef.current) dialogBodyRef.current.scrollTop = libraryScrollOffsets.current[key] ?? 0;
    });
    return () => window.cancelAnimationFrame(frame);
  }, [editorDialog, libraryFamilyId]);

  function selectLibraryFamily(id: string | null) {
    setLibraryFamilyId(id);
    if (id) window.localStorage.setItem("signal-nocturne-library-family", id);
    else window.localStorage.removeItem("signal-nocturne-library-family");
  }

  useEffect(() => {
    function closeDialog(event: KeyboardEvent) {
      if (event.key === "Escape") setEditorDialog(null);
    }
    window.addEventListener("keydown", closeDialog);
    return () => window.removeEventListener("keydown", closeDialog);
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      let refreshing = false;
      const reloadOnUpdate = () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      };
      navigator.serviceWorker.addEventListener("controllerchange", reloadOnUpdate);
      navigator.serviceWorker.register("/sw.js", { updateViaCache: "none" })
        .then((registration) => registration.update())
        .catch(() => {
          // The game remains fully usable online if registration is unavailable.
        });
      return () => navigator.serviceWorker.removeEventListener("controllerchange", reloadOnUpdate);
    }
  }, []);

  function directionsForCell(x: number, y: number, source = edges): Direction[] {
    const result: Direction[] = [];
    (Object.keys(DIR_DELTA) as Direction[]).forEach((direction) => {
      const neighbor = add([x, y], direction);
      if (neighbor[0] >= 0 && neighbor[0] < GRID && neighbor[1] >= 0 && neighbor[1] < GRID && source.has(edgeKey([x, y], neighbor))) result.push(direction);
    });
    return result;
  }

  function resetSimulation(initialSwitches: Record<string, number> = switchPositions) {
    setRunning(false);
    setPaused(false);
    setTrains([]);
    setExplosions([]);
    setColorBursts([]);
    setResult("idle");
    setStatus("PRÊT À LANCER");
    setDisplaySwitchPositions({ ...initialSwitches });
    const empty = createEmptySim(objects, initialSwitches);
    simRef.current = empty;
    setEmitted(empty.emitted);
    setReceived(empty.received);
  }

  function loadLevel(level: LevelDefinition) {
    setActiveLevel(level);
    setEdges(new Set(level.savedEdges ?? []));
    setJunctionModes(level.junctionModes ?? {});
    setSwitchToes(level.switchToes ?? {});
    setSwitchPositions(level.switchPositions ?? {});
    setDisplaySwitchPositions(level.switchPositions ?? {});
    setHistory([]);
    setGesture([]);
    setObjects(level.objects);
    setRailLimit(level.railLimit);
    setFamily(level.family);
    setSelectedObject(null);
    setEditorDialog(null);
    setRunning(false);
    setPaused(false);
    setTrains([]);
    setExplosions([]);
    setColorBursts([]);
    setResult("idle");
    setEditingElapsedMs(0);
    setStatus("TRACEZ LES VOIES");
    const empty = createEmptySim(level.objects, level.switchPositions ?? {});
    simRef.current = empty;
    setEmitted(empty.emitted);
    setReceived(empty.received);
  }

  function handleImportLevel() {
    const parsed = parseLevelImport(importText);
    if (parsed.kind === "error") {
      setImportFeedback(parsed.message);
      setImportedIdentity(null);
      return;
    }
    const decoded = decodePuzzleString(parsed.puzzleString);
    if (decoded.objects.length === 0) {
      setImportFeedback(`Échec du décodage : ${decoded.warnings[0] ?? "puzzleString vide ou illisible."}`);
      setImportedIdentity(null);
      return;
    }
    const identity = parsed.kind === "csv" ? parsed.identity : null;
    const nextLevel: LevelDefinition = {
      id: identity?.id ? `import-${identity.id}` : `import-${Date.now()}`,
      title: identity?.name?.trim() || "Niveau importé",
      number: activeLevel.number,
      brief: identity?.description?.trim() || "",
      family,
      width: 7,
      height: 7,
      railLimit,
      objects: decoded.objects,
      examplePaths: [],
    };
    loadLevel(nextLevel);
    setImportedIdentity(identity);
    setImportFeedback(
      decoded.warnings.length > 0
        ? `Niveau importé avec ${decoded.warnings.length} avertissement${decoded.warnings.length > 1 ? "s" : ""} : ${decoded.warnings.join(" · ")}`
        : "Niveau importé.",
    );
    setImportText("");
  }

  function handleExportLevel() {
    const puzzleString = encodeLevelToPuzzleString(objects, activeLevel.width, activeLevel.height);
    if (!puzzleString) {
      setExportFeedback("Export impossible : le format puzzleString ne prend en charge que la grille 7×7.");
      return;
    }
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(puzzleString).then(
        () => setExportFeedback(`Copié dans le presse-papiers (${puzzleString.length} caractères).`),
        () => setExportFeedback(`Copie automatique refusée par le navigateur. Chaîne : ${puzzleString}`),
      );
    } else {
      setExportFeedback(`Presse-papiers indisponible. Chaîne : ${puzzleString}`);
    }
  }

  function resumeLevel(level: LevelDefinition) {
    const saved = levelProgress[level.id];
    loadLevel(level);
    if (!saved) return;
    setEdges(new Set(saved.edges));
    setJunctionModes(saved.junctionModes);
    setSwitchToes(saved.switchToes);
    setSwitchPositions(saved.switchPositions);
    setDisplaySwitchPositions(saved.switchPositions);
    setStatus("DERNIER TABLEAU RESTAURÉ");
  }

  function persistAttempt(success: boolean) {
    setLevelProgress((current) => {
      const previous = current[activeLevel.id];
      const nextEntry: LevelProgress = {
        minimumRails: success
          ? Math.min(previous?.minimumRails ?? Number.POSITIVE_INFINITY, railCount)
          : previous?.minimumRails ?? null,
        lastRails: railCount,
        completed: previous?.completed === true || previous?.minimumRails != null || success,
        lastTimeMs: editingElapsedMs,
        bestTimeMs: success
          ? Math.min(previous?.bestTimeMs ?? Number.POSITIVE_INFINITY, editingElapsedMs)
          : previous?.bestTimeMs ?? null,
        edges: [...edges],
        junctionModes: { ...junctionModes },
        switchToes: { ...switchToes },
        switchPositions: { ...switchPositions },
      };
      const next = { ...current, [activeLevel.id]: nextEntry };
      window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function changeMode(nextMode: "play" | "editor") {
    resetSimulation();
    setEditorDialog(null);
    setSelectedObject(null);
    setGesture([]);
    gestureRef.current = [];
    drawingRef.current = false;
    if (nextMode === "play" && mode === "editor") {
      // Au retour en mode jeu : on ne touche jamais aux rails connectés à une
      // remise ou une gare (les "bouts de connexion" doivent rester
      // connectés), ni à un splitter (ses 4 côtés sont potentiellement
      // valides, en entrée comme en sortie selon son orientation — le moteur
      // de simulation gère déjà les entrées invalides comme un accident). On
      // retire uniquement : tout rail touchant un obstacle, et les rails
      // d'un painter qui n'empruntent pas l'un de ses 2 côtés configurés.
      const obstacleCells = new Set(objects.filter((object) => object.type === "obstacle").map((object) => pointKey([object.x, object.y])));
      const painterSides = new Map<string, Set<Direction>>();
      objects.filter((object) => object.type === "painter").forEach((object) => {
        painterSides.set(pointKey([object.x, object.y]), new Set(object.sides));
      });
      setEdges((current) => new Set([...current].filter((edge) => {
        const [aKey, bKey] = edge.split("|");
        if (obstacleCells.has(aKey) || obstacleCells.has(bKey)) return false;
        for (const [selfKey, otherKey] of [[aKey, bKey], [bKey, aKey]] as const) {
          const allowed = painterSides.get(selfKey);
          if (!allowed) continue;
          const [sx, sy] = selfKey.split(",").map(Number) as [number, number];
          const [ox, oy] = otherKey.split(",").map(Number) as [number, number];
          if (!allowed.has(directionBetween([sx, sy], [ox, oy]))) return false;
        }
        return true;
      })));
    }
    setMode(nextMode);
    setEditorTool(nextMode === "editor" ? "select" : "rail");
  }

  function changeLevel(offset: -1 | 1) {
    const target = navigableLevels[activeLevelIndex + offset];
    if (target) loadLevel(target);
  }

  function playSample(kind: SoundKind, force = false) {
    if (mutedRef.current && !force) return;
    const audio = new Audio(`${import.meta.env.BASE_URL}audio/${kind}.m4a`);
    audio.preload = "auto";
    audio.volume = kind === "explosion" ? 1 : 0.82;
    activeAudioRef.current.add(audio);
    const release = () => activeAudioRef.current.delete(audio);
    audio.addEventListener("ended", release, { once: true });
    audio.addEventListener("error", release, { once: true });
    void audio.play().catch(release);
  }

  function toggleMute() {
    const next = !mutedRef.current;
    mutedRef.current = next;
    setMuted(next);
    if (!next) {
      playSample("unmute", true);
      for (const kind of ["switch", "brake", "explosion", "split", "paint", "station", "pass"] satisfies SoundKind[]) {
        const preload = new Audio(`${import.meta.env.BASE_URL}audio/${kind}.m4a`);
        preload.preload = "auto";
        preload.load();
      }
    }
  }

  function playEffect(kind: "switch" | "brake" | "split" | "paint" | "station" | "pass") {
    // A failed optional effect must never replace a gameplay error or success message.
    playSample(kind);
  }

  function playExplosionSound() {
    playEffect("brake");
    window.setTimeout(() => playSample("explosion"), 90);
  }

  function explode(x: number, y: number, reason: string) {
    if (simRef.current.failed) return;
    simRef.current.failed = true;
    const blast = { id: ++explosionId.current, x, y, reason };
    setExplosions((items) => [...items, blast]);
    setResult("failed");
    setStatus(reason.toUpperCase());
    setRunning(false);
    playExplosionSound();
  }

  function addColorBurst(x: number, y: number, color: TrainColor, kind: ColorBurst["kind"]) {
    const id = ++burstId.current;
    setColorBursts((items) => [...items, { id, x, y, color, kind }]);
    window.setTimeout(() => setColorBursts((items) => items.filter((item) => item.id !== id)), 850);
  }

  function launch() {
    if (running) {
      setPaused((value) => !value);
      return;
    }
    persistAttempt(false);
    const clean = createEmptySim(objects, switchPositions);
    simRef.current = clean;
    setDisplaySwitchPositions({ ...switchPositions });
    setTrains([]);
    setExplosions([]);
    setColorBursts([]);
    setEmitted(clean.emitted);
    setReceived(clean.received);
    setResult("idle");
    setStatus("EN CIRCULATION");
    setPaused(false);
    setRunning(true);
  }

  useEffect(() => {
    if (!running || paused) return;
    const timer = window.setInterval(() => {
      const sim = simRef.current;
      if (sim.failed) return;
      const dt = 0.025 * speed;

      outlets.forEach((outlet) => {
        const index = sim.emitted[outlet.id] ?? 0;
        sim.outletClocks[outlet.id] = (sim.outletClocks[outlet.id] ?? 999) + dt;
        if (index < outlet.trains.length && sim.outletClocks[outlet.id] >= 0.9) {
          const next = add([outlet.x, outlet.y], outlet.facing);
          sim.trains.push({
            id: `${outlet.id}-${index}-${Date.now()}`,
            color: outlet.trains[index],
            cell: [outlet.x, outlet.y],
            next,
            progress: 0,
            angle: DIR_ANGLE[outlet.facing],
            fromAngle: DIR_ANGLE[outlet.facing],
          });
          sim.emitted[outlet.id] = index + 1;
          sim.outletClocks[outlet.id] = 0;
        }
      });

      const advanced: MovingTrain[] = [];
      const stationArrivals = new Map<string, MovingTrain[]>();
      for (const train of sim.trains) {
        let moved = { ...train, progress: train.progress + dt * 1.15 };
        if (moved.progress < 1) {
          advanced.push(moved);
          continue;
        }

        const from = moved.cell;
        const current = moved.next;
        if (current[0] < 0 || current[0] >= GRID || current[1] < 0 || current[1] >= GRID
          || (!edges.has(edgeKey(from, current)) && !isImplicitInfrastructureLink(objects, from, current))) {
          explode(current[0], current[1], "Train arrivé en bout de rail");
          break;
        }

        const object = objects.find((item) => item.x === current[0] && item.y === current[1]);
        if (object?.type === "obstacle" || object?.type === "outlet") {
          explode(current[0], current[1], object.type === "obstacle" ? "Collision avec un obstacle" : "Collision avec une remise");
          break;
        }
        if (object?.type === "station") {
          // Décision différée : plusieurs trains peuvent arriver au même tick depuis
          // des entrées différentes d'une gare multi-entrées. Voir résolution groupée
          // juste après cette boucle (règle : priorité à la couleur attendue, quelle
          // que soit l'entrée d'où elle arrive).
          const list = stationArrivals.get(object.id) ?? [];
          list.push(moved);
          stationArrivals.set(object.id, list);
          continue;
        }

        const cellDirections = directionsForCell(current[0], current[1]);
        const entry = directionBetween(current, from);
        if (object?.type === "painter") {
          if (!object.sides.includes(entry)) {
            explode(current[0], current[1], "Entrée par un côté non connecté du painter");
            break;
          }
          if (moved.color !== object.color) {
            moved = { ...moved, color: object.color };
            addColorBurst(current[0], current[1], object.color, "paint");
            playEffect("paint");
          }
          const exitSide = object.sides.find((side) => side !== entry)!;
          const next = add(current, exitSide);
          const nextAngle = DIR_ANGLE[exitSide];
          advanced.push({ ...moved, previous: from, cell: current, next, progress: moved.progress - 1, fromAngle: moved.angle, angle: nextAngle });
          continue;
        }
        if (object?.type === "splitter") {
          const validEntry = object.orientation === "H" ? entry === "E" || entry === "W" : entry === "N" || entry === "S";
          if (!validEntry) {
            explode(current[0], current[1], "Entrée par le côté coloré (sortie) du splitter — accident");
            break;
          }
          const splitOutputs = routedSplitterOutputs(moved.color, object.orientation);
          if (!splitOutputs) {
            explode(current[0], current[1], "Décomposition de cette couleur non définie");
            break;
          }
          splitOutputs.forEach((splitOutput, index) => {
            const next = add(current, splitOutput.direction);
            advanced.push({
              ...moved,
              id: `${moved.id}-split-${index}-${Date.now()}`,
              color: splitOutput.color,
              previous: from,
              cell: current,
              next,
              progress: moved.progress - 1,
              angle: DIR_ANGLE[splitOutput.direction],
              fromAngle: moved.angle,
            });
          });
          addColorBurst(current[0], current[1], moved.color, "split");
          playEffect("split");
          continue;
        }
        let exit: Direction | undefined;

        if (cellDirections.length === 4) {
          exit = pairedExit(entry, junctionModes[pointKey(current)] ?? "cross");
        } else if (cellDirections.length === 3) {
          const switchKey = pointKey(current);
          const geometry = switchGeometry(cellDirections, switchToes[switchKey]);
          if (geometry) {
            const position = (sim.switches[switchKey] ?? 0) % geometry.exits.length;
            exit = entry === geometry.toe ? geometry.exits[position] : geometry.toe;
            sim.switches[switchKey] = (position + 1) % geometry.exits.length;
            playEffect("switch");
          }
        } else {
          exit = cellDirections.find((direction) => direction !== entry);
        }

        if (!exit || !cellDirections.includes(exit)) {
          explode(current[0], current[1], "Train arrivé en bout de rail");
          break;
        }
        const next = add(current, exit);
        const nextAngle = DIR_ANGLE[directionBetween(current, next)];
        advanced.push({ ...moved, previous: from, cell: current, next, progress: moved.progress - 1, fromAngle: moved.angle, angle: nextAngle });
      }

      if (!sim.failed) {
        for (const [stationId, arrivals] of stationArrivals) {
          const station = objects.find((item) => item.id === stationId && item.type === "station") as
            | Extract<LevelObject, { type: "station" }>
            | undefined;
          if (!station) continue;
          const startIndex = sim.received[stationId] ?? 0;
          const { acceptedCount, ok } = resolveStationArrivalBatch(arrivals.map((train) => train.color), station.expects, startIndex);
          sim.received[stationId] = startIndex + acceptedCount;
          for (let i = 0; i < acceptedCount; i++) playEffect("station");
          if (!ok) {
            explode(
              station.x,
              station.y,
              arrivals.length > 1
                ? "Conflit d’arrivée simultanée en gare : aucune couleur attendue parmi les entrées"
                : "Train non attendu dans cette gare",
            );
            break;
          }
        }
      }

      let resolved = advanced;
      if (!sim.failed) {
        const consumed = new Set<number>();
        const merged: MovingTrain[] = [];
        for (let i = 0; i < advanced.length; i++) {
          if (consumed.has(i)) continue;
          let combined = false;
          for (let j = i + 1; j < advanced.length; j++) {
            if (consumed.has(j)) continue;
            const a = advanced[i], b = advanced[j];
            const sameDirection = samePoint(a.cell, b.cell) && samePoint(a.next, b.next);
            const frontal = samePoint(a.cell, b.next) && samePoint(a.next, b.cell);
            const ax = a.cell[0] + (a.next[0] - a.cell[0]) * a.progress;
            const ay = a.cell[1] + (a.next[1] - a.cell[1]) * a.progress;
            const bx = b.cell[0] + (b.next[0] - b.cell[0]) * b.progress;
            const by = b.cell[1] + (b.next[1] - b.cell[1]) * b.progress;
            const near = Math.hypot(ax - bx, ay - by) < 0.22;
            const aVector: Point = [a.next[0] - a.cell[0], a.next[1] - a.cell[1]];
            const bVector: Point = [b.next[0] - b.cell[0], b.next[1] - b.cell[1]];
            const perpendicular = aVector[0] * bVector[0] + aVector[1] * bVector[1] === 0;
            const sharedCellCrossing = samePoint(a.cell, b.cell) && !samePoint(a.next, b.next);
            // Sur une jonction à 4 sorties en mode "virages" (N-E / S-W ou N-W / S-E), les deux
            // routes sont deux arcs indépendants qui ne se touchent jamais géométriquement,
            // contrairement au mode "cross" (deux droites qui se croisent au centre). Dans ce
            // cas, deux trains présents dans la même case ne doivent pas mélanger leurs couleurs.
            const sharedCellDirections = sharedCellCrossing ? directionsForCell(a.cell[0], a.cell[1]) : [];
            const sharedCellMode = sharedCellDirections.length === 4 ? (junctionModes[pointKey(a.cell)] ?? "cross") : null;
            const independentTracks = sharedCellCrossing && sharedCellMode !== null && sharedCellMode !== "cross";
            const crossing = near && !areSplitterSiblings(a, b) && !independentTracks && (perpendicular || sharedCellCrossing);
            if (frontal && near) {
              const interactionKey = `${[a.id, b.id].sort().join("~")}@${edgeKey(a.cell, a.next)}`;
              if (!sim.interactions.has(interactionKey)) {
                const mixedColor = mixColors(a.color, b.color);
                if (mixedColor) {
                  advanced[i] = { ...a, color: mixedColor };
                  advanced[j] = { ...b, color: mixedColor };
                }
                addColorBurst((ax + bx) / 2, (ay + by) / 2, mixedColor ?? a.color, "cross");
                playEffect("pass");
                sim.interactions.add(interactionKey);
              }
              continue;
            }
            if (sameDirection && near) {
              const mixedColor = mixColors(a.color, b.color);
              if (mixedColor) {
                consumed.add(i);
                consumed.add(j);
                merged.push({ ...a, id: `${a.id}-mix-${b.id}`, color: mixedColor });
                addColorBurst((ax + bx) / 2, (ay + by) / 2, mixedColor, "mix");
                combined = true;
              }
              break;
            }
            if (crossing) {
              const mixedColor = mixColors(a.color, b.color);
              if (mixedColor) {
                advanced[i] = { ...a, color: mixedColor };
                advanced[j] = { ...b, color: mixedColor };
                addColorBurst((ax + bx) / 2, (ay + by) / 2, mixedColor, "mix");
              }
            }
          }
          if (sim.failed) break;
          if (!combined && !consumed.has(i)) merged.push(advanced[i]);
        }
        resolved = merged;
      }

      sim.trains = sim.failed ? [] : resolved;
      setTrains([...sim.trains]);
      setDisplaySwitchPositions({ ...sim.switches });
      setEmitted({ ...sim.emitted });
      setReceived({ ...sim.received });

      const allEmitted = outlets.every((outlet) => (sim.emitted[outlet.id] ?? 0) >= outlet.trains.length);
      if (!sim.failed && allEmitted && sim.trains.length === 0) {
        setRunning(false);
        const allReceived = stations.every((station) => (sim.received[station.id] ?? 0) >= station.expects.length);
        if (allReceived) {
          setResult("success");
          setStatus("NIVEAU RÉUSSI");
          persistAttempt(true);
        } else {
          sim.failed = true;
          setResult("failed");
          setStatus("GARES EN ATTENTE — NIVEAU PERDU");
        }
      }
    }, 25);
    return () => window.clearInterval(timer);
  // The interval deliberately restarts when the editable topology changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, paused, speed, outlets, stations, objects, edges, junctionModes, switchToes]);

  function cellFromPointer(clientX: number, clientY: number): Point | null {
    const rect = boardRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const x = Math.floor(((clientX - rect.left) / rect.width) * GRID);
    const y = Math.floor(((clientY - rect.top) / rect.height) * GRID);
    return x >= 0 && x < GRID && y >= 0 && y < GRID ? [x, y] : null;
  }

  function placeObject(cell: Point) {
    const [x, y] = cell;
    if (editorTool === "delete") {
      setObjects((items) => items.filter((o) => o.x !== x || o.y !== y));
      return;
    }
    if (!["outlet", "station", "painter", "splitter", "obstacle"].includes(editorTool)) return;
    const id = `${editorTool}-${x}-${y}-${++objectId.current}`;
    let object: LevelObject;
    if (editorTool === "outlet") object = { id, type: "outlet", x, y, facing: "N", trains: ["red"] };
    else if (editorTool === "station") object = { id, type: "station", x, y, facings: ["S"], expects: ["red"] };
    else if (editorTool === "painter") object = { id, type: "painter", x, y, color: "red", sides: ["N", "S"] };
    else if (editorTool === "splitter") object = { id, type: "splitter", x, y, orientation: "H" };
    else object = { id, type: "obstacle", x, y };
    setObjects((items) => [...items.filter((o) => o.x !== x || o.y !== y), object]);
    setSelectedObject(id);
    setSequenceSlot(0);
    setEditorDialog("object");
  }

  const LONG_PRESS_MS = 450;

  function handleSelectPointerDown(cell: Point, event: React.PointerEvent<HTMLDivElement>) {
    const object = objects.find((item) => item.x === cell[0] && item.y === cell[1]);
    if (!object) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    selectGestureRef.current = { objectId: object.id, startCell: cell, moving: false };
    if (longPressTimerRef.current) window.clearTimeout(longPressTimerRef.current);
    longPressTimerRef.current = window.setTimeout(() => {
      const gesture = selectGestureRef.current;
      if (!gesture || gesture.objectId !== object.id) return;
      gesture.moving = true;
      setMovingObjectId(object.id);
      setMoveGhostCell(cell);
      playEffect("switch");
      setStatus("DÉPLACEMENT — RELÂCHEZ SUR LA CASE CIBLE");
    }, LONG_PRESS_MS);
  }

  function handleSelectPointerMove(clientX: number, clientY: number) {
    const gesture = selectGestureRef.current;
    if (!gesture?.moving) return;
    const cell = cellFromPointer(clientX, clientY);
    if (cell) setMoveGhostCell(cell);
  }

  function finishSelectGesture() {
    const gesture = selectGestureRef.current;
    if (longPressTimerRef.current) {
      window.clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
    if (!gesture) return;
    selectGestureRef.current = null;
    if (gesture.moving) {
      const target = moveGhostCell ?? gesture.startCell;
      const objectId = gesture.objectId;
      setObjects((items) => {
        const occupied = items.some((item) => item.id !== objectId && item.x === target[0] && item.y === target[1]);
        if (occupied) {
          setStatus("CASE OCCUPÉE — DÉPLACEMENT ANNULÉ");
          return items;
        }
        setStatus("ÉLÉMENT DÉPLACÉ");
        return items.map((item) => item.id === objectId ? { ...item, x: target[0], y: target[1] } : item);
      });
      setMovingObjectId(null);
      setMoveGhostCell(null);
      return;
    }
    // Appui court : édite l'objet (le splitter pivote directement, comme au clic classique).
    const object = objects.find((item) => item.id === gesture.objectId);
    if (!object) return;
    if (object.type === "splitter") {
      setObjects((items) => items.map((item) => item.id === object.id && item.type === "splitter" ? { ...item, orientation: item.orientation === "H" ? "V" : "H" } : item));
      playEffect("switch");
      setStatus("SPLITTER PIVOTÉ");
      return;
    }
    setSelectedObject(object.id);
    setSequenceSlot(0);
    setEditorDialog("object");
  }

  function resolveTrackGesture(path: Point[]) {
    const resolvedEdges = new Set(gestureStartEdges.current);
    path.slice(1).forEach((cell, index) => {
      const key = edgeKey(path[index], cell);
      if (editorTool === "erase") resolvedEdges.delete(key); else resolvedEdges.add(key);
    });
    const nextModes = { ...junctionModes };
    const nextToes = { ...switchToes };
    const nextPositions = { ...switchPositions };

    const replaceCellConnectors = (cell: Point, connectors: Direction[]) => {
      (Object.keys(DIR_DELTA) as Direction[]).forEach((direction) => {
        const neighbor = add(cell, direction);
        if (neighbor[0] < 0 || neighbor[0] >= GRID || neighbor[1] < 0 || neighbor[1] >= GRID) return;
        const key = edgeKey(cell, neighbor);
        if (connectors.includes(direction)) resolvedEdges.add(key);
        else resolvedEdges.delete(key);
      });
    };

    const clearTopology = (key: string) => {
      delete nextModes[key];
      delete nextToes[key];
      delete nextPositions[key];
    };

    if (editorTool === "rail") {
      path.forEach((cell, index) => {
        const previous = path[index - 1];
        const following = path[index + 1];
        if (!previous || !following) return;
        const entry = directionBetween(cell, previous);
        const exit = directionBetween(cell, following);
        const key = pointKey(cell);
        const existingDirections = directionsForCell(cell[0], cell[1], gestureStartEdges.current);
        if (entry === exit) {
          replaceCellConnectors(cell, existingDirections);
          return;
        }

        const existingRoutes = routesForCell(existingDirections, junctionModes[key] ?? "cross", switchToes[key]);
        const swipeRoute: [Direction, Direction] = [entry, exit];

        if (existingDirections.length === 3) {
          const geometry = switchGeometry(existingDirections, switchToes[key]);
          if (!geometry) return;
          replaceCellConnectors(cell, existingDirections);
          delete nextModes[key];
          if (entry !== geometry.toe && exit !== geometry.toe) {
            nextToes[key] = entry;
            const retargeted = switchGeometry(existingDirections, entry);
            nextPositions[key] = Math.max(0, retargeted?.exits.indexOf(exit) ?? 0);
          } else {
            nextToes[key] = geometry.toe;
            const activeExit = entry === geometry.toe ? exit : entry;
            nextPositions[key] = Math.max(0, geometry.exits.indexOf(activeExit));
          }
          return;
        }

        if (existingDirections.length === 4) {
          if (isStraightRoute(swipeRoute)) {
            replaceCellConnectors(cell, [entry, exit]);
            clearTopology(key);
          } else {
            replaceCellConnectors(cell, existingDirections);
            nextModes[key] = junctionModeForRoute(swipeRoute);
            delete nextToes[key];
            delete nextPositions[key];
          }
          return;
        }

        if (existingRoutes.some((route) => sameRoute(route, swipeRoute))) {
          replaceCellConnectors(cell, [entry, exit]);
          clearTopology(key);
          return;
        }

        if (existingRoutes.length === 0) {
          replaceCellConnectors(cell, [entry, exit]);
          clearTopology(key);
          return;
        }

        if (existingRoutes.length === 1) {
          const existingRoute = existingRoutes[0];
          const shared = existingRoute.filter((direction) => direction === entry || direction === exit);
          if (shared.length === 1) {
            const sharedSide = shared[0];
            const inheritedExit = existingRoute.find((direction) => direction !== shared[0]);
            if (!inheritedExit) return;
            const connectors = Array.from(new Set<Direction>([entry, exit, inheritedExit]));
            replaceCellConnectors(cell, connectors);
            delete nextModes[key];
            const toe = isStraightRoute(existingRoute)
              ? sharedSide
              : isStraightRoute(swipeRoute)
                ? entry
                : sharedSide;
            const activeExit = toe === entry ? exit : entry;
            nextToes[key] = toe;
            const geometry = switchGeometry(connectors, toe);
            nextPositions[key] = Math.max(0, geometry?.exits.indexOf(activeExit) ?? 0);
            return;
          }
          if (shared.length === 0) {
            replaceCellConnectors(cell, [existingRoute[0], existingRoute[1], entry, exit]);
            nextModes[key] = modeForRoutes(existingRoute, swipeRoute);
            delete nextToes[key];
            delete nextPositions[key];
          }
        }
      });
    }

    setEdges(resolvedEdges);
    setJunctionModes(nextModes);
    setSwitchToes(nextToes);
    setSwitchPositions(nextPositions);
    setDisplaySwitchPositions(nextPositions);
  }

  function applyPointer(clientX: number, clientY: number) {
    const cell = cellFromPointer(clientX, clientY);
    if (!cell) return;
    const path = gestureRef.current;
    const previous = path[path.length - 1];
    if (previous && samePoint(previous, cell)) return;
    if (previous && Math.abs(previous[0] - cell[0]) + Math.abs(previous[1] - cell[1]) !== 1) return;
    if (!previous && editorTool === "erase") {
      setEdges((current) => new Set([...current].filter((edge) => !edge.split("|").includes(pointKey(cell)))));
    } else if (previous) {
      const key = edgeKey(previous, cell);
      setEdges((current) => {
        const next = new Set(current);
        if (editorTool === "erase") next.delete(key); else next.add(key);
        return next;
      });
    }
    const nextPath = [...path, cell];
    gestureRef.current = nextPath;
    setGesture(gestureRef.current);
    if (nextPath.length > 1) resolveTrackGesture(nextPath);
  }

  function startDrawing(event: React.PointerEvent<HTMLDivElement>) {
    if (running || result !== "idle") return;
    const cell = cellFromPointer(event.clientX, event.clientY);
    if (!cell) return;
    if (mode === "editor" && editorTool === "select") {
      handleSelectPointerDown(cell, event);
      return;
    }
    if (mode === "editor" && !["rail", "erase"].includes(editorTool)) {
      placeObject(cell);
      return;
    }
    drawingRef.current = true;
    gestureRef.current = [];
    gestureStartEdges.current = new Set(edges);
    setGestureBaseEdges(new Set(edges));
    event.currentTarget.setPointerCapture(event.pointerId);
    applyPointer(event.clientX, event.clientY);
  }

  function finishDrawing() {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    if (gestureRef.current.length === 1) {
      const cell = gestureRef.current[0];
      const directions = directionsForCell(cell[0], cell[1]);
      if (editorTool === "rail" && directions.length === 3) {
        const key = pointKey(cell);
        setSwitchPositions((current) => {
          const next = { ...current, [key]: ((current[key] ?? 0) + 1) % 2 };
          setDisplaySwitchPositions(next);
          return next;
        });
        playEffect("switch");
        setStatus("AIGUILLAGE BASCULÉ");
      } else if (editorTool === "rail" && directions.length === 4) {
        const key = pointKey(cell);
        setJunctionModes((current) => {
          const mode = current[key] ?? "cross";
          const next: JunctionMode = mode === "cross" ? "curves-ne-sw" : mode === "curves-ne-sw" ? "curves-nw-se" : "cross";
          return { ...current, [key]: next };
        });
        playEffect("switch");
        setStatus("CROISEMENT BASCULÉ");
      }
    } else if (gestureRef.current.length > 1) {
      setHistory((items) => [...items.slice(-24), gestureStartEdges.current]);
    }
    gestureRef.current = [];
    setGesture([]);
  }

  function undoTrack() {
    const previous = history.at(-1);
    if (!previous) return;
    setEdges(new Set(previous));
    setHistory((items) => items.slice(0, -1));
  }

  function clearTracks() {
    setHistory((items) => [...items.slice(-24), new Set(edges)]);
    setEdges(new Set());
    setJunctionModes({});
    setSwitchToes({});
    setSwitchPositions({});
    setDisplaySwitchPositions({});
    resetSimulation({});
  }

  function persistFamilies(next: LevelFamily[]) {
    setFamilies(next);
    window.localStorage.setItem("signal-nocturne-level-repository", JSON.stringify(next));
  }

  function updateSelectedObject(update: Partial<{ facing: Direction; facings: Direction[]; trains: TrainColor[]; expects: TrainColor[]; color: TrainColor; orientation: "H" | "V" }>) {
    if (!selectedObject) return;
    setObjects((items) => items.map((object) => object.id === selectedObject ? { ...object, ...update } as LevelObject : object));
  }

  function togglePainterSide(direction: Direction) {
    if (!selectedObject) return;
    setObjects((items) => items.map((object) => {
      if (object.id !== selectedObject || object.type !== "painter") return object;
      if (object.sides.includes(direction)) return object; // toujours exactement 2 côtés actifs
      const [, second] = object.sides;
      return { ...object, sides: [second, direction] };
    }));
  }

  function toggleStationFacing(direction: Direction) {
    if (!selectedObject) return;
    setObjects((items) => items.map((object) => {
      if (object.id !== selectedObject || object.type !== "station") return object;
      const has = object.facings.includes(direction);
      if (has && object.facings.length === 1) return object; // une gare doit garder au moins une entrée
      const facings = has ? object.facings.filter((item) => item !== direction) : [...object.facings, direction];
      return { ...object, facings };
    }));
  }

  function updateSequence(index: number, value: TrainColor | "") {
    const object = objects.find((item) => item.id === selectedObject);
    if (!object || (object.type !== "outlet" && object.type !== "station")) return;
    const current = [...(object.type === "outlet" ? object.trains : object.expects)];
    while (current.length < 6) current.push("" as TrainColor);
    current[index] = value as TrainColor;
    const sequence = current.filter((color): color is TrainColor => COLORS.includes(color));
    if (object.type === "outlet") updateSelectedObject({ trains: sequence });
    else updateSelectedObject({ expects: sequence });
  }

  function saveLevel() {
    const targetFamily = families.find((item) => item.id === family);
    if (!targetFamily) return;
    const existing = targetFamily.levels.find((level) => level.id === activeLevel.id);
    const saved: LevelDefinition = {
      ...activeLevel,
      family,
      number: existing?.number ?? targetFamily.levels.length + 1,
      railLimit,
      objects,
      savedEdges: [...edges],
      junctionModes,
      switchToes,
      switchPositions,
    };
    const next = families.map((item) => ({
      ...item,
      levels: item.id === family
        ? item.levels.some((level) => level.id === saved.id)
          ? item.levels.map((level) => level.id === saved.id ? saved : level)
          : [...item.levels, saved]
        : item.levels.filter((level) => level.id !== saved.id),
    }));
    persistFamilies(next);
    setActiveLevel(saved);
    setSaveStatus("NIVEAU SAUVEGARDÉ SUR CET APPAREIL");
  }

  function createLevel() {
    const target = families.find((item) => item.id === family) ?? families[0];
    const level: LevelDefinition = {
      id: `niveau-${Date.now()}`,
      title: "Nouveau niveau",
      number: target.levels.length + 1,
      brief: "Niveau créé dans l’éditeur.",
      family: target.id,
      width: GRID,
      height: GRID,
      railLimit: 18,
      objects: [],
      examplePaths: [],
      savedEdges: [],
    };
    setFamily(target.id);
    loadLevel(level);
    setMode("editor");
    setSaveStatus("NOUVEAU NIVEAU — À SAUVEGARDER");
  }

  function createFamily() {
    const title = newFamilyName.trim();
    if (!title) return;
    const id = `${title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "famille"}-${Date.now()}`;
    const next = [...families, { id, title, playable: true, levels: [] }];
    persistFamilies(next);
    setFamily(id);
    setNewFamilyName("");
    setSaveStatus("FAMILLE CRÉÉE");
  }

  function futurePointForTrain(train: MovingTrain): Point {
    const current = train.next;
    const fallback: Point = [
      current[0] + (current[0] - train.cell[0]),
      current[1] + (current[1] - train.cell[1]),
    ];
    if (current[0] < 0 || current[0] >= GRID || current[1] < 0 || current[1] >= GRID) return fallback;
    const directions = directionsForCell(current[0], current[1]);
    const entry = directionBetween(current, train.cell);
    let exit: Direction | undefined;
    if (directions.length === 4) {
      exit = pairedExit(entry, junctionModes[pointKey(current)] ?? "cross");
    } else if (directions.length === 3) {
      const key = pointKey(current);
      const geometry = switchGeometry(directions, switchToes[key]);
      if (geometry) {
        exit = entry === geometry.toe
          ? geometry.exits[(displaySwitchPositions[key] ?? 0) % geometry.exits.length]
          : geometry.toe;
      }
    } else {
      exit = directions.find((direction) => direction !== entry);
    }
    return exit ? add(current, exit) : fallback;
  }

  const selected = objects.find((object) => object.id === selectedObject);
  const visibleFamilies = families.filter((item) => mode === "editor" || item.playable);
  const libraryFamily = visibleFamilies.find((item) => item.id === libraryFamilyId);

  return (
    <main className={`app-shell mode-${mode}`}>
      <header>
        <div className="brand"><span className="sigil">✣</span><div><b>SIGNAL NOCTURNE <em className="version-badge">V{APP_VERSION}</em></b><small>NIVEAU {activeLevel.number.toString().padStart(2, "0")} · {activeLevel.title.toUpperCase()}</small></div></div>
        <div className="status-strip">
          <span><small>ÉTAT</small><b className={result}>{paused ? "PAUSE" : status}</b></span>
          <span><small>RAILS</small><b style={{ color: railMetricColor }}>{railCount} / {railLimit}</b></span>
          <span><small>CASES</small><b>{trackCells}</b></span>
          <span><small>TEMPS PLAN</small><b>{formatTime(editingElapsedMs)}</b></span>
        </div>
        <nav>
          <button className="library-trigger" disabled={running} onClick={() => setEditorDialog("library")}>NIVEAUX</button>
          <button className={`sound-toggle ${muted ? "muted" : ""}`} aria-label={muted ? "Activer le son" : "Couper le son"} aria-pressed={!muted} onClick={() => void toggleMute()}>{muted ? "🔇" : "🔊"}<span>{muted ? "SON OFF" : "SON ON"}</span></button>
          <button className={mode === "play" ? "active" : ""} onClick={() => changeMode("play")}>JOUER</button>
          <button className={mode === "editor" ? "active" : ""} onClick={() => changeMode("editor")}>ÉDITEUR</button>
        </nav>
      </header>

      <section className={`workspace ${mode}`}>
        {mode === "editor" && (
          <aside className="palette">
            <h2>OUTILS</h2>
            <div className="palette-grid">
              {([
                ["select", "Sélection"],
                ["outlet", "Remise"],
                ["station", "Gare"],
                ["painter", "Peinture"],
                ["splitter", "Splitter"],
                ["obstacle", "Obstacle"],
                ["delete", "Supprimer"],
              ] as [EditorTool, string][]).map(([tool, label]) => (
                <button key={tool} title={label} className={editorTool === tool ? "selected" : ""} onClick={() => { setEditorDialog(null); setEditorTool(tool); }}><span className="tool-icon"><ToolIcon tool={tool} /></span><span className="tool-label">{label}</span></button>
              ))}
              <button className="level-settings" onClick={() => setEditorDialog("level")}><span className="tool-icon">⚙</span><span className="tool-label">Niveau</span></button>
              <button className="palette-action" title="Importer / exporter un niveau" onClick={() => setEditorDialog("io")}><span className="tool-icon"><span className="tool-glyph">⇄</span></span><span className="tool-label">Import/Export</span></button>
            </div>
            <div className={`editor-validation ${feasibility.feasible ? "ok" : "error"}`}>
              <b>{feasibility.feasible ? "✓ FAISABLE" : `⚠ ${feasibility.issues.length} PROBLÈME${feasibility.issues.length > 1 ? "S" : ""}`}</b>
            </div>
          </aside>
        )}

        <div className="board-wrap">
          <div className="board-heading">
            <button className="board-level-arrow" aria-label="Niveau précédent" title="Niveau précédent" disabled={running || activeLevelIndex <= 0} onClick={() => changeLevel(-1)}>←</button>
            <div className="level-brief">
              <b>{activeLevel.title}</b>
              {mode === "play" && <div className="game-hud" aria-label={`Version ${APP_VERSION}, ${railCount} rails sur ${railLimit}, ${trackCells} cases, temps ${formatTime(editingElapsedMs)}`}>
                <span className="game-version">V{APP_VERSION}</span>
                <span><small>RAILS</small><strong style={{ color: railMetricColor }}>{railCount}/{railLimit}</strong></span>
                <span><small>CASES</small><strong>{trackCells}</strong></span>
                <span><small>TEMPS</small><strong>{formatTime(editingElapsedMs)}</strong></span>
              </div>}
            </div>
            <button className="board-level-arrow" aria-label="Niveau suivant" title="Niveau suivant" disabled={running || activeLevelIndex < 0 || activeLevelIndex >= navigableLevels.length - 1} onClick={() => changeLevel(1)}>→</button>
          </div>
          <div
            className={`board tool-${editorTool}`}
            ref={boardRef}
            onPointerDown={startDrawing}
            onPointerMove={(event) => { if (selectGestureRef.current) handleSelectPointerMove(event.clientX, event.clientY); else if (drawingRef.current) applyPointer(event.clientX, event.clientY); }}
            onPointerUp={() => { if (selectGestureRef.current) finishSelectGesture(); else finishDrawing(); }}
            onPointerCancel={() => { if (selectGestureRef.current) finishSelectGesture(); else finishDrawing(); }}
          >
            {Array.from({ length: GRID * GRID }, (_, index) => {
              const x = index % GRID, y = Math.floor(index / GRID);
              const directions = directionsForCell(x, y);
              const key = pointKey([x, y]);
              const gestureTail = gesture.at(-1);
              const isGestureTail = Boolean(gestureTail && samePoint(gestureTail, [x, y]));
              const inGesture = gesture.slice(0, -1).some(([gx, gy]) => gx === x && gy === y);
              const renderedDirections = isGestureTail
                ? directionsForCell(x, y, gestureBaseEdges)
                : directions;
              return <div
                className={`cell ${inGesture ? "gesture-cell" : ""}`}
                key={index}
                title={directions.length === 3
                  ? "Cliquez pour changer le chemin initial. Le chemin swipé est actif à la création."
                  : directions.length === 4
                    ? (junctionModes[key] ?? "cross") === "cross"
                      ? "Croisement indépendant. Cliquez pour afficher les deux virages sans contact."
                      : "Deux virages sans contact. Cliquez pour changer leur orientation ou revenir au croisement."
                    : undefined}
              >
                <TrackGraphic directions={renderedDirections} mode={junctionModes[key] ?? "cross"} switchToe={switchToes[key]} switchIndex={displaySwitchPositions[key] ?? 0} preview={inGesture} />
              </div>;
            })}
            {moveGhostCell && (
              <div className="move-ghost" style={{ left: `${moveGhostCell[0] * 100 / GRID}%`, top: `${moveGhostCell[1] * 100 / GRID}%` }} />
            )}
            {objects.map((object) => {
              const objectClick = (event: React.MouseEvent<HTMLButtonElement>) => {
                event.stopPropagation();
                if (mode !== "editor" || running) return;
                if (editorTool === "select") return;
                if (object.type === "splitter") {
                  setObjects((items) => items.map((item) => item.id === object.id && item.type === "splitter" ? { ...item, orientation: item.orientation === "H" ? "V" : "H" } : item));
                  playEffect("switch");
                  setStatus("SPLITTER PIVOTÉ");
                  return;
                }
                setSelectedObject(object.id);
                setSequenceSlot(0);
                setEditorDialog("object");
              };
              const invalid = mode === "editor" && invalidObjectIds.has(object.id);
              const moving = movingObjectId === object.id ? "moving-object" : "";
              if (object.type === "obstacle") return <button key={object.id} aria-label="Obstacle" className={`obstacle ${selectedObject === object.id ? "selected-object" : ""} ${invalid ? "invalid-object" : ""} ${moving}`} onClick={objectClick} style={{ left: `${object.x * 100 / GRID}%`, top: `${object.y * 100 / GRID}%` }} />;
              if (object.type === "painter") return <button key={object.id} aria-label={`Peinture ${COLOR_LABELS[object.color]}`} className={`object fixed-piece ${selectedObject === object.id ? "selected-object" : ""} ${invalid ? "invalid-object" : ""} ${moving}`} onClick={objectClick} style={{ left: `${object.x * 100 / GRID}%`, top: `${object.y * 100 / GRID}%` }}><PainterPiece object={object} /></button>;
              if (object.type === "splitter") return <button key={object.id} aria-label={`Splitter ${object.orientation}`} className={`object fixed-piece ${invalid ? "invalid-object" : ""} ${moving}`} onClick={objectClick} style={{ left: `${object.x * 100 / GRID}%`, top: `${object.y * 100 / GRID}%` }}><SplitterPiece object={object} /></button>;
              const done = object.type === "outlet" ? (emitted[object.id] ?? 0) : (received[object.id] ?? 0);
              return (
                <button key={object.id} aria-label={object.type === "outlet" ? "Remise" : "Gare"} className={`object ${object.type}-object ${selectedObject === object.id ? "selected-object" : ""} ${invalid ? "invalid-object" : ""} ${moving}`} onClick={objectClick} style={{ left: `${object.x * 100 / GRID}%`, top: `${object.y * 100 / GRID}%` }}>
                  <TerminalBuilding object={object} done={done} />
                </button>
              );
            })}
            {trains.map((train) => <SteamLoco key={train.id} train={train} future={futurePointForTrain(train)} />)}
            {colorBursts.map((burst) => <div key={burst.id} className={`color-burst ${burst.kind}`} style={{ left: `${burst.x * 100 / GRID}%`, top: `${burst.y * 100 / GRID}%`, "--burst-color": COLOR_HEX[burst.color] } as React.CSSProperties}><i /><i /><i /><i /><span /></div>)}
            {explosions.map((blast) => <div key={blast.id} className="explosion" style={{ left: `${blast.x * 100 / GRID}%`, top: `${blast.y * 100 / GRID}%` }}><i /><i /><i /><i /><span>✹</span></div>)}
          </div>
          {result !== "idle" && (
            <div className={`result-card ${result}`}>
              <small>{result === "success" ? "TOUS LES TRAINS SONT ARRIVÉS" : status.startsWith("GARES EN ATTENTE") ? "PLUS AUCUN TRAIN EN CIRCULATION" : "INCIDENT SUR LE RÉSEAU"}</small>
              <b>{result === "success" ? "NIVEAU RÉUSSI" : status}</b>
              <button onClick={() => resetSimulation()}>RETOUR AU PLAN</button>
            </div>
          )}
        </div>

        {editorDialog && (
          <div className="dialog-backdrop" role="presentation" onPointerDown={(event) => { if (event.target === event.currentTarget) setEditorDialog(null); }}>
            <section className="editor-dialog" role="dialog" aria-modal="true" aria-labelledby="editor-dialog-title">
              <div className="dialog-heading">
                <div>
                  <small>{editorDialog === "library" ? "BIBLIOTHÈQUE FERROVIAIRE" : editorDialog === "level" ? "PARAMÈTRES DU TABLEAU" : editorDialog === "io" ? "ÉCHANGE DE NIVEAUX" : "CONFIGURATION D’UN ÉLÉMENT"}</small>
                  <h2 id="editor-dialog-title">{editorDialog === "library" ? (libraryFamily?.title.toUpperCase() ?? "FAMILLES") : editorDialog === "level" ? "NIVEAU & DÉPÔT" : editorDialog === "io" ? "IMPORT / EXPORT" : selected?.type === "outlet" ? "REMISE" : selected?.type === "station" ? "GARE" : selected?.type === "painter" ? "PEINTURE" : selected?.type === "splitter" ? "SPLITTER" : "OBSTACLE"}</h2>
                </div>
                <button className="dialog-close" aria-label="Fermer" onClick={() => setEditorDialog(null)}>×</button>
              </div>
              <div className="dialog-body" ref={dialogBodyRef} onScroll={(event) => {
                if (editorDialog !== "library") return;
                const key = libraryFamilyId ?? "families";
                libraryScrollOffsets.current[key] = event.currentTarget.scrollTop;
                window.sessionStorage.setItem("signal-nocturne-library-scroll", JSON.stringify(libraryScrollOffsets.current));
              }}>
              {editorDialog === "library" && (
                <div className="level-library">
                  <button className="library-io-trigger" onClick={() => setEditorDialog("io")}><span className="tool-glyph">⇄</span> IMPORTER / EXPORTER UN NIVEAU</button>
                  {!libraryFamily && <div className="library-family-index">
                    {visibleFamilies.map((item) => {
                      const completed = item.levels.filter((level) => {
                        const progress = levelProgress[level.id];
                        return progress?.completed ?? (progress?.minimumRails != null);
                      }).length;
                      return <button key={item.id} className={!item.playable ? "wip-family" : ""} onClick={() => selectLibraryFamily(item.id)}>
                        <div><b>{item.title}</b><small>{item.playable ? `${completed}/${item.levels.length} RÉUSSIS` : "WIP · ÉDITEUR UNIQUEMENT"}</small></div>
                        <span>{item.levels.length}</span><i>→</i>
                      </button>;
                    })}
                  </div>}
                  {libraryFamily && <>
                    <button className="library-back" onClick={() => selectLibraryFamily(null)}>← TOUTES LES FAMILLES</button>
                    <section className={!libraryFamily.playable ? "wip-family" : ""}>
                      <div className="library-family-heading">
                        <div><b>{libraryFamily.title}</b><small>{libraryFamily.playable ? "TABLEAUX JOUABLES" : "WIP · ÉDITEUR UNIQUEMENT"}</small></div>
                        <span>{libraryFamily.levels.length}</span>
                      </div>
                      <div className="library-progress-heading"><span>Niveau</span><span>OK</span><span>Mini</span><span>Dernier</span><span>Tableau</span></div>
                      <div className="library-levels">
                        {libraryFamily.levels.map((level) => {
                          const progress = levelProgress[level.id];
                          const completed = progress?.completed ?? (progress?.minimumRails != null);
                          return (
                            <div key={level.id} className={`library-level-row ${activeLevel.id === level.id ? "current" : ""}`}>
                              <button className="library-level-open" onClick={() => { loadLevel(level); setEditorDialog(null); }}>
                                <span>{level.number.toString().padStart(2, "0")}</span>
                                <div><b>{level.title}</b><small>{level.brief}</small></div>
                              </button>
                              <b className={`completion-stat ${completed ? "ok" : "ko"}`}>{completed ? "OK" : "KO"}</b>
                              <b className="rail-stat">{progress?.minimumRails ?? "—"}</b>
                              <b className="rail-stat">{progress?.lastRails ?? "—"}</b>
                              <button
                                className="resume-board"
                                disabled={!progress?.edges.length}
                                onClick={() => { resumeLevel(level); setEditorDialog(null); }}
                              >REPRENDRE</button>
                            </div>
                          );
                        })}
                        {!libraryFamily.levels.length && <p>Aucun niveau dans cette famille.</p>}
                      </div>
                    </section>
                  </>}
                </div>
              )}
              {editorDialog === "level" && (
                <>
            <label>Nom du niveau
              <input value={activeLevel.title} onChange={(event) => setActiveLevel((level) => ({ ...level, title: event.target.value }))} />
            </label>
            <label>Famille
              <select value={family} onChange={(event) => setFamily(event.target.value)}>
                {families.map((item) => <option key={item.id} value={item.id}>{item.title}{!item.playable ? " — non publié" : ""}</option>)}
              </select>
            </label>
            <div className="new-family">
              <input aria-label="Nom de la nouvelle famille" placeholder="Nouvelle famille" value={newFamilyName} onChange={(event) => setNewFamilyName(event.target.value)} />
              <button onClick={createFamily}>＋</button>
            </div>
            <label>Limite de rails<input type="number" min="1" max="49" value={railLimit} onChange={(event) => setRailLimit(Math.max(1, Number(event.target.value)))} /></label>
            <div className="budget"><span>Rails / cases occupées</span><b style={{ color: railMetricColor }}>{railCount} / {railLimit} · {trackCells}</b></div>
            <div className={`feasibility ${feasibility.feasible ? "ok" : "mismatch"}`}>
              <h3>FAISABILITÉ DES COULEURS</h3>
              <div className="feasibility-total"><span>Total remise / attendu</span><b>{feasibility.producedTotal} / {feasibility.expectedTotal}</b></div>
              {COLORS.map((color) => (
                <div key={color}><i className={color} /><span>{COLOR_LABELS[color]}</span><b>{feasibility.produced[color]} / {feasibility.expected[color]}</b></div>
              ))}
              {feasibility.feasible
                ? <small>{`COMBINAISON ET STRUCTURE FAISABLES${feasibility.hasPainter ? " · PAINTER" : ""}${feasibility.hasSplitter ? " · SPLITTER" : ""}`}</small>
                : <ul>{feasibility.issues.map((issue) => <li key={issue}>{issue}</li>)}</ul>}
            </div>
            <div className="family-repo">
              <h3>DÉPÔT DE NIVEAUX</h3>
              {families.map((item) => <div key={item.id} className={!item.playable ? "wip-family" : ""}><b>{item.title}</b><small>{item.levels.length} niveau{item.levels.length > 1 ? "x" : ""} · {item.playable ? "jouable" : "éditeur uniquement"}</small></div>)}
            </div>
            <div className="save-actions">
              <button onClick={createLevel}>NOUVEAU</button>
              <button className="save-level" onClick={saveLevel}>SAUVEGARDER</button>
            </div>
            {saveStatus && <p className="save-status">{saveStatus}</p>}
            <button className="validate" onClick={() => changeMode("play")}>▶ TESTER SANS VALIDATION</button>
                </>
              )}
            {editorDialog === "io" && (
              <div className="level-io">
                <h3>IMPORTER UN NIVEAU</h3>
                <p className="io-hint">Colle soit une ligne CSV à 20 colonnes (id,webID,creatorID,…,puzzleString,…), soit juste une puzzleString « hh… ». Remplace le niveau en cours.</p>
                <textarea
                  rows={4}
                  placeholder="hh3Giav6Giav3Sb5R…  ou  1,1,1,1,,Nom,Description,hh…,…"
                  value={importText}
                  onChange={(event) => setImportText(event.target.value)}
                />
                <button className="import-level" disabled={!importText.trim()} onClick={handleImportLevel}>IMPORTER</button>
                {importFeedback && <p className="import-feedback" role="status">{importFeedback}</p>}
                {importedIdentity && (
                  <div className="identity-card">
                    <h4>FICHE D’IDENTITÉ</h4>
                    <div><span>ID</span><b>{importedIdentity.id || "—"}</b></div>
                    <div><span>Web ID</span><b>{importedIdentity.webID || "—"}</b></div>
                    <div><span>Créateur</span><b>{importedIdentity.creatorID || "—"}</b></div>
                    <div><span>Section</span><b>{importedIdentity.section || "—"}</b></div>
                    <div><span>Nom</span><b>{importedIdentity.name || "—"}</b></div>
                    <div><span>Description</span><b>{importedIdentity.description || "—"}</b></div>
                    <div><span>Pièces</span><b>{importedIdentity.pieceCounts || "—"}</b></div>
                    <div><span>Clés (wrenches)</span><b>{importedIdentity.wrenches || "—"}</b></div>
                    <div><span>Résoluble</span><b>{importedIdentity.isSolvable || "—"}</b></div>
                    <div><span>Aimé</span><b>{importedIdentity.hasBeenLiked || "—"}</b></div>
                    <div><span>Soumis le</span><b>{importedIdentity.submissionDate || "—"}</b></div>
                    <div><span>Import local</span><b>{importedIdentity.localInsertionDate || "—"}</b></div>
                    <div><span>Likes</span><b>{importedIdentity.likes || "—"}</b></div>
                    <div><span>Vues</span><b>{importedIdentity.views || "—"}</b></div>
                    <div><span>Ordinal utilisateur</span><b>{importedIdentity.userOrdinal || "—"}</b></div>
                    <div><span>Ordinal téléchargement</span><b>{importedIdentity.downloadOrdinal || "—"}</b></div>
                    <div><span>Mis en avant</span><b>{importedIdentity.isInFeatured || "—"}</b></div>
                    <small className="identity-note">solutionString conservée telle quelle (non décodée, format non documenté) : {importedIdentity.solutionString ? `${importedIdentity.solutionString.slice(0, 24)}…` : "—"}</small>
                  </div>
                )}
                <h3>EXPORTER LE NIVEAU</h3>
                <button className="export-level" onClick={handleExportLevel}>COPIER LA PUZZLESTRING</button>
                {exportFeedback && <p className="export-feedback" role="status">{exportFeedback}</p>}
              </div>
              )}
            {editorDialog === "object" && selected && (
              <div className="selected-properties">
                <b>{selected.type === "outlet" ? "Remise" : selected.type === "station" ? "Gare" : selected.type === "painter" ? "Peinture" : selected.type === "splitter" ? "Splitter" : "Obstacle"} · {String.fromCharCode(65 + selected.y)}{selected.x + 1}</b>
                {(selected.type === "outlet" || selected.type === "station") && (
                  <>
                    <p>{selected.type === "outlet" ? "Direction" : "Entrées (plusieurs possibles)"}</p>
                    <div className="direction-picker" role="group" aria-label="Direction de connexion">
                      {(["N", "E", "S", "W"] as Direction[]).map((direction) => {
                        const active = selected.type === "outlet" ? selected.facing === direction : selected.facings.includes(direction);
                        return (
                          <button
                            key={direction}
                            className={active ? "active" : ""}
                            aria-pressed={active}
                            onClick={() => selected.type === "outlet" ? updateSelectedObject({ facing: direction }) : toggleStationFacing(direction)}
                          >
                            <i>{direction === "N" ? "↑" : direction === "E" ? "→" : direction === "S" ? "↓" : "←"}</i>
                            <span>{direction === "N" ? "Nord" : direction === "E" ? "Est" : direction === "S" ? "Sud" : "Ouest"}</span>
                          </button>
                        );
                      })}
                    </div>
                    <p>{selected.type === "outlet" ? "Trains au départ" : "Trains attendus"} · maximum 6</p>
                    <div className="sequence-slots tactile" role="group" aria-label="Ordre des trains">
                      {Array.from({ length: 6 }, (_, index) => {
                        const sequence = selected.type === "outlet" ? selected.trains : selected.expects;
                        const color = sequence[index];
                        return <button
                          key={index}
                          className={`${color ?? "empty"} ${sequenceSlot === index ? "active" : ""}`}
                          aria-label={`Train ${index + 1}${color ? `, ${COLOR_LABELS[color]}` : ", vide"}`}
                          aria-pressed={sequenceSlot === index}
                          onClick={() => setSequenceSlot(index)}
                        ><small>{index + 1}</small><b>{color ? colorMark(color) : "＋"}</b></button>;
                      })}
                    </div>
                    <div className="color-picker" role="group" aria-label={`Couleur du train ${sequenceSlot + 1}`}>
                      {COLORS.map((color) => (
                        <button key={color} className={color} onClick={() => updateSequence(sequenceSlot, color)}>
                          <b>{colorMark(color)}</b><span>{COLOR_LABELS[color]}</span>
                        </button>
                      ))}
                      <button className="empty" onClick={() => updateSequence(sequenceSlot, "")}><b>×</b><span>Vide</span></button>
                    </div>
                  </>
                )}
                {selected.type === "painter" && (
                  <>
                    <p>Côtés connectés (exactement 2)</p>
                    <div className="direction-picker" role="group" aria-label="Côtés du painter">
                      {(["N", "E", "S", "W"] as Direction[]).map((direction) => (
                        <button
                          key={direction}
                          className={selected.sides.includes(direction) ? "active" : ""}
                          aria-pressed={selected.sides.includes(direction)}
                          onClick={() => togglePainterSide(direction)}
                        >
                          <i>{direction === "N" ? "↑" : direction === "E" ? "→" : direction === "S" ? "↓" : "←"}</i>
                          <span>{direction === "N" ? "Nord" : direction === "E" ? "Est" : direction === "S" ? "Sud" : "Ouest"}</span>
                        </button>
                      ))}
                    </div>
                    <p>Couleur appliquée au passage</p>
                    <div className="color-picker painter-colors" role="group" aria-label="Couleur de peinture">
                      {COLORS.map((color) => (
                        <button key={color} className={`${color} ${selected.color === color ? "active" : ""}`} aria-pressed={selected.color === color} onClick={() => updateSelectedObject({ color })}>
                          <b>{colorMark(color)}</b><span>{COLOR_LABELS[color]}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {selected.type === "splitter" && (
                  <>
                    <p>Orientation · un clic direct sur la pièce la fait pivoter</p>
                    <div className="splitter-orientation" role="group" aria-label="Orientation du splitter">
                      <button className={selected.orientation === "H" ? "active" : ""} onClick={() => updateSelectedObject({ orientation: "H" })}><b>↔</b><span>Horizontal</span></button>
                      <button className={selected.orientation === "V" ? "active" : ""} onClick={() => updateSelectedObject({ orientation: "V" })}><b>↕</b><span>Vertical</span></button>
                    </div>
                  </>
                )}
              </div>
            )}
            {editorDialog === "object" && !selected && <p className="empty-dialog">Sélectionnez une remise, une gare ou un obstacle sur le plateau.</p>}
              </div>
              <div className="dialog-footer"><button onClick={() => setEditorDialog(null)}>TERMINÉ</button></div>
            </section>
          </div>
        )}
      </section>

      {mode === "play" && <footer>
        <button className={editorTool === "erase" ? "tool-active" : ""} disabled={running} onClick={() => setEditorTool((tool) => tool === "erase" ? "rail" : "erase")}>⌫<span>EFFACER</span></button>
        <button disabled={running || !history.length} onClick={undoTrack}>↶<span>ANNULER</span></button>
        <button onClick={clearTracks} disabled={running}>×<span>VIDER</span></button>
        <button className={running ? "tool-active" : ""} disabled={!running && result === "idle"} onClick={() => resetSimulation()}>■<span>MODIF</span></button>
        <button className="launch" onClick={launch}>{running ? (paused ? "▶" : "Ⅱ") : "▶"}<span>{running ? (paused ? "REPRENDRE" : "PAUSE") : "LANCER"}</span></button>
        <button onClick={() => setSpeed((value) => value === 4 ? 1 : value * 2)}>»<span>VITESSE ×{speed}</span></button>
      </footer>}
    </main>
  );
}
