import type { LevelFamily } from "./types";
import { STANDARD_FAMILIES } from "./standardCatalog";

export const LEVEL_FAMILIES: LevelFamily[] = STANDARD_FAMILIES;

export const PLAYABLE_FAMILIES = LEVEL_FAMILIES.filter((family) => family.playable);
export const DEFAULT_LEVEL = PLAYABLE_FAMILIES[0].levels[0];
