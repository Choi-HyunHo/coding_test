function solution(num, k) {
    var answer = String(num).indexOf(k, 0) >= 0 ? String(num).indexOf(k)+1 : -1;
    return answer;
}