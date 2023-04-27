function solution(num_list) {
    var answer = 0;
    let arr = num_list;
    let odd = [];  // 홀수 
    let even = []; // 짝수
    
    
    for(let i = 0; i < arr.length; i++){
        if(num_list[i] % 2 === 1){
            odd.push(num_list[i])
        } else {
            even.push(num_list[i])
        }
    }
    
    answer = Number(odd.join('')) + Number(even.join(''))
    
    return answer;
}