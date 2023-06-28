function solution(l, r) {
    let result = [];
    for (let num = l; num <= r; num++) {
        if (String(num).split("").every(digit => digit === "0" || digit === "5")) {
            result.push(num);
        }
    }
    
    if (result.length === 0) {
        result.push(-1);
    }
    
    return result;
}