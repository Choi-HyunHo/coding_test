function solution(strArr) {
    var answer = strArr.map((i, index) => {return index % 2 === 0 ? strArr[index].toLowerCase() : strArr[index].toUpperCase()})
    
    return answer;
}