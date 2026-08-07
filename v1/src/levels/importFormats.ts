// Colonnes exactes attendues pour le format CSV (identique à
// from_game_preservation/trainyard_engineer_db_part_*.csv) :
// id,webID,creatorID,localUserIndex,section,name,description,puzzleString,
// solutionString,pieceCounts,wrenches,isSolvable,hasBeenLiked,submissionDate,
// localInsertionDate,likes,views,userOrdinal,downloadOrdinal,isInFeatured
const CSV_COLUMNS = [
  "id", "webID", "creatorID", "localUserIndex", "section", "name", "description",
  "puzzleString", "solutionString", "pieceCounts", "wrenches", "isSolvable",
  "hasBeenLiked", "submissionDate", "localInsertionDate", "likes", "views",
  "userOrdinal", "downloadOrdinal", "isInFeatured",
] as const;

export type LevelIdentity = Record<(typeof CSV_COLUMNS)[number], string>;

export type ParsedImport =
  | { kind: "csv"; puzzleString: string; identity: LevelIdentity }
  | { kind: "raw"; puzzleString: string }
  | { kind: "error"; message: string };

/** Parseur CSV minimal, gère les champs entre guillemets (avec "" échappé) et les virgules internes. */
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
      } else {
        current += ch;
      }
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

function isHeaderLine(line: string): boolean {
  return /^id,webID,creatorID/i.test(line.trim());
}

/** Accepte soit une ligne CSV à 20 colonnes (avec ou sans sa ligne d'en-tête collée devant), soit une puzzleString brute "hh...". */
export function parseLevelImport(rawInput: string): ParsedImport {
  const lines = rawInput.split(/\r?\n/).map((line) => line.trim()).filter((line) => line.length > 0);
  if (lines.length === 0) return { kind: "error", message: "Rien à importer : le champ est vide." };

  const dataLine = lines.find((line) => !isHeaderLine(line)) ?? lines[0];

  if (dataLine.includes(",")) {
    const fields = parseCsvLine(dataLine);
    if (fields.length === CSV_COLUMNS.length) {
      const identity = Object.fromEntries(CSV_COLUMNS.map((key, index) => [key, fields[index] ?? ""])) as LevelIdentity;
      if (identity.puzzleString.startsWith("hh")) {
        return { kind: "csv", puzzleString: identity.puzzleString, identity };
      }
      return { kind: "error", message: `Ligne CSV reconnue (${fields.length} colonnes) mais la colonne puzzleString ne commence pas par « hh ».` };
    }
    return { kind: "error", message: `Ligne CSV avec ${fields.length} colonnes au lieu des 20 attendues.` };
  }

  if (dataLine.startsWith("hh")) {
    return { kind: "raw", puzzleString: dataLine };
  }

  return { kind: "error", message: "Format non reconnu : ni ligne CSV à 20 colonnes, ni puzzleString commençant par « hh »." };
}
