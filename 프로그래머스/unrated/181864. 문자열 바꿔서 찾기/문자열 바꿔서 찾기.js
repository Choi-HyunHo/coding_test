function solution(myString, pat) {
    var answer = myString.replaceAll('A', 'C').replaceAll('B', 'A').replaceAll('C', 'B')

    if (answer.includes(pat)) {
        return 1;
    } else {
        return 0;
    }
}

// const solution = (myString, pat) => [...myString].map(v => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0