function solution(strArr) {
    var answer = 0;
    let result = []
    
    strArr.forEach(item => {
        const len = item.length
        console.log(len)
        result[len] = result[len] ?? []
        result[len].push(item)
    })
    
    const values = Object.values(result).map(i => i.length)
    return Math.max(...values);
}