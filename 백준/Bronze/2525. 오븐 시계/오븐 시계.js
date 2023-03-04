const fs = require('fs')
const input =fs.readFileSync('/dev/stdin').toString().split("\n");
const A = parseInt(input[0].split(' ')[0]);
const B = parseInt(input[0].split(' ')[1]);
const C = parseInt(input[1]);

const Hour = parseInt((A*60 + B + C)/ 60) ;
const Minute = parseInt((A*60 + B + C)% 60);

console.log(Hour >= 24 ? Hour - 24 : Hour, Minute)