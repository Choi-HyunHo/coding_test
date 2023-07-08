function solution(my_string, queries) {
    var answer = [...my_string];
 
    queries.forEach(([s,e]) => {
        let result = answer.slice(s, e + 1)
        answer.splice(s, result.length, ...result.reverse())
    })
    return answer.join('');
}
