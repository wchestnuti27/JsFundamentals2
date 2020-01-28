/* booleans 
      a boolean has two possible values of either true or false
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
    Null
        Null is an empty value. think of it like an empty container: nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

/*
    Undefined
        - no value has been assigned and it does not act as an empty container, whereas null does.

*/

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

/*
    Null is like a container with nothing in it
    -undefined is when a variable has never been set or hasn't been created yet
*/

/*
    Numbers
        - number are literally just numbers. Don't need anything special to write them

*/

let degrees = 33;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let decimal = 0.2 + .1
console.log(decimal);

/*
    Strings
        strings are datatypes used to represent text and are wrapped in either single or double quotes

*/

let stringOne = 'single Quotes';
let stringTwo = "Double Quotes";

console.log(stringOne, stringTwo);

// Numbers vs Strings //

let first = 1050 + 100;
let second = '1050' + '100';

console.log(second);

console.log(typeof first);
console.log(typeof second);

// if one datatype is a string and one datatype is a number, JavaScript will still default to it being a string //


/*
    Objects
        objects store many values instead of just one value.
        -hold what are known as key/value pairs

*/

let frodo = {
    race: 'hobbit',
    ring: 1,
    cloak: true

}

console.log(frodo);
console.log(typeof frodo);


/*
    Arrays
        -container that holds a list of items

        let list = ['item 1', 'item 2', 'item 3']


        1. List is our variable name 
        2. square brackets shows that it is an array
        3. each item, regardless of datatype, is separated by a comma
*/

let burritos = ['large', 4, true];
console.log(burritos);


let fName = 'Will';
let lName = 'Chestnut';
let houseNumber = 5061;
let streetName = 'Lewiston Drive';
let cityName = 'Indianapolis';
let stateName = 'Indiana';
let zipCode = 46254;

console.log(fName, lName, + ',', houseNumber, streetName, + ',', cityName, stateName, zipCode);

/*
    String: Properties
        -properties are qualities associated with a specific datatype
        -strings have properties, or qualities that are associated specifically with strings
*/

let myName = "Will";
console.log(myName.length);

/*
    Strings: Methods
        - methods are tools that can help us manipulate certain data
        -.property & .method()
            -no parenthesis for properties
*/

let nyNameIs = 'Will';
console.log(myNameIs.toUpperCase());  // toUpperCase() is a method that changes a string to all uppercase


let home = 'My home is Greenwood';
console.log(home.includes('Greenwood'));  // includes option asks if the variable includes whatever you put in the parenthesis



let sent = 'this sentence will be split into individual parts';
console.log(sent.split(" "));  // just quotations in the ()'s will separate each letter but if you place a space in between the quotations, it will split each word. //
