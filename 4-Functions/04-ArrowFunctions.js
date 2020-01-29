/*
    Arrow functions can not be hoisted... they function expressions and not declarations.
*/

//  (1)    (2)
let hi= () => {
    console.log('hello');
}

/*
    1. all fat arrow functions need to be set to a variable
    2.fat arrow signifies that this is a function 

    - arrow functions are the shorthand way of writing a function expression and not a declaration
*/

// Concise Body //
let hi = () => Console.log('hello'); // return is implicit and happens by default
hi();


// Block Body //
let hi = () => {
    console.log('hello');
    // return keyword must be present inside of a block body arrow function
}

hi();


let apples = num => console.log(`There are ${num} apples`);
apples(10);

let counting = num => {
    for(let i = 0; i <= num; i++) {
        console.log(i);
    }
}

counting(20);

/*
    - if there are no parameters for an arrow function, we need to have parens ()
    - if there is 1 parameter, you can choose to have parens and no parens
    - if you have more than on parameter, you have to use parens ()
*/
