var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = Number(input[0]);
console.log(a - 543)