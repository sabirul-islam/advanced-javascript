// showing full string
console.log('shimul'.split());

// showing piece
console.log('shimul'.split(''));

// array reverse
console.log('shimul'.split('').reverse());

// array join
console.log('shimul'.split('').reverse().join());

// array join together
console.log('shimul'.split('').reverse().join(''));

// reverse with function
const stringReverse = (string) => {
    return string.split('').reverse().join('')
}
console.log(stringReverse('rubaya'));

// for of
for (const character of 'sabirul') {
    console.log(character);
}

// reverse with for of and function
const stringReverse2 = (string) => {
    let reversed = ''
    for (const character of string) {
        reversed = character + reversed
    }
    return reversed
}
console.log(stringReverse2('nisa'));

// Rreduce method 1
console.log([1,2,3,4,5].reduce((total, item)=>{
    return total = total + item
}, 0));

// Rreduce method 2
console.log([1,2,3,4,5].reduce((total, item)=> total = total + item, 0));

// Rreduce method 3
console.log([1,2,3,4,5].reduce((total, item)=> total + item, 0));

// reverse with reduce method
const stringReverse3 = (string) => {
    return string.split('').reduce((reversed, character)=> character + reversed, '')
}
console.log(stringReverse3('shumit'));