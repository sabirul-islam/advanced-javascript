//Execute serialy
function doSomething(){
console.log(3333);
}
console.log(2222);
doSomething();
console.log(4444);

//SetTimeOut execute by his time
function doSomething(){
console.log(3333);
}
console.log(2222);
setTimeout(doSomething, 4000);
console.log(4444);

//SetTimeOut execute by his time(with function)
function doSomething(){
console.log(3333);
}
console.log(2222);
setTimeout(function(){
    console.log("Always late");
}, 4000);
console.log(4444);

//SetTimeOut execute by his time(with arrow function)
function doSomething(){
console.log(3333);
}
console.log(2222);
setTimeout( () => {
    console.log("see you four second later");
}, 4000);
console.log(4444);

//Setinterval works randomly by his time
function doSomething(){
    console.log(3333);
    }
    console.log(2222);
    setInterval(function(){
        console.log('show after 2 seconds')
    }, 2000);
    console.log(4444);