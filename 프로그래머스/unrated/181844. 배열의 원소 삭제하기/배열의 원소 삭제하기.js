function solution(arr, delete_list) {
    const answer = arr.filter((i, index) => !delete_list.includes(i))

    return answer;
}