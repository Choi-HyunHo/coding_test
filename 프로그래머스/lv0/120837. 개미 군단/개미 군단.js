function solution(hp) {
   // 값을 반환할 변수 생성
    let result = 0
    
    // while을 통해 hp가 0이 될때까지 반복
    while(hp) {
    	// hp가 5이상일때
        if(hp >= 5) {
            hp = hp - 5
            result++
        }
        
        // hp가 3이상 5미만일떄
        if(hp >= 3 && hp < 5) {
            hp = hp - 3
            result++
        }
        
        // hp가 1이상 3미만일때
        if(hp >= 1 && hp < 3) {
            hp = hp - 1
            result++
        }
    }
    return result
}