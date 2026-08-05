import type { Direction, LevelDefinition, LevelObject, TrainColor } from "./types";

export const TRAIN_COLORS: TrainColor[] = [
  "red", "blue", "yellow", "orange", "green",
  "purple", "brown", "pink", "cyan", "white",
];

const MIX_RECIPES: [TrainColor, TrainColor, TrainColor][] = [
  ["blue", "red", "purple"],
  ["red", "yellow", "orange"],
  ["blue", "yellow", "green"],
  ["green", "red", "brown"],
  ["blue", "orange", "brown"],
  ["purple", "yellow", "brown"],
  ["purple", "red", "pink"],
  ["blue", "green", "cyan"],
  // Marron : absorbe toute couleur sauf le blanc (reste marron).
  ["brown", "red", "brown"],
  ["brown", "blue", "brown"],
  ["brown", "yellow", "brown"],
  ["brown", "orange", "brown"],
  ["brown", "green", "brown"],
  ["brown", "purple", "brown"],
  ["brown", "pink", "brown"],
  ["brown", "cyan", "brown"],
  // Blanc : cède aux primaires, domine sur les autres.
  ["white", "red", "red"],
  ["white", "blue", "blue"],
  ["white", "yellow", "yellow"],
  ["white", "orange", "white"],
  ["white", "green", "white"],
  ["white", "purple", "white"],
  ["white", "brown", "white"],
  ["white", "pink", "white"],
  ["white", "cyan", "white"],
];

const SPLIT_RECIPES: Partial<Record<TrainColor, [TrainColor, TrainColor]>> = {
  red: ["red", "red"],
  blue: ["blue", "blue"],
  yellow: ["yellow", "yellow"],
  purple: ["red", "blue"],
  orange: ["red", "yellow"],
  green: ["blue", "yellow"],
  brown: ["red", "green"],
  pink: ["purple", "red"],
  cyan: ["green", "blue"],
};

export type FeasibilityResult = {
  feasible: boolean;
  produced: Record<TrainColor, number>;
  expected: Record<TrainColor, number>;
  producedTotal: number;
  expectedTotal: number;
  reachable: TrainColor[];
  hasPainter: boolean;
  hasSplitter: boolean;
  issues: string[];
  structuralIssues: StructuralIssue[];
};

export type StructuralIssue = {
  objectId: string;
  x: number;
  y: number;
  message: string;
};

export type GridPoint = readonly [number, number];

const DELTA: Record<Direction, [number, number]> = {
  N: [0, -1], E: [1, 0], S: [0, 1], W: [-1, 0],
};
const OPPOSITE: Record<Direction, Direction> = { N: "S", E: "W", S: "N", W: "E" };

function emptyCounts() {
  return Object.fromEntries(TRAIN_COLORS.map((color) => [color, 0])) as Record<TrainColor, number>;
}

function add(x: number, y: number, direction: Direction) {
  const [dx, dy] = DELTA[direction];
  return [x + dx, y + dy] as const;
}

function inBounds(x: number, y: number, width: number, height: number) {
  return x >= 0 && x < width && y >= 0 && y < height;
}

function splitterInputs(orientation: "H" | "V"): Direction[] {
  return orientation === "H" ? ["E", "W"] : ["N", "S"];
}

function splitterOutputs(orientation: "H" | "V"): Direction[] {
  return orientation === "H" ? ["N", "S"] : ["E", "W"];
}

function samePoint(one: GridPoint, two: GridPoint) {
  return one[0] === two[0] && one[1] === two[1];
}

function directionBetween(one: GridPoint, two: GridPoint): Direction {
  if (two[1] < one[1]) return "N";
  if (two[0] > one[0]) return "E";
  if (two[1] > one[1]) return "S";
  return "W";
}

export function isImplicitInfrastructureLink(objects: LevelObject[], from: GridPoint, current: GridPoint) {
  const fromObject = objects.find((object) => object.x === from[0] && object.y === from[1]);
  const currentObject = objects.find((object) => object.x === current[0] && object.y === current[1]);
  const travelDirection = directionBetween(from, current);

  if (fromObject?.type === "outlet" && samePoint(add(from[0], from[1], fromObject.facing), current)) {
    if (currentObject?.type === "painter") return currentObject.sides.includes(OPPOSITE[travelDirection]);
    if (currentObject?.type === "splitter") {
      return splitterInputs(currentObject.orientation).includes(OPPOSITE[travelDirection]);
    }
  }

  if (currentObject?.type === "station" && currentObject.facings.some((facing) => samePoint(add(current[0], current[1], facing), from))) {
    if (fromObject?.type === "painter") return fromObject.sides.includes(travelDirection);
    if (fromObject?.type === "splitter") {
      return splitterOutputs(fromObject.orientation).includes(travelDirection);
    }
  }
  return false;
}

