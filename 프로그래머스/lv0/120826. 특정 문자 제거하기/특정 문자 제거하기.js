function solution(my_string, letter) {
    var answer = my_string;
    
    let regexAll = new RegExp(letter, 'g');
    
    return answer.replace(regexAll, '');
}

solution('abcdef','f');
solution('BCBdbe','B');