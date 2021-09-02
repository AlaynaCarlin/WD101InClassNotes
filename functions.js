/*
Functions

types of functions:
- functions declaration
- function expression
- anonymous function
*/

declaration();

//function declaration: are hoisted, fur when we call them (invoke=call)
function declaration (){
    console.log("I'm a function declaration!");
}


//      expression();<-- errors out
// function expression:NOT hoisted and are stored in a variable
// WE use the variable name to call the function
// anonymous functions are always held within a variable
let expression = function(){ //<-- an example of an anonymous function (set to a variable name)
    console.log("I'm a function expression!");
}
expression();




