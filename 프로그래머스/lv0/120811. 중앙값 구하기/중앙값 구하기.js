function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

solution([1, 2, 3, 4, 5]);
solution([9, -1, 0]);