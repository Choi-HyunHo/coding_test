function solution(num_list) {
    var answer = 0;
    
    for(let i = 0; i < num_list.length; i++){
        for(let j = num_list[i]; j > 1; j /= 2){
            if (j % 2 == 0) {
                answer++;
            } else {
                j -= 1;
                answer++;
            }
        }
    }
    
    return answer;
}