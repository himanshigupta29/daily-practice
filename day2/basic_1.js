function findSum(numbers, queries) {

    let lenNum = numbers.length;
    let lenQueries = queries.length;
    let query;

    let sum = [], sq;

    for(let q = 0; q < lenQueries; q++) {
        
        sq = 0;
        query = queries[q];
               
        for(let i = query[0]; i <= query[1]; i++) {
            
            if(numbers[i-1] === 0) {
                sq = sq + query[2];
            } else {
                sq = sq + numbers[i-1];
            }
        }
        
        sum.push(sq);
        
    }

    return sum;

}
