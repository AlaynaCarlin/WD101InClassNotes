/*
arrow functions/ fat arrow functions

-they are not (function) declarations, they are expressions
-do NOT get hoisted
- Two types:
    -concise body --> return is automatic
    -block body --> return is not automatic
- a concise way to write functions expressions
*/

//concise body
//   speak ('dog'); --does not hoist
let speak = (name) => console.log(`The ${name} goes woof!`);

speak('dog');

let firstName ="Peter";
let lastName = "Parker";

let concatName = (first, last) => `${first} ${last}`;
let fullName = (concatName(firstName, lastName));
console.log(fullName);


//block body
// use {curly bros} to contain logic
//must use the keyword 'return'
let speakAgain = name => {
    console.log(`The ${name} goes woof! - line 28 console.log`);
}

speakAgain('dog');

//-----------------------
let concat = (first, last) => {
    return `${first} ${last}`;
}

let newFullName = concat(firstName, lastName);
console.log(fullName);

//------------------------
let x = 27;
let y = 47;

let sum = (num1, num2) => {
    return num1 + num2
}

let returnedValue = sum(x, y);
console.log(returnedValue);


