function solution(numbers) {
    var answer = numbers.sort((a,b) => b - a);
    
    let max = answer[0] * answer[1];
    
    return max;
}

solution([1, 2, 3, 4, 5]);
solution([0, 31, 24, 10, 1, 9]);