function solution(intStrs, k, s, l) {
   let result = [];
    
   intStrs.forEach(a => {
       const sliceVal = a.slice(s, s + l);
       const val = Number(sliceVal)
       if(val > k) result.push(val)
   })
    
   return result;
}