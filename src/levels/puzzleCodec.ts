import type { Direction, LevelObject, TrainColor } from "./types";

/**
 * Codec pour le format `puzzleString` documenté dans
 * `from_game_preservation/encoding_spec.md` (reverse-engineering du format
 * Trainyard original par elfakyn.com).
 *
 * Fidélité au format d'origine — limites connues et assumées :
 * - Les "Goal" (gares) multi-directionnelles (une gare qui accepte des
 *   trains depuis plusieurs côtés à la fois) ne sont PAS supportées par le
 *   moteur de cette application (`LevelObject` "station" n'a qu'un seul
 *   `facing`). Au décodage, seule la première direction acceptée (ordre
 *   N, E, S, W) est conservée ; un avertissement est renvoyé. C'est une
 *   perte réelle de fidélité pour les niveaux qui utilisent cette mécanique.
 * - L'orientation du "Painter" (2 côtés d'entrée/sortie dans le format
 *   d'origine) n'est pas représentée dans cette application : le peintre y
 *   est omnidirectionnel (voir feasibility.ts). Cette information est donc
 *   ignorée au décodage et une valeur fixe est réémise à l'encodage — sans
 *   impact sur le gameplay, qui ne l'utilise déjà pas ici.
 * - Le "Splitter" d'origine n'accepte qu'une seule direction d'entrée
 *   (N, E, S ou W) ; cette application le simplifie en une orientation
 *   H (Est/Ouest) ou V (Nord/Sud) qui accepte les deux côtés de l'axe. La
 *   distinction fine (quel côté précis) est donc perdue, sans impact sur le
 *   gameplay de cette application.
 * - `solutionString` (tracé de la solution) n'est pas documenté dans la
 *   spec fournie : il n'est ni décodé ni appliqué automatiquement. Il est
 *   seulement conservé tel quel dans la fiche d'identité d'un import CSV.
 */

export type PuzzleDecodeResult = {
  objects: LevelObject[];
  warnings: string[];
};

const GRID_SIZE = 7;
const CELL_COUNT = GRID_SIZE * GRID_SIZE;

const COLORS7: TrainColor[] = ["red", "yellow", "blue", "orange", "green", "purple", "brown"];

function buildAlphabet49(): string[] {
  const letters: string[] = [];
  for (let c = 97; c <= 122; c++) letters.push(String.fromCharCode(c)); // a-z
  for (let c = 65; c <= 87; c++) letters.push(String.fromCharCode(c)); // A-W
  return letters;
}
const ALPHABET_49 = buildAlphabet49();

// --- Outlet / Goal orientation+count first letter -------------------------
const OUTLET_LETTERS: Record<Direction, string[]> = {
  N: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
  E: ["j", "k", "l", "m", "n", "o", "p", "q", "r"],
  S: ["s", "t", "u", "v", "w", "x", "y", "z", "A"],
  W: ["B", "C", "D", "E", "F", "G", "H", "I", "J"],
};
const OUTLET_LETTER_REVERSE = new Map<string, { dir: Direction; count: number }>();
for (const dir of Object.keys(OUTLET_LETTERS) as Direction[]) {
  OUTLET_LETTERS[dir].forEach((letter, index) => OUTLET_LETTER_REVERSE.set(letter, { dir, count: index + 1 }));
}

// --- Color-pair table (7x7 -> 49 letters) ----------------------------------
function colorPairLetter(first: TrainColor, second: TrainColor): string {
  const row = COLORS7.indexOf(first);
  const col = COLORS7.indexOf(second);
  return ALPHABET_49[row * 7 + col];
}
const COLOR_PAIR_REVERSE = new Map<string, [TrainColor, TrainColor]>();
COLORS7.forEach((first, row) => {
  COLORS7.forEach((second, col) => {
    COLOR_PAIR_REVERSE.set(ALPHABET_49[row * 7 + col], [first, second]);
  });
});

