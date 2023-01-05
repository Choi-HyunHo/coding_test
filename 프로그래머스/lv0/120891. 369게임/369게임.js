function solution(order) {
    var answer = Array.from(String(order));
    let result = [];
    
    for(let i = 0; i < answer.length; i++){
        if(answer[i] % 3 === 0 && answer[i] != 0){
            result.push(i);
        }
    }
    
    return result.length;
}