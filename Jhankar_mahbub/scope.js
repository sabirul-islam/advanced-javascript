//Global variable(bonus)
let bonus = 20;

function sum(first, second){
let result = first + second + bonus;
console.log(result);
console.log(bonus);
if (result > 9){
    const mood = 'happy';
    console.log(mood);
}
return result;
}
console.log(bonus);
const output = sum(3, 7);
console.log(output);