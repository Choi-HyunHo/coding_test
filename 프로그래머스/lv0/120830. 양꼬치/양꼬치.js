function solution(n, k) { 
    // 서비스 음료 계산
    let drink = Math.floor(n / 10);
    
    var answer = (n * 12000) + ((k - drink) * 2000);
    
    return answer;
}

solution(10, 3);
solution(64, 6);