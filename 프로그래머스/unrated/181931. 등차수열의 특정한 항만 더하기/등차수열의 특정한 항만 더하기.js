function solution(a, d, included) {
    var answer = [a];
    
    for(let i = 1; i < included.length; i++){
        answer[i] = answer[i-1] + d
    }
    
    
    return answer.reduce((acc, cur, index) => included[index] ? acc + cur : acc, 0);
}