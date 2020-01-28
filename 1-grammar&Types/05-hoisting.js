/*
    -javascript is interpreted line by line (read top to bottom), and it performs 2 passes of our code
        - the first pass of the code recognizes where we have declared variables and stores them away in memory
            -Looks at anything on the left side of our assignment operator (=)
        -the second pass of the code is where the values we have given our variables are actually assigned.

        // NOTE: functions are also hoisted //
*/

console.log(name);
let name = "Zach";  // line 10 and 11 would come up as an error since the variable isn't declared yet when the system has it's 1st and 2nd run

b ();

function b() {
    console.log('I have been hoisted');
}