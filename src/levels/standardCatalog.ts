// Généré automatiquement depuis trainyard_standard_levels.csv (extraction officielle
// trainyard.ca, catalogues Regular/Bonus/Express, 233 niveaux, 36 familles).
// Ne pas éditer à la main : régénérer via scripts/generateStandardCatalog.ts.
import type { LevelFamily } from "./types";

export const STANDARD_FAMILIES: LevelFamily[] = [
  {
    id: "regular-abbotsford",
    title: "Abbotsford",
    playable: true,
    levels: [
      {
        id: "std-redLine",
        title: "Red Line",
        number: 1,
        brief: "Regular · Abbotsford · 1/30 clés",
        family: "regular-abbotsford",
        width: 7,
        height: 7,
        railLimit: 6,
        optimalRails: 3,
        optimalCells: 3,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-1"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-grorangeLines",
        title: "Grorange lines",
        number: 2,
        brief: "Regular · Abbotsford · 1/30 clés",
        family: "regular-abbotsford",
        width: 7,
        height: 7,
        railLimit: 10,
        optimalRails: 5,
        optimalCells: 5,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 1,
            y: 5,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 2,
            y: 5,
            facing: "E",
            trains: [
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 5,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-yorpleLines",
        title: "Yorple lines",
        number: 3,
        brief: "Regular · Abbotsford · 1/30 clés",
        family: "regular-abbotsford",
        width: 7,
        height: 7,
        railLimit: 24,
        optimalRails: 12,
        optimalCells: 12,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 1,
            y: 2,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 5,
            y: 2,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 1,
            y: 4,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 5,
            y: 4,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-magicalTrains",
        title: "Magical Trains",
        number: 4,
        brief: "Regular · Abbotsford · 1/30 clés",
        family: "regular-abbotsford",
        width: 7,
        height: 7,
        railLimit: 20,
        optimalRails: 10,
        optimalCells: 9,
        optimalSwitchCells: 1,
        wrenches: 1,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-theRedCorner",
        title: "The Red Corner",
        number: 5,
        brief: "Regular · Abbotsford · 1/30 clés",
        family: "regular-abbotsford",
        width: 7,
        height: 7,
        railLimit: 14,
        optimalRails: 7,
        optimalCells: 7,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 5,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-1"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-purpablu",
        title: "Purpablu",
        number: 6,
        brief: "Regular · Abbotsford · 1/30 clés",
        family: "regular-abbotsford",
        width: 7,
        height: 7,
        railLimit: 32,
        optimalRails: 16,
        optimalCells: 16,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "W",
            trains: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 5,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 5,
            y: 5,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-brampton",
    title: "Brampton",
    playable: true,
    levels: [
      {
        id: "std-aRockInTheWay",
        title: "A Rock in the Way",
        number: 1,
        brief: "Regular · Brampton · 1/30 clés",
        family: "regular-brampton",
        width: 7,
        height: 7,
        railLimit: 14,
        optimalRails: 7,
        optimalCells: 7,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-greenWally",
        title: "Green Wally",
        number: 2,
        brief: "Regular · Brampton · 1/30 clés",
        family: "regular-brampton",
        width: 7,
        height: 7,
        railLimit: 18,
        optimalRails: 9,
        optimalCells: 9,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "station",
            x: 1,
            y: 1,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 5,
            y: 1,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 3,
            y: 6,
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-yellowSnake",
        title: "Yellow Snake",
        number: 3,
        brief: "Regular · Brampton · 1/30 clés",
        family: "regular-brampton",
        width: 7,
        height: 7,
        railLimit: 46,
        optimalRails: 23,
        optimalCells: 23,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 1,
            y: 1,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 4,
            y: 1,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 6,
            y: 1,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-12"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-uTurn",
        title: "U-Turn",
        number: 4,
        brief: "Regular · Brampton · 1/30 clés",
        family: "regular-brampton",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 26,
        optimalCells: 24,
        optimalSwitchCells: 2,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 1,
            y: 0,
            id: "import-1"
          },
          {
            type: "station",
            x: 2,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 5,
            y: 0,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 1,
            y: 1,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 1,
            y: 2,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 5,
            y: 2,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 1,
            y: 4,
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-13"
          },
          {
            type: "obstacle",
            x: 1,
            y: 5,
            id: "import-14"
          },
          {
            type: "obstacle",
            x: 5,
            y: 5,
            id: "import-15"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-journey",
        title: "Journey",
        number: 5,
        brief: "Regular · Brampton · 1/30 clés",
        family: "regular-brampton",
        width: 7,
        height: 7,
        railLimit: 22,
        optimalRails: 11,
        optimalCells: 11,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "obstacle",
            x: 0,
            y: 0,
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 1,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 6,
            y: 4,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 2,
            y: 5,
            id: "import-6"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 5,
            y: 6,
            id: "import-8"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-calgary",
    title: "Calgary",
    playable: true,
    levels: [
      {
        id: "std-rainbow",
        title: "Rainbow",
        number: 1,
        brief: "Regular · Calgary · 1/30 clés",
        family: "regular-calgary",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 40,
        optimalCells: 25,
        optimalSwitchCells: 15,
        wrenches: 1,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 0,
            facing: "S",
            trains: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 2,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 5,
            y: 0,
            facing: "S",
            trains: [
              "orange"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 1,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "purple"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 2,
            y: 6,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-9"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-10"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-11"
          },
          {
            type: "station",
            x: 5,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "orange"
            ],
            id: "import-12"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-innieOutie",
        title: "Innie Outie",
        number: 2,
        brief: "Regular · Calgary · 1/30 clés",
        family: "regular-calgary",
        width: 7,
        height: 7,
        railLimit: 26,
        optimalRails: 13,
        optimalCells: 11,
        optimalSwitchCells: 2,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 5,
            y: 1,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 4,
            y: 2,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 2,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 1,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-aroundTheBack",
        title: "Around the Back",
        number: 3,
        brief: "Regular · Calgary · 2/30 clés",
        family: "regular-calgary",
        width: 7,
        height: 7,
        railLimit: 30,
        optimalRails: 15,
        optimalCells: 11,
        optimalSwitchCells: 4,
        wrenches: 2,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 5,
            y: 1,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 5,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-multiColor",
        title: "Multicolor",
        number: 4,
        brief: "Regular · Calgary · 1/30 clés",
        family: "regular-calgary",
        width: 7,
        height: 7,
        railLimit: 16,
        optimalRails: 8,
        optimalCells: 8,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "green",
              "blue",
              "red",
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-squiggle",
        title: "Squiggle",
        number: 5,
        brief: "Regular · Calgary · 1/30 clés",
        family: "regular-calgary",
        width: 7,
        height: 7,
        railLimit: 16,
        optimalRails: 8,
        optimalCells: 8,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "W",
              "E"
            ],
            expects: [
              "green",
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-twoTwo",
        title: "Two Two",
        number: 6,
        brief: "Regular · Calgary · 1/30 clés",
        family: "regular-calgary",
        width: 7,
        height: 7,
        railLimit: 10,
        optimalRails: 5,
        optimalCells: 5,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red",
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "red",
              "red"
            ],
            id: "import-1"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-crossover",
        title: "Crossover",
        number: 7,
        brief: "Regular · Calgary · 2/30 clés",
        family: "regular-calgary",
        width: 7,
        height: 7,
        railLimit: 24,
        optimalRails: 12,
        optimalCells: 10,
        optimalSwitchCells: 2,
        wrenches: 2,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-delson",
    title: "Delson",
    playable: true,
    levels: [
      {
        id: "std-mellowYellow",
        title: "Mellow Yellow",
        number: 1,
        brief: "Regular · Delson · 2/30 clés",
        family: "regular-delson",
        width: 7,
        height: 7,
        railLimit: 14,
        optimalRails: 7,
        optimalCells: 6,
        optimalSwitchCells: 1,
        wrenches: 2,
        objects: [
          {
            type: "station",
            x: 3,
            y: 1,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 1,
            y: 5,
            facings: [
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 5,
            y: 5,
            facing: "W",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-deliveringOranges",
        title: "Delivering Oranges",
        number: 2,
        brief: "Regular · Delson · 2/30 clés",
        family: "regular-delson",
        width: 7,
        height: 7,
        railLimit: 14,
        optimalRails: 7,
        optimalCells: 6,
        optimalSwitchCells: 1,
        wrenches: 2,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 3,
            facing: "N",
            trains: [
              "orange",
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "orange"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-purpleParcels",
        title: "Purple Parcels",
        number: 3,
        brief: "Regular · Delson · 2/30 clés",
        family: "regular-delson",
        width: 7,
        height: 7,
        railLimit: 34,
        optimalRails: 17,
        optimalCells: 15,
        optimalSwitchCells: 2,
        wrenches: 2,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "purple",
              "purple",
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S",
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-6"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N",
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W",
              "N"
            ],
            expects: [
              "purple"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-prellow",
        title: "Prellow",
        number: 4,
        brief: "Regular · Delson · 2/30 clés",
        family: "regular-delson",
        width: 7,
        height: 7,
        railLimit: 14,
        optimalRails: 7,
        optimalCells: 6,
        optimalSwitchCells: 1,
        wrenches: 2,
        objects: [
          {
            type: "station",
            x: 1,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 5,
            y: 1,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 5,
            facing: "N",
            trains: [
              "purple",
              "yellow"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-aroundTheBend",
        title: "Around the Bend",
        number: 5,
        brief: "Regular · Delson · 2/30 clés",
        family: "regular-delson",
        width: 7,
        height: 7,
        railLimit: 38,
        optimalRails: 19,
        optimalCells: 18,
        optimalSwitchCells: 1,
        wrenches: 2,
        objects: [
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-2"
          },
          {
            type: "station",
            x: 4,
            y: 3,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 5,
            y: 3,
            facing: "N",
            trains: [
              "orange",
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "S"
            ],
            expects: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 5,
            y: 5,
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-preenies",
        title: "Preenies",
        number: 6,
        brief: "Regular · Delson · 2/30 clés",
        family: "regular-delson",
        width: 7,
        height: 7,
        railLimit: 48,
        optimalRails: 24,
        optimalCells: 23,
        optimalSwitchCells: 1,
        wrenches: 2,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "purple",
              "green",
              "purple",
              "green",
              "purple",
              "green",
              "purple",
              "green",
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 0,
            y: 1,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 1,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 4,
            y: 1,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-13"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-14"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N",
              "E"
            ],
            expects: [
              "green",
              "green",
              "green",
              "green"
            ],
            id: "import-15"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W",
              "N"
            ],
            expects: [
              "purple",
              "purple",
              "purple",
              "purple",
              "purple"
            ],
            id: "import-16"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-tooMany",
        title: "Too Many",
        number: 7,
        brief: "Regular · Delson · 3/30 clés",
        family: "regular-delson",
        width: 7,
        height: 7,
        railLimit: 34,
        optimalRails: 17,
        optimalCells: 15,
        optimalSwitchCells: 2,
        wrenches: 3,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green",
              "green",
              "green",
              "green",
              "blue",
              "blue",
              "blue",
              "blue",
              "orange",
              "orange",
              "orange",
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 0,
            y: 2,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 1,
            y: 2,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 5,
            y: 2,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 6,
            y: 2,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-12"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "W",
            trains: [
              "green",
              "green",
              "green",
              "green"
            ],
            id: "import-13"
          },
          {
            type: "outlet",
            x: 3,
            y: 5,
            facing: "N",
            trains: [
              "blue",
              "blue",
              "blue",
              "blue"
            ],
            id: "import-14"
          },
          {
            type: "outlet",
            x: 5,
            y: 5,
            facing: "E",
            trains: [
              "orange",
              "orange",
              "orange",
              "orange"
            ],
            id: "import-15"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-edmonton",
    title: "Edmonton",
    playable: true,
    levels: [
      {
        id: "std-yield",
        title: "Yield",
        number: 1,
        brief: "Regular · Edmonton · 3/30 clés",
        family: "regular-edmonton",
        width: 7,
        height: 7,
        railLimit: 16,
        optimalRails: 8,
        optimalCells: 7,
        optimalSwitchCells: 1,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-blueBoys",
        title: "Blue Boys",
        number: 2,
        brief: "Regular · Edmonton · 3/30 clés",
        family: "regular-edmonton",
        width: 7,
        height: 7,
        railLimit: 10,
        optimalRails: 5,
        optimalCells: 4,
        optimalSwitchCells: 1,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 1,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 5,
            y: 3,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 5,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-timingTest",
        title: "Timing Test",
        number: 3,
        brief: "Regular · Edmonton · 3/30 clés",
        family: "regular-edmonton",
        width: 7,
        height: 7,
        railLimit: 30,
        optimalRails: 15,
        optimalCells: 12,
        optimalSwitchCells: 3,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 5,
            y: 1,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-grimaceTown",
        title: "Grimace Town",
        number: 4,
        brief: "Regular · Edmonton · 3/30 clés",
        family: "regular-edmonton",
        width: 7,
        height: 7,
        railLimit: 24,
        optimalRails: 12,
        optimalCells: 10,
        optimalSwitchCells: 2,
        wrenches: 3,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "purple",
              "purple",
              "purple"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-lemonLatency",
        title: "Lemon Latency",
        number: 5,
        brief: "Regular · Edmonton · 3/30 clés",
        family: "regular-edmonton",
        width: 7,
        height: 7,
        railLimit: 28,
        optimalRails: 14,
        optimalCells: 11,
        optimalSwitchCells: 3,
        wrenches: 3,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-threeReds",
        title: "Three Reds",
        number: 6,
        brief: "Regular · Edmonton · 3/30 clés",
        family: "regular-edmonton",
        width: 7,
        height: 7,
        railLimit: 32,
        optimalRails: 16,
        optimalCells: 12,
        optimalSwitchCells: 4,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 2,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-colourTheory",
        title: "Colour Theory",
        number: 7,
        brief: "Regular · Edmonton · 3/30 clés",
        family: "regular-edmonton",
        width: 7,
        height: 7,
        railLimit: 12,
        optimalRails: 6,
        optimalCells: 5,
        optimalSwitchCells: 1,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 2,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 5,
            y: 2,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 5,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-secondary",
        title: "Secondary",
        number: 8,
        brief: "Regular · Edmonton · 3/30 clés",
        family: "regular-edmonton",
        width: 7,
        height: 7,
        railLimit: 30,
        optimalRails: 15,
        optimalCells: 12,
        optimalSwitchCells: 3,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "orange"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-nurple",
        title: "Nurple",
        number: 9,
        brief: "Regular · Edmonton · 3/30 clés",
        family: "regular-edmonton",
        width: 7,
        height: 7,
        railLimit: 18,
        optimalRails: 9,
        optimalCells: 8,
        optimalSwitchCells: 1,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 5,
            y: 5,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-fredericton",
    title: "Fredericton",
    playable: true,
    levels: [
      {
        id: "std-microMix",
        title: "Micro Mix",
        number: 1,
        brief: "Regular · Fredericton · 3/30 clés",
        family: "regular-fredericton",
        width: 7,
        height: 7,
        railLimit: 20,
        optimalRails: 10,
        optimalCells: 9,
        optimalSwitchCells: 1,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 2,
            y: 5,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-theFirst",
        title: "The First",
        number: 2,
        brief: "Regular · Fredericton · 3/30 clés",
        family: "regular-fredericton",
        width: 7,
        height: 7,
        railLimit: 18,
        optimalRails: 9,
        optimalCells: 7,
        optimalSwitchCells: 2,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 1,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 1,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 3,
            y: 5,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-waitOutside",
        title: "Wait Outside",
        number: 3,
        brief: "Regular · Fredericton · 3/30 clés",
        family: "regular-fredericton",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 25,
        optimalCells: 24,
        optimalSwitchCells: 1,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 5,
            y: 2,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 5,
            y: 5,
            id: "import-11"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 5,
            y: 6,
            id: "import-13"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-14"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-nineMensMorris",
        title: "Nine Men's Morris",
        number: 4,
        brief: "Regular · Fredericton · 3/30 clés",
        family: "regular-fredericton",
        width: 7,
        height: 7,
        railLimit: 34,
        optimalRails: 17,
        optimalCells: 15,
        optimalSwitchCells: 2,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S",
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-10"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N",
              "E"
            ],
            expects: [
              "orange"
            ],
            id: "import-11"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-12"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-eeeTee",
        title: "Eee Tee",
        number: 5,
        brief: "Regular · Fredericton · 3/30 clés",
        family: "regular-fredericton",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 15,
        optimalSwitchCells: 3,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 4,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 5,
            y: 4,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 1,
            y: 6,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "orange",
              "purple"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-relish",
        title: "Relish",
        number: 6,
        brief: "Regular · Fredericton · 4/30 clés",
        family: "regular-fredericton",
        width: 7,
        height: 7,
        railLimit: 44,
        optimalRails: 22,
        optimalCells: 16,
        optimalSwitchCells: 6,
        wrenches: 4,
        objects: [
          {
            type: "obstacle",
            x: 0,
            y: 0,
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 0,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 1,
            y: 1,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 4,
            y: 5,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 5,
            y: 5,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 4,
            y: 6,
            id: "import-6"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-guelph",
    title: "Guelph",
    playable: true,
    levels: [
      {
        id: "std-mirrorSquad",
        title: "Mirror Squad",
        number: 1,
        brief: "Regular · Guelph · 3/30 clés",
        family: "regular-guelph",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 26,
        optimalCells: 20,
        optimalSwitchCells: 6,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 1,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-12"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-13"
          },
          {
            type: "station",
            x: 0,
            y: 5,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-14"
          },
          {
            type: "obstacle",
            x: 4,
            y: 5,
            id: "import-15"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-16"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-cuteLoop",
        title: "Cute Loop",
        number: 2,
        brief: "Regular · Guelph · 3/30 clés",
        family: "regular-guelph",
        width: 7,
        height: 7,
        railLimit: 46,
        optimalRails: 23,
        optimalCells: 20,
        optimalSwitchCells: 3,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 0,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 4,
            y: 1,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 6,
            y: 1,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-8"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 4,
            y: 5,
            id: "import-12"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-hourglass",
        title: "Hourglass",
        number: 3,
        brief: "Regular · Guelph · 4/30 clés",
        family: "regular-guelph",
        width: 7,
        height: 7,
        railLimit: 48,
        optimalRails: 24,
        optimalCells: 18,
        optimalSwitchCells: 6,
        wrenches: 4,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-3"
          },
          {
            type: "station",
            x: 3,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-6"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-gauss",
        title: "Gauss",
        number: 4,
        brief: "Regular · Guelph · 4/30 clés",
        family: "regular-guelph",
        width: 7,
        height: 7,
        railLimit: 28,
        optimalRails: 14,
        optimalCells: 10,
        optimalSwitchCells: 4,
        wrenches: 4,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "W",
            trains: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-3"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-thirdWheel",
        title: "Third Wheel",
        number: 5,
        brief: "Regular · Guelph · 4/30 clés",
        family: "regular-guelph",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 14,
        optimalSwitchCells: 4,
        wrenches: 4,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "orange"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-turtles",
        title: "Turtles",
        number: 6,
        brief: "Regular · Guelph · 4/30 clés",
        family: "regular-guelph",
        width: 7,
        height: 7,
        railLimit: 48,
        optimalRails: 24,
        optimalCells: 20,
        optimalSwitchCells: 4,
        wrenches: 4,
        objects: [
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 5,
            y: 2,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-2"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 4,
            y: 4,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 5,
            y: 5,
            id: "import-6"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 5,
            y: 6,
            id: "import-9"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-10"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-royals",
        title: "Royals",
        number: 7,
        brief: "Regular · Guelph · 4/30 clés",
        family: "regular-guelph",
        width: 7,
        height: 7,
        railLimit: 46,
        optimalRails: 23,
        optimalCells: 20,
        optimalSwitchCells: 3,
        wrenches: 4,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 0,
            y: 4,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 1,
            y: 4,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-6"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "purple"
            ],
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 1,
            y: 6,
            id: "import-8"
          },
          {
            type: "outlet",
            x: 2,
            y: 6,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-9"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-spiced",
        title: "Spiced",
        number: 8,
        brief: "Regular · Guelph · 4/30 clés",
        family: "regular-guelph",
        width: 7,
        height: 7,
        railLimit: 40,
        optimalRails: 20,
        optimalCells: 17,
        optimalSwitchCells: 3,
        wrenches: 4,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "red",
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "orange",
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "red",
              "red"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-halifax",
    title: "Halifax",
    playable: true,
    levels: [
      {
        id: "std-handlebars",
        title: "Handlebars",
        number: 1,
        brief: "Regular · Halifax · 4/30 clés",
        family: "regular-halifax",
        width: 7,
        height: 7,
        railLimit: 44,
        optimalRails: 22,
        optimalCells: 18,
        optimalSwitchCells: 4,
        wrenches: 4,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 1,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 5,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-compact",
        title: "Compact",
        number: 2,
        brief: "Regular · Halifax · 4/30 clés",
        family: "regular-halifax",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 25,
        optimalCells: 18,
        optimalSwitchCells: 7,
        wrenches: 4,
        objects: [
          {
            type: "station",
            x: 2,
            y: 2,
            facings: [
              "W",
              "N"
            ],
            expects: [
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-2"
          },
          {
            type: "outlet",
            x: 2,
            y: 3,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 4,
            y: 3,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-6"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 4,
            y: 4,
            facings: [
              "S",
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-wailing",
        title: "Wailing",
        number: 3,
        brief: "Regular · Halifax · 5/30 clés",
        family: "regular-halifax",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 25,
        optimalCells: 21,
        optimalSwitchCells: 4,
        wrenches: 5,
        objects: [
          {
            type: "obstacle",
            x: 3,
            y: 0,
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-2"
          },
          {
            type: "station",
            x: 5,
            y: 1,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-7"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-9"
          },
          {
            type: "station",
            x: 5,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 3,
            y: 6,
            id: "import-11"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-laserMaster",
        title: "Laser Master",
        number: 4,
        brief: "Regular · Halifax · 7/30 clés",
        family: "regular-halifax",
        width: 7,
        height: 7,
        railLimit: 24,
        optimalRails: 12,
        optimalCells: 8,
        optimalSwitchCells: 4,
        wrenches: 7,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "purple",
              "purple",
              "purple",
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "red",
              "blue",
              "red",
              "blue"
            ],
            id: "import-1"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-squads",
        title: "Squads",
        number: 5,
        brief: "Regular · Halifax · 6/30 clés",
        family: "regular-halifax",
        width: 7,
        height: 7,
        railLimit: 44,
        optimalRails: 22,
        optimalCells: 15,
        optimalSwitchCells: 7,
        wrenches: 6,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 0,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S"
            ],
            expects: [
              "purple",
              "purple",
              "orange",
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 5,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-aspire",
        title: "Aspire",
        number: 6,
        brief: "Regular · Halifax · 7/30 clés",
        family: "regular-halifax",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 14,
        optimalSwitchCells: 4,
        wrenches: 7,
        objects: [
          {
            type: "station",
            x: 1,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 2,
            y: 4,
            facing: "S",
            trains: [
              "blue",
              "red"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "S",
            trains: [
              "red",
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 1,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 1,
            y: 6,
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-underTheFence",
        title: "Under The Fence",
        number: 7,
        brief: "Regular · Halifax · 5/30 clés",
        family: "regular-halifax",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 21,
        optimalSwitchCells: 7,
        wrenches: 5,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 0,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 1,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-8"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-9"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-10"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-iqaluit",
    title: "Iqaluit",
    playable: true,
    levels: [
      {
        id: "std-inverse",
        title: "Inverse",
        number: 1,
        brief: "Regular · Iqaluit · 7/30 clés",
        family: "regular-iqaluit",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 22,
        optimalSwitchCells: 6,
        wrenches: 7,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "N",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 1,
            facing: "N",
            trains: [
              "blue",
              "red"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 0,
            y: 2,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 6,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-4"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "orange"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 0,
            y: 4,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 6,
            y: 4,
            id: "import-8"
          },
          {
            type: "station",
            x: 0,
            y: 5,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-9"
          },
          {
            type: "station",
            x: 6,
            y: 5,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-10"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-totemPole",
        title: "Totem Pole",
        number: 2,
        brief: "Regular · Iqaluit · 5/30 clés",
        family: "regular-iqaluit",
        width: 7,
        height: 7,
        railLimit: 28,
        optimalRails: 14,
        optimalCells: 11,
        optimalSwitchCells: 3,
        wrenches: 5,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "orange",
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 3,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 3,
            y: 5,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-western",
        title: "Western",
        number: 3,
        brief: "Regular · Iqaluit · 6/30 clés",
        family: "regular-iqaluit",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 33,
        optimalCells: 26,
        optimalSwitchCells: 7,
        wrenches: 6,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 0,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-3"
          },
          {
            type: "station",
            x: 5,
            y: 1,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-5"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "yellow",
              "blue"
            ],
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-8"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-10"
          },
          {
            type: "station",
            x: 5,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-11"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 3,
            y: 6,
            id: "import-13"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-14"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-collider",
        title: "Collider",
        number: 4,
        brief: "Regular · Iqaluit · 6/30 clés",
        family: "regular-iqaluit",
        width: 7,
        height: 7,
        railLimit: 38,
        optimalRails: 19,
        optimalCells: 13,
        optimalSwitchCells: 6,
        wrenches: 6,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "green",
              "green",
              "green",
              "green",
              "green",
              "green"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-6"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-starshipSandwich",
        title: "Starship Sandwich",
        number: 5,
        brief: "Regular · Iqaluit · 6/30 clés",
        family: "regular-iqaluit",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 33,
        optimalCells: 23,
        optimalSwitchCells: 10,
        wrenches: 6,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "purple",
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-8"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-10"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "purple",
              "purple"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-theClassic",
        title: "The Classic",
        number: 6,
        brief: "Regular · Iqaluit · 7/30 clés",
        family: "regular-iqaluit",
        width: 7,
        height: 7,
        railLimit: 38,
        optimalRails: 19,
        optimalCells: 12,
        optimalSwitchCells: 7,
        wrenches: 7,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 1,
            y: 2,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 1,
            y: 4,
            facing: "E",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 1,
            y: 6,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-joliette",
    title: "Joliette",
    playable: true,
    levels: [
      {
        id: "std-redPear",
        title: "Red Pear",
        number: 1,
        brief: "Regular · Joliette · 2/30 clés",
        family: "regular-joliette",
        width: 7,
        height: 7,
        railLimit: 22,
        optimalRails: 11,
        optimalCells: 9,
        optimalSwitchCells: 2,
        wrenches: 2,
        objects: [
          {
            type: "painter",
            x: 0,
            y: 0,
            color: "red",
            sides: [
              "E",
              "S"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-paintTheTown",
        title: "Paint The Town",
        number: 2,
        brief: "Regular · Joliette · 4/30 clés",
        family: "regular-joliette",
        width: 7,
        height: 7,
        railLimit: 28,
        optimalRails: 14,
        optimalCells: 13,
        optimalSwitchCells: 1,
        wrenches: 4,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "red",
            sides: [
              "S",
              "N"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "orange"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-lopsided",
        title: "Lopsided",
        number: 3,
        brief: "Regular · Joliette · 5/30 clés",
        family: "regular-joliette",
        width: 7,
        height: 7,
        railLimit: 32,
        optimalRails: 16,
        optimalCells: 14,
        optimalSwitchCells: 2,
        wrenches: 5,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-7"
          },
          {
            type: "painter",
            x: 3,
            y: 5,
            color: "yellow",
            sides: [
              "W",
              "S"
            ],
            id: "import-8"
          },
          {
            type: "painter",
            x: 4,
            y: 5,
            color: "red",
            sides: [
              "S",
              "E"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-10"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-plus",
        title: "Plus",
        number: 4,
        brief: "Regular · Joliette · 6/30 clés",
        family: "regular-joliette",
        width: 7,
        height: 7,
        railLimit: 38,
        optimalRails: 19,
        optimalCells: 15,
        optimalSwitchCells: 4,
        wrenches: 6,
        objects: [
          {
            type: "painter",
            x: 0,
            y: 0,
            color: "red",
            sides: [
              "E",
              "S"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 4,
            y: 3,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-6"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N",
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-orangeWall",
        title: "Orange Wall",
        number: 5,
        brief: "Regular · Joliette · 7/30 clés",
        family: "regular-joliette",
        width: 7,
        height: 7,
        railLimit: 48,
        optimalRails: 24,
        optimalCells: 19,
        optimalSwitchCells: 5,
        wrenches: 7,
        objects: [
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 3,
            y: 1,
            color: "orange",
            sides: [
              "S",
              "N"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "N",
            trains: [
              "blue",
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "orange",
            sides: [
              "W",
              "E"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "S",
            trains: [
              "blue",
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 3,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-6"
          },
          {
            type: "painter",
            x: 3,
            y: 5,
            color: "orange",
            sides: [
              "S",
              "N"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "orange"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-kamloops",
    title: "Kamloops",
    playable: true,
    levels: [
      {
        id: "std-poddedPeas",
        title: "Podded Peas",
        number: 1,
        brief: "Regular · Kamloops · 4/30 clés",
        family: "regular-kamloops",
        width: 7,
        height: 7,
        railLimit: 32,
        optimalRails: 16,
        optimalCells: 14,
        optimalSwitchCells: 2,
        wrenches: 4,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green",
              "green"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "S",
            trains: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "S",
            trains: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "painter",
            x: 0,
            y: 6,
            color: "yellow",
            sides: [
              "E",
              "N"
            ],
            id: "import-3"
          },
          {
            type: "painter",
            x: 6,
            y: 6,
            color: "blue",
            sides: [
              "W",
              "N"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-letThemYellow",
        title: "Let Them Yellow",
        number: 2,
        brief: "Regular · Kamloops · 7/30 clés",
        family: "regular-kamloops",
        width: 7,
        height: 7,
        railLimit: 46,
        optimalRails: 23,
        optimalCells: 18,
        optimalSwitchCells: 5,
        wrenches: 7,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-4"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-8"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "purple",
              "purple",
              "purple",
              "purple"
            ],
            id: "import-10"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-theOriginal",
        title: "The Original",
        number: 3,
        brief: "Regular · Kamloops · 7/30 clés",
        family: "regular-kamloops",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 13,
        optimalSwitchCells: 5,
        wrenches: 7,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "N",
            trains: [
              "blue",
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 4,
            y: 2,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S"
            ],
            expects: [
              "purple",
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 4,
            y: 3,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-stuckToYou",
        title: "Stuck To You",
        number: 4,
        brief: "Regular · Kamloops · 7/30 clés",
        family: "regular-kamloops",
        width: 7,
        height: 7,
        railLimit: 30,
        optimalRails: 15,
        optimalCells: 12,
        optimalSwitchCells: 3,
        wrenches: 7,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 6,
            y: 2,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-2"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 3,
            y: 4,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 6,
            y: 4,
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-diagonalMirror",
        title: "Diagonal Mirror",
        number: 5,
        brief: "Regular · Kamloops · 7/30 clés",
        family: "regular-kamloops",
        width: 7,
        height: 7,
        railLimit: 44,
        optimalRails: 22,
        optimalCells: 17,
        optimalSwitchCells: 5,
        wrenches: 7,
        objects: [
          {
            type: "outlet",
            x: 4,
            y: 1,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 5,
            y: 1,
            facings: [
              "N",
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-2"
          },
          {
            type: "outlet",
            x: 5,
            y: 2,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-5"
          },
          {
            type: "painter",
            x: 1,
            y: 5,
            color: "yellow",
            sides: [
              "S",
              "W"
            ],
            id: "import-6"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-fourShadowing",
        title: "Four Shadowing",
        number: 6,
        brief: "Regular · Kamloops · 8/30 clés",
        family: "regular-kamloops",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 25,
        optimalCells: 17,
        optimalSwitchCells: 8,
        wrenches: 8,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "red",
              "red",
              "red",
              "red"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 3,
            y: 2,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 2,
            y: 3,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-2"
          },
          {
            type: "painter",
            x: 4,
            y: 3,
            color: "orange",
            sides: [
              "W",
              "E"
            ],
            id: "import-3"
          },
          {
            type: "painter",
            x: 3,
            y: 4,
            color: "green",
            sides: [
              "S",
              "N"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue",
              "yellow",
              "orange",
              "green"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-fireballIsland",
        title: "Fireball Island",
        number: 7,
        brief: "Regular · Kamloops · 10/30 clés",
        family: "regular-kamloops",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 34,
        optimalCells: 26,
        optimalSwitchCells: 8,
        wrenches: 10,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S",
              "E"
            ],
            expects: [
              "green",
              "green"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 4,
            y: 1,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 5,
            y: 2,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 5,
            y: 4,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 2,
            y: 5,
            id: "import-6"
          },
          {
            type: "outlet",
            x: 4,
            y: 5,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N",
              "E"
            ],
            expects: [
              "orange",
              "orange"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-london",
    title: "London",
    playable: true,
    levels: [
      {
        id: "std-roundTheTwist",
        title: "Round The Twist",
        number: 1,
        brief: "Regular · London · 3/30 clés",
        family: "regular-london",
        width: 7,
        height: 7,
        railLimit: 32,
        optimalRails: 16,
        optimalCells: 12,
        optimalSwitchCells: 4,
        wrenches: 3,
        objects: [
          {
            type: "splitter",
            x: 3,
            y: 3,
            orientation: "V",
            id: "import-0"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-moreIsMerrier",
        title: "More Is Merrier",
        number: 2,
        brief: "Regular · London · 4/30 clés",
        family: "regular-london",
        width: 7,
        height: 7,
        railLimit: 22,
        optimalRails: 11,
        optimalCells: 9,
        optimalSwitchCells: 2,
        wrenches: 4,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "green",
              "green",
              "green",
              "green"
            ],
            id: "import-0"
          },
          {
            type: "splitter",
            x: 3,
            y: 3,
            orientation: "V",
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "blue",
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 0,
            y: 4,
            facings: [
              "E"
            ],
            expects: [
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "blue",
              "blue"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-threePeas",
        title: "Three Peas",
        number: 3,
        brief: "Regular · London · 4/30 clés",
        family: "regular-london",
        width: 7,
        height: 7,
        railLimit: 30,
        optimalRails: 15,
        optimalCells: 12,
        optimalSwitchCells: 3,
        wrenches: 4,
        objects: [
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow",
              "yellow",
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 3,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "splitter",
            x: 4,
            y: 3,
            orientation: "H",
            id: "import-3"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 4,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue",
              "blue",
              "blue"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-akeeTree",
        title: "Ackee Tree",
        number: 4,
        brief: "Regular · London · 5/30 clés",
        family: "regular-london",
        width: 7,
        height: 7,
        railLimit: 24,
        optimalRails: 12,
        optimalCells: 11,
        optimalSwitchCells: 1,
        wrenches: 5,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "splitter",
            x: 3,
            y: 1,
            orientation: "V",
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 2,
            facings: [
              "E"
            ],
            expects: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "yellow",
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 3,
            y: 4,
            facings: [
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-4"
          },
          {
            type: "splitter",
            x: 3,
            y: 5,
            orientation: "V",
            id: "import-5"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-6"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-hookshot",
        title: "Hookshot",
        number: 5,
        brief: "Regular · London · 6/30 clés",
        family: "regular-london",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 25,
        optimalCells: 20,
        optimalSwitchCells: 5,
        wrenches: 6,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 5,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "splitter",
            x: 3,
            y: 3,
            orientation: "H",
            id: "import-2"
          },
          {
            type: "station",
            x: 1,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 5,
            y: 5,
            facing: "S",
            trains: [
              "orange"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-pickYourPartner",
        title: "Pick Your Partner",
        number: 6,
        brief: "Regular · London · 7/30 clés",
        family: "regular-london",
        width: 7,
        height: 7,
        railLimit: 44,
        optimalRails: 22,
        optimalCells: 18,
        optimalSwitchCells: 4,
        wrenches: 7,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 0,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 0,
            y: 2,
            facings: [
              "E"
            ],
            expects: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "splitter",
            x: 3,
            y: 2,
            orientation: "V",
            id: "import-3"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-10"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-11"
          },
          {
            type: "splitter",
            x: 2,
            y: 5,
            orientation: "H",
            id: "import-12"
          },
          {
            type: "outlet",
            x: 6,
            y: 5,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-primer",
        title: "Primer",
        number: 7,
        brief: "Regular · London · 8/30 clés",
        family: "regular-london",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 15,
        optimalSwitchCells: 3,
        wrenches: 8,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "splitter",
            x: 3,
            y: 2,
            orientation: "V",
            id: "import-1"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-reunited",
        title: "Reunited",
        number: 8,
        brief: "Regular · London · 9/30 clés",
        family: "regular-london",
        width: 7,
        height: 7,
        railLimit: 46,
        optimalRails: 23,
        optimalCells: 16,
        optimalSwitchCells: 7,
        wrenches: 9,
        objects: [
          {
            type: "splitter",
            x: 1,
            y: 0,
            orientation: "V",
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 1,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 3,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-starStuck",
        title: "Star Stuck",
        number: 9,
        brief: "Regular · London · 10/30 clés",
        family: "regular-london",
        width: 7,
        height: 7,
        railLimit: 40,
        optimalRails: 20,
        optimalCells: 14,
        optimalSwitchCells: 6,
        wrenches: 10,
        objects: [
          {
            type: "outlet",
            x: 2,
            y: 2,
            facing: "N",
            trains: [
              "orange",
              "orange",
              "orange",
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 4,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "red",
              "blue",
              "blue",
              "red"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 3,
            y: 4,
            color: "blue",
            sides: [
              "E",
              "S"
            ],
            id: "import-2"
          },
          {
            type: "painter",
            x: 3,
            y: 5,
            color: "red",
            sides: [
              "N",
              "W"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-mississauga",
    title: "Mississauga",
    playable: true,
    levels: [
      {
        id: "std-warmUp",
        title: "Warm Up",
        number: 1,
        brief: "Regular · Mississauga · 4/30 clés",
        family: "regular-mississauga",
        width: 7,
        height: 7,
        railLimit: 16,
        optimalRails: 8,
        optimalCells: 7,
        optimalSwitchCells: 1,
        wrenches: 4,
        objects: [
          {
            type: "station",
            x: 2,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "blue",
              "blue",
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "splitter",
            x: 3,
            y: 0,
            orientation: "V",
            id: "import-1"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "red",
              "red",
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 2,
            y: 6,
            facing: "N",
            trains: [
              "blue",
              "yellow",
              "red"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "red",
              "blue",
              "yellow"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-theNumerator",
        title: "The Numerator",
        number: 2,
        brief: "Regular · Mississauga · 5/30 clés",
        family: "regular-mississauga",
        width: 7,
        height: 7,
        railLimit: 34,
        optimalRails: 17,
        optimalCells: 12,
        optimalSwitchCells: 5,
        wrenches: 5,
        objects: [
          {
            type: "station",
            x: 2,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "splitter",
            x: 2,
            y: 3,
            orientation: "V",
            id: "import-2"
          },
          {
            type: "splitter",
            x: 4,
            y: 3,
            orientation: "V",
            id: "import-3"
          },
          {
            type: "outlet",
            x: 2,
            y: 6,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-droneVsProbe",
        title: "Drone vs Probe",
        number: 3,
        brief: "Regular · Mississauga · 6/30 clés",
        family: "regular-mississauga",
        width: 7,
        height: 7,
        railLimit: 30,
        optimalRails: 15,
        optimalCells: 13,
        optimalSwitchCells: 2,
        wrenches: 6,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "splitter",
            x: 3,
            y: 1,
            orientation: "H",
            id: "import-1"
          },
          {
            type: "painter",
            x: 1,
            y: 2,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-6"
          },
          {
            type: "splitter",
            x: 3,
            y: 5,
            orientation: "H",
            id: "import-7"
          },
          {
            type: "station",
            x: 6,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-8"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-9"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-ochosRios",
        title: "Ochos Rios",
        number: 4,
        brief: "Regular · Mississauga · 7/30 clés",
        family: "regular-mississauga",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 20,
        optimalSwitchCells: 8,
        wrenches: 7,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 2,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "orange",
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "splitter",
            x: 3,
            y: 3,
            orientation: "H",
            id: "import-2"
          },
          {
            type: "outlet",
            x: 5,
            y: 5,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-portCredit",
        title: "Port Credit",
        number: 5,
        brief: "Regular · Mississauga · 8/30 clés",
        family: "regular-mississauga",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 26,
        optimalCells: 22,
        optimalSwitchCells: 4,
        wrenches: 8,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 0,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-3"
          },
          {
            type: "painter",
            x: 5,
            y: 1,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-6"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-8"
          },
          {
            type: "painter",
            x: 5,
            y: 5,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-9"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "blue"
            ],
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 3,
            y: 6,
            id: "import-11"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-turtle",
        title: "Turtle",
        number: 6,
        brief: "Regular · Mississauga · 9/30 clés",
        family: "regular-mississauga",
        width: 7,
        height: 7,
        railLimit: 48,
        optimalRails: 24,
        optimalCells: 17,
        optimalSwitchCells: 7,
        wrenches: 9,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 0,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "blue",
              "red",
              "yellow",
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "splitter",
            x: 1,
            y: 1,
            orientation: "V",
            id: "import-2"
          },
          {
            type: "painter",
            x: 4,
            y: 3,
            color: "red",
            sides: [
              "S",
              "N"
            ],
            id: "import-3"
          },
          {
            type: "painter",
            x: 5,
            y: 3,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-4"
          },
          {
            type: "painter",
            x: 4,
            y: 4,
            color: "purple",
            sides: [
              "S",
              "N"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 5,
            y: 4,
            color: "green",
            sides: [
              "S",
              "N"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-factories",
        title: "Factories",
        number: 7,
        brief: "Regular · Mississauga · 10/30 clés",
        family: "regular-mississauga",
        width: 7,
        height: 7,
        railLimit: 40,
        optimalRails: 20,
        optimalCells: 16,
        optimalSwitchCells: 4,
        wrenches: 10,
        objects: [
          {
            type: "painter",
            x: 1,
            y: 1,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 5,
            y: 1,
            color: "green",
            sides: [
              "S",
              "N"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 1,
            y: 3,
            color: "green",
            sides: [
              "S",
              "N"
            ],
            id: "import-2"
          },
          {
            type: "painter",
            x: 5,
            y: 3,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 4,
            facings: [
              "E"
            ],
            expects: [
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "N",
            trains: [
              "orange",
              "orange"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 5,
            y: 5,
            facing: "N",
            trains: [
              "purple",
              "purple"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-tor",
        title: "Tor",
        number: 8,
        brief: "Regular · Mississauga · 10/30 clés",
        family: "regular-mississauga",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 32,
        optimalCells: 20,
        optimalSwitchCells: 12,
        wrenches: 10,
        objects: [
          {
            type: "station",
            x: 1,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 5,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 2,
            y: 1,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 4,
            y: 1,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 2,
            y: 3,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 4,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "regular-niagara-falls",
    title: "Niagara Falls",
    playable: true,
    levels: [
      {
        id: "std-horhey",
        title: "Horhey",
        number: 1,
        brief: "Regular · Niagara Falls · 8/30 clés",
        family: "regular-niagara-falls",
        width: 7,
        height: 7,
        railLimit: 32,
        optimalRails: 16,
        optimalCells: 11,
        optimalSwitchCells: 5,
        wrenches: 8,
        objects: [
          {
            type: "station",
            x: 2,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 4,
            y: 3,
            facing: "E",
            trains: [
              "red",
              "red",
              "red",
              "red"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-christmasEve",
        title: "Christmas Eve",
        number: 2,
        brief: "Regular · Niagara Falls · 6/30 clés",
        family: "regular-niagara-falls",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 34,
        optimalCells: 24,
        optimalSwitchCells: 10,
        wrenches: 6,
        objects: [
          {
            type: "outlet",
            x: 2,
            y: 1,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 1,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 4,
            y: 1,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 0,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 6,
            y: 2,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 0,
            y: 4,
            id: "import-13"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-14"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-15"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-16"
          },
          {
            type: "obstacle",
            x: 6,
            y: 4,
            id: "import-17"
          },
          {
            type: "outlet",
            x: 2,
            y: 5,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-18"
          },
          {
            type: "station",
            x: 3,
            y: 5,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-19"
          },
          {
            type: "outlet",
            x: 4,
            y: 5,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-20"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-candlesticks",
        title: "Candlesticks",
        number: 3,
        brief: "Regular · Niagara Falls · 7/30 clés",
        family: "regular-niagara-falls",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 18,
        optimalSwitchCells: 10,
        wrenches: 7,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 1,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 2,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 5,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "splitter",
            x: 3,
            y: 2,
            orientation: "V",
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-12"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-13"
          },
          {
            type: "outlet",
            x: 1,
            y: 6,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-14"
          },
          {
            type: "outlet",
            x: 2,
            y: 6,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-15"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-16"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-17"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-18"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-argentan",
        title: "Argentan",
        number: 4,
        brief: "Regular · Niagara Falls · 8/30 clés",
        family: "regular-niagara-falls",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 13,
        optimalSwitchCells: 5,
        wrenches: 8,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 2,
            facing: "E",
            trains: [
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "yellow",
              "orange"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 1,
            y: 4,
            facing: "E",
            trains: [
              "orange"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-wagonWheels",
        title: "Wagon Wheels",
        number: 5,
        brief: "Regular · Niagara Falls · 8/30 clés",
        family: "regular-niagara-falls",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 25,
        optimalCells: 18,
        optimalSwitchCells: 7,
        wrenches: 8,
        objects: [
          {
            type: "painter",
            x: 1,
            y: 1,
            color: "green",
            sides: [
              "E",
              "S"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 5,
            y: 1,
            color: "blue",
            sides: [
              "W",
              "S"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 1,
            y: 3,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 3,
            y: 3,
            facing: "N",
            trains: [
              "brown",
              "brown",
              "brown",
              "brown"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "S"
            ],
            expects: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 1,
            y: 5,
            color: "yellow",
            sides: [
              "N",
              "E"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 3,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-7"
          },
          {
            type: "painter",
            x: 5,
            y: 5,
            color: "red",
            sides: [
              "N",
              "W"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-gaius",
        title: "Gaius",
        number: 6,
        brief: "Regular · Niagara Falls · 6/30 clés",
        family: "regular-niagara-falls",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 27,
        optimalCells: 21,
        optimalSwitchCells: 6,
        wrenches: 6,
        objects: [
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 0,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "splitter",
            x: 1,
            y: 1,
            orientation: "V",
            id: "import-2"
          },
          {
            type: "splitter",
            x: 5,
            y: 2,
            orientation: "V",
            id: "import-3"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-5"
          },
          {
            type: "splitter",
            x: 1,
            y: 3,
            orientation: "V",
            id: "import-6"
          },
          {
            type: "splitter",
            x: 5,
            y: 4,
            orientation: "V",
            id: "import-7"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-8"
          },
          {
            type: "station",
            x: 0,
            y: 5,
            facings: [
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-9"
          },
          {
            type: "splitter",
            x: 1,
            y: 5,
            orientation: "V",
            id: "import-10"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-11"
          },
          {
            type: "splitter",
            x: 5,
            y: 6,
            orientation: "V",
            id: "import-12"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-machineGun",
        title: "Machine Gun",
        number: 7,
        brief: "Regular · Niagara Falls · 11/30 clés",
        family: "regular-niagara-falls",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 30,
        optimalCells: 18,
        optimalSwitchCells: 12,
        wrenches: 11,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 1,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 2,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 5,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-6"
          },
          {
            type: "splitter",
            x: 5,
            y: 4,
            orientation: "V",
            id: "import-7"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-humber",
        title: "Humber",
        number: 8,
        brief: "Regular · Niagara Falls · 9/30 clés",
        family: "regular-niagara-falls",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 34,
        optimalCells: 24,
        optimalSwitchCells: 10,
        wrenches: 9,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "yellow",
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "red",
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "splitter",
            x: 3,
            y: 3,
            orientation: "V",
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "orange"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "blue",
              "blue"
            ],
            id: "import-6"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-cooksvilleCreek",
        title: "Cooksville Creek",
        number: 9,
        brief: "Regular · Niagara Falls · 11/30 clés",
        family: "regular-niagara-falls",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 37,
        optimalCells: 25,
        optimalSwitchCells: 12,
        wrenches: 11,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "blue",
              "blue",
              "blue",
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "splitter",
            x: 0,
            y: 2,
            orientation: "H",
            id: "import-2"
          },
          {
            type: "splitter",
            x: 6,
            y: 2,
            orientation: "H",
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "N"
            ],
            expects: [
              "blue",
              "blue",
              "blue",
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "N"
            ],
            expects: [
              "blue",
              "blue",
              "blue",
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "splitter",
            x: 0,
            y: 5,
            orientation: "H",
            id: "import-6"
          },
          {
            type: "splitter",
            x: 6,
            y: 5,
            orientation: "H",
            id: "import-7"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue",
              "blue",
              "blue",
              "blue"
            ],
            id: "import-8"
          },
          {
            type: "splitter",
            x: 3,
            y: 6,
            orientation: "V",
            id: "import-9"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue",
              "blue",
              "blue",
              "blue"
            ],
            id: "import-10"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "bonus-oakville",
    title: "Oakville",
    playable: true,
    levels: [
      {
        id: "std-rockyRoad",
        title: "Rocky Road",
        number: 1,
        brief: "Bonus · Oakville · 10/30 clés",
        family: "bonus-oakville",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 22,
        optimalSwitchCells: 6,
        wrenches: 10,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 0,
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 6,
            y: 1,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 5,
            y: 2,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 6,
            y: 2,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-13"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-14"
          },
          {
            type: "obstacle",
            x: 6,
            y: 4,
            id: "import-15"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-16"
          },
          {
            type: "obstacle",
            x: 5,
            y: 5,
            id: "import-17"
          },
          {
            type: "obstacle",
            x: 6,
            y: 5,
            id: "import-18"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-19"
          },
          {
            type: "obstacle",
            x: 3,
            y: 6,
            id: "import-20"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-21"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-clownCar",
        title: "Clown Car",
        number: 2,
        brief: "Bonus · Oakville · 10/30 clés",
        family: "bonus-oakville",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 43,
        optimalCells: 26,
        optimalSwitchCells: 17,
        wrenches: 10,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 2,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 1,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "green",
              "green",
              "green",
              "green",
              "orange",
              "orange",
              "orange",
              "orange",
              "purple",
              "purple",
              "purple",
              "purple"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-10"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-11"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-12"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-alleyway",
        title: "Alleyway",
        number: 3,
        brief: "Bonus · Oakville · 6/30 clés",
        family: "bonus-oakville",
        width: 7,
        height: 7,
        railLimit: 30,
        optimalRails: 15,
        optimalCells: 12,
        optimalSwitchCells: 3,
        wrenches: 6,
        objects: [
          {
            type: "outlet",
            x: 2,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 4,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 1,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 0,
            y: 4,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 1,
            y: 4,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 6,
            y: 4,
            id: "import-8"
          },
          {
            type: "station",
            x: 0,
            y: 5,
            facings: [
              "E"
            ],
            expects: [
              "brown"
            ],
            id: "import-9"
          },
          {
            type: "splitter",
            x: 3,
            y: 5,
            orientation: "V",
            id: "import-10"
          },
          {
            type: "station",
            x: 6,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "brown"
            ],
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 0,
            y: 6,
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 1,
            y: 6,
            id: "import-13"
          },
          {
            type: "obstacle",
            x: 2,
            y: 6,
            id: "import-14"
          },
          {
            type: "obstacle",
            x: 3,
            y: 6,
            id: "import-15"
          },
          {
            type: "obstacle",
            x: 4,
            y: 6,
            id: "import-16"
          },
          {
            type: "obstacle",
            x: 5,
            y: 6,
            id: "import-17"
          },
          {
            type: "obstacle",
            x: 6,
            y: 6,
            id: "import-18"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-recyclingGarbage",
        title: "Recycling Garbage",
        number: 4,
        brief: "Bonus · Oakville · 8/30 clés",
        family: "bonus-oakville",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 25,
        optimalCells: 17,
        optimalSwitchCells: 8,
        wrenches: 8,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "brown",
              "brown",
              "brown",
              "brown"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-shanimal",
        title: "Shanimal",
        number: 5,
        brief: "Bonus · Oakville · 11/30 clés",
        family: "bonus-oakville",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 30,
        optimalCells: 24,
        optimalSwitchCells: 6,
        wrenches: 11,
        objects: [
          {
            type: "station",
            x: 5,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "red",
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 6,
            y: 0,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 1,
            facing: "S",
            trains: [
              "red",
              "red"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-9"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "N",
            trains: [
              "blue",
              "blue"
            ],
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 1,
            y: 5,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 0,
            y: 6,
            id: "import-12"
          },
          {
            type: "station",
            x: 1,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "blue",
              "purple"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-cayman",
        title: "Cayman",
        number: 6,
        brief: "Bonus · Oakville · 11/30 clés",
        family: "bonus-oakville",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 26,
        optimalCells: 18,
        optimalSwitchCells: 8,
        wrenches: 11,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 0,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "blue",
              "red",
              "yellow",
              "blue",
              "red",
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "splitter",
            x: 1,
            y: 1,
            orientation: "V",
            id: "import-2"
          },
          {
            type: "painter",
            x: 4,
            y: 3,
            color: "red",
            sides: [
              "S",
              "N"
            ],
            id: "import-3"
          },
          {
            type: "painter",
            x: 5,
            y: 3,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-4"
          },
          {
            type: "painter",
            x: 4,
            y: 4,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 5,
            y: 4,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-pwrOvrwhlmng",
        title: "Pwr Ovrwhlmng",
        number: 7,
        brief: "Bonus · Oakville · 11/30 clés",
        family: "bonus-oakville",
        width: 7,
        height: 7,
        railLimit: 48,
        optimalRails: 24,
        optimalCells: 16,
        optimalSwitchCells: 8,
        wrenches: 11,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 0,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "splitter",
            x: 1,
            y: 1,
            orientation: "V",
            id: "import-3"
          },
          {
            type: "splitter",
            x: 3,
            y: 1,
            orientation: "H",
            id: "import-4"
          },
          {
            type: "splitter",
            x: 2,
            y: 3,
            orientation: "H",
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 0,
            y: 5,
            facings: [
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-7"
          },
          {
            type: "splitter",
            x: 1,
            y: 5,
            orientation: "V",
            id: "import-8"
          },
          {
            type: "splitter",
            x: 3,
            y: 5,
            orientation: "H",
            id: "import-9"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-10"
          },
          {
            type: "station",
            x: 4,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-axiom",
        title: "Axiom",
        number: 8,
        brief: "Bonus · Oakville · 8/30 clés",
        family: "bonus-oakville",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 30,
        optimalCells: 22,
        optimalSwitchCells: 8,
        wrenches: 8,
        objects: [
          {
            type: "painter",
            x: 2,
            y: 0,
            color: "blue",
            sides: [
              "W",
              "S"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 4,
            y: 0,
            color: "yellow",
            sides: [
              "E",
              "S"
            ],
            id: "import-1"
          },
          {
            type: "splitter",
            x: 3,
            y: 3,
            orientation: "V",
            id: "import-2"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 1,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "orange",
              "orange",
              "orange",
              "orange"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 5,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-jagd",
        title: "Jagd",
        number: 9,
        brief: "Bonus · Oakville · 9/30 clés",
        family: "bonus-oakville",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 27,
        optimalCells: 17,
        optimalSwitchCells: 10,
        wrenches: 9,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 1,
            y: 2,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-3"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-5"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "yellow",
              "purple"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 1,
            y: 4,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-8"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-10"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "bonus-peterborough",
    title: "Peterborough",
    playable: true,
    levels: [
      {
        id: "std-aBarrelRoll",
        title: "A Barrel Roll",
        number: 1,
        brief: "Bonus · Peterborough · 12/30 clés",
        family: "bonus-peterborough",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 36,
        optimalCells: 24,
        optimalSwitchCells: 12,
        wrenches: 12,
        objects: [
          {
            type: "outlet",
            x: 2,
            y: 2,
            facing: "W",
            trains: [
              "blue",
              "blue",
              "blue",
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 4,
            y: 2,
            facing: "N",
            trains: [
              "red",
              "yellow",
              "red",
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "purple",
              "green"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 2,
            y: 4,
            facing: "S",
            trains: [
              "red",
              "yellow",
              "red",
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 4,
            y: 4,
            facing: "E",
            trains: [
              "blue",
              "blue",
              "blue",
              "blue"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-klickers",
        title: "Klickers",
        number: 2,
        brief: "Bonus · Peterborough · 6/30 clés",
        family: "bonus-peterborough",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 29,
        optimalCells: 24,
        optimalSwitchCells: 5,
        wrenches: 6,
        objects: [
          {
            type: "obstacle",
            x: 0,
            y: 0,
            id: "import-0"
          },
          {
            type: "station",
            x: 1,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "orange",
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "S",
            trains: [
              "red",
              "yellow",
              "blue",
              "red"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 1,
            y: 1,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 5,
            y: 5,
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-hazard",
        title: "Hazard",
        number: 3,
        brief: "Bonus · Peterborough · 8/30 clés",
        family: "bonus-peterborough",
        width: 7,
        height: 7,
        railLimit: 48,
        optimalRails: 24,
        optimalCells: 19,
        optimalSwitchCells: 5,
        wrenches: 8,
        objects: [
          {
            type: "obstacle",
            x: 0,
            y: 0,
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 4,
            y: 1,
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 1,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 6,
            y: 2,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-7"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-9"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 5,
            y: 6,
            id: "import-12"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-squelchen",
        title: "Squelchen",
        number: 4,
        brief: "Bonus · Peterborough · 11/30 clés",
        family: "bonus-peterborough",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 30,
        optimalCells: 21,
        optimalSwitchCells: 9,
        wrenches: 11,
        objects: [
          {
            type: "station",
            x: 5,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "green",
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 6,
            y: 0,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 1,
            facing: "S",
            trains: [
              "purple",
              "purple"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-4"
          },
          {
            type: "painter",
            x: 3,
            y: 2,
            color: "red",
            sides: [
              "S",
              "N"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 2,
            y: 3,
            color: "blue",
            sides: [
              "E",
              "W"
            ],
            id: "import-6"
          },
          {
            type: "painter",
            x: 4,
            y: 3,
            color: "green",
            sides: [
              "W",
              "E"
            ],
            id: "import-7"
          },
          {
            type: "painter",
            x: 3,
            y: 4,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-9"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "N",
            trains: [
              "purple",
              "purple"
            ],
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 1,
            y: 5,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 0,
            y: 6,
            id: "import-12"
          },
          {
            type: "station",
            x: 1,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "red",
              "blue"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-miniyowe",
        title: "Mini-Yo-We",
        number: 5,
        brief: "Bonus · Peterborough · 11/30 clés",
        family: "bonus-peterborough",
        width: 7,
        height: 7,
        railLimit: 40,
        optimalRails: 20,
        optimalCells: 13,
        optimalSwitchCells: 7,
        wrenches: 11,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 2,
            y: 2,
            color: "red",
            sides: [
              "W",
              "E"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 3,
            y: 2,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "painter",
            x: 2,
            y: 3,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "red",
            sides: [
              "W",
              "E"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-8"
          },
          {
            type: "painter",
            x: 2,
            y: 4,
            color: "red",
            sides: [
              "W",
              "E"
            ],
            id: "import-9"
          },
          {
            type: "painter",
            x: 3,
            y: 4,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-10"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-asymmetric",
        title: "Asymmetric",
        number: 6,
        brief: "Bonus · Peterborough · 11/30 clés",
        family: "bonus-peterborough",
        width: 7,
        height: 7,
        railLimit: 40,
        optimalRails: 20,
        optimalCells: 15,
        optimalSwitchCells: 5,
        wrenches: 11,
        objects: [
          {
            type: "station",
            x: 5,
            y: 1,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "splitter",
            x: 3,
            y: 2,
            orientation: "V",
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "S",
            trains: [
              "orange"
            ],
            id: "import-6"
          },
          {
            type: "splitter",
            x: 3,
            y: 4,
            orientation: "V",
            id: "import-7"
          },
          {
            type: "station",
            x: 1,
            y: 5,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-lornePark",
        title: "Lorne Park",
        number: 7,
        brief: "Bonus · Peterborough · 12/30 clés",
        family: "bonus-peterborough",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 41,
        optimalCells: 24,
        optimalSwitchCells: 17,
        wrenches: 12,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 1,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S"
            ],
            expects: [
              "red",
              "yellow",
              "blue"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 6,
            y: 5,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-10"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-11"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-12"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-adama",
        title: "Adama",
        number: 8,
        brief: "Bonus · Peterborough · 13/30 clés",
        family: "bonus-peterborough",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 36,
        optimalCells: 24,
        optimalSwitchCells: 12,
        wrenches: 13,
        objects: [
          {
            type: "outlet",
            x: 4,
            y: 0,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 0,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "splitter",
            x: 1,
            y: 1,
            orientation: "V",
            id: "import-3"
          },
          {
            type: "splitter",
            x: 5,
            y: 2,
            orientation: "V",
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-6"
          },
          {
            type: "splitter",
            x: 1,
            y: 3,
            orientation: "V",
            id: "import-7"
          },
          {
            type: "splitter",
            x: 5,
            y: 4,
            orientation: "V",
            id: "import-8"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-9"
          },
          {
            type: "station",
            x: 0,
            y: 5,
            facings: [
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-10"
          },
          {
            type: "splitter",
            x: 1,
            y: 5,
            orientation: "V",
            id: "import-11"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "orange"
            ],
            id: "import-12"
          },
          {
            type: "splitter",
            x: 5,
            y: 6,
            orientation: "V",
            id: "import-13"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-14"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-tonelympics",
        title: "Tonelympics",
        number: 9,
        brief: "Bonus · Peterborough · 13/30 clés",
        family: "bonus-peterborough",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 34,
        optimalCells: 24,
        optimalSwitchCells: 10,
        wrenches: 13,
        objects: [
          {
            type: "obstacle",
            x: 0,
            y: 0,
            id: "import-0"
          },
          {
            type: "station",
            x: 1,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 1,
            y: 1,
            id: "import-3"
          },
          {
            type: "station",
            x: 2,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 1,
            y: 2,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-6"
          },
          {
            type: "station",
            x: 3,
            y: 2,
            facings: [
              "E"
            ],
            expects: [
              "orange"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 2,
            y: 3,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-9"
          },
          {
            type: "station",
            x: 4,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-10"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 5,
            y: 5,
            id: "import-13"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "bonus-quebec-city",
    title: "Quebec City",
    playable: true,
    levels: [
      {
        id: "std-picnic",
        title: "Picnic",
        number: 1,
        brief: "Bonus · Quebec City · 7/30 clés",
        family: "bonus-quebec-city",
        width: 7,
        height: 7,
        railLimit: 44,
        optimalRails: 22,
        optimalCells: 13,
        optimalSwitchCells: 9,
        wrenches: 7,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "red",
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "purple",
              "purple"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "blue",
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-spindle",
        title: "Spindle",
        number: 2,
        brief: "Bonus · Quebec City · 8/30 clés",
        family: "bonus-quebec-city",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 30,
        optimalCells: 22,
        optimalSwitchCells: 8,
        wrenches: 8,
        objects: [
          {
            type: "obstacle",
            x: 4,
            y: 1,
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 1,
            y: 2,
            id: "import-1"
          },
          {
            type: "station",
            x: 2,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 4,
            y: 2,
            facings: [
              "E"
            ],
            expects: [
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 2,
            y: 3,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-6"
          },
          {
            type: "outlet",
            x: 4,
            y: 3,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 2,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-9"
          },
          {
            type: "station",
            x: 4,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 2,
            y: 5,
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 2,
            y: 6,
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-fireEyed",
        title: "Fire Eyed",
        number: 3,
        brief: "Bonus · Quebec City · 7/30 clés",
        family: "bonus-quebec-city",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 38,
        optimalCells: 30,
        optimalSwitchCells: 8,
        wrenches: 7,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 1,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 5,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 5,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "orange"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-rebelt",
        title: "Rebelt",
        number: 4,
        brief: "Bonus · Quebec City · 10/30 clés",
        family: "bonus-quebec-city",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 27,
        optimalCells: 16,
        optimalSwitchCells: 11,
        wrenches: 10,
        objects: [
          {
            type: "station",
            x: 2,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "blue",
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "splitter",
            x: 3,
            y: 3,
            orientation: "V",
            id: "import-3"
          },
          {
            type: "painter",
            x: 4,
            y: 3,
            color: "orange",
            sides: [
              "W",
              "S"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 5,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-6"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-rgb",
        title: "RGB",
        number: 5,
        brief: "Bonus · Quebec City · 11/30 clés",
        family: "bonus-quebec-city",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 30,
        optimalCells: 19,
        optimalSwitchCells: 11,
        wrenches: 11,
        objects: [
          {
            type: "station",
            x: 0,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 1,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 2,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 4,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 5,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 2,
            y: 3,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 4,
            y: 3,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 5,
            y: 3,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-10"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-drLinus",
        title: "Dr. Linus",
        number: 6,
        brief: "Bonus · Quebec City · 11/30 clés",
        family: "bonus-quebec-city",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 35,
        optimalCells: 23,
        optimalSwitchCells: 12,
        wrenches: 11,
        objects: [
          {
            type: "station",
            x: 3,
            y: 1,
            facings: [
              "N"
            ],
            expects: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 2,
            y: 2,
            facing: "N",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-2"
          },
          {
            type: "outlet",
            x: 4,
            y: 2,
            facing: "N",
            trains: [
              "red",
              "red"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-8"
          },
          {
            type: "outlet",
            x: 2,
            y: 4,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-10"
          },
          {
            type: "outlet",
            x: 4,
            y: 4,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-11"
          },
          {
            type: "station",
            x: 3,
            y: 5,
            facings: [
              "S"
            ],
            expects: [
              "orange",
              "orange"
            ],
            id: "import-12"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-glockenspiel",
        title: "Glockenspiel",
        number: 7,
        brief: "Bonus · Quebec City · 11/30 clés",
        family: "bonus-quebec-city",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 13,
        optimalSwitchCells: 5,
        wrenches: 11,
        objects: [
          {
            type: "painter",
            x: 0,
            y: 0,
            color: "yellow",
            sides: [
              "E",
              "S"
            ],
            id: "import-0"
          },
          {
            type: "splitter",
            x: 3,
            y: 0,
            orientation: "V",
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "S",
            trains: [
              "green",
              "green",
              "green"
            ],
            id: "import-2"
          },
          {
            type: "splitter",
            x: 0,
            y: 3,
            orientation: "H",
            id: "import-3"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "red",
              "red",
              "red",
              "blue",
              "blue",
              "blue",
              "yellow",
              "yellow",
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "splitter",
            x: 6,
            y: 3,
            orientation: "H",
            id: "import-5"
          },
          {
            type: "painter",
            x: 0,
            y: 6,
            color: "blue",
            sides: [
              "N",
              "E"
            ],
            id: "import-6"
          },
          {
            type: "splitter",
            x: 3,
            y: 6,
            orientation: "V",
            id: "import-7"
          },
          {
            type: "painter",
            x: 6,
            y: 6,
            color: "red",
            sides: [
              "W",
              "N"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-jamboree",
        title: "Jamboree",
        number: 8,
        brief: "Bonus · Quebec City · 12/30 clés",
        family: "bonus-quebec-city",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 19,
        optimalSwitchCells: 9,
        wrenches: 12,
        objects: [
          {
            type: "painter",
            x: 0,
            y: 0,
            color: "blue",
            sides: [
              "E",
              "S"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 0,
            y: 2,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 1,
            y: 2,
            facings: [
              "S"
            ],
            expects: [
              "blue",
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "splitter",
            x: 1,
            y: 3,
            orientation: "H",
            id: "import-3"
          },
          {
            type: "station",
            x: 2,
            y: 3,
            facings: [
              "S",
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 3,
            y: 3,
            facing: "E",
            trains: [
              "red",
              "red",
              "red",
              "red"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 0,
            y: 4,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 1,
            y: 4,
            facings: [
              "N"
            ],
            expects: [
              "blue",
              "yellow"
            ],
            id: "import-7"
          },
          {
            type: "painter",
            x: 0,
            y: 6,
            color: "yellow",
            sides: [
              "N",
              "E"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-licoriceAllsorts",
        title: "Licorice Allsorts",
        number: 9,
        brief: "Bonus · Quebec City · 13/30 clés",
        family: "bonus-quebec-city",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 38,
        optimalCells: 23,
        optimalSwitchCells: 15,
        wrenches: 13,
        objects: [
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "N"
            ],
            expects: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 1,
            y: 3,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 2,
            y: 3,
            facings: [
              "N"
            ],
            expects: [
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 4,
            y: 3,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 1,
            y: 4,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 2,
            y: 4,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "S",
            trains: [
              "orange"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 4,
            y: 4,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-10"
          },
          {
            type: "outlet",
            x: 5,
            y: 4,
            facing: "S",
            trains: [
              "purple"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "bonus-regina",
    title: "Regina",
    playable: true,
    levels: [
      {
        id: "std-sangreGrande",
        title: "Sangre Grande",
        number: 1,
        brief: "Bonus · Regina · 7/30 clés",
        family: "bonus-regina",
        width: 7,
        height: 7,
        railLimit: 46,
        optimalRails: 23,
        optimalCells: 16,
        optimalSwitchCells: 7,
        wrenches: 7,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 2,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 4,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 5,
            y: 1,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "purple",
              "red"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-theVariable",
        title: "The Variable",
        number: 2,
        brief: "Bonus · Regina · 7/30 clés",
        family: "bonus-regina",
        width: 7,
        height: 7,
        railLimit: 48,
        optimalRails: 24,
        optimalCells: 18,
        optimalSwitchCells: 6,
        wrenches: 7,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "E",
            trains: [
              "red",
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 5,
            y: 1,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 1,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "red",
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 5,
            y: 5,
            facing: "W",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-orff",
        title: "Orff",
        number: 3,
        brief: "Bonus · Regina · 8/30 clés",
        family: "bonus-regina",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 38,
        optimalCells: 23,
        optimalSwitchCells: 15,
        wrenches: 8,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 1,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 2,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 5,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "splitter",
            x: 1,
            y: 3,
            orientation: "V",
            id: "import-6"
          },
          {
            type: "splitter",
            x: 5,
            y: 3,
            orientation: "V",
            id: "import-7"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 1,
            y: 6,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 2,
            y: 6,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-10"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-11"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-12"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-somewhere",
        title: "Somewhere",
        number: 4,
        brief: "Bonus · Regina · 10/30 clés",
        family: "bonus-regina",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 34,
        optimalCells: 22,
        optimalSwitchCells: 12,
        wrenches: 10,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "red",
              "orange",
              "yellow",
              "green",
              "blue",
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 6,
            y: 0,
            color: "red",
            sides: [
              "W",
              "S"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 5,
            y: 1,
            color: "purple",
            sides: [
              "N",
              "S"
            ],
            id: "import-2"
          },
          {
            type: "painter",
            x: 4,
            y: 2,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-3"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "green",
            sides: [
              "N",
              "S"
            ],
            id: "import-4"
          },
          {
            type: "painter",
            x: 2,
            y: 4,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 1,
            y: 5,
            color: "orange",
            sides: [
              "N",
              "S"
            ],
            id: "import-6"
          },
          {
            type: "painter",
            x: 0,
            y: 6,
            color: "red",
            sides: [
              "N",
              "E"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "red",
              "orange",
              "yellow",
              "green",
              "blue",
              "purple"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-usector",
        title: "U-Sector",
        number: 5,
        brief: "Bonus · Regina · 11/30 clés",
        family: "bonus-regina",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 36,
        optimalCells: 27,
        optimalSwitchCells: 9,
        wrenches: 11,
        objects: [
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 4,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-3"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 1,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "orange"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-7"
          },
          {
            type: "splitter",
            x: 4,
            y: 3,
            orientation: "H",
            id: "import-8"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-9"
          },
          {
            type: "station",
            x: 1,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "blue",
              "blue"
            ],
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 2,
            y: 5,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 4,
            y: 5,
            id: "import-13"
          },
          {
            type: "obstacle",
            x: 5,
            y: 5,
            id: "import-14"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-takingTrash",
        title: "Taking Trash",
        number: 6,
        brief: "Bonus · Regina · 11/30 clés",
        family: "bonus-regina",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 29,
        optimalCells: 18,
        optimalSwitchCells: 11,
        wrenches: 11,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "splitter",
            x: 3,
            y: 3,
            orientation: "V",
            id: "import-3"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N",
              "E"
            ],
            expects: [
              "brown",
              "brown",
              "brown"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-theQuotient",
        title: "The Quotient",
        number: 7,
        brief: "Bonus · Regina · 12/30 clés",
        family: "bonus-regina",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 27,
        optimalCells: 19,
        optimalSwitchCells: 8,
        wrenches: 12,
        objects: [
          {
            type: "station",
            x: 2,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "blue",
              "blue",
              "red",
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green",
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "splitter",
            x: 2,
            y: 3,
            orientation: "V",
            id: "import-2"
          },
          {
            type: "splitter",
            x: 4,
            y: 3,
            orientation: "V",
            id: "import-3"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 2,
            y: 6,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-trinidad",
        title: "Trinidad",
        number: 8,
        brief: "Bonus · Regina · 13/30 clés",
        family: "bonus-regina",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 19,
        optimalSwitchCells: 9,
        wrenches: 13,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "splitter",
            x: 3,
            y: 2,
            orientation: "H",
            id: "import-2"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "splitter",
            x: 2,
            y: 3,
            orientation: "V",
            id: "import-4"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "red",
              "yellow",
              "blue",
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "splitter",
            x: 4,
            y: 3,
            orientation: "V",
            id: "import-6"
          },
          {
            type: "splitter",
            x: 3,
            y: 4,
            orientation: "H",
            id: "import-7"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-9"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-theDenominator",
        title: "The Denominator",
        number: 9,
        brief: "Bonus · Regina · 15/30 clés",
        family: "bonus-regina",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 37,
        optimalCells: 23,
        optimalSwitchCells: 14,
        wrenches: 15,
        objects: [
          {
            type: "splitter",
            x: 2,
            y: 2,
            orientation: "V",
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 2,
            facings: [
              "W",
              "E"
            ],
            expects: [
              "red",
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "splitter",
            x: 4,
            y: 2,
            orientation: "V",
            id: "import-2"
          },
          {
            type: "outlet",
            x: 2,
            y: 5,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 4,
            y: 5,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 0,
            y: 6,
            id: "import-5"
          },
          {
            type: "outlet",
            x: 1,
            y: 6,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 2,
            y: 6,
            id: "import-7"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 4,
            y: 6,
            id: "import-9"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-10"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "bonus-st-john-s",
    title: "St. John's",
    playable: true,
    levels: [
      {
        id: "std-backToBasics",
        title: "Back To Basics",
        number: 1,
        brief: "Bonus · St. John's · 6/30 clés",
        family: "bonus-st-john-s",
        width: 7,
        height: 7,
        railLimit: 40,
        optimalRails: 20,
        optimalCells: 16,
        optimalSwitchCells: 4,
        wrenches: 6,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 2,
            facing: "N",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 4,
            y: 2,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 2,
            y: 5,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "orange",
              "orange",
              "green",
              "green"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-theConstant",
        title: "The Constant",
        number: 2,
        brief: "Bonus · St. John's · 8/30 clés",
        family: "bonus-st-john-s",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 37,
        optimalCells: 29,
        optimalSwitchCells: 8,
        wrenches: 8,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "E",
            trains: [
              "red",
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 5,
            y: 1,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 1,
            y: 2,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 5,
            y: 2,
            id: "import-5"
          },
          {
            type: "station",
            x: 1,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-8"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "red",
              "yellow"
            ],
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 1,
            y: 4,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-13"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-14"
          },
          {
            type: "outlet",
            x: 5,
            y: 5,
            facing: "W",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-15"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-willow",
        title: "Willow",
        number: 3,
        brief: "Bonus · St. John's · 9/30 clés",
        family: "bonus-st-john-s",
        width: 7,
        height: 7,
        railLimit: 32,
        optimalRails: 16,
        optimalCells: 10,
        optimalSwitchCells: 6,
        wrenches: 9,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "blue",
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "blue",
              "red",
              "blue",
              "red",
              "blue",
              "red",
              "blue",
              "red"
            ],
            id: "import-1"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-conquistador",
        title: "Conquistador",
        number: 4,
        brief: "Bonus · St. John's · 12/30 clés",
        family: "bonus-st-john-s",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 18,
        optimalSwitchCells: 10,
        wrenches: 12,
        objects: [
          {
            type: "station",
            x: 1,
            y: 2,
            facings: [
              "W",
              "N",
              "E"
            ],
            expects: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 5,
            y: 2,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 6,
            y: 2,
            color: "red",
            sides: [
              "S",
              "N"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 1,
            y: 3,
            facings: [
              "W",
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 5,
            y: 3,
            facing: "W",
            trains: [
              "green",
              "green"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 1,
            y: 4,
            facings: [
              "S",
              "W",
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 5,
            y: 4,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-6"
          },
          {
            type: "painter",
            x: 6,
            y: 4,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-squier",
        title: "Squier",
        number: 5,
        brief: "Bonus · St. John's · 12/30 clés",
        family: "bonus-st-john-s",
        width: 7,
        height: 7,
        railLimit: 38,
        optimalRails: 19,
        optimalCells: 14,
        optimalSwitchCells: 5,
        wrenches: 12,
        objects: [
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "splitter",
            x: 3,
            y: 3,
            orientation: "H",
            id: "import-1"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N",
              "E"
            ],
            expects: [
              "green",
              "green"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-oakwoodAve",
        title: "Oakwood Ave",
        number: 6,
        brief: "Bonus · St. John's · 12/30 clés",
        family: "bonus-st-john-s",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 33,
        optimalCells: 24,
        optimalSwitchCells: 9,
        wrenches: 12,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "splitter",
            x: 3,
            y: 0,
            orientation: "V",
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "painter",
            x: 0,
            y: 3,
            color: "red",
            sides: [
              "N",
              "S"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-8"
          },
          {
            type: "painter",
            x: 6,
            y: 3,
            color: "blue",
            sides: [
              "N",
              "S"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "orange"
            ],
            id: "import-10"
          },
          {
            type: "splitter",
            x: 3,
            y: 6,
            orientation: "V",
            id: "import-11"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-12"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-erindale",
        title: "Erindale",
        number: 7,
        brief: "Bonus · St. John's · 13/30 clés",
        family: "bonus-st-john-s",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 45,
        optimalCells: 31,
        optimalSwitchCells: 14,
        wrenches: 13,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 1,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 1,
            y: 2,
            facing: "E",
            trains: [
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "S",
              "N"
            ],
            expects: [
              "yellow",
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "splitter",
            x: 4,
            y: 3,
            orientation: "H",
            id: "import-6"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 1,
            y: 4,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-8"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-10"
          },
          {
            type: "station",
            x: 6,
            y: 5,
            facings: [
              "S"
            ],
            expects: [
              "blue"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "bonus-toronto",
    title: "Toronto",
    playable: true,
    levels: [
      {
        id: "std-sliceOfLife",
        title: "Slice of Life",
        number: 1,
        brief: "Bonus · Toronto · 13/30 clés",
        family: "bonus-toronto",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 27,
        optimalCells: 17,
        optimalSwitchCells: 10,
        wrenches: 13,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 0,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "splitter",
            x: 2,
            y: 3,
            orientation: "V",
            id: "import-2"
          },
          {
            type: "splitter",
            x: 3,
            y: 3,
            orientation: "H",
            id: "import-3"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow",
              "purple",
              "purple",
              "yellow"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-mrMorgan",
        title: "Mr. Morgan",
        number: 2,
        brief: "Bonus · Toronto · 13/30 clés",
        family: "bonus-toronto",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 32,
        optimalCells: 24,
        optimalSwitchCells: 8,
        wrenches: 13,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "red",
              "red",
              "red",
              "red"
            ],
            id: "import-0"
          },
          {
            type: "splitter",
            x: 1,
            y: 0,
            orientation: "V",
            id: "import-1"
          },
          {
            type: "outlet",
            x: 2,
            y: 2,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "painter",
            x: 4,
            y: 2,
            color: "red",
            sides: [
              "W",
              "S"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 3,
            y: 3,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-4"
          },
          {
            type: "splitter",
            x: 2,
            y: 4,
            orientation: "H",
            id: "import-5"
          },
          {
            type: "outlet",
            x: 4,
            y: 4,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 2,
            y: 5,
            facings: [
              "N"
            ],
            expects: [
              "red",
              "red",
              "red",
              "red"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "red",
              "red",
              "red"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-chief",
        title: "Chief",
        number: 3,
        brief: "Bonus · Toronto · 15/30 clés",
        family: "bonus-toronto",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 27,
        optimalCells: 19,
        optimalSwitchCells: 8,
        wrenches: 15,
        objects: [
          {
            type: "outlet",
            x: 5,
            y: 1,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-2"
          },
          {
            type: "station",
            x: 5,
            y: 2,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "splitter",
            x: 0,
            y: 3,
            orientation: "H",
            id: "import-5"
          },
          {
            type: "splitter",
            x: 6,
            y: 3,
            orientation: "H",
            id: "import-6"
          },
          {
            type: "station",
            x: 1,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-8"
          },
          {
            type: "station",
            x: 0,
            y: 5,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "E",
            trains: [
              "orange"
            ],
            id: "import-10"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-waterfall",
        title: "Waterfall",
        number: 4,
        brief: "Bonus · Toronto · 7/30 clés",
        family: "bonus-toronto",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 27,
        optimalCells: 17,
        optimalSwitchCells: 10,
        wrenches: 7,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 1,
            y: 0,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 2,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 0,
            id: "import-3"
          },
          {
            type: "outlet",
            x: 4,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 5,
            y: 0,
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 3,
            y: 1,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 5,
            y: 1,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-9"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-10"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-volcano",
        title: "Volcano",
        number: 5,
        brief: "Bonus · Toronto · 12/30 clés",
        family: "bonus-toronto",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 32,
        optimalCells: 22,
        optimalSwitchCells: 10,
        wrenches: 12,
        objects: [
          {
            type: "outlet",
            x: 2,
            y: 1,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 4,
            y: 1,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-2"
          },
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 2,
            y: 3,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-6"
          },
          {
            type: "outlet",
            x: 4,
            y: 3,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-8"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-9"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-norwich",
        title: "Norwich",
        number: 6,
        brief: "Bonus · Toronto · 10/30 clés",
        family: "bonus-toronto",
        width: 7,
        height: 7,
        railLimit: 46,
        optimalRails: 23,
        optimalCells: 18,
        optimalSwitchCells: 5,
        wrenches: 10,
        objects: [
          {
            type: "painter",
            x: 3,
            y: 0,
            color: "green",
            sides: [
              "W",
              "E"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 3,
            y: 1,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-2"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 5,
            y: 3,
            facing: "W",
            trains: [
              "red",
              "purple",
              "red",
              "purple"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "S",
              "N"
            ],
            expects: [
              "green",
              "green"
            ],
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-7"
          },
          {
            type: "painter",
            x: 3,
            y: 5,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-8"
          },
          {
            type: "painter",
            x: 3,
            y: 6,
            color: "purple",
            sides: [
              "W",
              "E"
            ],
            id: "import-9"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-threeBelow",
        title: "Three Below",
        number: 7,
        brief: "Bonus · Toronto · 13/30 clés",
        family: "bonus-toronto",
        width: 7,
        height: 7,
        railLimit: 40,
        optimalRails: 20,
        optimalCells: 13,
        optimalSwitchCells: 7,
        wrenches: 13,
        objects: [
          {
            type: "station",
            x: 2,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "orange",
              "orange",
              "orange",
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 0,
            y: 5,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 1,
            y: 5,
            id: "import-4"
          },
          {
            type: "painter",
            x: 2,
            y: 5,
            color: "red",
            sides: [
              "S",
              "N"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 3,
            y: 5,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-6"
          },
          {
            type: "painter",
            x: 4,
            y: 5,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 5,
            y: 5,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 6,
            y: 5,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 0,
            y: 6,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 1,
            y: 6,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 5,
            y: 6,
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 6,
            y: 6,
            id: "import-13"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "bonus-uxbridge",
    title: "Uxbridge",
    playable: true,
    levels: [
      {
        id: "std-mockingbird",
        title: "Mockingbird",
        number: 1,
        brief: "Bonus · Uxbridge · 15/30 clés",
        family: "bonus-uxbridge",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 46,
        optimalCells: 30,
        optimalSwitchCells: 16,
        wrenches: 15,
        objects: [
          {
            type: "station",
            x: 1,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 2,
            y: 0,
            id: "import-1"
          },
          {
            type: "station",
            x: 5,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-4"
          },
          {
            type: "splitter",
            x: 2,
            y: 2,
            orientation: "V",
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-7"
          },
          {
            type: "splitter",
            x: 2,
            y: 3,
            orientation: "H",
            id: "import-8"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "green",
              "blue",
              "orange",
              "blue"
            ],
            id: "import-9"
          },
          {
            type: "splitter",
            x: 2,
            y: 4,
            orientation: "V",
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 2,
            y: 5,
            id: "import-11"
          },
          {
            type: "station",
            x: 1,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 2,
            y: 6,
            id: "import-13"
          },
          {
            type: "station",
            x: 5,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-14"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-15"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-drummerBoy",
        title: "Drummer Boy",
        number: 2,
        brief: "Bonus · Uxbridge · 12/30 clés",
        family: "bonus-uxbridge",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 36,
        optimalCells: 24,
        optimalSwitchCells: 12,
        wrenches: 12,
        objects: [
          {
            type: "painter",
            x: 0,
            y: 0,
            color: "red",
            sides: [
              "S",
              "E"
            ],
            id: "import-0"
          },
          {
            type: "splitter",
            x: 5,
            y: 0,
            orientation: "V",
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "blue",
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 6,
            y: 1,
            id: "import-3"
          },
          {
            type: "splitter",
            x: 5,
            y: 2,
            orientation: "V",
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "W"
            ],
            expects: [
              "blue",
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-6"
          },
          {
            type: "painter",
            x: 5,
            y: 3,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-8"
          },
          {
            type: "splitter",
            x: 5,
            y: 4,
            orientation: "V",
            id: "import-9"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "red",
              "red"
            ],
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 6,
            y: 5,
            id: "import-11"
          },
          {
            type: "painter",
            x: 0,
            y: 6,
            color: "blue",
            sides: [
              "E",
              "N"
            ],
            id: "import-12"
          },
          {
            type: "splitter",
            x: 5,
            y: 6,
            orientation: "V",
            id: "import-13"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "red",
              "red"
            ],
            id: "import-14"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-forestAve",
        title: "Forest Ave",
        number: 3,
        brief: "Bonus · Uxbridge · 12/30 clés",
        family: "bonus-uxbridge",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 42,
        optimalCells: 25,
        optimalSwitchCells: 17,
        wrenches: 12,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 0,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 1,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 2,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-6"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-8"
          },
          {
            type: "station",
            x: 0,
            y: 4,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-10"
          },
          {
            type: "station",
            x: 0,
            y: 5,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-11"
          },
          {
            type: "outlet",
            x: 6,
            y: 5,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-12"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-13"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-14"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-parachute",
        title: "Parachute",
        number: 4,
        brief: "Bonus · Uxbridge · 13/30 clés",
        family: "bonus-uxbridge",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 40,
        optimalCells: 26,
        optimalSwitchCells: 14,
        wrenches: 13,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 0,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 6,
            y: 1,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "painter",
            x: 2,
            y: 2,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-4"
          },
          {
            type: "painter",
            x: 4,
            y: 2,
            color: "red",
            sides: [
              "S",
              "N"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-6"
          },
          {
            type: "painter",
            x: 2,
            y: 4,
            color: "green",
            sides: [
              "S",
              "N"
            ],
            id: "import-7"
          },
          {
            type: "painter",
            x: 4,
            y: 4,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-8"
          },
          {
            type: "station",
            x: 0,
            y: 5,
            facings: [
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-9"
          },
          {
            type: "station",
            x: 6,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-10"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-11"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "purple"
            ],
            id: "import-12"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-theQuest",
        title: "The Quest",
        number: 5,
        brief: "Bonus · Uxbridge · 13/30 clés",
        family: "bonus-uxbridge",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 37,
        optimalCells: 22,
        optimalSwitchCells: 15,
        wrenches: 13,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 5,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "splitter",
            x: 0,
            y: 1,
            orientation: "H",
            id: "import-3"
          },
          {
            type: "painter",
            x: 6,
            y: 2,
            color: "green",
            sides: [
              "S",
              "N"
            ],
            id: "import-4"
          },
          {
            type: "splitter",
            x: 6,
            y: 4,
            orientation: "H",
            id: "import-5"
          },
          {
            type: "splitter",
            x: 0,
            y: 5,
            orientation: "H",
            id: "import-6"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 5,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-9"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-kes",
        title: "Kes",
        number: 6,
        brief: "Bonus · Uxbridge · 15/30 clés",
        family: "bonus-uxbridge",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 39,
        optimalCells: 24,
        optimalSwitchCells: 15,
        wrenches: 15,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "painter",
            x: 0,
            y: 3,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-3"
          },
          {
            type: "painter",
            x: 1,
            y: 3,
            color: "red",
            sides: [
              "S",
              "N"
            ],
            id: "import-4"
          },
          {
            type: "painter",
            x: 2,
            y: 3,
            color: "red",
            sides: [
              "S",
              "N"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "red",
            sides: [
              "S",
              "N"
            ],
            id: "import-6"
          },
          {
            type: "painter",
            x: 4,
            y: 3,
            color: "red",
            sides: [
              "S",
              "N"
            ],
            id: "import-7"
          },
          {
            type: "painter",
            x: 5,
            y: 3,
            color: "red",
            sides: [
              "S",
              "N"
            ],
            id: "import-8"
          },
          {
            type: "painter",
            x: 6,
            y: 3,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-9"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-10"
          },
          {
            type: "outlet",
            x: 1,
            y: 6,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-11"
          },
          {
            type: "outlet",
            x: 2,
            y: 6,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-12"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-13"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-14"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-15"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-16"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "bonus-vancouver",
    title: "Vancouver",
    playable: true,
    levels: [
      {
        id: "std-exhibitionStation",
        title: "Exhibition Station",
        number: 1,
        brief: "Bonus · Vancouver · 20/30 clés",
        family: "bonus-vancouver",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 37,
        optimalCells: 25,
        optimalSwitchCells: 12,
        wrenches: 20,
        objects: [
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 4,
            y: 1,
            id: "import-2"
          },
          {
            type: "station",
            x: 2,
            y: 2,
            facings: [
              "S"
            ],
            expects: [
              "blue",
              "purple"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-4"
          },
          {
            type: "station",
            x: 4,
            y: 2,
            facings: [
              "S"
            ],
            expects: [
              "orange",
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-6"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "S",
            trains: [
              "orange",
              "orange"
            ],
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-8"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "S",
            trains: [
              "purple",
              "purple"
            ],
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-10"
          },
          {
            type: "painter",
            x: 0,
            y: 6,
            color: "yellow",
            sides: [
              "E",
              "N"
            ],
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 3,
            y: 6,
            id: "import-12"
          },
          {
            type: "painter",
            x: 6,
            y: 6,
            color: "blue",
            sides: [
              "W",
              "N"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-transmogrify",
        title: "Transmogrify",
        number: 2,
        brief: "Bonus · Vancouver · 20/30 clés",
        family: "bonus-vancouver",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 32,
        optimalCells: 22,
        optimalSwitchCells: 10,
        wrenches: 20,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 4,
            y: 1,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 4,
            y: 2,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 4,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 4,
            y: 4,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 4,
            y: 5,
            id: "import-9"
          },
          {
            type: "painter",
            x: 5,
            y: 5,
            color: "orange",
            sides: [
              "S",
              "N"
            ],
            id: "import-10"
          },
          {
            type: "painter",
            x: 6,
            y: 5,
            color: "purple",
            sides: [
              "S",
              "N"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-magicCarpet",
        title: "Magic Carpet",
        number: 3,
        brief: "Bonus · Vancouver · 20/30 clés",
        family: "bonus-vancouver",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 39,
        optimalCells: 26,
        optimalSwitchCells: 13,
        wrenches: 20,
        objects: [
          {
            type: "outlet",
            x: 4,
            y: 1,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-3"
          },
          {
            type: "outlet",
            x: 5,
            y: 2,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 2,
            y: 3,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-6"
          },
          {
            type: "outlet",
            x: 4,
            y: 3,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 1,
            y: 4,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-9"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 1,
            y: 5,
            id: "import-11"
          },
          {
            type: "outlet",
            x: 2,
            y: 5,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-12"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W",
              "N"
            ],
            expects: [
              "red",
              "yellow",
              "blue",
              "green"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-dropOff",
        title: "Drop Off",
        number: 4,
        brief: "Bonus · Vancouver · 15/30 clés",
        family: "bonus-vancouver",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 34,
        optimalCells: 19,
        optimalSwitchCells: 15,
        wrenches: 15,
        objects: [
          {
            type: "station",
            x: 0,
            y: 2,
            facings: [
              "E"
            ],
            expects: [
              "red",
              "red",
              "red",
              "red"
            ],
            id: "import-0"
          },
          {
            type: "splitter",
            x: 1,
            y: 2,
            orientation: "V",
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 4,
            facings: [
              "E"
            ],
            expects: [
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "splitter",
            x: 1,
            y: 4,
            orientation: "V",
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-6"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-doppelganger",
        title: "Doppelganger",
        number: 5,
        brief: "Bonus · Vancouver · 20/30 clés",
        family: "bonus-vancouver",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 44,
        optimalCells: 26,
        optimalSwitchCells: 18,
        wrenches: 20,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 2,
            y: 2,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 4,
            y: 2,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 2,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 4,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 2,
            y: 4,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-9"
          },
          {
            type: "station",
            x: 4,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-10"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "bonus-whitehorse",
    title: "Whitehorse",
    playable: true,
    levels: [
      {
        id: "std-circleSquare",
        title: "Circle Square",
        number: 1,
        brief: "Bonus · Whitehorse · 25/30 clés",
        family: "bonus-whitehorse",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 36,
        optimalCells: 25,
        optimalSwitchCells: 11,
        wrenches: 25,
        objects: [
          {
            type: "outlet",
            x: 2,
            y: 2,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 4,
            y: 2,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "red",
              "yellow",
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "splitter",
            x: 3,
            y: 3,
            orientation: "H",
            id: "import-3"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "red",
              "yellow",
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 2,
            y: 4,
            facing: "W",
            trains: [
              "orange"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 4,
            y: 4,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-6"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-indusblue",
        title: "Indusblue",
        number: 2,
        brief: "Bonus · Whitehorse · 25/30 clés",
        family: "bonus-whitehorse",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 34,
        optimalCells: 23,
        optimalSwitchCells: 11,
        wrenches: 25,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "brown",
              "brown",
              "brown",
              "brown",
              "brown",
              "brown",
              "brown",
              "brown"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-bramblewoodLane",
        title: "Bramblewood Lane",
        number: 3,
        brief: "Bonus · Whitehorse · 30/30 clés",
        family: "bonus-whitehorse",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 36,
        optimalCells: 26,
        optimalSwitchCells: 10,
        wrenches: 30,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "yellow",
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 0,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-3"
          },
          {
            type: "painter",
            x: 5,
            y: 1,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-5"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "red",
              "red"
            ],
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-7"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-9"
          },
          {
            type: "painter",
            x: 5,
            y: 5,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-10"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "blue",
              "blue"
            ],
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 3,
            y: 6,
            id: "import-12"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-turing",
        title: "Turing",
        number: 4,
        brief: "Bonus · Whitehorse · 25/30 clés",
        family: "bonus-whitehorse",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 27,
        optimalCells: 17,
        optimalSwitchCells: 10,
        wrenches: 25,
        objects: [
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S",
              "W"
            ],
            expects: [
              "green",
              "green",
              "green"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 3,
            y: 2,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "splitter",
            x: 3,
            y: 3,
            orientation: "H",
            id: "import-3"
          },
          {
            type: "station",
            x: 3,
            y: 4,
            facings: [
              "N"
            ],
            expects: [
              "yellow",
              "yellow",
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "blue",
              "blue",
              "blue"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-focusPocus",
        title: "Focus Pocus",
        number: 5,
        brief: "Bonus · Whitehorse · 20/30 clés",
        family: "bonus-whitehorse",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 38,
        optimalCells: 27,
        optimalSwitchCells: 11,
        wrenches: 20,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 2,
            facing: "S",
            trains: [
              "red",
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "S",
            trains: [
              "blue",
              "red"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 5,
            y: 2,
            facing: "S",
            trains: [
              "blue",
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 1,
            y: 4,
            facings: [
              "N"
            ],
            expects: [
              "orange",
              "orange"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 3,
            y: 4,
            facings: [
              "N"
            ],
            expects: [
              "purple",
              "purple"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 5,
            y: 4,
            facings: [
              "N"
            ],
            expects: [
              "green",
              "green"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-british-columbia",
    title: "British Columbia",
    playable: true,
    levels: [
      {
        id: "std-greenLine",
        title: "Green Line",
        number: 1,
        brief: "Express · British Columbia · 1/30 clés",
        family: "express-british-columbia",
        width: 7,
        height: 7,
        railLimit: 6,
        optimalRails: 3,
        optimalCells: 3,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-theThree",
        title: "The Three",
        number: 2,
        brief: "Express · British Columbia · 1/30 clés",
        family: "express-british-columbia",
        width: 7,
        height: 7,
        railLimit: 24,
        optimalRails: 12,
        optimalCells: 10,
        optimalSwitchCells: 2,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 2,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 4,
            y: 1,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 2,
            y: 5,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 4,
            y: 5,
            facings: [
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-pureMagic",
        title: "Pure Magic",
        number: 3,
        brief: "Express · British Columbia · 1/30 clés",
        family: "express-british-columbia",
        width: 7,
        height: 7,
        railLimit: 20,
        optimalRails: 10,
        optimalCells: 9,
        optimalSwitchCells: 1,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-twoLiner",
        title: "Two Liner",
        number: 4,
        brief: "Express · British Columbia · 1/30 clés",
        family: "express-british-columbia",
        width: 7,
        height: 7,
        railLimit: 12,
        optimalRails: 6,
        optimalCells: 6,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "station",
            x: 3,
            y: 1,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 5,
            y: 3,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 3,
            y: 5,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-theLittleOne",
        title: "The Little One",
        number: 5,
        brief: "Express · British Columbia · 1/30 clés",
        family: "express-british-columbia",
        width: 7,
        height: 7,
        railLimit: 12,
        optimalRails: 6,
        optimalCells: 6,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 3,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-alberta",
    title: "Alberta",
    playable: true,
    levels: [
      {
        id: "std-aHardPlace",
        title: "A Hard Place",
        number: 1,
        brief: "Express · Alberta · 1/30 clés",
        family: "express-alberta",
        width: 7,
        height: 7,
        railLimit: 14,
        optimalRails: 7,
        optimalCells: 7,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-youDid",
        title: "You Did",
        number: 2,
        brief: "Express · Alberta · 1/30 clés",
        family: "express-alberta",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 27,
        optimalCells: 25,
        optimalSwitchCells: 2,
        wrenches: 1,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 0,
            y: 1,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 1,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 4,
            y: 1,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-6"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 1,
            y: 5,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 2,
            y: 5,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 4,
            y: 5,
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 5,
            y: 5,
            id: "import-13"
          },
          {
            type: "obstacle",
            x: 6,
            y: 5,
            id: "import-14"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-15"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-traveller",
        title: "Traveller",
        number: 3,
        brief: "Express · Alberta · 1/30 clés",
        family: "express-alberta",
        width: 7,
        height: 7,
        railLimit: 22,
        optimalRails: 11,
        optimalCells: 11,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 0,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 1,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 2,
            y: 5,
            id: "import-6"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W",
              "N"
            ],
            expects: [
              "blue"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-inTheMiddle",
        title: "In The Middle",
        number: 4,
        brief: "Express · Alberta · 1/30 clés",
        family: "express-alberta",
        width: 7,
        height: 7,
        railLimit: 26,
        optimalRails: 13,
        optimalCells: 11,
        optimalSwitchCells: 2,
        wrenches: 1,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 2,
            y: 2,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 4,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 5,
            y: 5,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-foray",
        title: "Foray",
        number: 5,
        brief: "Express · Alberta · 2/30 clés",
        family: "express-alberta",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 16,
        optimalSwitchCells: 2,
        wrenches: 2,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "yellow",
              "red",
              "blue",
              "green"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-noTouching",
        title: "No Touching",
        number: 6,
        brief: "Express · Alberta · 2/30 clés",
        family: "express-alberta",
        width: 7,
        height: 7,
        railLimit: 24,
        optimalRails: 12,
        optimalCells: 10,
        optimalSwitchCells: 2,
        wrenches: 2,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-twoForTwo",
        title: "Two For Two",
        number: 7,
        brief: "Express · Alberta · 1/30 clés",
        family: "express-alberta",
        width: 7,
        height: 7,
        railLimit: 30,
        optimalRails: 15,
        optimalCells: 15,
        optimalSwitchCells: 0,
        wrenches: 1,
        objects: [
          {
            type: "obstacle",
            x: 6,
            y: 0,
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 0,
            y: 1,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 6,
            y: 4,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 2,
            y: 5,
            id: "import-8"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "green",
              "green"
            ],
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 3,
            y: 6,
            id: "import-10"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "green",
              "green"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-saskatchewan",
    title: "Saskatchewan",
    playable: true,
    levels: [
      {
        id: "std-bluesy",
        title: "Bluesy",
        number: 1,
        brief: "Express · Saskatchewan · 2/30 clés",
        family: "express-saskatchewan",
        width: 7,
        height: 7,
        railLimit: 24,
        optimalRails: 12,
        optimalCells: 11,
        optimalSwitchCells: 1,
        wrenches: 2,
        objects: [
          {
            type: "station",
            x: 1,
            y: 1,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 5,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 5,
            facing: "N",
            trains: [
              "blue",
              "blue"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-lantern",
        title: "Lantern",
        number: 2,
        brief: "Express · Saskatchewan · 2/30 clés",
        family: "express-saskatchewan",
        width: 7,
        height: 7,
        railLimit: 14,
        optimalRails: 7,
        optimalCells: 6,
        optimalSwitchCells: 1,
        wrenches: 2,
        objects: [
          {
            type: "station",
            x: 3,
            y: 1,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "S",
            trains: [
              "orange",
              "green"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-boomBah",
        title: "Boom Bah",
        number: 3,
        brief: "Express · Saskatchewan · 3/30 clés",
        family: "express-saskatchewan",
        width: 7,
        height: 7,
        railLimit: 24,
        optimalRails: 12,
        optimalCells: 10,
        optimalSwitchCells: 2,
        wrenches: 3,
        objects: [
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "S",
            trains: [
              "yellow",
              "red"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "yellow",
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "N",
            trains: [
              "red",
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "red"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-redGreen",
        title: "Red Green",
        number: 4,
        brief: "Express · Saskatchewan · 3/30 clés",
        family: "express-saskatchewan",
        width: 7,
        height: 7,
        railLimit: 28,
        optimalRails: 14,
        optimalCells: 11,
        optimalSwitchCells: 3,
        wrenches: 3,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 2,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "red",
              "green",
              "green",
              "red"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-manitoba",
    title: "Manitoba",
    playable: true,
    levels: [
      {
        id: "std-yellowTriangle",
        title: "Yellow Triangle",
        number: 1,
        brief: "Express · Manitoba · 3/30 clés",
        family: "express-manitoba",
        width: 7,
        height: 7,
        railLimit: 22,
        optimalRails: 11,
        optimalCells: 9,
        optimalSwitchCells: 2,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 2,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-purpeller",
        title: "Purpeller",
        number: 2,
        brief: "Express · Manitoba · 3/30 clés",
        family: "express-manitoba",
        width: 7,
        height: 7,
        railLimit: 32,
        optimalRails: 16,
        optimalCells: 13,
        optimalSwitchCells: 3,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 5,
            y: 0,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 6,
            y: 0,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 6,
            y: 1,
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "W",
            trains: [
              "purple"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 0,
            y: 5,
            id: "import-5"
          },
          {
            type: "station",
            x: 6,
            y: 5,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 0,
            y: 6,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 1,
            y: 6,
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-reflection",
        title: "Reflection",
        number: 3,
        brief: "Express · Manitoba · 3/30 clés",
        family: "express-manitoba",
        width: 7,
        height: 7,
        railLimit: 44,
        optimalRails: 22,
        optimalCells: 16,
        optimalSwitchCells: 6,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S",
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N",
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-combinellow",
        title: "Combinellow",
        number: 4,
        brief: "Express · Manitoba · 3/30 clés",
        family: "express-manitoba",
        width: 7,
        height: 7,
        railLimit: 34,
        optimalRails: 17,
        optimalCells: 14,
        optimalSwitchCells: 3,
        wrenches: 3,
        objects: [
          {
            type: "obstacle",
            x: 0,
            y: 0,
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 0,
            y: 1,
            id: "import-2"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 0,
            y: 5,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 0,
            y: 6,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 1,
            y: 6,
            id: "import-8"
          },
          {
            type: "outlet",
            x: 2,
            y: 6,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 3,
            y: 6,
            id: "import-10"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 5,
            y: 6,
            id: "import-12"
          },
          {
            type: "obstacle",
            x: 6,
            y: 6,
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-colourize",
        title: "Colourize",
        number: 5,
        brief: "Express · Manitoba · 3/30 clés",
        family: "express-manitoba",
        width: 7,
        height: 7,
        railLimit: 30,
        optimalRails: 15,
        optimalCells: 14,
        optimalSwitchCells: 1,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W",
              "N"
            ],
            expects: [
              "purple"
            ],
            id: "import-2"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-weightedTop",
        title: "Weighted Top",
        number: 6,
        brief: "Express · Manitoba · 3/30 clés",
        family: "express-manitoba",
        width: 7,
        height: 7,
        railLimit: 34,
        optimalRails: 17,
        optimalCells: 13,
        optimalSwitchCells: 4,
        wrenches: 3,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 2,
            y: 3,
            facing: "W",
            trains: [
              "blue",
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-2"
          },
          {
            type: "outlet",
            x: 4,
            y: 3,
            facing: "E",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-ontario",
    title: "Ontario",
    playable: true,
    levels: [
      {
        id: "std-embrace",
        title: "Embrace",
        number: 1,
        brief: "Express · Ontario · 3/30 clés",
        family: "express-ontario",
        width: 7,
        height: 7,
        railLimit: 26,
        optimalRails: 13,
        optimalCells: 11,
        optimalSwitchCells: 2,
        wrenches: 3,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-peeGee",
        title: "Pee Gee",
        number: 2,
        brief: "Express · Ontario · 4/30 clés",
        family: "express-ontario",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 26,
        optimalCells: 20,
        optimalSwitchCells: 6,
        wrenches: 4,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 0,
            y: 2,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 4,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-6"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-autumn",
        title: "Autumn",
        number: 3,
        brief: "Express · Ontario · 4/30 clés",
        family: "express-ontario",
        width: 7,
        height: 7,
        railLimit: 34,
        optimalRails: 17,
        optimalCells: 11,
        optimalSwitchCells: 6,
        wrenches: 4,
        objects: [
          {
            type: "outlet",
            x: 2,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 2,
            y: 6,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-unscathed",
        title: "Unscathed",
        number: 4,
        brief: "Express · Ontario · 4/30 clés",
        family: "express-ontario",
        width: 7,
        height: 7,
        railLimit: 30,
        optimalRails: 15,
        optimalCells: 11,
        optimalSwitchCells: 4,
        wrenches: 4,
        objects: [
          {
            type: "station",
            x: 0,
            y: 1,
            facings: [
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-7"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-8"
          },
          {
            type: "station",
            x: 0,
            y: 5,
            facings: [
              "E"
            ],
            expects: [
              "blue"
            ],
            id: "import-9"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-challenger",
        title: "Challenger",
        number: 5,
        brief: "Express · Ontario · 5/30 clés",
        family: "express-ontario",
        width: 7,
        height: 7,
        railLimit: 28,
        optimalRails: 14,
        optimalCells: 11,
        optimalSwitchCells: 3,
        wrenches: 5,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "blue",
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-pleaseWait",
        title: "Please Wait",
        number: 6,
        brief: "Express · Ontario · 5/30 clés",
        family: "express-ontario",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 23,
        optimalSwitchCells: 5,
        wrenches: 5,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 4,
            y: 1,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 5,
            y: 2,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 5,
            y: 5,
            id: "import-8"
          },
          {
            type: "station",
            x: 4,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "purple"
            ],
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 5,
            y: 6,
            id: "import-10"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-quebec",
    title: "Quebec",
    playable: true,
    levels: [
      {
        id: "std-berlin",
        title: "Berlin",
        number: 1,
        brief: "Express · Quebec · 5/30 clés",
        family: "express-quebec",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 25,
        optimalCells: 21,
        optimalSwitchCells: 4,
        wrenches: 5,
        objects: [
          {
            type: "station",
            x: 1,
            y: 1,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 1,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 5,
            y: 1,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-8"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 3,
            y: 5,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-10"
          },
          {
            type: "outlet",
            x: 5,
            y: 5,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-golem",
        title: "Golem",
        number: 2,
        brief: "Express · Quebec · 5/30 clés",
        family: "express-quebec",
        width: 7,
        height: 7,
        railLimit: 40,
        optimalRails: 20,
        optimalCells: 16,
        optimalSwitchCells: 4,
        wrenches: 5,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 2,
            y: 3,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-2"
          },
          {
            type: "station",
            x: 4,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-sunburst",
        title: "Sunburst",
        number: 3,
        brief: "Express · Quebec · 5/30 clés",
        family: "express-quebec",
        width: 7,
        height: 7,
        railLimit: 40,
        optimalRails: 20,
        optimalCells: 13,
        optimalSwitchCells: 7,
        wrenches: 5,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 1,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S",
              "W",
              "N",
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 5,
            y: 3,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 3,
            y: 5,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-peaShooter",
        title: "Pea Shooter",
        number: 4,
        brief: "Express · Quebec · 6/30 clés",
        family: "express-quebec",
        width: 7,
        height: 7,
        railLimit: 28,
        optimalRails: 14,
        optimalCells: 11,
        optimalSwitchCells: 3,
        wrenches: 6,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 2,
            y: 3,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 3,
            y: 3,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "green",
              "green"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-scarab",
        title: "Scarab",
        number: 5,
        brief: "Express · Quebec · 6/30 clés",
        family: "express-quebec",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 21,
        optimalSwitchCells: 7,
        wrenches: 6,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 5,
            y: 3,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "orange"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "orange"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-new-brunswick",
    title: "New Brunswick",
    playable: true,
    levels: [
      {
        id: "std-prancing",
        title: "Prancing",
        number: 1,
        brief: "Express · New Brunswick · 6/30 clés",
        family: "express-new-brunswick",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 33,
        optimalCells: 25,
        optimalSwitchCells: 8,
        wrenches: 6,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 5,
            y: 1,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "W",
              "E"
            ],
            expects: [
              "purple",
              "green"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-6"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-boxSeven",
        title: "Box Seven",
        number: 2,
        brief: "Express · New Brunswick · 7/30 clés",
        family: "express-new-brunswick",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 14,
        optimalSwitchCells: 4,
        wrenches: 7,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "red",
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "E",
            trains: [
              "blue",
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 0,
            y: 2,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 1,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 2,
            y: 2,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 0,
            y: 4,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 1,
            y: 4,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-11"
          },
          {
            type: "station",
            x: 0,
            y: 5,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-12"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-sapling",
        title: "Sapling",
        number: 3,
        brief: "Express · New Brunswick · 7/30 clés",
        family: "express-new-brunswick",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 26,
        optimalCells: 18,
        optimalSwitchCells: 8,
        wrenches: 7,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "red",
              "blue",
              "red",
              "blue",
              "red",
              "blue"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-matchUp",
        title: "Match Up",
        number: 4,
        brief: "Express · New Brunswick · 8/30 clés",
        family: "express-new-brunswick",
        width: 7,
        height: 7,
        railLimit: 48,
        optimalRails: 24,
        optimalCells: 18,
        optimalSwitchCells: 6,
        wrenches: 8,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 3,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 4,
            y: 3,
            facing: "S",
            trains: [
              "red",
              "red"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "purple"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-beingGreen",
        title: "Being Green",
        number: 5,
        brief: "Express · New Brunswick · 7/30 clés",
        family: "express-new-brunswick",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 35,
        optimalCells: 25,
        optimalSwitchCells: 10,
        wrenches: 7,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 5,
            y: 1,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 1,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 5,
            y: 2,
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 0,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-9"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 1,
            y: 4,
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 5,
            y: 4,
            id: "import-12"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-13"
          },
          {
            type: "outlet",
            x: 1,
            y: 5,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-14"
          },
          {
            type: "station",
            x: 5,
            y: 5,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-15"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-casualty",
        title: "Casualty",
        number: 6,
        brief: "Express · New Brunswick · 8/30 clés",
        family: "express-new-brunswick",
        width: 7,
        height: 7,
        railLimit: 46,
        optimalRails: 23,
        optimalCells: 15,
        optimalSwitchCells: 8,
        wrenches: 8,
        objects: [
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "purple",
              "purple"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-prince-edward-island",
    title: "Prince Edward Island",
    playable: true,
    levels: [
      {
        id: "std-niner",
        title: "Niner",
        number: 1,
        brief: "Express · Prince Edward Island · 8/30 clés",
        family: "express-prince-edward-island",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 14,
        optimalSwitchCells: 4,
        wrenches: 8,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 2,
            y: 3,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-3"
          },
          {
            type: "painter",
            x: 4,
            y: 3,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 3,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-6"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-teamwork",
        title: "Teamwork",
        number: 2,
        brief: "Express · Prince Edward Island · 8/30 clés",
        family: "express-prince-edward-island",
        width: 7,
        height: 7,
        railLimit: 40,
        optimalRails: 20,
        optimalCells: 16,
        optimalSwitchCells: 4,
        wrenches: 8,
        objects: [
          {
            type: "painter",
            x: 3,
            y: 0,
            color: "purple",
            sides: [
              "W",
              "E"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 1,
            facings: [
              "W",
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 5,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 2,
            y: 6,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 6,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-returnPolicing",
        title: "Return Policing",
        number: 3,
        brief: "Express · Prince Edward Island · 8/30 clés",
        family: "express-prince-edward-island",
        width: 7,
        height: 7,
        railLimit: 30,
        optimalRails: 15,
        optimalCells: 11,
        optimalSwitchCells: 4,
        wrenches: 8,
        objects: [
          {
            type: "obstacle",
            x: 6,
            y: 0,
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 5,
            y: 1,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-2"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 1,
            y: 5,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 0,
            y: 6,
            id: "import-6"
          },
          {
            type: "station",
            x: 5,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "blue",
              "blue",
              "blue",
              "blue"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "red",
              "red",
              "red",
              "red"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-formatic",
        title: "Formatic",
        number: 4,
        brief: "Express · Prince Edward Island · 8/30 clés",
        family: "express-prince-edward-island",
        width: 7,
        height: 7,
        railLimit: 30,
        optimalRails: 15,
        optimalCells: 10,
        optimalSwitchCells: 5,
        wrenches: 8,
        objects: [
          {
            type: "painter",
            x: 2,
            y: 3,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 3,
            facing: "N",
            trains: [
              "red",
              "red",
              "red",
              "red"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 4,
            y: 3,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 4,
            facings: [
              "S",
              "W",
              "E"
            ],
            expects: [
              "green",
              "green"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-rainbowArrow",
        title: "Rainbow Arrow",
        number: 5,
        brief: "Express · Prince Edward Island · 9/30 clés",
        family: "express-prince-edward-island",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 16,
        optimalSwitchCells: 12,
        wrenches: 9,
        objects: [
          {
            type: "painter",
            x: 3,
            y: 1,
            color: "red",
            sides: [
              "W",
              "E"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 1,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 3,
            y: 2,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "purple",
              "purple",
              "purple",
              "purple"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 3,
            y: 4,
            color: "green",
            sides: [
              "W",
              "E"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-7"
          },
          {
            type: "painter",
            x: 3,
            y: 5,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-8"
          },
          {
            type: "station",
            x: 6,
            y: 5,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-9"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-nova-scotia",
    title: "Nova Scotia",
    playable: true,
    levels: [
      {
        id: "std-oneWay",
        title: "One Way",
        number: 1,
        brief: "Express · Nova Scotia · 8/30 clés",
        family: "express-nova-scotia",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 12,
        optimalSwitchCells: 6,
        wrenches: 8,
        objects: [
          {
            type: "outlet",
            x: 6,
            y: 1,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 2,
            y: 3,
            color: "red",
            sides: [
              "W",
              "E"
            ],
            id: "import-2"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 5,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-roundabout",
        title: "Roundabout",
        number: 2,
        brief: "Express · Nova Scotia · 9/30 clés",
        family: "express-nova-scotia",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 26,
        optimalCells: 21,
        optimalSwitchCells: 5,
        wrenches: 9,
        objects: [
          {
            type: "outlet",
            x: 3,
            y: 1,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "S"
            ],
            expects: [
              "green",
              "green",
              "purple",
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 5,
            y: 3,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 1,
            y: 5,
            id: "import-5"
          },
          {
            type: "outlet",
            x: 3,
            y: 5,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 0,
            y: 6,
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-chromaShift",
        title: "Chromashift",
        number: 3,
        brief: "Express · Nova Scotia · 9/30 clés",
        family: "express-nova-scotia",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 29,
        optimalCells: 22,
        optimalSwitchCells: 7,
        wrenches: 9,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 2,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 3,
            y: 2,
            color: "red",
            sides: [
              "W",
              "E"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 5,
            y: 2,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "W",
            trains: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 3,
            y: 3,
            facings: [
              "W",
              "E"
            ],
            expects: [
              "red",
              "red"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 5,
            y: 3,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 1,
            y: 4,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-6"
          },
          {
            type: "painter",
            x: 3,
            y: 4,
            color: "red",
            sides: [
              "W",
              "E"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 5,
            y: 4,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-balsam",
        title: "Balsam",
        number: 4,
        brief: "Express · Nova Scotia · 9/30 clés",
        family: "express-nova-scotia",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 12,
        optimalSwitchCells: 6,
        wrenches: 9,
        objects: [
          {
            type: "station",
            x: 3,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "purple",
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 3,
            y: 3,
            facing: "S",
            trains: [
              "red",
              "red",
              "red",
              "red",
              "blue",
              "blue",
              "blue",
              "blue"
            ],
            id: "import-1"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-boomerang",
        title: "Boomerang",
        number: 5,
        brief: "Express · Nova Scotia · 9/30 clés",
        family: "express-nova-scotia",
        width: 7,
        height: 7,
        railLimit: 36,
        optimalRails: 18,
        optimalCells: 12,
        optimalSwitchCells: 6,
        wrenches: 9,
        objects: [
          {
            type: "painter",
            x: 5,
            y: 0,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 5,
            y: 1,
            color: "green",
            sides: [
              "W",
              "E"
            ],
            id: "import-1"
          },
          {
            type: "painter",
            x: 5,
            y: 2,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "S",
            trains: [
              "red",
              "red",
              "red"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow",
              "green",
              "blue"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-newfoundland",
    title: "Newfoundland",
    playable: true,
    levels: [
      {
        id: "std-taxing",
        title: "Taxing",
        number: 1,
        brief: "Express · Newfoundland · 8/30 clés",
        family: "express-newfoundland",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 26,
        optimalCells: 20,
        optimalSwitchCells: 6,
        wrenches: 8,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S",
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 5,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N",
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-5"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-dousingTheFlame",
        title: "Dousing The Flame",
        number: 2,
        brief: "Express · Newfoundland · 9/30 clés",
        family: "express-newfoundland",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 19,
        optimalSwitchCells: 9,
        wrenches: 9,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 1,
            y: 0,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 2,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 4,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 5,
            y: 0,
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 1,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 5,
            y: 1,
            facing: "S",
            trains: [
              "red"
            ],
            id: "import-8"
          },
          {
            type: "painter",
            x: 3,
            y: 5,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-9"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-duplex",
        title: "Duplex",
        number: 3,
        brief: "Express · Newfoundland · 9/30 clés",
        family: "express-newfoundland",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 29,
        optimalCells: 18,
        optimalSwitchCells: 11,
        wrenches: 9,
        objects: [
          {
            type: "obstacle",
            x: 0,
            y: 0,
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 6,
            y: 0,
            id: "import-1"
          },
          {
            type: "outlet",
            x: 0,
            y: 1,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 1,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 0,
            y: 2,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 6,
            y: 3,
            id: "import-7"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 0,
            y: 5,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 6,
            y: 5,
            id: "import-11"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-12"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-pals",
        title: "Pals",
        number: 4,
        brief: "Express · Newfoundland · 9/30 clés",
        family: "express-newfoundland",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 31,
        optimalCells: 21,
        optimalSwitchCells: 10,
        wrenches: 9,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "green",
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "purple",
              "orange"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 1,
            y: 3,
            facing: "W",
            trains: [
              "yellow",
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 5,
            y: 3,
            facing: "E",
            trains: [
              "red",
              "red"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 3,
            y: 5,
            facing: "S",
            trains: [
              "blue",
              "blue"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-refresh",
        title: "Refresh",
        number: 5,
        brief: "Express · Newfoundland · 10/30 clés",
        family: "express-newfoundland",
        width: 7,
        height: 7,
        railLimit: 38,
        optimalRails: 19,
        optimalCells: 11,
        optimalSwitchCells: 8,
        wrenches: 10,
        objects: [
          {
            type: "station",
            x: 0,
            y: 2,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 3,
            y: 2,
            color: "red",
            sides: [
              "W",
              "E"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 0,
            y: 3,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 0,
            y: 4,
            facings: [
              "E"
            ],
            expects: [
              "purple"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 3,
            y: 4,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "W",
            trains: [
              "yellow"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-bonus-yukon",
    title: "Bonus: Yukon",
    playable: true,
    levels: [
      {
        id: "std-partnership",
        title: "Partnership",
        number: 1,
        brief: "Express · Bonus: Yukon · 8/30 clés",
        family: "express-bonus-yukon",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 30,
        optimalCells: 23,
        optimalSwitchCells: 7,
        wrenches: 8,
        objects: [
          {
            type: "station",
            x: 1,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 5,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "orange"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 1,
            y: 6,
            facing: "W",
            trains: [
              "blue",
              "blue",
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "E",
            trains: [
              "red",
              "red",
              "yellow"
            ],
            id: "import-4"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-reciprocate",
        title: "Reciprocate",
        number: 2,
        brief: "Express · Bonus: Yukon · 10/30 clés",
        family: "express-bonus-yukon",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 40,
        optimalCells: 24,
        optimalSwitchCells: 16,
        wrenches: 10,
        objects: [
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 1,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 5,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "N",
            trains: [
              "orange"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "purple"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "purple"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 1,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-8"
          },
          {
            type: "station",
            x: 5,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-9"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "S",
            trains: [
              "green"
            ],
            id: "import-10"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-impact",
        title: "Impact",
        number: 3,
        brief: "Express · Bonus: Yukon · 9/30 clés",
        family: "express-bonus-yukon",
        width: 7,
        height: 7,
        railLimit: 28,
        optimalRails: 14,
        optimalCells: 12,
        optimalSwitchCells: 2,
        wrenches: 9,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "purple",
              "purple",
              "purple",
              "purple"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "red",
              "red",
              "red",
              "red"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "blue",
              "blue",
              "blue",
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "purple",
              "purple",
              "purple",
              "purple"
            ],
            id: "import-3"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-moonbeams",
        title: "Moonbeams",
        number: 4,
        brief: "Express · Bonus: Yukon · 10/30 clés",
        family: "express-bonus-yukon",
        width: 7,
        height: 7,
        railLimit: 46,
        optimalRails: 23,
        optimalCells: 19,
        optimalSwitchCells: 4,
        wrenches: 10,
        objects: [
          {
            type: "painter",
            x: 2,
            y: 0,
            color: "green",
            sides: [
              "W",
              "E"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 4,
            y: 0,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 4,
            y: 1,
            id: "import-4"
          },
          {
            type: "outlet",
            x: 1,
            y: 4,
            facing: "S",
            trains: [
              "purple",
              "purple",
              "purple",
              "purple"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 5,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "green",
              "blue",
              "blue",
              "green"
            ],
            id: "import-6"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-sibilant",
        title: "Sibilant",
        number: 5,
        brief: "Express · Bonus: Yukon · 10/30 clés",
        family: "express-bonus-yukon",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 29,
        optimalCells: 20,
        optimalSwitchCells: 9,
        wrenches: 10,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 4,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 5,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 0,
            y: 2,
            facings: [
              "E"
            ],
            expects: [
              "green",
              "green"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 0,
            y: 4,
            facings: [
              "E"
            ],
            expects: [
              "green",
              "green"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 4,
            y: 6,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 6,
            y: 6,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-9"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-bonus-northwest-territories",
    title: "Bonus: Northwest Territories",
    playable: true,
    levels: [
      {
        id: "std-downUnder",
        title: "Down Under",
        number: 1,
        brief: "Express · Bonus: Northwest Territories · 10/30 clés",
        family: "express-bonus-northwest-territories",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 31,
        optimalCells: 20,
        optimalSwitchCells: 11,
        wrenches: 10,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 2,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 2,
            y: 2,
            facing: "N",
            trains: [
              "purple"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 4,
            y: 2,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 5,
            y: 2,
            facing: "N",
            trains: [
              "yellow"
            ],
            id: "import-4"
          },
          {
            type: "station",
            x: 1,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "station",
            x: 2,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-6"
          },
          {
            type: "station",
            x: 3,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "blue"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 4,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "purple"
            ],
            id: "import-8"
          },
          {
            type: "station",
            x: 5,
            y: 4,
            facings: [
              "S"
            ],
            expects: [
              "red"
            ],
            id: "import-9"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-snowracer",
        title: "Snowracer",
        number: 2,
        brief: "Express · Bonus: Northwest Territories · 5/30 clés",
        family: "express-bonus-northwest-territories",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 29,
        optimalCells: 24,
        optimalSwitchCells: 5,
        wrenches: 5,
        objects: [
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "red"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 1,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 4,
            y: 2,
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-7"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 2,
            y: 4,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 3,
            y: 4,
            id: "import-10"
          },
          {
            type: "outlet",
            x: 0,
            y: 5,
            facing: "E",
            trains: [
              "yellow"
            ],
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 4,
            y: 5,
            id: "import-12"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-rightOfPassage",
        title: "Right of Passage",
        number: 3,
        brief: "Express · Bonus: Northwest Territories · 9/30 clés",
        family: "express-bonus-northwest-territories",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 28,
        optimalCells: 19,
        optimalSwitchCells: 9,
        wrenches: 9,
        objects: [
          {
            type: "outlet",
            x: 1,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 2,
            y: 0,
            id: "import-1"
          },
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green",
              "purple"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 4,
            y: 0,
            id: "import-3"
          },
          {
            type: "outlet",
            x: 5,
            y: 0,
            facing: "S",
            trains: [
              "blue"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 3,
            y: 2,
            facing: "N",
            trains: [
              "green"
            ],
            id: "import-5"
          },
          {
            type: "outlet",
            x: 3,
            y: 4,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-7"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-lamport",
        title: "Lamport",
        number: 4,
        brief: "Express · Bonus: Northwest Territories · 10/30 clés",
        family: "express-bonus-northwest-territories",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 26,
        optimalCells: 20,
        optimalSwitchCells: 6,
        wrenches: 10,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 1,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 3,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 5,
            y: 0,
            facing: "S",
            trains: [
              "yellow"
            ],
            id: "import-3"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-5"
          },
          {
            type: "obstacle",
            x: 4,
            y: 1,
            id: "import-6"
          },
          {
            type: "obstacle",
            x: 1,
            y: 3,
            id: "import-7"
          },
          {
            type: "obstacle",
            x: 3,
            y: 3,
            id: "import-8"
          },
          {
            type: "obstacle",
            x: 5,
            y: 3,
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 2,
            y: 5,
            id: "import-10"
          },
          {
            type: "obstacle",
            x: 4,
            y: 5,
            id: "import-11"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-12"
          },
          {
            type: "outlet",
            x: 1,
            y: 6,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-13"
          },
          {
            type: "outlet",
            x: 3,
            y: 6,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-14"
          },
          {
            type: "outlet",
            x: 5,
            y: 6,
            facing: "N",
            trains: [
              "blue"
            ],
            id: "import-15"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "green"
            ],
            id: "import-16"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-midland",
        title: "Midland",
        number: 5,
        brief: "Express · Bonus: Northwest Territories · 10/30 clés",
        family: "express-bonus-northwest-territories",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 29,
        optimalCells: 17,
        optimalSwitchCells: 12,
        wrenches: 10,
        objects: [
          {
            type: "station",
            x: 2,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 4,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "outlet",
            x: 6,
            y: 2,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "yellow",
            sides: [
              "N",
              "S"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 6,
            y: 3,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-7"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "E",
            trains: [
              "red"
            ],
            id: "import-8"
          },
          {
            type: "outlet",
            x: 6,
            y: 4,
            facing: "W",
            trains: [
              "red"
            ],
            id: "import-9"
          },
          {
            type: "station",
            x: 2,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-10"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-11"
          },
          {
            type: "station",
            x: 4,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-12"
          }
        ],
        examplePaths: []
      }
    ]
  },
  {
    id: "express-bonus-nunavut",
    title: "Bonus: Nunavut",
    playable: true,
    levels: [
      {
        id: "std-entanglement",
        title: "Entanglement",
        number: 1,
        brief: "Express · Bonus: Nunavut · 11/30 clés",
        family: "express-bonus-nunavut",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 27,
        optimalCells: 20,
        optimalSwitchCells: 7,
        wrenches: 11,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "green"
            ],
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 1,
            y: 0,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 2,
            y: 0,
            id: "import-2"
          },
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "S"
            ],
            expects: [
              "orange"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 4,
            y: 0,
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 5,
            y: 0,
            id: "import-5"
          },
          {
            type: "outlet",
            x: 6,
            y: 0,
            facing: "S",
            trains: [
              "purple",
              "purple",
              "purple",
              "purple"
            ],
            id: "import-6"
          },
          {
            type: "painter",
            x: 0,
            y: 4,
            color: "blue",
            sides: [
              "S",
              "N"
            ],
            id: "import-7"
          },
          {
            type: "painter",
            x: 1,
            y: 5,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-8"
          },
          {
            type: "painter",
            x: 2,
            y: 6,
            color: "red",
            sides: [
              "W",
              "E"
            ],
            id: "import-9"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-dufferinGate",
        title: "Dufferin Gate",
        number: 2,
        brief: "Express · Bonus: Nunavut · 10/30 clés",
        family: "express-bonus-nunavut",
        width: 7,
        height: 7,
        railLimit: 44,
        optimalRails: 22,
        optimalCells: 17,
        optimalSwitchCells: 5,
        wrenches: 10,
        objects: [
          {
            type: "station",
            x: 0,
            y: 0,
            facings: [
              "E"
            ],
            expects: [
              "blue"
            ],
            id: "import-0"
          },
          {
            type: "painter",
            x: 3,
            y: 0,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-1"
          },
          {
            type: "station",
            x: 6,
            y: 0,
            facings: [
              "W"
            ],
            expects: [
              "yellow"
            ],
            id: "import-2"
          },
          {
            type: "painter",
            x: 3,
            y: 1,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-3"
          },
          {
            type: "painter",
            x: 3,
            y: 2,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-4"
          },
          {
            type: "outlet",
            x: 0,
            y: 3,
            facing: "E",
            trains: [
              "red",
              "red",
              "red",
              "red"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "blue",
            sides: [
              "W",
              "E"
            ],
            id: "import-6"
          },
          {
            type: "painter",
            x: 3,
            y: 4,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-7"
          },
          {
            type: "painter",
            x: 3,
            y: 5,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-8"
          },
          {
            type: "station",
            x: 0,
            y: 6,
            facings: [
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-9"
          },
          {
            type: "painter",
            x: 3,
            y: 6,
            color: "yellow",
            sides: [
              "W",
              "E"
            ],
            id: "import-10"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "W"
            ],
            expects: [
              "blue"
            ],
            id: "import-11"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-jumpingJoy",
        title: "Jumping Joy",
        number: 3,
        brief: "Express · Bonus: Nunavut · 8/30 clés",
        family: "express-bonus-nunavut",
        width: 7,
        height: 7,
        railLimit: 48,
        optimalRails: 24,
        optimalCells: 18,
        optimalSwitchCells: 6,
        wrenches: 8,
        objects: [
          {
            type: "station",
            x: 3,
            y: 0,
            facings: [
              "W",
              "E"
            ],
            expects: [
              "yellow"
            ],
            id: "import-0"
          },
          {
            type: "outlet",
            x: 2,
            y: 2,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-1"
          },
          {
            type: "outlet",
            x: 4,
            y: 2,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-2"
          },
          {
            type: "obstacle",
            x: 2,
            y: 3,
            id: "import-3"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "yellow",
            sides: [
              "S",
              "N"
            ],
            id: "import-4"
          },
          {
            type: "obstacle",
            x: 4,
            y: 3,
            id: "import-5"
          },
          {
            type: "outlet",
            x: 2,
            y: 4,
            facing: "W",
            trains: [
              "blue"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 4,
            y: 4,
            facing: "E",
            trains: [
              "blue"
            ],
            id: "import-7"
          },
          {
            type: "station",
            x: 3,
            y: 6,
            facings: [
              "W",
              "E"
            ],
            expects: [
              "green"
            ],
            id: "import-8"
          }
        ],
        examplePaths: []
      },
      {
        id: "std-sidewinder",
        title: "Sidewinder",
        number: 4,
        brief: "Express · Bonus: Nunavut · 10/30 clés",
        family: "express-bonus-nunavut",
        width: 7,
        height: 7,
        railLimit: 49,
        optimalRails: 37,
        optimalCells: 27,
        optimalSwitchCells: 10,
        wrenches: 10,
        objects: [
          {
            type: "obstacle",
            x: 2,
            y: 1,
            id: "import-0"
          },
          {
            type: "obstacle",
            x: 3,
            y: 1,
            id: "import-1"
          },
          {
            type: "obstacle",
            x: 4,
            y: 1,
            id: "import-2"
          },
          {
            type: "outlet",
            x: 0,
            y: 2,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-3"
          },
          {
            type: "obstacle",
            x: 3,
            y: 2,
            id: "import-4"
          },
          {
            type: "station",
            x: 6,
            y: 2,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-5"
          },
          {
            type: "painter",
            x: 3,
            y: 3,
            color: "yellow",
            sides: [
              "S",
              "W"
            ],
            id: "import-6"
          },
          {
            type: "outlet",
            x: 0,
            y: 4,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-7"
          },
          {
            type: "painter",
            x: 3,
            y: 4,
            color: "red",
            sides: [
              "N",
              "E"
            ],
            id: "import-8"
          },
          {
            type: "station",
            x: 6,
            y: 4,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-9"
          },
          {
            type: "obstacle",
            x: 3,
            y: 5,
            id: "import-10"
          },
          {
            type: "outlet",
            x: 0,
            y: 6,
            facing: "N",
            trains: [
              "red"
            ],
            id: "import-11"
          },
          {
            type: "obstacle",
            x: 3,
            y: 6,
            id: "import-12"
          },
          {
            type: "station",
            x: 6,
            y: 6,
            facings: [
              "N"
            ],
            expects: [
              "yellow"
            ],
            id: "import-13"
          }
        ],
        examplePaths: []
      }
    ]
  }
];
