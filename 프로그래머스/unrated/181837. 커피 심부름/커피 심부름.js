function solution(order) {
    var answer = [];
    
    order.forEach((value) => {
        if(value.includes('cafelatte')){
            answer.push(5000)
        } else {
            answer.push(4500)
        }
    })
    
    return answer.reduce((acc,cur) => { return acc += cur },0);
}