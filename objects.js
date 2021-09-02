/*
OBJECTS notes:

objects are a JS data type. They hold key and value pairs of data. 
objects can hold numbers, strings, booleans, arrays, and other objects, etc.
*/

//objects use curly brackets. objects REQUIRE two main attributes: *key and *value
let netflix = {
    id: 1,
    name: 'The Office',
    isRunning: false,
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: 'Pilot'
                },
                {
                    episode: 2,
                    episodeName: 'Diversity Day'
                },
                {
                    episode: 3,
                    episodeName: 'Health Care'
                },
                {
                    episode: 4,
                    episodeName: 'The Alliance'
                },
                {
                    episode: 5,
                    episodeName: 'Basketball'
                }
            ]
        }
    },
    season2: {},
    season3: {}
};

// Use dot and bracket notation to console.log the episode name of episode 2
//( dot if you are diving into an object, bracket if you are diving into an array.)
console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);

// *JSON Object
/*
- JSON - JavaScript Object Notation
- derived from JSON syntax, JSON is text only.
- Exists as a string.
    - Useful when fetching data from a server(back-end application or logic).
    - Needs to be converted to a native JavaScript Object if we want to access the data.
*/

//Bracket Notation / Property Accessors
// Property accessors: dot notation . , bracket []

//!ex
let superHero = {};//created a variable that stores an empty object

//Target object as a whole w/ bracket notation, inject/give a key which is a string
superHero['name'] = 'Spider-Man'; // adding key/value pairs to our object
superHero['alterEgo'] = 'Peter Parker';

console.log(superHero);
console.log(superHero['name'], superHero['alterEgo']);
console.log(superHero.name);

//* All keys in objects are strings even though they aren't wrapped in when represented in the object itself

let test = Object.keys(superHero);
console.log(test);
console.log(typeof test[0]);

//! ex
let spaceObject = {
    "Spaces Here": true,
    noSpaces: true
}

//Square brackets is good when we may not be able to use dot Notification, BUT is not common
console.log(spaceObject.noSpaces);
console.log(spaceObject["Spaces Here"]);

