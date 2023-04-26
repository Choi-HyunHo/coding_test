function solution(num_str) {
    var answer = [...num_str].map((i) => Number(i)).reduce((acc, cur) => acc + cur)
    return answer;
}