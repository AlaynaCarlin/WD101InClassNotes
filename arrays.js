/*
ARRAYS

example:
    let array = [value, value, value];
index position:    0      1      2
rather than having a key it has a numerical place value
*/

let arr =['first value', 'second value', 'third value'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// .length with an array:
console.log(arr.length);
console.log(arr[arr.length - 1]);// this is how you check the end of a long array

// Using an array constructor, uses new keyword
let test = new Array();
console.log(test);
console.log(test.length);

//created an empty array w/ 3 empty items
let test2 = new Array(3);//the parenthesis determine how many empty place holders the array has
console.log(test2);
console.log(test2.length);

//we targeted a specific index/key
test2[0] = 'New value';//assigning value to the first item in our array [0]
console.log(test2);

//initalizing an array values
let nums = Array(1, 2, 3, 4, 5);
console.log(nums);
//console.log(typeof nums);

let strings = Array('array 1', 'array 2', 'array 3 string');
console.log(strings);
console.log(strings[2]);


//************************** */
// ******** METHODS **********
//methods are a way to pull out and/or manipulate the data within our arrays.
    // the logic that makes working with objects and arrays so beneficial

//forEach(), method runs a function over each index of our array
let boardGames = ['Scrabble', 'Chess', 'Monopoly', 'D&D', 'Clue'];

for(i = 0; i < boardGames.length; i++){// make sure we start a 0 with an array
    console.log(boardGames[i]);
}

// concise  body arrow function
boardGames.forEach(game => console.log(`concise: ${game}`));
//boardGames.forEach(game => console.log(typeof game));

//block body arrow function
boardGames.forEach(game => {
     console.log(`block: ${game}`);
});

//anonymous function 
boardGames.forEach(function(game){
    console.log(`Anon: ${game}`);
})

// Various other methods
//array.length -> returns the number of elements in the array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.length);

//array.push()-> adds an element to the end of the array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.push('mint');
console.log(shoppingList);

//array.pop() -> removes the last element of the array and returns that element
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.pop();
console.log(shoppingList);

//array.unshift() -> add a new element at the beginning of the array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.unshift('salt');
console.log(shoppingList);

//array.shift() -> removes the first element of the array, and returns that element
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.shift(); // you can set this to a var and call the shifted item
console.log(shoppingList);
console.log(celery);

// array.map() -> transforms the elements in the original array by calling the given function once for each element in the array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.map(item => item.toUpperCase()));

//array.filter() -> creates a new array with only the elements that pass the test in a given function
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.filter(item => item.startsWith('l')));

//array.find() -> return the first element in the array that passes the test given as a function
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.find(item => item.startsWith('l')));

//array.reduce() -> executes a given function for each value of the array and returns a single value
let costs = [2.00, 3.00, 4.00, 13.00];
console.log(costs.reduce((total, cost) => total + cost));

//array.includes() -> determines wether an array has a specific element, returns boolean value
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.includes('limes'));
console.log(shoppingList.includes('salt'));

//array.indexOf() -> search the array for a specific element and returns it's first index. returns -1 when element is not found
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.indexOf('limes'));
console.log(shoppingList.indexOf('salt'));

//array.findIndex() -> returns the index of the first element in an array that passes the test given in a function. returns -1 when element is not found
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.findIndex(item => item.startsWith('g')));

//array.every() -> checks if all elements in an array pass a test given as a function. if there is one element that returns a false value the function
// returns false and does not check the rst of the elements.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.every(item => item.length > 1));//true
console.log(shoppingList.every(item => item.length > 7));//false

//array.concat() -> merge two or more arrays and returns a new array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
let secondList = ['mint', 'salt', 'simple syrup'];
console.log(shoppingList.concat(secondList));

// array.slice() -> selects a part of an array, and returns a new array. it selects the elements starting at the provided argument, and ends at,
// but does NOT include, the provided end argument.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.slice(1, 4));

// array.splice() -> add/removes elements in an array and returns the new elements. First argument take in an integer that specifies at what index
// to add/remove elements. Second argument takes in the number of items to be removed. Optional third argument takes in the elements to be added to the array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.splice(2, 1);
console.log(shoppingList);

let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.splice(2, 1, 'cherries');
console.log(shoppingList);

//array.sort() -> sorts the items in an array. The sort order can be either alphabetical or numeric, and with ascending or descending order. 
//By default sort() orders the values as strings in alphabetical and ascending order. Can take in a compare function which indicated if you want
// to sort by ascending of descending order.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.sort());

let costs = [3, 2, 13, 4];
// want to sort by descending order
console.log(costs.sort((a, b) => b - a));
//want to sort by ascending order
console.log(costs.sort((a, b) => a - b));

//array.reverse() -> reverses the order of elements in an array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.reverse());

//array.toString() -> converts an array into a string
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.toString());

//array.join() -> converts the elements of an array into a string. Can accept an optional parameter, "separator", which indicated how the elements will be separated
//default seperator is a comma
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.join("! and "));
console.log(shoppingList.join());
console.log(shoppingList.join(" "));

//Lastly, and Es6 features: the spread operator. the spread operator, is indicated by these 3 dots '...' expands the contents of the array and takes it out 
//of the array structure
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(...shoppingList);
