function hi () {
    console.log('hello');
}

// hi; // nothing happens because the function isn't being called
// hi(); // function is being called and the result is 'hello'
// console.log(hi); // the answer that comes up is [Function: h1], it's just showing that the function is in the parens
// console.log(hi()); // the result is hello and undefined because it's reading as if the console.log is reading it twice.

// as soon as our parser see's that there is a function invocation

// Challenge:  Create a function that, when invoked, lists out the number 1 - 10.

function number (){
    for (let x = 1; x < 10; x++) {
        console.log(x);
    }
}

number();


// Challenge - give the array, create a function that lists out the values individually. //

let arr = ['This', 'is', 'really', 'cool'];

function list () {
    for (let word of arr) {
        console.log(word)          // Used forOf loop because we're using it for Arrays and not objects
    }
}

list();

