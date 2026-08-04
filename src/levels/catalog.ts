import type { LevelFamily } from "./types";
import { TOWN_FAMILIES } from "./towns";

const LEGACY_FAMILIES: LevelFamily[] = [
  {
    id: "premiers-signaux",
    title: "Premiers signaux",
    playable: true,
    levels: [
      {
        id: "premier-depart",
        title: "Premier départ",
        number: 1,
        brief: "Une remise, une destination : apprenez à tracer une voie.",
        family: "premiers-signaux",
        width: 7,
        height: 7,
        railLimit: 9,
        objects: [
          { id: "depot-red", type: "outlet", x: 1, y: 6, facing: "N", trains: ["red", "red"] },
          { id: "terminus-red", type: "station", x: 5, y: 2, facings: ["W"], expects: ["red", "red"] },
        ],
        examplePaths: [[[1, 6], [1, 5], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [5, 3], [5, 2]]],
      },
      {
        id: "deux-lignes",
        title: "Deux lignes",
        number: 2,
        brief: "Deux couleurs circulent sur deux itinéraires indépendants.",
        family: "premiers-signaux",
        width: 7,
        height: 7,
        railLimit: 14,
        objects: [
          { id: "depot-red", type: "outlet", x: 1, y: 6, facing: "N", trains: ["red", "red"] },
          { id: "depot-blue", type: "outlet", x: 5, y: 6, facing: "N", trains: ["blue", "blue"] },
          { id: "terminus-red", type: "station", x: 1, y: 0, facings: ["S"], expects: ["red", "red"] },
          { id: "terminus-blue", type: "station", x: 5, y: 0, facings: ["S"], expects: ["blue", "blue"] },
          { id: "rock-center", type: "obstacle", x: 3, y: 3 },
        ],
        examplePaths: [
          [[1, 6], [1, 5], [1, 4], [1, 3], [1, 2], [1, 1], [1, 0]],
          [[5, 6], [5, 5], [5, 4], [5, 3], [5, 2], [5, 1], [5, 0]],
        ],
      },
      {
        id: "detour-de-nuit",
        title: "Détour de nuit",
        number: 3,
        brief: "Les obstacles imposent une ligne sinueuse et un budget serré.",
        family: "premiers-signaux",
        width: 7,
        height: 7,
        railLimit: 11,
        objects: [
          { id: "depot-blue", type: "outlet", x: 0, y: 5, facing: "E", trains: ["blue", "blue", "blue"] },
          { id: "terminus-blue", type: "station", x: 6, y: 1, facings: ["W"], expects: ["blue", "blue", "blue"] },
          { id: "rock-a", type: "obstacle", x: 2, y: 5 },
          { id: "rock-b", type: "obstacle", x: 2, y: 4 },
          { id: "rock-c", type: "obstacle", x: 4, y: 2 },
          { id: "rock-d", type: "obstacle", x: 5, y: 2 },
        ],
        examplePaths: [[[0, 5], [1, 5], [1, 4], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [6, 2], [6, 1]]],
      },
      {
        id: "aiguillage-alterne",
        title: "Aiguillage alterné",
        number: 4,
        brief: "Une séquence rouge-bleue doit être répartie par un aiguillage.",
        family: "premiers-signaux",
        width: 7,
        height: 7,
        railLimit: 14,
        objects: [
          { id: "depot-mixte", type: "outlet", x: 3, y: 6, facing: "N", trains: ["red", "blue", "red", "blue", "red", "blue"] },
          { id: "terminus-blue", type: "station", x: 0, y: 1, facings: ["E"], expects: ["blue", "blue", "blue"] },
          { id: "terminus-red", type: "station", x: 6, y: 1, facings: ["W"], expects: ["red", "red", "red"] },
          { id: "rock-a", type: "obstacle", x: 2, y: 2 },
          { id: "rock-b", type: "obstacle", x: 4, y: 2 },
        ],
        examplePaths: [
          [[3, 6], [3, 5], [3, 4], [3, 3], [2, 3], [1, 3], [1, 2], [1, 1], [0, 1]],
          [[3, 3], [4, 3], [5, 3], [5, 2], [5, 1], [6, 1]],
        ],
      },
      {
        id: "croisement-royal",
        title: "Croisement royal",
        number: 5,
        brief: "Deux convois se croisent : évitez la collision et respectez les couleurs.",
        family: "premiers-signaux",
        width: 7,
        height: 7,
        railLimit: 23,
        objects: [
          { id: "depot-red", type: "outlet", x: 0, y: 5, facing: "E", trains: ["red", "red", "red"] },
          { id: "depot-blue", type: "outlet", x: 6, y: 5, facing: "W", trains: ["blue", "blue", "blue"] },
          { id: "terminus-red", type: "station", x: 5, y: 0, facings: ["S"], expects: ["red", "red", "red"] },
          { id: "terminus-blue", type: "station", x: 1, y: 0, facings: ["S"], expects: ["blue", "blue", "blue"] },
          { id: "rock-center", type: "obstacle", x: 3, y: 3 },
          { id: "rock-left", type: "obstacle", x: 2, y: 2 },
          { id: "rock-right", type: "obstacle", x: 4, y: 2 },
        ],
        examplePaths: [
          [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [5, 4], [5, 3], [5, 2], [5, 1], [5, 0]],
          [[6, 5], [6, 6], [5, 6], [4, 6], [3, 6], [2, 6], [1, 6], [1, 5], [1, 4], [1, 3], [1, 2], [1, 1], [1, 0]],
        ],
      },
    ],
  },
  {
    id: "wip",
    title: "WIP",
    playable: false,
    levels: [
      {
        id: "atelier-aiguillages",
        title: "Atelier aiguillages",
        number: 0,
        brief: "Niveau de travail non publié.",
        family: "wip",
        width: 7,
        height: 7,
        railLimit: 18,
        objects: [],
        examplePaths: [],
      },
    ],
  },
];

export const LEVEL_FAMILIES: LevelFamily[] = [
  ...TOWN_FAMILIES,
  ...LEGACY_FAMILIES.filter((family) => family.id === "wip"),
];

export const PLAYABLE_FAMILIES = LEVEL_FAMILIES.filter((family) => family.playable);
export const DEFAULT_LEVEL = PLAYABLE_FAMILIES[0].levels[0];
