function solution(numLog) {
    return numLog.reduce((acc, cur, index, arr) => {
        if(!index) return ""
        switch(arr[index-1]-cur) {
            case -1:
                return acc+'w'
            case 1:
                return acc+'s'
            case -10:
                return acc+'d'
            case 10:
                return acc+'a'
        }
    },'');
}