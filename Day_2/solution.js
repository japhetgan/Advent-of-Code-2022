const fs = require("fs");

fs.readFile("./Day_2/input.txt", (err, data) => {
  let totalScore = 0;

  const play = {
    X: 1,
    Y: 2,
    Z: 3,
    AX: 0,
    AY: "Y",
    AZ: "A",
    BX: "B",
    BY: 0,
    BZ: "Z",
    CX: "X",
    CY: "C",
    CZ: 0,
  };

  const input = data
    .toString()
    .split(/\n/)
    .map((pair) => pair.trim());

  const points = input.map((pair) => {
    let pickPoint = 0;
    let winPoint = 0;

    const pairArr = pair.split(" ");
    const [opponent, yours] = pairArr;
    const winningPlay = play[pairArr.join("")];

    switch (winningPlay) {
      case 0:
        pickPoint = play[yours];
        winPoint = 3;
        break;
      case "X":
        pickPoint = 1;
        winPoint = 6;
        break;
      case "Y":
        pickPoint = 2;
        winPoint = 6;
        break;
      case "Z":
        pickPoint = 3;
        winPoint = 6;
        break;
      default:
        pickPoint = play[yours];
    }
    totalScore = totalScore + winPoint + pickPoint;
  });
  console.log("Problem 1 Answer ", totalScore);
});

fs.readFile("./Day_2/input.txt", (err, data) => {
  let totalScore = 0;

  const play = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  const input = data
    .toString()
    .split(/\n/)
    .map((pair) => pair.trim());

  const points = input.map((pair) => {
    let pickPoint = 0;
    let winPoint = 0;

    const pairArr = pair.split(" ");
    const [opponent, determinator] = pairArr;
    const winningPlay = play[pairArr.join("")];

    switch (determinator) {
      case "X":
        opponent === "A"
          ? (pickPoint = play.Z)
          : opponent === "B"
          ? (pickPoint = play.X)
          : (pickPoint = play.Y);
        winPoint = 0;
        break;
      case "Y":
        opponent === "A"
          ? (pickPoint = play.X)
          : opponent === "B"
          ? (pickPoint = play.Y)
          : (pickPoint = play.Z);
        winPoint = 3;
        break;
      case "Z":
        opponent === "A"
          ? (pickPoint = play.Y)
          : opponent === "B"
          ? (pickPoint = play.Z)
          : (pickPoint = play.X);
        winPoint = 6;
        break;
    }
    totalScore = totalScore + winPoint + pickPoint;
  });
  console.log("Problem 2 Answer ", totalScore);
});
