const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
const abc = N / 4;
const a = "long ";

console.log(`${a.repeat(abc)}int`);
