// import filestream(fs) and read text while splitting by new line
const fs = require("node:fs");
const lines = fs.readFileSync("./input.txt", "utf-8").trim().split("\n");

// list of possible numbers
let numbers = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

// Helper functions for getting first and last number in a string
function getFirstNumber(line) {
  let currSubstring = "";
  for (let i = 0; i < line.length; i++) {
    if (line[i] >= "0" && line[i] <= "9") {
      return line[i];
    }
    currSubstring += line[i];
    for (const num in numbers) {
      if (currSubstring.includes(num)) {
        return numbers[num];
      }
    }
  }
}
function getLastNumber(line) {
  let currSubstring = "";
  for (let i = line.length - 1; i > -1; i--) {
    if (line[i] >= "0" && line[i] <= "9") {
      return line[i];
    }
    currSubstring = line[i] + currSubstring;
    for (const num in numbers) {
      if (currSubstring.includes(num)) {
        return numbers[num];
      }
    }
  }
}
total = 0;
lines.forEach((line) => {
  let first = getFirstNumber(line);
  let last = getLastNumber(line);
  concatNumber = first + last;
  total += parseInt(concatNumber);
});

console.log(total);
