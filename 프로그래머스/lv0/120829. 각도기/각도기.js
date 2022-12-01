function solution(angle) {
    var answer;
    
    if(angle < 90){
        answer = 1;
    } else if(90 === angle){
        answer = 2;
    } else if(angle < 180){
        answer = 3;
    } else if(angle === 180) {
        answer = 4;
    }
    
    return answer;
}

solution(70);
solution(91);
solution(180);