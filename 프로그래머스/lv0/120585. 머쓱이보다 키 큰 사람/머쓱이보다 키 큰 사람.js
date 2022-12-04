function solution(array, height) {
    var answer = array.filter((i) => height < i);
    return answer.length;
}

solution([149, 180, 192, 170], 167);
solution([180, 120, 140], 190);