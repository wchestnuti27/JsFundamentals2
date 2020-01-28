/*
    - a variable is a named container for storing data
    - we name variables so that we can refer to them again
*/

let a = 2; // variable declaration

    let       b         =         1;
/*  (1)      (2)     (3)         (4)


1. javascript keyword
2. variable name 
3. assignment operator
4. variable value

*/

console.log(a + b);

let hello = (hello)

/* 
    notes on variables:
        -a variable name must begin with a letter, underscore, or dollar sign.
        -numbers may follow the above characters but they cant come first.
        -javascript is case sensitive = 'hello' and 'Hello' are two separate variables
        -no spaces allowed in variable names
        -camelCase is the best practice for naming variables with multiple words
        -this helps with readability

        // Let thisismyvariable = 'test;
        // let thisIsMyVariable = 'test' - this is the correct way to type this.
*/

/*
var, let, const

    -var: 'old' keyword for variables in javascript

    -let: 'new' keyword introduced for variables in ES6 (newer version of javascript)

    -const: unchangeable variable once declared
*/ 

/*

    declarations vs initialization:

        declaration are the left side of a variable
        let x
        declaration are the left side of the assignment operator (=)

        initializations are the Right Side of the variable 
        the value we initialize our variables as is what is on the right side of the operator (=)

*/ 

let x;
console.log('Declaration:', x); // declarations: undefined

let x = 100;
console.log('initialization:', x); // initialization: 10

// Javascript reads from top to bottom //

let x = 1000;
console.log(x);

let y = 'hello';
console.log(x, y);

const today = 'Great';
console.log(today);

today = "Wonderful";
console.log(today);