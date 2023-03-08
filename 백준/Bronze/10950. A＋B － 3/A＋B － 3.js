const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
	let points = input[i].split(" ");
	console.log(Number(points[0]) + Number(points[1]));
}