import type { LevelDefinition, LevelFamily } from "./types";
import { STANDARD_FAMILIES } from "./standardCatalog";
import { hydrateLevel } from "./hydrate";

export const LEVEL_FAMILIES: LevelFamily[] = STANDARD_FAMILIES;

export const PLAYABLE_FAMILIES = LEVEL_FAMILIES.filter((family) => family.playable);

/** Seul niveau du catalogue hydraté au chargement du module (celui affiché au tout premier démarrage). */
export const DEFAULT_LEVEL: LevelDefinition = hydrateLevel(PLAYABLE_FAMILIES[0].levels[0]);
