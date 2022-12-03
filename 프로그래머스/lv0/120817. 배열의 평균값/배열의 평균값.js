function solution(numbers) {
    var answer = numbers.reduce((a, b) => a + b) / numbers.length;
    
    
    
    return answer;
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])