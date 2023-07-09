function solution(n) {
    var answer = String(n).split('').map((i) => Number(i)).sort((a,b) => b - a).join('')
    
    return Number(answer);
}