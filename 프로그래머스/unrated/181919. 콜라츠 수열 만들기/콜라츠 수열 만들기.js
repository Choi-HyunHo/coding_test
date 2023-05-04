function solution(n) {
    var answer = [];
    let value = n;
    
    while(value !== 1){
        answer.push(value)
        if(value % 2 === 0){
            value = value / 2
        } else {
            value = 3 * value + 1
        }
    }
    
    answer.push(1)
    
    return answer;
}