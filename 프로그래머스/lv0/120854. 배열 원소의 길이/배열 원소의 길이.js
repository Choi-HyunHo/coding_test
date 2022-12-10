function solution(strlist) {
    var answer = [];
    
    for(let i = 0; i < strlist.length; i++){
        answer.push(strlist[i].length)
    }
    
    return answer;
   
}

solution(["We", "are", "the", "world!"]);
solution(["I", "Love", "Programmers."]);