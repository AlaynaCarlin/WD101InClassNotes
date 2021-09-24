/* 
****************
Array/Object destructuring
****************
    -Destructuring allows you to unpack values from arrays, or even properties from objects, into distinct variables.
        -destructuring uses very similar syntax as array literals, but is instead on the left hand side of the assignment operator, which
        is where we define what values to unpack from the sourced variable (array/object) 
    
    - great for pulling information out of an array/object and assigning that data to it's own variable
*/

const fullName = ['Alayna', 'Carlin'];

// const firstName = fullName[0];
// const lastName = fullName[1];

// console.log(firstName, lastName);

const [firstName, lastName] = fullName;// same as above - more concise
console.log(firstName, lastName);

/* Rest operator or Rest syntax
    -rest syntax looks exactly like the spread syntax
        - in a way, rest syntax is the exact opposite of spread syntax. Spread syntax "expands" an array  into a list of standalone elements,
        while the rest syntax collects multiple elements and "condenses" them into a single element 
*/

const fullName = ['Alayna', 'Carlin', 'Miss', {month: 7, date: 7, year: 2003}, 'testOne', 2, 'test3', 4, true, false];
const [firstName, lastName, ...otherInfo] = fullName;// otherInfo gets all the rest of the info in this array

console.log(firstName);
console.log(lastName);
console.log(otherInfo);

const fullName = ['Alayna', 'Carlin', 'Miss', {month: 7, date: 7, year: 2003}, 'testOne', 2, 'test3', 4, true, false];
const[firstName, lastName, , ,...testData] = fullName;// the spaces skip items

console.log(firstName);
console.log(lastName);
console.log(testData);

// rest operator MUST be the last element defined when using destructuring

// object destructuring
const user = {
    userName: 'testUser',
    is_verified: true
}

const {userName, is_verified} = user;

console.log(userName);
console.log(is_verified);

const metadata = {
    title: 'Scratchpad',
    translations: [
      {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
      }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {
    title: englishTitle, // renamed
    translations: [
        {
            title: localeTitle // renamed
        }
    ]
} = metadata;

console.log(englishTitle);
console.log(localeTitle);


const people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];

for (let {name: n, family: {father: f}} of people) {
    console.log(`Name: ${n}, Father: ${f}`);
}