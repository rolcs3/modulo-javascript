// var, let, const

// var name = 'Omar Jair';
// console.log(name);
// name = 'Dave Grohl';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'Jair'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// LET
// let name;
// name = 'Deivid Grohl';
// console.log(name);
// name = 'Rock Smith';
// console.log(name);


// CONST
// const name = 'Jair';
// console.log(name);
// Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

const person = {
  name: 'Jair',
  age: 30
}

person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);

// Var
// var i = 60;
// (function explainVar(){
//  for( i = 0; i < 5; i++){
//   console.log(i)                   //Output 0, 1, 2, 3, 4
//  }
// })();
// console.log("Despues del loop", i) // Output 60

// Let
// var i = 60;
// (function explainVar(){
//  for(let i = 0; i < 5; i++){
//   console.log(i)                   //Output 0, 1, 2, 3, 4
//  }
// })();
// console.log("Despues del loop", i) // Output 60
