const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const X = Number(input[0]);
const N = Number(input[1]);
let sum = 0;

for (let i = 2; i <= N + 1; i++) {
	let arr = input[i].split(" ").map((item) => Number(item));
	sum = sum + arr[0] * arr[1];
}

console.log(sum === X ? "Yes" : "No");