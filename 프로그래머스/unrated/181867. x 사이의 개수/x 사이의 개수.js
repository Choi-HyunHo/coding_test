function solution(myString) {
    var answer = myString.split('x');
    let result = [];
    
    for(let i = 0; i < answer.length; i++){
        result = [...result, answer[i].length]
    }
    
    return result;
}