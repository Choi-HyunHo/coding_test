function solution(start, end) {
    var answer = [];
    
    for(let i = start; i <= start; i--){
        if(i >= end){
            answer = [...answer, i]        
        } else {
            break;
        }
    }
    
    return answer;
}