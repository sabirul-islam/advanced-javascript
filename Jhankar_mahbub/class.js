//Modern system
class person{
    constructor(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    }
}
const heroPerson = new person ('Hero', 'Balam', 20000);
const friendlyPerson = new person ('hero', 'kalam', 25000);
console.log(heroPerson);
console.log(friendlyPerson);

//Ancient system
function person (firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new person ('Grand', 'Father', 1200);
console.log(oldPerson);