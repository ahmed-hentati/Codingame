const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

function FindSmallestInterval(numbers) {
    let result = numbers.sort().filter(unique);
    let interval = result.length;
    let loop = 0;
    for ( i = 0; i < interval; i++ ) {
        interval = result[i+1] - result[i];
    }
    /*while( interval !== 1 && loop !== interval) {
        loop++;
        console.log(loop);
        result.forEach((element, i) => {
            interval = element[i+1] - element[i];         
        });
    }*/
    return interval;

}

console.log('result', FindSmallestInterval([1,5,8,3,7,5,1])); 