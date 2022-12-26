function solution(age) {
    const arr = String(age).split(""); // ['2','3']
    const a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    
    var answer = [];
    let index;
    
    for(let i = 0; i < arr.length; i++){
        index = Number(arr[i]);
        answer += a[index];
    }
    
    return answer;
}