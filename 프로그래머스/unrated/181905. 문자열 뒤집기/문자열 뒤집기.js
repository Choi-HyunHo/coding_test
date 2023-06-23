function solution(my_string, s, e) {
      let myArray = Array.from(my_string);

      while (s < e) {
        [myArray[s], myArray[e]] = [myArray[e], myArray[s]];
        s++;
        e--;
      }

      return myArray.join('');
}
