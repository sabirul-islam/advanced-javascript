const nums = [100, 200, 300, 400, 500]
const map = nums.map(num => num * 2);
console.log(map);
const filter = nums.filter(num => num > 200);
console.log(filter);
const find = nums.find(num => num > 200);
console.log(find);
const total = nums.reduce((sum, num)=> sum + num, 0);
console.log(total);

const friends = [
    {name: "shimul", salary: 200},
    {name: "sabirul", salary: 400},
    {name: "shumit", salary: 500},
    {name: "babu", salary: 600}
];
const totalSalary = friends.reduce((sum, friend) => sum + friend.salary, 0);
console.log(totalSalary);