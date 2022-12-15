function solution(n) {
    var answer = String(n).split('').map((i) => Number(i)).reduce((sum, value) => sum + value) ;
    
    return answer;
}
