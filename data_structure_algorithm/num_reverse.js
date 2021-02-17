// reverse number with function
const reverseNumber = (num) => {
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num)
    /*Actually what happened
    '-53' ['-','5','3'] ['3','5','-'] [35-] 35 * -1 = -35*/
}
console.log(reverseNumber(-53));

// reverse number with reduce method
const reverseNumber2 = (num) => {
    return parseInt(String(num).split('').reduce((reversed , character) => character + reversed, '')) * Math.sign(num)
}
console.log(reverseNumber2(-47));

// reverse number with for of
const reverseNumber3 = (num) => {
    num = num.toString()
    let reversed = ''
    for (const character of num) {
        reversed = character + reversed
        reversed.split('').reverse().join('')
    }
    return parseInt(reversed) * Math.sign(num)
}
console.log(reverseNumber3(-95));