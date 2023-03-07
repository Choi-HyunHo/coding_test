function solution(i, j, k) {
    var answer = ''
    
    for(let a = i; i <= j; i++){
        answer += i;
    }
    
    return answer.split('').filter(i => Number(i) === k).length;
}