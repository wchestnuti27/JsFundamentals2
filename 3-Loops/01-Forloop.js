// For Loops //

for ([initialExpression]; [condition]; [incrementExpression]

/*

    For loops take in 3 parameters:
        1. initial expression
        2. condition
        3. increment expression

*/

        (1)         (2)         (3)
for (let i = 0; i < 10; i++) {
    console.log(i);
}


// Challenge: using a for loop, count to 20, by 2's starting at 0

for (let x = 0; x <= 20; x += 2) {
    console.log(x);
}


// Challenge: using a for loop, count from 10 to 0, going down by 1

for (let y = 10; y >= 0; y -= 1) {
    console.log(y);
}


// Challenge: using a for loop, count from 0, going down by 2's to -24

for (let i = 0; i >= -24; i -= 2) {
    console.log(i);
}


// Challenge: using a for loop, go through a name and display each letter individually

let fullName = "William";
// let i = 0

for (let i = 0; i < fullName.length; i++) {
    console.log(fullName[i]);  // using bracket notation to pull each letter from the name. //
}


// Challenge: make a for loop where you add up all the numbers from 1 to 50 (should equal 1275) //

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum = sum + i
}
console.log(sum);
