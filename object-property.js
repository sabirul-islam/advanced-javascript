const students = [
    {id: 21, name: 'sabirul'},
    {id: 22, name: 'islam'},
    {id: 23, name: 'shimul'},
    {id: 24, name: 'shumit'}
];

//old system
const output =[];
for (let i = 0; i <students.length; i++){
    const element = students[i];
    output.push(element.name);
}
console.log(output);

//with map
const name = students.map( x => x.name);
const ids = students.map(x => x.id);
console.log(name);
console.log(ids);

//find bigger
const bigger = students.filter(x => x.id > 22);
console.log(bigger);

//find bigger only one
const biggerOne = students.find(x => x.id > 22);
console.log(biggerOne);