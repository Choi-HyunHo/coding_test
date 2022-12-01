function solution(denum1, num1, denum2, num2) {
    var answer = [];
    
    let a = (denum1 * num2) + (denum2 * num1);
    let b = (num1 * num2);
    
    let max = 1;
    
    for(i = 0; i <= a; i++){
        if(a % i ===0 && b % i === 0){
            max = i;    
        }
    }
    
    answer = [a/max , b/max];
    
    return answer;
}

solution(1, 2, 3, 4);
solution(9, 2, 1, 3);