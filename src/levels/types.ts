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

export type LevelFamily = {
  id: string;
  title: string;
  playable: boolean;
  levels: LevelDefinition[];
};
