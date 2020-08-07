const numbers = [3, 4, 5, 6, 7, 8];

const output = [];
for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

function square (element){
    return element * element;
}

//it has three parameter (1.element, 2.index, 3.array)
numbers.map(function(element, index, array){
    console.log(element, index, array);
})

//for square
const result = numbers.map(function(element){
    return (element * element);
})
console.log(result);

//for square with arrow
const result = numbers.map(element => element * element);
console.log(result);

//for square with arrow x
const result = numbers.map(x => x * x);
console.log(result);

//filter process give you bigger or smaller array
const bigger = numbers.filter(x => x > 4);
console.log(bigger);

//find process gives you immediate big or small number
const isThere = numbers.find(x => x > 5);
console.log(isThere);