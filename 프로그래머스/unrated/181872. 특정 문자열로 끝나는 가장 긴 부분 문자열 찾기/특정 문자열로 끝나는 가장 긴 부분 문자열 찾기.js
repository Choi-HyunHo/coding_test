function solution(myString, pat) {
    let result = [];
    
    myString.split('').forEach((val, index) => {
        let resultArr = myString.slice(0, index + 1)
        if(resultArr.endsWith(pat)){
            result.push(resultArr)
        }
    })
    
    return result.sort((a,b) => b.length - a.length )[0];
}