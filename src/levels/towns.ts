import type { Direction, LevelDefinition, LevelFamily, LevelObject, TrainColor } from "./types";

// Level layouts supplied by the user. Original Trainyard designs:
// Copyright Matt Rix / MintCondition Studios — https://trainyard.ca

const COLOR_CODES: [string, TrainColor][] = [
  ["BR", "brown"], ["PK", "pink"], ["CY", "cyan"],
  ["R", "red"], ["B", "blue"], ["Y", "yellow"],
  ["O", "orange"], ["G", "green"], ["P", "purple"], ["W", "white"],
];

function colorFromCode(code: string): TrainColor {
  const found = COLOR_CODES.find(([key]) => key === code);
  if (!found) throw new Error(`Couleur ASCII inconnue: ${code}`);
  return found[1];
}

function parseColors(source: string): TrainColor[] {
  const normalized = source.replace(/^:/, "");
  if (normalized.includes(",")) return normalized.split(",").map(colorFromCode);
  const result: TrainColor[] = [];
  let cursor = normalized;
  while (cursor) {
    const match = COLOR_CODES.find(([code]) => cursor.startsWith(code));
    if (!match) throw new Error(`Séquence de couleurs ASCII invalide: ${source}`);
    result.push(match[1]);
    cursor = cursor.slice(match[0].length);
  }
  return result;
}

function inferredFacing(x: number, y: number): Direction {
  if (x === 0) return "E";
  if (x === 6) return "W";
  if (y === 0) return "S";
  if (y === 6) return "N";
  const distances: [number, Direction][] = [[x, "E"], [6 - x, "W"], [y, "S"], [6 - y, "N"]];
  return distances.sort((a, b) => a[0] - b[0])[0][1];
}

function expand(colors: TrainColor[], quantity: number) {
  return Array.from({ length: quantity }, (_, index) => colors[index % colors.length]);
}

const DIRECTION_DELTA: Record<Direction, [number, number]> = {
  N: [0, -1], E: [1, 0], S: [0, 1], W: [-1, 0],
};

function normalizeInfrastructure(objects: LevelObject[]) {
  const at = (x: number, y: number) => objects.find((object) => object.x === x && object.y === y);
  const neighbor = (object: LevelObject, direction: Direction) => {
    const [dx, dy] = DIRECTION_DELTA[direction];
    return [object.x + dx, object.y + dy] as const;
  };
  const freeForTerminal = (object: LevelObject, direction: Direction) => {
    const [x, y] = neighbor(object, direction);
    if (x < 0 || x >= 7 || y < 0 || y >= 7) return false;
    const occupant = at(x, y);
    return !occupant || occupant.type === "painter" || occupant.type === "splitter";
  };
  const directions: Direction[] = ["N", "E", "S", "W"];

  const terminalsNormalized = objects.map((object): LevelObject => {
    if (object.type === "outlet") {
      if (freeForTerminal(object, object.facing)) return object;
      const inward = inferredFacing(object.x, object.y);
      const facing = [inward, ...directions].find((direction) => freeForTerminal(object, direction));
      return facing ? { ...object, facing } : object;
    }
    if (object.type === "station") {
      const inward = inferredFacing(object.x, object.y);
      const facings = object.facings.map((facing) => {
        if (freeForTerminal(object, facing)) return facing;
        return [inward, ...directions].find((direction) => freeForTerminal(object, direction)) ?? facing;
      });
      return { ...object, facings };
    }
    return object;
  });

  const normalizedAt = (x: number, y: number) => terminalsNormalized.find((object) => object.x === x && object.y === y);
  const sideUsable = (object: LevelObject, direction: Direction) => {
    const [x, y] = neighbor(object, direction);
    return x >= 0 && x < 7 && y >= 0 && y < 7 && normalizedAt(x, y)?.type !== "obstacle";
  };
  const splitterUsable = (object: Extract<LevelObject, { type: "splitter" }>, orientation: "H" | "V") => {
    const inputs: Direction[] = orientation === "H" ? ["E", "W"] : ["N", "S"];
    const outputs: Direction[] = orientation === "H" ? ["N", "S"] : ["E", "W"];
    return inputs.some((direction) => sideUsable(object, direction))
      && outputs.every((direction) => sideUsable(object, direction));
  };
  const axisUsable = (object: LevelObject, sides: [Direction, Direction]) => sides.every((direction) => sideUsable(object, direction));

  return terminalsNormalized.map((object): LevelObject => {
    if (object.type === "splitter") {
      if (splitterUsable(object, object.orientation)) return object;
      const alternative = object.orientation === "H" ? "V" : "H";
      return splitterUsable(object, alternative) ? { ...object, orientation: alternative } : object;
    }
    if (object.type === "painter") {
      if (axisUsable(object, object.sides)) return object;
      const alternative: [Direction, Direction] = object.sides[0] === "N" || object.sides[0] === "S" ? ["E", "W"] : ["N", "S"];
      return axisUsable(object, alternative) ? { ...object, sides: alternative } : object;
    }
    return object;
  });
}

