const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

function FindSmallestInterval(numbers) {
    let result = numbers.sort().filter(unique);
    let interval = result.length;
    for ( i = 0; i < interval; i++ ) {
        interval = result[i+1] - result[i];
    }
    return interval;

}

console.log('result', FindSmallestInterval([1,5,8,3,7,5,1])); 