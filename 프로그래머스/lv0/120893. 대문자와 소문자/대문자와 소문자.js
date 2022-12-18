function solution(my_string) {
    var answer = [...my_string];
    let arr = [];
    
    for(let i = 0; i < answer.length; i++){
        if(answer[i] === answer[i].toUpperCase()){
            arr.push(answer[i].toLowerCase());
        } else {
            arr.push(answer[i].toUpperCase());
        }
    }
    return arr.join('');
}