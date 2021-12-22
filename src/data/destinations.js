const destinations = [
  {
    name: "Mars",
    visited: 125435823,
    background: require("../assets/planets/mars.jpg"),
    themeColor: "red",
    page: "/destinations/003",
    attractions: [
      {
        name: "Colony A1",
      },
      {
        name: "Eden",
      },
      {
        name: "Colony B7",
      },
      {
        name: "Red Beijing",
      },
      {
        name: "Colony V3X",
      },
      {
        name: "Red Abuja",
      },
      {
        name: "Red Paris",
      },
      {
        name: "Red London",
      },
      {
        name: "Aeris",
      },
    ],
  },
  {
    name: "The Moon",
    visited: 292415886,
    background: require("../assets/planets/moon.jpg"),
    themeColor: "grey",
    page: "/destinations/001",
    attractions: [
      {
        name: "Palestone S.S.C",
      },
      {
        name: "Resilience",
      },
      {
        name: "Lunaria",
      },
      {
        name: "Azurfa",
      },
    ],
  },
  {
    name: "Europa",
    visited: 92435824,
    background: require("../assets/planets/planet.jpg"),
    themeColor: "brown",
    page: "/destinations/004",
    attractions: [
      {
        name: "Astris",
      },
      {
        name: "Silver Mountain",
      },
      {
        name: "Karison",
      },
      {
        name: "Green Arabia",
      },
    ],
  },
  {
    name: "Venus",
    visited: 80435823,
    background: require("../assets/planets/venus.jpg"),
    themeColor: "brown",
    page: "/destinations/005",
    attractions: [
      {
        name: "Bluestreak",
      },
      {
        name: "Excellence City",
      },
      {
        name: "Colony 78",
      },
      {
        name: "Greenwood",
      },
    ],
  },
  {
    name: "Earth",
    visited: 200352190,
    background: require("../assets/planets/earth-2.jpg"),
    themeColor: "green",
    page: "/destinations/002",
    attractions: [
      {
        name: "New York",
      },
      {
        name: "London",
      },
      {
        name: "Shanghai",
      },
      {
        name: "New Delhi",
      },
    ],
  },
  {
    name: "Sango",
    visited: 100767891,
    background: require("../assets/planets/sango.jpg"),
    themeColor: "blue",
    page: "/destinations/006",
    attractions: [
      {
        name: "Thunderstone",
      },
      {
        name: "Saltwater District",
      },
    ],
  },
  {
    name: "Jupiter",
    visited: 40133211,
    background: require("../assets/planets/jupiter.jpg"),
    themeColor: "blue",
    page: "/destinations/007",
    attractions: [
      {
        name: "Havannah City",
      },
      {
        name: "Orizon",
      },
    ],
  },
  {
    name: "Hela",
    visited: 137492025,
    background: require("../assets/planets/hela.jpg"),
    themeColor: "pink",
    page: "/destinations/008",
    attractions: [
      {
        name: "Adan Redas",
      },
      {
        name: "New Washington",
      },
    ],
  },
];

export const popular = destinations.sort((a, b) => {
  return b.visited - a.visited;
});

export default destinations;
