function solution(arr, k) {
    var answer = arr;
    
    if(k % 2 === 0){
        return answer.map((i) => i + k)
    }else{
        return answer.map((i) => i * k)
    }
}