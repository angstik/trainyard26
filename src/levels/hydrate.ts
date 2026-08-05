import { decodePuzzleString } from "./puzzleCodec";
import type { LevelDefinition, LevelSource } from "./types";

/**
 * Convertit un LevelSource (catalogue compact) en LevelDefinition prêt à
 * jouer/éditer. Pour un niveau du catalogue officiel, décode `puzzleString`
 * à cet instant (jamais avant) ; pour un niveau personnalisé qui porte déjà
 * `objects`, ne fait que compléter les champs par défaut. Ne met rien en
 * cache : appelée uniquement au moment où un niveau devient actif.
 */
export function hydrateLevel(source: LevelSource): LevelDefinition {
  if (source.objects) {
    return { ...source, objects: source.objects, examplePaths: source.examplePaths ?? [] };
  }
  if (!source.puzzleString) {
    throw new Error(`Niveau ${source.id} : ni objects ni puzzleString disponible.`);
  }
  const decoded = decodePuzzleString(source.puzzleString);
  return { ...source, objects: decoded.objects, examplePaths: [] };
}
