function solution(num1, num2) {
    var answer = (num1 / num2) * 1000;
    return Math.trunc(answer);
}

solution(3, 2);
solution(7, 3);
solution(1, 16);