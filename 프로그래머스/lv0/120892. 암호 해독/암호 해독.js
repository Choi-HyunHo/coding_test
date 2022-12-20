function solution(cipher, code) {
    let arr = [];
    var answer = [...cipher];
    
    for(let i = code; i <= answer.length; i++){
        if(i % code === 0){
            arr.push(answer[i-1]);
        }
    }
    
    
    return arr.join('');
}