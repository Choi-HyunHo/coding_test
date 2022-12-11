function solution(numbers, num1, num2) {
    var answer = numbers;
    return answer.slice(num1, num2+1);
}

solution([1, 2, 3, 4, 5],1,3);
solution([1, 3, 5],1,2);