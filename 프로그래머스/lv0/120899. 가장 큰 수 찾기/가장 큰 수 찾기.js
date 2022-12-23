function solution(array) {
    let a = Math.max(...array);
    let b = array.indexOf(a)
    var answer = [a, b];

    return answer;
}