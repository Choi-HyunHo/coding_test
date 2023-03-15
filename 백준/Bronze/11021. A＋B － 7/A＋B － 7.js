const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
	let num = i;
	let point = input[i].split(" ");
	console.log(`Case #${num}:`, Number(point[0]) + Number(point[1]));
}