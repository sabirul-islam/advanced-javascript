//Global variable
var name = 'shimul';

function add(num1, num2){
    //not declare variable by mistake it makes global
    result = num1 + num2;
    //window: for make global
    // window.result = num1 + num2;
    console.log('name inside', name);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}
console.log('name outside', name);
// not executed here, showing error
console.log('result outside', result);
var sum = add(13, 21);
console.log(sum);
//executed here
console.log('result outside', result);