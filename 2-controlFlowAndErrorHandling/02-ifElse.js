let weather = 70;

if (weather < 50) {
    console.log("wear a jacket");
} else {
    console.log("No jacket necessary");
}


let name = "Betty"

if (name == "Will Chestnut") {
    console.log('Hello, my name is "Will Chestnut"');
} else {
    console.log('Hello, is your name "Will Chestnut"')  // can also use `${}`
}

/*

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/


// create other variables to assist with challenges, it makes locating the answer easier //

let name = 'ZAchARy'
let first = name[0]
let last = name.slice(1, name.length)

if (first == first.toUpperCase()) {
    console.log(first + last.toLowerCase())
} else {
    console.log(first.toUpperCase() + last.toLowerCase())
}


let age = 19

if (age >= 25) {
    console.log('you can rent a car')
} else if (age >= 21) {
    console.log('you can drink')
} else if (age >= 18) {     
    console.log('you can vote')
} else if (age < 17) {
    console.log("you're too young to do anything fun")
}









