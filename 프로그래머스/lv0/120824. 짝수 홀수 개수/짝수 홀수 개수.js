function solution(num_list) { 
    let a = num_list.filter((i) => i % 2 === 0).length;
    let b = num_list.filter((i) => i % 2 === 1).length;
    var answer = [a, b];
    
    return answer;
}

solution([1, 2, 3, 4, 5]);
solution([1, 3, 5, 7]);