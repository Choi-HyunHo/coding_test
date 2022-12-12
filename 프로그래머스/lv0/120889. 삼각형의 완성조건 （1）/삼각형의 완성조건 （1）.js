function solution(sides) {
    var answer = sides.sort((a,b) => b - a);
    
    if(answer[0] >= answer[1] + answer[2]){
        return 2;
    } else {
        return 1;
    }
    
    return answer;
}

solution([1, 2, 3]);
solution([3, 6, 2]);
solution([199, 72, 222]);