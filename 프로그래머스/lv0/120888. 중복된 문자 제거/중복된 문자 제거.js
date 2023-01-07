function solution(my_string) {
    var answer = [...my_string];
    const set = new Set(answer);
    const newArr = [...set];
    return newArr.join('');
}