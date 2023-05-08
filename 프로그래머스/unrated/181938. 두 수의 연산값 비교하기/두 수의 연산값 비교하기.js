function solution(a, b) {
    var answer = 2*a*b > Number(String(a) + String(b)) ? 2*a*b : Number(String(a) + String(b)) 
    
    return answer;
}