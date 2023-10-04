const fs = require("fs");

const solution = () => {
  fs.readFile("./Day_1/input.txt", (err, data) => {
    let ans1 = 0;
    let ans2 = [];
    const input = data
      .toString()
      .trim()
      .split(/\n\s/)
      .map((calorieGroup) => {
        return calorieGroup.split(/\r\n/);
      });
    const eachElfCalorieTotal = input.map((eachGroup) => {
      return eachGroup.reduce((acc, num) => {
        return acc + Number(num.trim());
      }, 0);
    });
    eachElfCalorieTotal
      .sort((a, b) => b - a)
      .forEach((sum, i) => {
        if (i <= 2) {
          ans2 = Number(ans2) + Number(sum);
        }
        if (sum > ans1) {
          ans1 = sum;
        }
      });

    console.log("Problem 1 Answer:", ans1);
    console.log("Problem 2 Answer:", ans2);
  });
};

solution();
