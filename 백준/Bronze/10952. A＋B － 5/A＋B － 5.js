let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for(let i = 0; input.length - 1; i++){
  let numbers = input[i].split(' ').map(Number)
  if(numbers[0] === 0 && numbers[1] === 0){
    break;
  }else{
    console.log(numbers[0] + numbers[1])
  }
}
