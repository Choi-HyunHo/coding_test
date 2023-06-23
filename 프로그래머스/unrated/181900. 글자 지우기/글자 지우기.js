function solution(my_string, indices) {
    return [...my_string].map((i,index) => indices.includes(index) ? 0 : i).filter(j => j !== 0).join('')
}