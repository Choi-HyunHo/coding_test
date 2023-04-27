function solution(arr, n) {
    var answer = [];
    
    if(arr.length % 2 === 1){
        for(let i = 0; i < arr.length; i++){
            if(i % 2 === 0){
                answer.push(arr[i] + n)
            } else {
                answer.push(arr[i])
            }
        }
    } else {
        for(let i = 0; i < arr.length; i++){
            if(i % 2 === 1){
                answer.push(arr[i] + n)
            } else {
                answer.push(arr[i])
            }
        }
    }
    
    return answer;
}


// function solution(arr, n) {
//   if (arr.length % 2 === 1) {
//     return arr.map((x, i) => ((i + 1) % 2 === 1 ? (x += n) : x));
//   }
//   return arr.map((x, i) => ((i + 1) % 2 === 0 ? (x += n) : x));
// }