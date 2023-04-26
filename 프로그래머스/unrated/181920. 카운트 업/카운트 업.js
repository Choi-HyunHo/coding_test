function solution(start, end) {
    var answer = [];
    
    for(let i = start; i <= end; i++){
        if(i <= end){
            answer = [...answer, i]
        }
    }
    
    return answer;
}