function structuralChecks(objects: LevelObject[], width: number, height: number): StructuralIssue[] {
  const issues: StructuralIssue[] = [];
  const at = (x: number, y: number) => objects.find((object) => object.x === x && object.y === y);
  const report = (object: LevelObject, message: string) => issues.push({
    objectId: object.id,
    x: object.x,
    y: object.y,
    message,
  });

  const usableNeighbor = (x: number, y: number, direction: Direction) => {
    const [nx, ny] = add(x, y, direction);
    if (!inBounds(nx, ny, width, height)) return false;
    const neighbor = at(nx, ny);
    if (!neighbor) return true;
    if (neighbor.type === "obstacle") return false;
    if (neighbor.type === "outlet") return neighbor.facing === OPPOSITE[direction];
    if (neighbor.type === "station") return neighbor.facings.includes(OPPOSITE[direction]);
    return true;
  };

  for (const object of objects) {
    if (object.type === "outlet" || object.type === "station") {
      const label = object.type === "outlet" ? "Remise" : "Gare";
      const facingsToCheck = object.type === "outlet" ? [object.facing] : object.facings;
      for (const facing of facingsToCheck) {
        const [frontX, frontY] = add(object.x, object.y, facing);
        if (!inBounds(frontX, frontY, width, height)) {
          report(object, `${label} ${object.id} : entrée ${facing} orientée hors de la grille`);
          continue;
        }
        const occupant = at(frontX, frontY);
        if (!occupant) continue;
        if (occupant.type === "painter") {
          if (!occupant.sides.includes(OPPOSITE[facing])) {
            report(object, `${label} ${object.id} : mauvais côté du painter frontal (${facing})`);
            continue;
          }
          const beyondSide = occupant.sides.find((side) => side !== OPPOSITE[facing])!;
          const [beyondX, beyondY] = add(frontX, frontY, beyondSide);
          if (!inBounds(beyondX, beyondY, width, height) || at(beyondX, beyondY)?.type === "obstacle") {
            report(object, `${label} ${object.id} : painter frontal (${facing}) sans passage libre dans l’axe`);
          }
          continue;
        }
        if (occupant.type === "splitter") {
          const compatible = object.type === "outlet"
            ? splitterInputs(occupant.orientation).includes(OPPOSITE[facing])
            : splitterOutputs(occupant.orientation).includes(OPPOSITE[facing]);
          if (!compatible) {
            report(object, `${label} ${object.id} : mauvais côté du splitter frontal (${facing})`);
          }
          continue;
        }
        report(object, `${label} ${object.id} : case devant l’entrée ${facing} occupée`);
      }
    }

    if (object.type === "painter") {
      for (const side of object.sides) {
        const [nx, ny] = add(object.x, object.y, side);
        if (!inBounds(nx, ny, width, height)) {
          report(object, `Painter ${object.id} : le côté ${side} sort de la grille`);
        }
      }
      const usable = object.sides.every((side) => usableNeighbor(object.x, object.y, side));
      if (!usable) {
        report(object, `Painter ${object.id} : axe ${object.sides.join("-")} non utilisable`);
      }
    }

    if (object.type === "splitter") {
      if (object.x === 0 || object.y === 0 || object.x === width - 1 || object.y === height - 1) {
        report(object, `Splitter ${object.id} : ne doit pas être placé en bordure`);
      }
      const inputs = splitterInputs(object.orientation);
      const outputs = splitterOutputs(object.orientation);
      if (!inputs.some((direction) => usableNeighbor(object.x, object.y, direction))) {
        report(object, `Splitter ${object.id} : aucune entrée utilisable`);
      }
      const blockedOutputs = outputs.filter((direction) => !usableNeighbor(object.x, object.y, direction));
      if (blockedOutputs.length) {
        report(object, `Splitter ${object.id} : sortie ${blockedOutputs.join("/")} bloquée`);
      }
    }
  }
  return issues;
}

export function analyzeObjects(objects: LevelObject[], width = 7, height = 7): FeasibilityResult {
  const produced = emptyCounts();
  const expected = emptyCounts();
  const painters = objects.filter((object): object is Extract<LevelObject, { type: "painter" }> => object.type === "painter");
  const hasSplitter = objects.some((object) => object.type === "splitter");

  for (const object of objects) {
    if (object.type === "outlet") object.trains.forEach((color) => produced[color]++);
    if (object.type === "station") object.expects.forEach((color) => expected[color]++);
  }

  const producedTotal = TRAIN_COLORS.reduce((sum, color) => sum + produced[color], 0);
  const expectedTotal = TRAIN_COLORS.reduce((sum, color) => sum + expected[color], 0);
  const reachable = new Set<TrainColor>(TRAIN_COLORS.filter((color) => produced[color] > 0));
  if (producedTotal > 0) painters.forEach((painter) => reachable.add(painter.color));

  let changed = true;
  while (changed) {
    changed = false;
    for (const [one, two, result] of MIX_RECIPES) {
      if (reachable.has(one) && reachable.has(two) && !reachable.has(result)) {
        reachable.add(result);
        changed = true;
      }
    }
    if (hasSplitter) {
      for (const color of [...reachable]) {
        for (const part of SPLIT_RECIPES[color] ?? []) {
          if (!reachable.has(part)) {
            reachable.add(part);
            changed = true;
          }
        }
      }
    }
  }

  const issues: string[] = [];
  const unreachable = TRAIN_COLORS.filter((color) => expected[color] > 0 && !reachable.has(color));
  if (unreachable.length) issues.push(`Couleurs inaccessibles : ${unreachable.join(", ")}`);
  if (expectedTotal > producedTotal && !hasSplitter) {
    issues.push(`Il faut produire ${expectedTotal} trains à partir de ${producedTotal}, sans splitter`);
  }
  const structuralIssues = structuralChecks(objects, width, height);
  issues.push(...structuralIssues.map((issue) => issue.message));

  return {
    feasible: issues.length === 0,
    produced,
    expected,
    producedTotal,
    expectedTotal,
    reachable: [...reachable],
    hasPainter: painters.length > 0,
    hasSplitter,
    issues,
    structuralIssues,
  };
}

export function analyzeLevel(level: LevelDefinition) {
  return analyzeObjects(level.objects, level.width, level.height);
}
