console.log('Hello World');
console.log('Hello World');
console.error('This is a error');
console.warn('This is a warning');



// type of datatype in js = string, number, boolean, null, undefined, object, symbol
const name = 'Sagar';
const age = 22;
const iscool = true;
const rating = 5;
const x = null;
const y = undefined;
let z;

// concatenation 

console.log('My name is ' + name + ' and I am ' + age);

// template string
console.log(`My name is ${name} and I am ${age}`);
console.log(`my name is ${name}`);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.substring(0, 2).toUpperCase());
console.log(name.split(''));
console.log(name.split('a'));

// arrays 
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
console.log(fruits[2]);
fruits.push('grapes');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray(hello));
console.log(fruits);



