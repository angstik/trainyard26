import type { Direction, LevelObject, TrainColor } from "./types";

/**
 * Codec pour le format `puzzleString` documenté dans
 * `from_game_preservation/encoding_spec.md` (reverse-engineering du format
 * Trainyard original par elfakyn.com).
 *
 * Fidélité au format d'origine — limites connues et assumées :
 * - Les "Goal" (gares) multi-directionnelles sont supportées depuis la v1.2
 *   (`LevelObject` "station" porte `facings: Direction[]`). La règle
 *   d'arbitrage entre plusieurs trains arrivant au même instant sur des
 *   entrées différentes est implémentée dans la boucle de simulation
 *   (App.tsx) : priorité, de façon récurrente, à la couleur actuellement
 *   attendue si elle est présente parmi les arrivées simultanées ; sinon,
 *   échec du niveau.
 * - L'orientation du "Painter" (2 côtés d'entrée/sortie) est décodée et
 *   encodée fidèlement depuis la v1.2 (`LevelObject` "painter" porte
 *   `sides: [Direction, Direction]`), et le moteur en tient compte pendant
 *   la simulation (seuls ces 2 côtés sont des entrées/sorties valides).
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
function colorPairLetter(first: TrainColor, second: TrainColor): string | null {
  const row = COLORS7.indexOf(first);
  const col = COLORS7.indexOf(second);
  if (row === -1 || col === -1) return null;
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

/** Clé canonique indépendante de l'ordre, pour retrouver la lettre goal à partir d'un ensemble de directions quelconque. */
function directionSetKey(directions: Direction[]): string {
  return [...new Set(directions)].sort().join("");
}
const GOAL_DIRSET_LETTER = new Map<string, string>();
for (const [letter, dirs] of Object.entries(GOAL_DIR_LETTERS)) {
  GOAL_DIRSET_LETTER.set(directionSetKey(dirs), letter);
}

// --- Painter -----------------------------------------------------------------
const PAINTER_COLOR_LETTER: Record<TrainColor, string> = Object.fromEntries(
  COLORS7.map((color, index) => [color, String.fromCharCode(97 + index)]),
) as Record<TrainColor, string>;
const PAINTER_ORIENTATION_LETTERS: Record<string, [Direction, Direction]> = {
  b: ["N", "E"], c: ["N", "S"], d: ["N", "W"],
  h: ["E", "N"], j: ["E", "S"], k: ["E", "W"],
  o: ["S", "N"], p: ["S", "E"], r: ["S", "W"],
  v: ["W", "N"], w: ["W", "E"], x: ["W", "S"],
};
// Table inverse canonique : pour chaque paire non ordonnée, on retient la première
// lettre rencontrée ci-dessus (ordre de déclaration = ordre du tableau de la spec).
const PAINTER_SIDES_LETTER = new Map<string, string>();
for (const [letter, sides] of Object.entries(PAINTER_ORIENTATION_LETTERS)) {
  const key = directionSetKey(sides);
  if (!PAINTER_SIDES_LETTER.has(key)) PAINTER_SIDES_LETTER.set(key, letter);
}

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

function encodeColorRun(colors: TrainColor[]): string | null {
  let out = "";
  for (let i = 0; i < colors.length; i += 2) {
    const letter = colorPairLetter(colors[i], colors[i + 1] ?? "red");
    if (letter === null) return null;
    out += letter;
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
      place({ type: "station", x, y, facings: dirs, expects });
      cursor += 1; i += 3 + pairCount; continue;
    }

    if (ch === "P") {
      const colorLetter = body[i + 1];
      const idx = colorLetter ? colorLetter.charCodeAt(0) - 97 : -1;
      const color = COLORS7[idx];
      if (!color) { warnings.push(`Peintre illisible à la case ${cursor} (lettre « ${colorLetter ?? "?"} »).`); break; }
      const orientationLetter = body[i + 2];
      const sides = orientationLetter ? PAINTER_ORIENTATION_LETTERS[orientationLetter] : undefined;
      if (!sides) { warnings.push(`Orientation de peintre illisible à la case ${cursor} (lettre « ${orientationLetter ?? "?"} »).`); break; }
      place({ type: "painter", x, y, color, sides });
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

export type PuzzleEncodeResult = { ok: true; value: string } | { ok: false; reason: string };

/**
 * Encode des objets de niveau 7x7 vers une puzzleString "hh...".
 * Échoue proprement (au lieu de produire une chaîne corrompue) si la grille
 * n'est pas 7x7, ou si un objet utilise une couleur hors des 7 couleurs
 * d'origine du format (rose/cyan/blanc, qui n'existent que dans cette
 * application via les mélanges/décompositions étendus).
 */
export function encodeLevelToPuzzleString(objects: LevelObject[], width: number, height: number): PuzzleEncodeResult {
  if (width !== GRID_SIZE || height !== GRID_SIZE) {
    return { ok: false, reason: "Le format puzzleString ne prend en charge que la grille 7×7." };
  }

  const cellMap = new Map<number, LevelObject>();
  for (const obj of objects) {
    if (obj.x < 0 || obj.x >= GRID_SIZE || obj.y < 0 || obj.y >= GRID_SIZE) continue;
    cellMap.set(obj.y * GRID_SIZE + obj.x, obj);
  }

  let result = "hh";
  let blankRun = 0;
  let failure: string | null = null;

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

  const encodeObject = (obj: LevelObject): string | null => {
    switch (obj.type) {
      case "obstacle":
        return "R";
      case "outlet": {
        const count = Math.min(9, obj.trains.length);
        const run = encodeColorRun(obj.trains.slice(0, count));
        if (run === null) return null;
        return "O" + OUTLET_LETTERS[obj.facing][count - 1] + run;
      }
      case "station": {
        const count = Math.min(9, obj.expects.length);
        const run = encodeColorRun(obj.expects.slice(0, count));
        if (run === null) return null;
        const letter = GOAL_DIRSET_LETTER.get(directionSetKey(obj.facings)) ?? GOAL_SINGLE_DIRECTION_LETTER.N;
        return "G" + letter + countLetter(count) + run;
      }
      case "painter": {
        const colorLetter = PAINTER_COLOR_LETTER[obj.color];
        if (!colorLetter) return null;
        return "P" + colorLetter + (PAINTER_SIDES_LETTER.get(directionSetKey(obj.sides)) ?? "c");
      }
      case "splitter":
        return "S" + (obj.orientation === "V" ? "a" : "b");
      default:
        return "";
    }
  };

  for (let idx = 0; idx < CELL_COUNT && !failure; idx++) {
    const obj = cellMap.get(idx);
    if (!obj) { blankRun++; continue; }
    const encoded = encodeObject(obj);
    if (encoded === null) {
      failure = `${obj.type === "outlet" ? "Remise" : obj.type === "station" ? "Gare" : "Painter"} ${obj.id} : utilise une couleur (rose, cyan ou blanc) que le format hh… d'origine ne sait pas encoder — seules les 7 couleurs de base (rouge, bleu, jaune, orange, vert, violet, marron) sont supportées.`;
      break;
    }
    flushBlank(false);
    result += encoded;
  }
  if (failure) return { ok: false, reason: failure };
  flushBlank(true);

  return { ok: true, value: result };
}
