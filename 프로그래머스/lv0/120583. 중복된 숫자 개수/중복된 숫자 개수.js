function solution(array, n) {
    var answer = array.filter((i) => i === n);
    return answer.length;
}

solution([1, 1, 2, 3, 4, 5], 1);
solution([0, 2, 3, 4], 1);