// --- Goal direction-combo first letter -------------------------------------
const GOAL_DIR_LETTERS: Record<string, Direction[]> = {
  b: ["N"], c: ["E"], d: ["N", "E"],
  e: ["S"], f: ["S", "N"], g: ["S", "E"], h: ["S", "N", "E"],
  i: ["W"], j: ["W", "N"], k: ["W", "E"], l: ["W", "N", "E"],
  m: ["S", "W"], n: ["S", "W", "N"], o: ["S", "W", "E"], p: ["S", "W", "N", "E"],
};
const GOAL_SINGLE_DIRECTION_LETTER: Record<Direction, string> = { N: "b", E: "c", S: "e", W: "i" };

// --- Painter -----------------------------------------------------------------
const PAINTER_COLOR_LETTER: Record<TrainColor, string> = Object.fromEntries(
  COLORS7.map((color, index) => [color, String.fromCharCode(97 + index)]),
) as Record<TrainColor, string>;
// Orientation letter fixed/arbitrary at encode time: ignored by this engine (see header comment).
const PAINTER_CANONICAL_ORIENTATION_LETTER = "c";

function countLetter(n: number): string {
  return String.fromCharCode(96 + Math.min(9, Math.max(1, n)));
}
function letterCount(letter: string): number {
  return letter.charCodeAt(0) - 96;
}

function decodeColorRun(letters: string, count: number, warnings: string[]): TrainColor[] {
  const colors: TrainColor[] = [];
  for (const letter of letters) {
    const pair = COLOR_PAIR_REVERSE.get(letter);
    if (!pair) {
      warnings.push(`Lettre de couleur inconnue : « ${letter} »`);
      continue;
    }
    colors.push(pair[0], pair[1]);
  }
  return colors.slice(0, count);
}

function encodeColorRun(colors: TrainColor[]): string {
  let out = "";
  for (let i = 0; i < colors.length; i += 2) {
    out += colorPairLetter(colors[i], colors[i + 1] ?? "red");
  }
  return out;
}

type LevelObjectWithoutId = { [K in LevelObject["type"]]: Omit<Extract<LevelObject, { type: K }>, "id"> }[LevelObject["type"]];

/** Décode une puzzleString (doit commencer par "hh") en objets de niveau 7x7. */
export function decodePuzzleString(input: string): PuzzleDecodeResult {
  const warnings: string[] = [];
  const trimmed = input.trim();
  if (!trimmed.startsWith("hh")) {
    return { objects: [], warnings: ["La chaîne doit commencer par « hh »."] };
  }
  const body = trimmed.slice(2);
  const objects: LevelObject[] = [];
  let cursor = 0;
  let i = 0;

  const place = (partial: LevelObjectWithoutId) => {
    objects.push({ ...partial, id: `import-${objects.length}` } as LevelObject);
  };

  while (cursor < CELL_COUNT && i < body.length) {
    const ch = body[i];

    if (ch >= "0" && ch <= "9") {
      let j = i;
      let blanks = 0;
      while (j < body.length && body[j] >= "0" && body[j] <= "9") {
        const d = Number(body[j]);
        blanks += d === 0 ? 10 : d;
        j++;
      }
      cursor += blanks;
      i = j;
      continue;
    }

    const x = cursor % GRID_SIZE;
    const y = Math.floor(cursor / GRID_SIZE);

    if (ch === "R") {
      place({ type: "obstacle", x, y });
      cursor += 1; i += 1; continue;
    }

    if (ch === "O") {
      const dirLetter = body[i + 1];
      const found = dirLetter ? OUTLET_LETTER_REVERSE.get(dirLetter) : undefined;
      if (!found) { warnings.push(`Remise illisible à la case ${cursor} (lettre « ${dirLetter ?? "?"} »).`); break; }
      const pairCount = Math.ceil(found.count / 2);
      const pairLetters = body.slice(i + 2, i + 2 + pairCount);
      const trains = decodeColorRun(pairLetters, found.count, warnings);
      place({ type: "outlet", x, y, facing: found.dir, trains });
      cursor += 1; i += 2 + pairCount; continue;
    }

    if (ch === "G") {
      const comboLetter = body[i + 1];
      const dirs = comboLetter ? GOAL_DIR_LETTERS[comboLetter] : undefined;
      if (!dirs) { warnings.push(`Gare illisible à la case ${cursor} (lettre « ${comboLetter ?? "?"} »).`); break; }
      const countLetterCh = body[i + 2];
      if (!countLetterCh) { warnings.push(`Gare incomplète à la case ${cursor}.`); break; }
      const count = letterCount(countLetterCh);
      const pairCount = Math.ceil(count / 2);
      const pairLetters = body.slice(i + 3, i + 3 + pairCount);
      const expects = decodeColorRun(pairLetters, count, warnings);
      if (dirs.length > 1) {
        warnings.push(`Gare multi-entrées (${dirs.join("/")}) à la case ${cursor} simplifiée en entrée unique ${dirs[0]} — non supporté par ce moteur.`);
      }
      place({ type: "station", x, y, facing: dirs[0], expects });
      cursor += 1; i += 3 + pairCount; continue;
    }

    if (ch === "P") {
      const colorLetter = body[i + 1];
      const idx = colorLetter ? colorLetter.charCodeAt(0) - 97 : -1;
      const color = COLORS7[idx];
      if (!color) { warnings.push(`Peintre illisible à la case ${cursor} (lettre « ${colorLetter ?? "?"} »).`); break; }
      place({ type: "painter", x, y, color });
      cursor += 1; i += 3; continue;
    }

    if (ch === "S") {
      const dirLetter = body[i + 1];
      const orientation = dirLetter === "a" || dirLetter === "c" ? "V" : dirLetter === "b" || dirLetter === "d" ? "H" : null;
      if (!orientation) { warnings.push(`Splitter illisible à la case ${cursor} (lettre « ${dirLetter ?? "?"} »).`); break; }
      place({ type: "splitter", x, y, orientation });
      cursor += 1; i += 2; continue;
    }

    warnings.push(`Caractère inattendu « ${ch} » à la position ${i} (case ${cursor}).`);
    break;
  }

  return { objects, warnings };
}

