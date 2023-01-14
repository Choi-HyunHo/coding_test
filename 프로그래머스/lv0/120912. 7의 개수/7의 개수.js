function solution(array) {
    var answer = array.join('').split('').filter(i => i === '7').length;
    return answer;
}