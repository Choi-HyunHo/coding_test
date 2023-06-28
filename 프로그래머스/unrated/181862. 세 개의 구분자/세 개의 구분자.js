function solution(myStr) {
    const result = myStr.split(/[a|b|c]/g).filter(i => i)
    return result.length ? result : ["EMPTY"];
}