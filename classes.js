/* 
***********
classes
***********
    -Classes are 'special functions' that can be defined by either class expression, or class declaration 
        - just like regular functions
    -Classes act as a blueprint for creating objects that share methods and properties 
        -we use that blueprint to create new objects of instances of that class, and each of these objects can have
         different values for properties they hold
            - ex.) model could be property of a class of Automobile, and each new automobile we create that's a copy of our original class,
             could have a different for the property model
    - The body of a class is in between the curly braces, again, just like regular functions
        - the body of a class is where you define class members, such as methods of a constructor
            - The constructor method is a special method for creating and initializing an object created with a class.
                - There can only be one method with the name of constructor in a class
                    - a constructor can use the 'super' keyword, to call the constructor of the super class
                        -the super keyword is used to access and call functions (or methods) on an objects parent
    - JavaScript classes were introduced in ES5, and is a new way to write JavaScript's previous existing prototype-based inheritance, 
     which - as previously mentioned - is a way of creating an object that acts as a blueprint, to create other objects that share the 
     properties and methods as the parent
        - classes are the closest thing in vanilla JavaScript to Object-Oriented Programming

*/

// class declaration
class Automobile {
    constructor(make, model) {
        //inside the constructor you have to assign the names of the keys that will hold the parameters 
        this.make = make;
        this.model = model;
    //       key     value

    //this refers to the objet it belongs to 
    }
}

class Automobile {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

// NOTE: functions declarations are hoisted, class declarations are not - a class declaration needs to be declared before accessing it

//CLASS EXPRESSION - class expressions can be named or un-named

//unnamed
let Vehicle = class {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}

//named 
let Vehicle = class VehicleTwo {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

console.log(Vehicle.name);

//METHODS - methods are basically just functions that are passed down to all of the new instances of our class that we create.

//method definition - old syntax
const automobile = {
    start: function(){

    },
    stop: function() {

    }
}

//prototype method - new syntax
const automobile = {
    start() {

    },
    stop() {

    }
}

// !+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Automobile {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    //method 1
    start() {
        console.log(`The ${this.make} ${this.model}'s engine is started`);
    }
    stop() {
        console.log(`The ${this.make} ${this.model}'s engine is stopped`);
    }
}

//NEW INSTANCES - using the new keyword we can use our class of automobile as a blueprint, to create a new object/instance of our Automobile class

//new object/instance of Automobile class
let hondaCivic = new Automobile('Honda', 'Civic');
console.log(hondaCivic);
console.log(hondaCivic.make);
console.log(hondaCivic.model);

// we can now use dot notation to access the methods that were inherited when we created the new instance of the class
hondaCivic.start();
hondaCivic.stop();

// another new object/instance of the automobile class
let fordEscape = new Automobile ('Ford', 'Escape');
console.log(fordEscape);
console.log(fordEscape.make);
console.log(fordEscape.model);

fordEscape.start();
fordEscape.stop();

/*
    -CONSTRUCTOR METHOD 
        -what exactly is the constructor method doing?
            - the constructor method is a special method that helps us create and initialize an object created from a class
                - works in tandem with the new keyword
    - the constructor method needs to be included for us to create new objects/instances of our class, so we can set properties,
     as well as pass in values for those properties when creating new objects/instances
*/

// we name the class
class Cookie{
    // we call the constructor method an pass in params. These params will hold the values that we pass in when creating a 
        //new object based off of tje class cookie
    constructor(type, icing, shape){
            //on the right side of the expression, these are the params that accept the values from each new object we create.
        this.t = type;
        this.i = icing;
        this.s = shape;
            // on the left side we assign the keys for the values that we pass in when creating a new class
    }
}

let chocolateChip = new Cookie('chocolate chip', false, 'circle');
console.log(chocolateChip);
//console.log(chocolateChip.type)//*undefined- because we named it t not type
console.log(chocolateChip.t);
console.log(chocolateChip.i);
console.log(chocolateChip.s);

/*
    -EXTENDS    
        - the extends keyword is used in either class declarations or class expressions to create a new class as a child of another class
        - each new class we create that extends from the parent class not only inherits the properties and methods from the parent class, but it also
         can have its own properties and methods as well

        - also referd to as a subclass
*/

//PARENT
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat(){
        console.log(`${this.name} eats their food`);
    }
}

//SUBCLASS
class Dog extends Animal{
    constructor(name, breed){
        // JS requires us to call the super method inside of the constructor method - before anything else - or we won't have access 
         //to the 'this' keyword
        super(name);
        this.type = breed;
    }
    play() {
        console.log(`${this.name} fetches the ball`);
    }
}

let Luna = new Dog('Luna', 'Husky');
console.log(Luna);
Luna.eat();
Luna.play();
