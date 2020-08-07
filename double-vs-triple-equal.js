const first = 2;
const second = 2;
if (first == second){
    console.log('condition is true');
}
else{
   console.log('condition is false');
}

//only check value.
const first = 2;
const second = '2';
if (first == second){
    console.log('condition is true');
}
else{
   console.log('condition is false');
}

//check value and type.
const first = 2;
const second = '2';
if (first == second){
    console.log('condition is true');
}
else{
   console.log('condition is false');
}

//comparing with 1 and the default value of 1 is true.
const first = 1;
const second = true;
if (first == second){
    console.log('condition is true');
}
else{
   console.log('condition is false');
}

//comparing with 0 and the default value of 0 is false.
const first = 0;
const second = false;
if (first == second){
    console.log('condition is true');
}
else{
   console.log('condition is false');
}

//Now he is check the type, so condition is false. Because 0 and false is not same type.
const first = 0;
const second = false;
if (first === second){
    console.log('condition is true');
}
else{
   console.log('condition is false');
}

//Now he is check the type, so condition is false. Because 1 and true is not same type.
const first = 1;
const second = true;
if (first === second){
    console.log('condition is true');
}
else{
   console.log('condition is false');
}