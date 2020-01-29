/*
    For in Loops 
        - great for counting key/value pairs in an object. Properties in an object are what is called enumerable
            - for in Loops will iterate over an objects enumerable properties
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1
}

for (let item in student) {  // each item should represent each key in the object
    // console.log(item); 
    console.log(student[item]);  // using object bracket notation to let the value of the for in loop.
    console.log(student.degree) // using dot notation, should pull up "Javascript"
}

let dogArray = ["great dane", 'husky', 'border collie', 'dalmation', 'pug']

for (let dog in dogArray) {
    // console.log(dog);  // should come up with the indices [0, 1, 2, 3, 4] in the array 
    console.log(dogArray[dog])  // should come up with all of the names of the dogs in the array
}


// Challenge - write a for in Loop that capitalizes the first letter of the name, and Lowercases the rest of the name.

let name = 'zACH';
let capName;
​
for (let i in name) {
    if (i == 0) {
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }
}
​
console.log(capName);

