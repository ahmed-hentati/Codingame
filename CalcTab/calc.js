function calc(array, n1, n2) {

    let result = array.reduce( (acc, cur, i) => {
        if ( i >= n1 && i <= n2) {
            return acc + cur;
        } else return acc;
    }, 0);
    
    return result;
}
console.log(calc([1, 3, 3 , 4, 5], 1, 3));