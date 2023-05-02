function solution(myString, pat) {
    var answer = myString.replaceAll('A', 'C').replaceAll('B', 'A').replaceAll('C', 'B')

    if (answer.includes(pat)) {
        return 1;
    } else {
        return 0;
    }
}