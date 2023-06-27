function solution(arr) {
    var answer = [...arr];
    let val = 1;
    
    while(val < arr.length){
        val *= 2;
    }
    
    
    for(let i = 0; i < val - arr.length; i++){
        answer.push(0);
    }
    
    return answer;
}

