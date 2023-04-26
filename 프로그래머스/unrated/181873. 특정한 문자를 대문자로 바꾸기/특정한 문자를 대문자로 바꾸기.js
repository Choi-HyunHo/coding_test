function solution(my_string, alp) {
    var answer = my_string;
    return answer.replaceAll(alp, alp.toUpperCase());
}