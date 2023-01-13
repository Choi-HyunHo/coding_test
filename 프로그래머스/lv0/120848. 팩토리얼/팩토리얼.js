function solution(n) {
    var answer = 0;
    
    // 제한사항의 최대 값이 10의 팩토리얼이기 때문에 10번 반복
    for(let i = 1 ; i <= 10; i++) {
        // n이 i의 팩토리얼보다 크다면 진행하여 최대 i를 구함
        if(n >= factorial(i)) {
            answer = i
            continue
        } else {
            break
        }
    }
    return answer;
}

function factorial(num){
    if(num > 1) {
        return num * factorial(num-1)
    }
    return num
}