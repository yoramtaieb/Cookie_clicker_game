export const buildings = [
  {
    name: "Cursor",
    cost: 15,
    cookiesPerSecond: 0.1,
    description: "Autoclicks once every 10 seconds.",
    upgrades: [
      {
        name: "Reinforced index finger",
        description:
          "The mouse and cursors are <b>twice</b> as efficient.<q>prod prod</q>",
        cost: 100,
        icon: [0, 0],
        "unlock-condition": 1,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Carpal tunnel prevention cream",
        description:
          "The mouse and cursors are <b>twice</b> as efficient.<q>it... it hurts to click...</q>",
        cost: 500,
        icon: [0, 1],
        "unlock-condition": 1,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Ambidextrous",
        description:
          "The mouse and cursors are <b>twice</b> as efficient.<q>Look ma, both hands!</q>",
        cost: 10000,
        icon: [0, 2],
        "unlock-condition": 10,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Thousand fingers",
        description:
          "The mouse and cursors gain <b>+0.1</b> cookies for each non-cursor object owned.<q>clickity</q>",
        cost: 100000,
        icon: [0, 13],
        "unlock-condition": 25,
        multiplier: 1,
        bonusForEachOtherBuildingOwned: 0.1,
      },
      {
        name: "Million fingers",
        description:
          "The mouse and cursors gain <b>+0.5</b> cookies for each non-cursor object owned.<q>clickityclickity</q>",
        cost: 10000000,
        icon: [0, 14],
        "unlock-condition": 50,
        multiplier: 1,
        bonusForEachOtherBuildingOwned: 0.5,
      },
      {
        name: "Billion fingers",
        description:
          "The mouse and cursors gain <b>+5</b> cookies for each non-cursor object owned.<q>clickityclickityclickity</q>",
        cost: 100000000,
        icon: [0, 15],
        "unlock-condition": 100,
        multiplier: 1,
        bonusForEachOtherBuildingOwned: 5,
      },
    ],
  },
  {
    name: "Grandma",
    cost: 100,
    cookiesPerSecond: 1,
    description: "A nice grandma to bake more cookies.",
    upgrades: [
      {
        name: "Forwards from grandma",
        description:
          "Grandmas are <b>twice</b> as efficient.<q>RE:RE:thought you'd get a kick out of this ;))</q>",
        cost: 1000,
        icon: [1, 0],
        "unlock-condition": 1,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Steel-plated rolling pins",
        description:
          "Grandmas are <b>twice</b> as efficient.<q>Just what you kneaded.</q>",
        cost: 5000,
        icon: [1, 1],
        "unlock-condition": 5,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Lubricated dentures",
        description: "Grandmas are <b>twice</b> as efficient.<q>squish</q>",
        cost: 50000,
        icon: [1, 2],
        "unlock-condition": 25,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Prune juice",
        description:
          "Grandmas are <b>twice</b> as efficient.<q>Gets me going.</q>",
        cost: 5000000,
        icon: [1, 13],
        "unlock-condition": 50,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Double-thick glasses",
        description:
          "Grandmas are <b>twice</b> as efficient.<q>Oh... so THAT's what I've been baking.</q>",
        cost: 500000000,
        icon: [1, 14],
        "unlock-condition": 100,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
    ],
  },
  {
    name: "Farm",
    cost: 1100,
    cookiesPerSecond: 8,
    description: "Grows cookie plants from cookie seeds.",
    upgrades: [
      {
        name: "Cheap hoes",
        description:
          "Farms are <b>twice</b> as efficient.<q>Rake in the dough!</q>",
        cost: 11000,
        icon: [2, 0],
        "unlock-condition": 1,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Fertilizer",
        description:
          "Farms are <b>twice</b> as efficient.<q>It's chocolate, I swear.</q>",
        cost: 55000,
        icon: [2, 1],
        "unlock-condition": 5,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Cookie trees",
        description:
          "Farms are <b>twice</b> as efficient.<q>A relative of the breadfruit.</q>",
        cost: 550000,
        icon: [2, 2],
        "unlock-condition": 25,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Genetically-modified cookies",
        description:
          "Farms are <b>twice</b> as efficient.<q>All-natural mutations.</q>",
        cost: 55000000,
        icon: [2, 13],
        "unlock-condition": 50,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Gingerbread scarecrows",
        description:
          "Farms are <b>twice</b> as efficient.<q>Staring at your crops with mischievous glee.</q>",
        cost: 5500000000,
        icon: [2, 14],
        "unlock-condition": 100,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
    ],
  },
  {
    name: "Mine",
    cost: 12000,
    cookiesPerSecond: 47,
    description: "Mines out cookie dough and chocolate chips.",
    upgrades: [
      {
        name: "Sugar gas",
        description:
          "Mines are <b>twice</b> as efficient.<q>A pink, volatile gas, found in the depths of some chocolate caves.</q>",
        cost: 120000,
        icon: [3, 0],
        "unlock-condition": 1,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Megadrill",
        description:
          "Mines are <b>twice</b> as efficient.<q>You're in deep.</q>",
        cost: 600000,
        icon: [3, 1],
        "unlock-condition": 5,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Ultradrill",
        description:
          "Mines are <b>twice</b> as efficient.<q>Finally caved in?</q>",
        cost: 6000000,
        icon: [3, 2],
        "unlock-condition": 25,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Ultimadrill",
        description:
          "Mines are <b>twice</b> as efficient.<q>Pierce the heavens, etc.</q>",
        cost: 600000000,
        icon: [3, 13],
        "unlock-condition": 50,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "H-bomb mining",
        description:
          "Mines are <b>twice</b> as efficient.<q>Questionable efficiency, but spectacular nonetheless.</q>",
        cost: 60000000000,
        icon: [3, 14],
        "unlock-condition": 100,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
    ],
  },
  {
    name: "Factory",
    cost: 130000,
    cookiesPerSecond: 260,
    description: "Produces large quantities of cookies.",
    upgrades: [
      {
        name: "Sturdier conveyor belts",
        description:
          "Factories are <b>twice</b> as efficient.<q>You're going places.</q>",
        cost: 1300000,
        icon: [4, 0],
        "unlock-condition": 1,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Child labor",
        description:
          "Factories are <b>twice</b> as efficient.<q>Cheaper, healthier workforce.</q>",
        cost: 6500000,
        icon: [4, 1],
        "unlock-condition": 5,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Sweatshop",
        description:
          "Factories are <b>twice</b> as efficient.<q>Slackers will be terminated.</q>",
        cost: 65000000,
        icon: [4, 2],
        "unlock-condition": 25,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Radium reactors",
        description:
          "Factories are <b>twice</b> as efficient.<q>Gives your cookies a healthy glow.</q>",
        cost: 6500000000,
        icon: [4, 13],
        "unlock-condition": 50,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
      {
        name: "Recombobulators",
        description:
          "Factories are <b>twice</b> as efficient.<q>A major part of cookie recombobulation.</q>",
        cost: 650000000000,
        icon: [4, 14],
        "unlock-condition": 100,
        multiplier: 2,
        bonusForEachOtherBuildingOwned: 0,
      },
    ],
  },
];
