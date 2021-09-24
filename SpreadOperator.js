/* 
    -Spread operator
        -the spread operator pulls all elements in an array  and gives them back to you as a standalone list of elements
        -denoted ...
*/

const fullName = ['Alayna', 'Carlin'];
//...fullName // 'Alayna', 'Carlin'
// place the three dots in front of a variable and it will pull the elements of our array

const copiedFullName = [...fullName];
console.log(copiedFullName);

fullName.push('Miss');
console.log(fullName, copiedFullName);// copiedFullName in this console.log will not include miss because the copy was made before we pushed miss

//* Spread operator and numbers 

console.log(Math.min(1, 5, -3)); // Math.min -- grabs the smallest of the numbers supplied and returns it

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(prices);
console.log(Math.min(prices));// doesn't work because the values are not a standalone list that tha min method can use
console.log(Math.min(...prices));// we need to use the spread operator to make it a standalone list

//* spread operator and objects 

const persons = [{name: 'Alayna', age: 18}, {name: 'Donovan', age: 24}];
const copiedPersons = [...persons];
console.log(copiedPersons);

persons.push({name: 'Anna', age:30});
persons[0].name = 'Alayna Marie'; // this changes in persons and copiedPersons
console.log(persons, copiedPersons);

/*
    -js has 5 data types that are passed by value: boolean, null, undefined, string, and number. These are known as primitive data types
        - if a primitive is assigned to a variable, we can think of that variable as containing the primitive value

        let x = 10 
        let y = 'abc'
        let z = null

        x contains 10, y contains 'abc', z contains null - all of these are primitive data types

        variables values
        x           10
        y           'abc'
        z           null

        -when we assign the below variables to another variable using =, we copy the value to the new variable - and they are copied by value

        let a = x;
        let b = y;

         variables values
        x           10
        y           'abc'
        z           null
        a           10
        b           'abc'

        - js had 3 data types that are copied/passed by reference: array, function, and object. These are all technically objects,
        so we'll refer to them collectively as objects.
            -variables that are assigned a non-primitive data type are given a reference to that value. The reference points to the objects 
            location im memory - the variables don't actually contain the value
            - objects are created at a location in your computers memory. When we write arr = [], we've created an array in memory - what the 
            variable arr receives as the value is the address or location of that array in memory

            let arr - [];

            variables   values    address   objects
            arr         <#001>    #001      []

            arr.push(1)

            variables   values    address   objects
            arr         <#001>    #001      [1]

            - when a reference type value, or a non primitive data type (arr, function, object) is copied to another variable using =, the address if that value 
            is what's actually copied over as if it were a primitive. Arrays, functions, and objects are copied by reference value, instead of a primitive value.

            let reference = [1];
            le refCopy = reference;

            variables   values    address   objects
            reference   <#002>    002        [1]
            refCopy     <#002>    

            -each variable now contains a reference to the same array. That means if we alter one of the variables, the other will see the same changes.

*/

let x = 10; 
let y = 'abc';
let z = null;

let a = x;
let b = y;

console.log(x, y, z, a, b);

let arr = [];
console.log(arr);

arr.push(1);
console.log(arr);

let reference = [1];
let refCopy = reference;
console.log(reference, refCopy);

reference.push(2);
console.log(reference, refCopy);

//!========================================================
// pasted from above

const persons = [{name: 'Alayna', age: 18}, {name: 'Donovan', age: 24}];
const copiedPersons = [...persons];
console.log(copiedPersons);

persons.push({name: 'Anna', age:30});
persons[0].name = 'Alayna Marie'; // this changes in persons and copiedPersons
console.log(persons, copiedPersons);

// spread operator and avoiding changing both the original and the copied array
const persons = [{name: 'Alayna', age: 18}, {name: 'Donovan', age: 24}];
//if we want to avoid avoiding changing both the original and the copied array, we would need to copy every object as well
const copiedPersons = persons.map(person => ({
    name: person.name,
    age: person.age 
}))// since we're returning something in curly braces (object) we have to enclose it in parens so js doesn't thik it is the functions body

persons.push({name: 'Anna', age: 30});
copiedPersons[0].name = 'Alayna Marie';

console.log(persons, copiedPersons);

