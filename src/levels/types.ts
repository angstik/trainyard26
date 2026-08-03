export type TrainColor =
  | "red" | "blue" | "yellow"
  | "orange" | "green" | "purple"
  | "brown" | "pink" | "cyan" | "white";
export type Direction = "N" | "E" | "S" | "W";
export type LevelObject =
  | { id: string; type: "outlet"; x: number; y: number; facing: Direction; trains: TrainColor[] }
  | { id: string; type: "station"; x: number; y: number; facing: Direction; expects: TrainColor[] }
  | { id: string; type: "obstacle"; x: number; y: number }
  | { id: string; type: "painter"; x: number; y: number; color: TrainColor }
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
