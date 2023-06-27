function solution(q, r, code) {
    var answer = [...code]
    
    return answer.filter((i, idx) => idx % q === r).join('');
}