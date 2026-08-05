// Script de build ponctuel (non exécuté par l'app) : transforme
// trainyard_standard_levels.csv en src/levels/standardCatalog.ts.
// Exécuté une fois via `npx tsx scripts/generateStandardCatalog.ts`.
import fs from "node:fs";
import { decodePuzzleString } from "../src/levels/puzzleCodec";
import type { LevelSource } from "../src/levels/types";

function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === "\"") {
        if (line[i + 1] === "\"") { current += "\""; i++; }
        else inQuotes = false;
      } else current += ch;
    } else if (ch === "\"") {
      inQuotes = true;
    } else if (ch === ",") {
      fields.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current);
  return fields;
}

function slugify(name: string): string {
  return name
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const raw = fs.readFileSync(new URL("../trainyard_standard_levels.csv", import.meta.url), "utf8").replace(/^\uFEFF/, "");
const lines = raw.split(/\r\n|\n/).filter((line) => line.length > 0);
const header = parseCsvLine(lines[0]);
const col = (fields: string[], name: string) => fields[header.indexOf(name)];

type Row = {
  catalog: string; family: string; familyOrder: number; puzzleOrder: number;
  name: string; slug: string; puzzleString: string; wrenches: number;
  optimalRails: number; optimalCells: number; optimalSwitchCells: number;
};

const rows: Row[] = [];
for (let i = 1; i < lines.length; i++) {
  const fields = parseCsvLine(lines[i]);
  if (fields.length !== header.length) throw new Error(`Ligne ${i + 1} : ${fields.length} colonnes au lieu de ${header.length}`);
  rows.push({
    catalog: col(fields, "catalog"),
    family: col(fields, "family"),
    familyOrder: Number(col(fields, "family_order")),
    puzzleOrder: Number(col(fields, "family_puzzle_order")),
    name: col(fields, "puzzle_name"),
    slug: col(fields, "level_slug"),
    puzzleString: col(fields, "puzzle_string"),
    wrenches: Number(col(fields, "wrenches")),
    optimalRails: Number(col(fields, "best_total_track_segments")),
    optimalCells: Number(col(fields, "best_track_cells")),
    optimalSwitchCells: Number(col(fields, "best_additional_segments")),
  });
}

const catalogOrder: Record<string, number> = { Regular: 0, Bonus: 1, Express: 2 };
rows.sort((a, b) => (catalogOrder[a.catalog] - catalogOrder[b.catalog]) || (a.familyOrder - b.familyOrder) || (a.puzzleOrder - b.puzzleOrder));

const families = new Map<string, { title: string; catalog: string; order: number; levels: Row[] }>();
for (const row of rows) {
  const key = `${row.catalog}:${row.family}`;
  if (!families.has(key)) families.set(key, { title: row.family, catalog: row.catalog, order: row.familyOrder, levels: [] });
  families.get(key)!.levels.push(row);
}

let failures = 0;
const familyDefs: { id: string; title: string; playable: true; levels: LevelSource[] }[] = [];
for (const family of families.values()) {
  const familyId = slugify(`${family.catalog}-${family.title}`);
  const levels: LevelSource[] = family.levels.map((row) => {
    // Validation uniquement : on vérifie que le puzzleString décode proprement,
    // mais on ne stocke jamais le résultat décodé — seul le puzzleString est
    // écrit dans le catalogue, décodé à la demande via hydrateLevel().
    const decoded = decodePuzzleString(row.puzzleString);
    if (decoded.warnings.length > 0 || decoded.objects.length === 0) {
      failures++;
      console.error(`ÉCHEC décodage ${row.slug}: ${decoded.warnings.join(" · ")}`);
    }
    const railLimit = Math.min(49, row.optimalRails * 2);
    return {
      id: `std-${row.slug}`,
      title: row.name,
      number: row.puzzleOrder,
      brief: "",
      family: familyId,
      width: 7,
      height: 7,
      railLimit,
      optimalRails: row.optimalRails,
      optimalCells: row.optimalCells,
      optimalSwitchCells: row.optimalSwitchCells,
      wrenches: row.wrenches,
      puzzleString: row.puzzleString,
    };
  });
  familyDefs.push({ id: familyId, title: family.title, playable: true, levels });
}

if (failures > 0) {
  console.error(`${failures} niveau(x) en échec de décodage — génération interrompue.`);
  process.exit(1);
}

const totalLevels = familyDefs.reduce((sum, f) => sum + f.levels.length, 0);
console.log(`${familyDefs.length} familles, ${totalLevels} niveaux décodés sans avertissement.`);

const header_comment = `// Généré automatiquement depuis trainyard_standard_levels.csv (extraction officielle
// trainyard.ca, catalogues Regular/Bonus/Express, ${totalLevels} niveaux, ${familyDefs.length} familles).
// Catalogue compact : chaque niveau ne porte que son puzzleString + métadonnées,
// jamais les objets décodés (voir hydrateLevel() dans hydrate.ts, appelé à la
// demande lorsqu'un niveau devient actif).
// Ne pas éditer à la main : régénérer via scripts/generateStandardCatalog.ts.
import type { LevelFamily } from "./types";

export const STANDARD_FAMILIES: LevelFamily[] = `;

fs.writeFileSync(
  new URL("../src/levels/standardCatalog.ts", import.meta.url),
  header_comment + JSON.stringify(familyDefs, null, 2).replace(/"([a-zA-Z_][a-zA-Z0-9_]*)":/g, "$1:") + ";\n",
);
console.log("Écrit src/levels/standardCatalog.ts");
