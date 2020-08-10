const normalPerson = {
    firstName: 'Abdur',
    lastName: 'Rahim',
    salary: 15000,
    getfullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }

}

normalPerson.getfullName();
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'hero',
    lastName: 'Alom',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'hero',
    lastName: 'Golam',
    salary: 35000
}

//Bind method
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(3000);
heroChargeBill(2000);
console.log(heroPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(30000);
console.log(friendlyPerson.salary);

// Call method
normalPerson.chargeBill.call(heroPerson, 10000, 5000, 3000);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 10000, 0, 0);
console.log(friendlyPerson.salary);

// Apply Method
normalPerson.chargeBill.apply(friendlyPerson, [3000, 2000, 1000]);
console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 2000, 1000]);
console.log(heroPerson.salary);
