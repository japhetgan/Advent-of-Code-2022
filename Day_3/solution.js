const fs = require("fs");

fs.readFile("./Day_3/input.txt", (err, data) => {
  const input = data
    .toString()
    .split(/\n/)
    .map((str) => str.trim());

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let ans1 = 0;
  let ans2 = 0;

  input.forEach((str) => {
    const slicePosition = str.length / 2;
    const str1Arr = str.substring(0, slicePosition).split("");
    const str2Arr = str.substring(slicePosition).split("");
    let itemType = "";

    str1Arr.forEach((letter1) => {
      str2Arr.forEach((letter2) => {
        if (letter1 === letter2) itemType = letter1;
      });
    });

    itemType === itemType.toUpperCase()
      ? (ans1 = ans1 + Number(alphabet.toUpperCase().search(itemType)) + 27)
      : (ans1 = ans1 + alphabet.search(itemType) + 1);
  });

  for (let x = 0; x < input.length; x += 3) {
    const str1Arr = input[x].split("");
    const str2Arr = input[x + 1].split("");
    const str3Arr = input[x + 2].split("");
    let itemType = "";

    str1Arr.forEach((letter1) => {
      if (str2Arr.includes(letter1) && str3Arr.includes(letter1))
        itemType = letter1;
    });

    itemType === itemType.toUpperCase()
      ? (ans2 = ans2 + Number(alphabet.toUpperCase().search(itemType)) + 27)
      : (ans2 = ans2 + alphabet.search(itemType) + 1);
  }

  console.log("Problem 1 Answer ", ans1);
  console.log("Problem 2 Answer ", ans2);
});
