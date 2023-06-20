function solution(myString) {
    var answer = myString.split('x').filter(i => i !== '').sort()
    return answer;
}