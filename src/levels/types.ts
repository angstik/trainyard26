export type TrainColor =
  | "red" | "blue" | "yellow"
  | "orange" | "green" | "purple"
  | "brown" | "pink" | "cyan" | "white";
export type Direction = "N" | "E" | "S" | "W";
export type LevelObject =
  | { id: string; type: "outlet"; x: number; y: number; facing: Direction; trains: TrainColor[] }
  | { id: string; type: "station"; x: number; y: number; facings: Direction[]; expects: TrainColor[] }
  | { id: string; type: "obstacle"; x: number; y: number }
  | { id: string; type: "painter"; x: number; y: number; color: TrainColor; sides: [Direction, Direction] }
  | { id: string; type: "splitter"; x: number; y: number; orientation: "H" | "V" };

export type LevelDefinition = {
  id: string;
  title: string;
  number: number;
  brief: string;
  family: string;
  width: number;
  height: number;
  railLimit: number;
  /** Meilleur nombre de segments de rail connu (X+Y, catalogue officiel trainyard.ca), si disponible. */
  optimalRails?: number;
  /** X cible : nombre de cases avec au moins un rail, pour la meilleure solution connue. */
  optimalCells?: number;
  /** Y cible : nombre de ces cases contenant deux segments (aiguillage), pour la meilleure solution connue. */
  optimalSwitchCells?: number;
  /** Difficulté officielle (1 à 30 "clés"), si disponible. */
  wrenches?: number;
  objects: LevelObject[];
  examplePaths: [number, number][][];
  savedEdges?: string[];
  junctionModes?: Record<string, "cross" | "curves-ne-sw" | "curves-nw-se">;
  switchToes?: Record<string, Direction>;
  switchPositions?: Record<string, number>;
};

/**
 * Forme compacte d'un niveau dans un catalogue : mêmes métadonnées que
 * `LevelDefinition`, mais soit `puzzleString` (catalogue officiel — décodé à
 * la demande via `hydrateLevel`), soit `objects` déjà présent (niveaux
 * personnalisés créés dans l'éditeur, qui n'ont pas de puzzleString comme
 * source de vérité). Jamais les deux formats développés en mémoire pour
 * l'ensemble d'un catalogue en même temps.
 */
export type LevelSource = Omit<LevelDefinition, "objects" | "examplePaths"> & {
  puzzleString?: string;
  objects?: LevelObject[];
  examplePaths?: [number, number][][];
};

export type LevelFamily = {
  id: string;
  title: string;
  playable: boolean;
  levels: LevelSource[];
};
