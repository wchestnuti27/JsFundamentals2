/*
    -a falsy value is a value that is considered false when encountered in a boolean context
    1. false
    2. 0
    3. "", '', ``
    4. Null 
    5. undefined 
    6.NaN (Not a Number )

    if any of these 6 are in the code, the answer will always come up as false.
*/

let isOn = true;

if (isOn == true) {
    console.log("The light is on!")
}

if (isOn){
    console.log("The light is still on!")
}

isOn = false;

if (!isOn) {
    console.log("The light is off!")
}

let weather = 60;

if (weather < 50) {
    console.log("wear a jacket")
}

