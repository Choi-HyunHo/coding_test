function solution(num_list, n) {
    var answer = [];
    
    for(let i = 0; i < num_list.length / n; i++){
        answer = [...answer, num_list.slice(n * i, n * i + n)]
    }
    
    return answer;
}