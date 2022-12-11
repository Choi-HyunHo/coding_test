function solution(dot) {
    var answer = 0;
    
    if(dot[0] >= 1 && dot[1] >= 1){
        answer = 1;
    } else if(dot[0] < 0 && dot[1] >= 1){
        answer = 2;
    } else if(dot[0] < 0 && dot[1] < 0){
        answer = 3;
    } else {
        answer = 4;
    }
        
    return answer;
}

solution([2, 4]);
solution([-7, 9]);