function parseToken(token: string, x: number, y: number, levelId: string): LevelObject | null {
  const id = `${levelId}-${x}-${y}`;
  if (token === ".") return null;
  if (token === "X") return { id, type: "obstacle", x, y };
  if (token === "SPH" || token === "SPV") return { id, type: "splitter", x, y, orientation: token[2] as "H" | "V" };
  if (/^P(BR|PK|CY|R|B|Y|O|G|P|W)$/.test(token)) return { id, type: "painter", x, y, color: colorFromCode(token.slice(1)), sides: ["N", "S"] };

  if (token.startsWith("G")) {
    const match = token.match(/^G([NESW])(?::)?(.+?)(\d+)?$/);
    if (!match) throw new Error(`Garage ASCII invalide: ${token}`);
    const colors = parseColors(match[2]);
    return { id, type: "outlet", x, y, facing: match[1] as Direction, trains: expand(colors, Number(match[3] ?? colors.length)) };
  }

  if (token.startsWith("S")) {
    const explicit = token.match(/^S([NESW]):([A-Z]+)(\d+)$/);
    if (explicit) {
      const colors = parseColors(explicit[2]);
      return { id, type: "station", x, y, facings: [explicit[1] as Direction], expects: expand(colors, Number(explicit[3])) };
    }
    const compactDirection = token.match(/^S([NESW])(\d+)$/);
    if (compactDirection) {
      return { id, type: "station", x, y, facings: [compactDirection[1] as Direction], expects: expand(["red"], Number(compactDirection[2])) };
    }
    const compact = token.match(/^S(BR|PK|CY|R|B|Y|O|G|P|W)(\d+)$/);
    if (compact) {
      return { id, type: "station", x, y, facings: [inferredFacing(x, y)], expects: expand([colorFromCode(compact[1])], Number(compact[2])) };
    }
  }
  throw new Error(`Jeton ASCII inconnu: ${token}`);
}

function parseMap(family: string, number: number, title: string, map: string): LevelDefinition {
  const id = `${family}-${number}`;
  const rows = map.split("/").map((row) => row.trim().split(/\s+/));
  if (rows.length !== 7 || rows.some((row) => row.length !== 7)) throw new Error(`Grille ${id} invalide`);
  const parsedObjects = rows.flatMap((row, y) => row.map((token, x) => parseToken(token, x, y, id)).filter((object): object is LevelObject => object !== null));
  const objects = normalizeInfrastructure(parsedObjects);
  return {
    id,
    title,
    number,
    brief: `${family[0].toUpperCase()}${family.slice(1)} · tableau ${number}`,
    family,
    width: 7,
    height: 7,
    railLimit: 28,
    objects,
    examplePaths: [],
  };
}

