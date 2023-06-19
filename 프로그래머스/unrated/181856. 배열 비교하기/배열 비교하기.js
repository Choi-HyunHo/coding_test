function solution(arr1, arr2) {
    const arrLen1 = arr1.length;
    const arrLen2 = arr2.length;
    if(arrLen1 !== arrLen2){
        return arrLen2 > arrLen1 ? -1 : 1;
    }
    
    const arrSum1 = arr1.reduce((acc , cur) => acc+cur, 0)
    const arrSum2 = arr2.reduce((acc , cur) => acc+cur, 0)
    if(arrSum1 === arrSum2){
        return 0;
    }    
    return arrSum1 > arrSum2 ? 1 : -1;
}