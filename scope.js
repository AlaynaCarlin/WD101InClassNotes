/*
scope is simply a hierarchy of variables within our code.
-Global scope or parent scope
-local scope or child scope
*/

let global = 'Earth';

function scopeExample () {
    let local = "Garrett";
    console.log(local);
    console.log(`${local} is but one of many cities on ${global}`);
}

scopeExample();
// local var cannot be accessed outside the function
// console.log(local);




