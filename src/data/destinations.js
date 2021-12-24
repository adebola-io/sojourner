const destinations = [
  {
    id: 3,
    name: "Mars",
    smallInfo:
      "Mars is the seventh largest in our solar system and the Earth's smaller, colder neighbour. It contains the largest extra-terrestrial human population, with engineered valleys and beautiful sceneries. ",
    visited: 125435823,
    background: require("../assets/planets/mars-3.jpg"),
    themeColor: "red",
    page: "/destinations/3",
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
    id: 1,
    name: "Luna",
    smallInfo:
      "Luna, formally known as the Moon, is the Earth's only natural satellite, and the fifth largest in the Solar system, containing the second largest population of humans outside Earth.",
    visited: 292415886,
    background: require("../assets/planets/moon.jpg"),
    themeColor: "grey",
    page: "/destinations/1",
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
    id: 4,
    name: "Europa",
    visited: 92435824,
    background: require("../assets/planets/planet.jpg"),
    themeColor: "brown",
    page: "/destinations/4",
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
    id: 5,
    name: "Venus",
    visited: 80435823,
    background: require("../assets/planets/venus.jpg"),
    themeColor: "brown",
    page: "/destinations/5",
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
    id: 2,
    name: "Earth",
    smallInfo:
      "Earth is the third planet from the Sun, and for millions of years, was the only planet capable of inhabiting human life. It is the home of humanity, and the birthplace of the galaxy's most colorful cultures.",
    visited: 2352190,
    background: require("../assets/planets/earth-2.jpg"),
    themeColor: "green",
    page: "/destinations/2",
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
    id: 6,
    name: "Sango",
    visited: 1767891,
    background: require("../assets/planets/sango.jpg"),
    themeColor: "blue",
    page: "/destinations/6",
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
    id: 7,
    name: "Jupiter",
    visited: 40133211,
    background: require("../assets/planets/jupiter.jpg"),
    themeColor: "blue",
    page: "/destinations/7",
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
    id: 8,
    name: "Hela",
    visited: 137492025,
    background: require("../assets/planets/hela.jpg"),
    themeColor: "pink",
    page: "/destinations/8",
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
