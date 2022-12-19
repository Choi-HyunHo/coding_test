function solution(my_string) {
    var answer = [...my_string.replace(/[^0-9]/g, '')].map((i) => Number(i)).sort((a,b) => a - b);
    return answer;
}