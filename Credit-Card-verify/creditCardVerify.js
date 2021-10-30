    function verifyCreditCard(cardNumber) {
    const digitsArrayOf = number => Array.from(number.toString(), Number);
    let cardNumberArray = digitsArrayOf(cardNumber);

    step1 = cardNumberArray.reduce( (acc, cur, i) => {
        return i%2 === 0 ? (cur * 2 > 9 ? acc + cur * 2 - 9: acc + cur * 2)  : acc;
    }, 0 );
    console.log('step1', step1);

    step3 = cardNumberArray.reduce( (acc, cur, i) => {
        return i%2 !== 0 ? acc + cur : acc;
    }, 0 );
    console.log('step3', step3);

    step4 = step3 + step1;

    if (step4 % 10 === 0) {
        return 'valide'
    } return 'invalide';
}
console.log(verifyCreditCard(4556737586899855)); 
