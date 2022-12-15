function solution(price) {
    var answer = 0;
    
    if(300000 > price && price >= 100000){
        return parseInt(answer = price - (price * 0.05));
    } else if(price < 500000 && price >= 300000){
        return parseInt(answer = price - (price * 0.1));
    } else if(price >= 500000){
        return parseInt(answer = price - (price * 0.2));
    } else {
        return price;
    }
}

solution(150000);
solution(580000);