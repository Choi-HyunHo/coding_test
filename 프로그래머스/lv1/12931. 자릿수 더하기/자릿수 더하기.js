function solution(n)
{
    var answer = [...String(n)].map(i => Number(i)).reduce((acc, cur) => {
        return acc + cur; 
    },0)

    return answer;
}