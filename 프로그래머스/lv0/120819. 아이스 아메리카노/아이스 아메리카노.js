function solution(money) {
    var answer = [];
    
    let coffee = 5500
    
    if(money === coffee){
        answer.push(Math.floor(money / coffee), money-coffee);
    } else {
        answer.push(Math.floor(money / coffee), money-coffee*Math.floor(money / coffee));
    }
    
    return answer;
}

solution(5500);
solution(15000);