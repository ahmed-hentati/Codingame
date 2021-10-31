function reshape(n, str) {

    let result = str.replace(/ /gi, '');
    let parts = result.match(/.{1,3}/g);
    return parts.join(' ');
}
console.log(reshape(4 ,'aaa gg ff   fff'));

/*function reshape(n, str) {

    let result = str.replace(/ /gi, '').split('');

    result2 = result.reduce( (acc, cur, i) => {
        if (i%(n-1) !== 0 || i === n){
            console.log('modulo',0%n);
            return acc + cur;
        } else { 
            console.log('not 3');
            return acc + cur + ' ';
        }
    });
    
    
    return result2;
}*/