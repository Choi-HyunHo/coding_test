const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let arr = []


rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    arr = str.split('')
    
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    
});