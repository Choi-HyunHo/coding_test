function solution(arr, queries) {
    let result = [];
    
    for(let i = 0; i < queries.length; i++){
        const [a, b, c] = queries[i];
        
        result.push(arr.slice(a, b+1).filter(i => i > c).sort((a,b) => a - b)[0] ? arr.slice(a, b+1).filter(i => i > c).sort((a,b) => a - b)[0] : -1)
    }
    
    return result;
}