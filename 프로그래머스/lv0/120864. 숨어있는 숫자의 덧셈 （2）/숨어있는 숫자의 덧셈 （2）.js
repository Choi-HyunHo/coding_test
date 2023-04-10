function solution(my_string) {
    let result = my_string.match(/\d+/g)
    
    return result ? result.map(num => Number(num)).reduce((a, c) => a + c, 0) : 0
}