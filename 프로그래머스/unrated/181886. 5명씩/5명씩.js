function solution(names) {
    const result = [];
    
    for (let i = 0; i < names.length; i += 5) {
        const group = names.slice(i, i + 5);
        console.log(group[0])
        result.push(group[0]);
    }
  
    return result;
}

// names.filter((v, idx) => idx % 5 === 0);