/*
    Scope
        - scope is how the computer keeps track of the variables in a program
        - anything in the {}'s is within the local scope
        - scopes can be nested, where there's an outer scope (global), and an inner scope (local)
*/

let x = 12;  // globally scoped variable

function scope () {
    let x = 33; // locally scoped variable - declaring a new variable within this function
    console.log(x); // this console.log would be 33 because it is in this function
}

scope();
console.log(x); // this console.log will be 12 - this will still use the variable of x outside of the scope of this function

let y = 12; // initialized variable as 12

function scope() {
    y = 33; // grabbed the variable of y in this function, it used to be 12 per above but now it's 33 - reinitialized
    console.log(y);  // console will show 33
}

scope();
console.log(y); // console will show as 33

/*
    - const is constant that cannot be re-expressed or reinitialized as another value
    - var is scoped to the nearest function block
    -let is scoped to the nearest enclosing block
*/

var x = 12;

function varTest() {
    var x = 33;

    if (1 == 1) {
        var x = 45;
        console.log(x);
    }

    console.log(x);

}

varTest();
console.log(x);

const x = 12;

function letTest(){
    var x = 33;

        if(true) {
            let x = 45;
            console.log(x);
        }

        console.log(x);
}

letTest();
console.log(x);

// 

function constTest () {
    const scope = 1;

        if(true) {
            const scope = 2;
            console.log(scope);
        }

    console.log(scope);
}

constTest();