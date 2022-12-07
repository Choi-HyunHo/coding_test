function solution(n) {
    var answer = n % 7 === 0 ? n / 7 : Math.floor(n / 7) + 1;
    
    return answer;
}

solution(7);
solution(1);
solution(15);