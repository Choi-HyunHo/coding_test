function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++){
        const [a, b] = queries[i]
        
        for(let j = a; j <= b; j++){
            arr[j] += 1
        }
    }
    
    return arr;
}