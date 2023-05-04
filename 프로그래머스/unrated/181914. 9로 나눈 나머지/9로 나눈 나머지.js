function solution(number) {
    const arr = number.split('').map((i) => Number(i)).reduce((acc, cur) => acc + cur,0)
    
    return arr % 9;
}