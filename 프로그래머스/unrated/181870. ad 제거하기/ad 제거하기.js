function solution(strArr) {
    var answer = strArr.filter((i, index) => !i.includes('ad'))
    
    return answer;
}