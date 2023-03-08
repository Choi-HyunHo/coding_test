const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString()
const n = Number(input);
let sum = 0;

for (let i = 1; i <= n; i++) {
	sum = sum + i;
}
console.log(sum);