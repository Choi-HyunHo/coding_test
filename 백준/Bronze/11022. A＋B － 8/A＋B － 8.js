let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0])

let result = '';

for(let i = 1; i <= a; i++){
  let data = input[i].split(' ');
  let b = Number(data[0]);
  let c = Number(data[1]);
  result += `Case #${i}: ${b} + ${c} = `  + (b + c) + '\n'
}

console.log(result)