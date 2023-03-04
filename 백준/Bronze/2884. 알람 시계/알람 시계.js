const fs = require('fs')
const input =fs.readFileSync('/dev/stdin').toString().trim().split(" ");
const H = Number(input[0]);
const M = Number(input[1]);

if (M > 44){
    console.log(H, M - 45)
} else if(M < 45 && H > 0) {
    console.log(H - 1 ,M + 15)
} else {
    console.log(23, M + 15)
}