function solution(str_list, ex) {
    var answer = str_list.filter((i, index) => !str_list[index].includes(ex));
    return answer.join('');
}