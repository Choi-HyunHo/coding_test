function solution(num_list, n) {
    const arr = num_list.splice(n).concat(num_list);
    return arr;
}