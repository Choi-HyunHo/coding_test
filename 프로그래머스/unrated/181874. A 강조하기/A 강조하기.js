function solution(myString) {
    var answer = myString.split('').map((i) => {
        if(i === 'a' | i === 'A'){
            return 'A'
        } else {
            return i.toLowerCase()
        }
    })
    return answer.join('');
}

// const solution=s=>s.toLowerCase().replaceAll('a','A');