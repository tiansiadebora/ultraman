const ultramantObj = {
  name: "tiga",
  height: 100,
  isDead: false,
  address: {
    planet: {
      name: "namex",
      moon: [88390, 23456],
    },
    galaxy: "andromeda 12",
  },
  weapons: ["sword", "shield", "lasso"],
  blip: true,
  attack: () => {
    console.log("sword attack!");
  },
  beam: (number) => console.log("spacium ray beam " + number + "%"),
};
