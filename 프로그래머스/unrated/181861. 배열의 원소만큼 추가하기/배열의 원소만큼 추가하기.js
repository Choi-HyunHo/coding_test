function solution(arr) {
    var answer = [];
    
    for(const value of arr){
        answer = answer.concat(Array(value).fill(value)) // Array(a).fill(a)를 사용하여 a의 크기만큼 a로 채워진 배열을 생성
    }
    
    
    return answer;
}