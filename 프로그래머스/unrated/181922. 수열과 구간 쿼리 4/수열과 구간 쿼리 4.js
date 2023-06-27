function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const copyArr = [...acc]
        const [s, e, k] = cur
        return copyArr.map((i, index) => {
            if(index >= s && index <= e) {
                if(index % k === 0) return i + 1
            }
            return i
        })
    }, arr)
}