/** Encode des objets de niveau 7x7 vers une puzzleString "hh...". Retourne null si hors grille 7x7. */
export function encodeLevelToPuzzleString(objects: LevelObject[], width: number, height: number): string | null {
  if (width !== GRID_SIZE || height !== GRID_SIZE) return null;

  const cellMap = new Map<number, LevelObject>();
  for (const obj of objects) {
    if (obj.x < 0 || obj.x >= GRID_SIZE || obj.y < 0 || obj.y >= GRID_SIZE) continue;
    cellMap.set(obj.y * GRID_SIZE + obj.x, obj);
  }

  let result = "hh";
  let blankRun = 0;

  const flushBlank = (trailing: boolean) => {
    if (blankRun === 0) return;
    const zeros = Math.floor(blankRun / 10);
    const remainder = blankRun % 10;
    if (trailing) {
      if (blankRun > 9) result += "0".repeat(zeros);
      // 9 or fewer trailing blanks: omitted entirely, per spec.
    } else {
      result += "0".repeat(zeros) + (remainder > 0 ? String(remainder) : "");
    }
    blankRun = 0;
  };

  const encodeObject = (obj: LevelObject): string => {
    switch (obj.type) {
      case "obstacle":
        return "R";
      case "outlet": {
        const count = Math.min(9, obj.trains.length);
        return "O" + OUTLET_LETTERS[obj.facing][count - 1] + encodeColorRun(obj.trains.slice(0, count));
      }
      case "station": {
        const count = Math.min(9, obj.expects.length);
        return "G" + GOAL_SINGLE_DIRECTION_LETTER[obj.facing] + countLetter(count) + encodeColorRun(obj.expects.slice(0, count));
      }
      case "painter":
        return "P" + PAINTER_COLOR_LETTER[obj.color] + PAINTER_CANONICAL_ORIENTATION_LETTER;
      case "splitter":
        return "S" + (obj.orientation === "V" ? "a" : "b");
      default:
        return "";
    }
  };

  for (let idx = 0; idx < CELL_COUNT; idx++) {
    const obj = cellMap.get(idx);
    if (!obj) { blankRun++; continue; }
    flushBlank(false);
    result += encodeObject(obj);
  }
  flushBlank(true);

  return result;
}
