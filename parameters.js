/*
Parameters
-new variables that we don't have values for, they are assigned a values when we call them
Parameters are values we haven't assigned yet.
Value is passed to the function using an argument(s).

ex: 
    function nameFunction(parameter){
        return....
    }

    nameFunction(argument);
 */

//parameter naming should reflect the desired data
function myName (name) {
    console.log(`My name is ${name}`);
}

myName("Alayna");

 function coffeePot(filter){
     console.log(`I brewed some ${filter}.`);
 }

 coffeePot('Sumatra Dark Roast');
 coffeePot('Medium Roast');
 coffeePot('Light Roast');
 coffeePot('Tea instead');


// Known as function reference 
 let kettle = coffeePot;
 //Undefined, until passed the argument for coffeePot 
 kettle('Green tea');


 //Arguments get passed in order of position
 function dinner(main, side, drink){
     console.log(`For dinner, I had ${main} and ${side}. To wash it down, I had a ${drink}.`);
 }

// order will correspond with the order we made our parameters
dinner("pasta", "salad", "coke");

// Return:
//variable is used to capture the return value
// return is the keyword "waiting" to capture it/ waits for the value

function calc (one, two, three){
    //start by declaring our new var. & whatever it is (calculation/value holder).
    let total = one + two + three;// base logic
    let average = Math.round(total/3);//clean base logic
    return average;
}

//calc (15, 60, 55); <-- no way to see return

let avgWeight = calc (15, 60, 55);
console.log(`The amount of rice I bought ${avgWeight} lbs.`);
