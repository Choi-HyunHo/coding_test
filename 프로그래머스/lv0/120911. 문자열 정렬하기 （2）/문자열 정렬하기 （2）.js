function solution(my_string) {
    var answer = [...my_string.toLowerCase()].sort((a,b) => {
        if(a > b){
            return 1;
        } else if(a < b) {
            return -1;
        } else return 0;
    }).join('')
    return answer
}