function solution(my_string) {
    var answer = Array.from(my_string.replace(/[^0-9]/g,''));
    return answer.map((i) => Number(i)).reduce((i ,val) => i + val);
}