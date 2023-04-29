function solution(my_string, index_list) {
    var answer = [];
    let value = [];
    
    let arr = my_string.split('')
    
    for(let i = 0; i < index_list.length; i++){
          answer = index_list[i]
          value.push(arr[answer])   
    }
    
    return value.join('');
}