export function parseAsciiLevel(family: string, number: number, title: string, source: string): LevelDefinition {
  const mapSection = source.split("[MAP]")[1];
  if (!mapSection) throw new Error("Section [MAP] absente");
  const rows = mapSection
    .split(/\r?\n/)
    .map((line) => line.replace(/#.*$/, "").trim())
    .filter(Boolean)
    .slice(0, 7);
  return parseMap(family, number, title, rows.join("/"));
}

type TownLevel = [title: string, map: string];

const TOWNS: { id: string; title: string; levels: TownLevel[] }[] = [
  {
    id: "regina", title: "Regina", levels: [
      ["Rocky Road", ". . . . . . ./. X . X . X ./GER . . . . . SR1/. X . X . X ./GEB . . . . . SB1/. X . X . X ./. . . . . . ."],
      ["The Wall", ". . . . . . ./GER . . X . . SR1/. . . X . . ./GEB . . X . . SB1/. . . X . . ./GEY . . . . . SY1/. . . . . . ."],
      ["Detour", ". . . . . . ./. X X X X X ./GER X . . . X SR1/. X . X . X ./GEB X . . . X SB1/. X X X X X ./. . . . . . ."],
      ["Boulder Field", "X . X . X . X/. GER . . . . ./X . X X X . X/. . . . . . ./X . X X X . X/. . . . . SR1 ./X . X . X . X"],
      ["Narrow Passage", ". . . GSR . . ./X X . X . X X/. . . . . . ./GEB . X . X . SO1/. . . . . . ./X X . X . X X/. . . GSY . . ."],
      ["Split Around Rocks", ". . . . . . ./. X . . . X ./GEO . . SPH . . ./. X . X . X SR1/. . . . . . ./. X . . . X SY1/. . . . . . ."],
      ["Choke Point", ". . X . X . ./GER . X . X . ./. . . . . . ./. X X . X X SP1/. . . . . . ./GEB . X . X . ./. . X . X . ."],
      ["Zig-Zag", ". . . . . . ./GER X . X . X ./. X . X . X ./. . . . . . SPK1/. X . X . X ./GEP X . X . X ./. . . . . . ."],
      ["Rock Maze", ". . . GSR . . ./. X . X . X ./GEB . . . . . SBR1/X . X . X . X/GEY . . . . . SO1/. X . X . X ./. . . . . . ."],
      ["Regina Graduation", "X . X GSR X . X/. . . . . . ./GER X . . . X SP1/. X X . X X ./GEB X . . . X SG1/. . . . . . ./X . X GSY X . X"],
    ],
  },
  {
    id: "atlantis", title: "Atlantis", levels: [
      ["Atlantis Alpha — Deep Trench", ". . . . . . ./. X X X X X ./GER X . . . X SR1/. X . X . X ./GEB X . . . X SB1/. X X X X X ./. . . . . . ."],
      ["Atlantis Beta — Prism Currents", ". . . SN:R1 . . ./. . . . . . ./. . . . . . ./GEP . . SPH . . SE:R1/. . . . . . ./. . . . . . ./. . . SB1 . . ."],
      ["Atlantis Gamma — Sunken Coral", ". . . . . . ./GER . . PB . . SB1/. . . . . . ./. X . . . X ./. . . . . . ./GEB . . PR . . SR1/. . . . . . ."],
      ["Atlantis Delta — Trident Fusion", ". . . GSR . . ./. . . . . . ./. . . . . . ./GEB . . . . . SBR1/. . . . . . ./. . . . . . ./. . . GNY . . ."],
      ["Atlantis Epsilon — Tidal Split", ". . . GSR . . ./. . . . . . ./. . . SPV . . ./GEB . . X . . SR1/. . . SPV . . ./. . . . . . ./. . . SB1 . . ."],
      ["Atlantis Zeta — Oceanic Maze", ". . . GSR . . ./. X . X . X ./GEB . . . . . SBR1/X . X . X . X/GEY . . . . . SO1/. X . X . X ./. . . . . . ."],
    ],
  },
];

export const TOWN_FAMILIES: LevelFamily[] = TOWNS.map((town) => ({
  id: town.id,
  title: town.title,
  playable: true,
  levels: town.levels.map(([title, map], index) => parseMap(town.id, index + 1, title, map)),
}));
