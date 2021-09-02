/*
Two General Phase when we run code:
-creation phase
    Any variable (let, var, const) and function in our code are stored to memory
-Execution phase:
    values are assigned to the variable and functions that were stored to memory during the create phase

the left of the assignment operator (=) is stored to memory, right is assigned during execurion*/

/*
(   create  ) (execute)
let var = value
*/ 

// 1, 'num' has been hoisted - JS recognized our variable, it knows it exists
// 2. Js reads top to bottom, when we called our console.log first, it doesn't get the value of 'num'
    // console.log(num);
    // let num = 12;
sayHi();

function sayHi() {
    console.log('Hello');
    let hi = 'Hola';
    console.log(hi);
}

    // varFunc();
//has left and right side
let varFunc = function() {
    console.log('anything');
}

varFunc();