function solution(myString, pat) {
    return [...myString].reduce((acc,cur,idx) => {
        const val = myString.slice(idx, pat.length + idx)
        console.log(val)
        if(val === pat) return acc + 1
        return acc
    },0)
}