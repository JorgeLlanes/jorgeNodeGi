//TODO: MEDIUM: Create a node application that will read all of the planets in the solar system from a text file and print them to the console.

const fs = require("fs");

const readMe = fs.readFileSync("planets.txt", "utf8");

console.log(readMe);
