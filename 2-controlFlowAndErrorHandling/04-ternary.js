/*
    - a ternary is a shortcut, or shorthand way of writing an if/else statement
    - basic if statement can not be done with ternary, it has to be a if / else statement 
*/

let num = 6;

// Ternary

(num > 0) ? console.log('yes') : console.log('no');


//  If / Else 

if (num > 0) {
    console.log('yes')
} else {
    console.log('no');
}

let num = 6;

// Ternary
(num == 0) ? console.log('working') : (num > 0) ? console.log('not working') : console.log('still not working')

// or //

(num == 0) ? console.log('working') 
    : (num > 0) ? console.log('not working')
    : console.log('still not working')


// Else / If
if (num == 0) {
    console.log('working')
} else if (num < 0) {
    console.log('not working');
} else {
    console.log('still not working');
}


let age = 30;

(age >= 25) ? console.log("Yay! you can rent a car") : (age >= 21) ? console.log("Yay! You can drink") : (age >= 18) ? console.log("Yay! You can vote") : console.log("Sorry, you're too young to do anything fun")

