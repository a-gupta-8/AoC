// import filestream(fs) and read text while splitting by new line
const fs = require("node:fs");
const lines = fs.readFileSync("./input.txt", "utf-8").trim().split("\n");

// Helper functions for getting first and last number in a string
function getFirstNumber(line) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] >= "0" && line[i] <= "9") {
      return line[i];
    }
  }
}
function getLastNumber(line) {
  for (let i = line.length - 1; i > -1; i--) {
    if (line[i] >= "0" && line[i] <= "9") {
      return line[i];
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
