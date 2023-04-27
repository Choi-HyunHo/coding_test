function solution(a, b) {
    var answer = 0;
    
    let prev = Number(String(a) + String(b));
    let next = Number(String(b) + String(a));
    
    if(prev > next){
        answer = prev
    } else {
        answer = next
    }
    
    return answer;
}