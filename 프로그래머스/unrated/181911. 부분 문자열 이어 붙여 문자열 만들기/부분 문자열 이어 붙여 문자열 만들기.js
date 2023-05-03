function solution(my_strings, parts) {
    var answer= ''
    
    for(let i = 0; i < my_strings.length; i++){
        let str = my_strings[i]        
        answer += str.substring(parts[i][0], parts[i][1]+1)
    }

    return answer;
}