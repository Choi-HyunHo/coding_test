function solution(num_list) {
    var answer = num_list.reduce((acc, cur) => (acc*cur))
    var value = Math.pow(num_list.reduce((acc, cur) => acc+cur),2)
    
    let result = answer < value ? 1 : 0;
    
    
    return result;
}