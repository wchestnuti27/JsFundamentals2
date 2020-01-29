function hi (name) {
    console.log(`Hello, ${name}`);
}
                    // parameters are a place holder that does nothing until give it data
hi('Zach');

// arguments that are passed for a function after it is called //

function Will (ticket){
    console.log(`I exchanged my ticket for a ${ticket}`);
}

Will('sandwich');

function counter (number) {
    // let number = 1000; //
    for(let i= 0; i <= 1000; i++) {
        console.log(i);
    }
}

counter(1000);


// Challenge - Write a function that takes two parameters:
    

function FName (firstName, lastName){
    let x = firstName + " " + lastName;
    console.log(`Hello, my name is ${x}`);  // using the back ticks to add the info in 
}

FName("Will", "Chestnut");  // Make sure you're using the quotes so that is comes up as a string //