function solution(arr, intervals) {
    var answer = [];
    
    for(let i = 0; i < intervals.length; i++){
        const [start, end] = intervals[i];
        answer.push(...arr.slice(start, end+1))
    }
    
    return answer;
}