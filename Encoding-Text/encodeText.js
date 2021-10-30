function encode(plainText) {
    let n = 1;
    let plaiTextArray = plainText.split('');
    let result = plaiTextArray.reduce( (acc, cur) => {
        if (acc.charAt(acc.length-1) === cur) {
            a = n;
            n++;
            return a !==1 ? acc.substring(0, acc.length - 2) + n.toString() + cur : acc.substring(0, acc.length - 1) + n.toString() + cur ;
        } else {
            console.log('not equal');
            n=1;
            return acc + cur;
        }
    } );
    return result;
}
console.log('result', encode('aaabbbbbbbbbeeffffff')); 
