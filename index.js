const challengeFunction = function(cell1, cell2){
    let position = cell1.split('')[0]
    let position2 = cell2.split('')[0]
    let strgp1 = 'ACEG'
    let strgp2 = 'BDFH'
    let number = cell1.split('')[1]
    let number2 = cell2.split('')[1]
    let par = number%2 === 0 && number2%2 === 0
    let impar = number%2 !== 0 && number2%2 !== 0
    if (strgp1.includes(position) && par && strgp1.includes(position2)) {
        return true
    }
    if (strgp1.includes(position) && impar && strgp1.includes(position2))  {
        return true
    }
    if (strgp2.includes(position) && par && strgp2.includes(position2)) {
        return true
    }
    if (strgp2.includes(position) && impar && strgp2.includes(position2)) {
        return true
    }
    return (number % 2 === 0 && number2 % 2 !== 0) || (number % 2 !== 0 && number2 === 0);
}

module.exports = challengeFunction
