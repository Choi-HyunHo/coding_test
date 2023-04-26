function solution(my_string) {
    let answer = my_string.split(" ")
    let operator = "+";
    let zero = 0
    
    answer.forEach((i, index) => {
        if(isNaN(Number(answer[index]))){
            operator = answer[index]
        } else {
            operator == "+" ? zero += parseInt(answer[index]) : zero -= parseInt(answer[index]);    
        }
        
    })

    return Number(zero)
};
                  