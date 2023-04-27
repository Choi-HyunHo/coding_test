function solution(my_string, overwrite_string, s) {    
    let arr = my_string.split('')
    let over = overwrite_string.split('')
    
    for(let i = 0; i < over.length; i++){
        arr[i+s] = over[i]
    }

    return arr.join('');
}