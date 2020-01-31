let person1 = {
    name: 'Macy',
    age: 15,
    canVote: false
};

let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
};

let person1 = {
    name: 'Jeremy',
    age: 30,
    canVote: true
};

// (1)     (2)        (3)
function person(name, age, canVote) {
    // (4)   (5)   (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
//            (7)   (8)
let person4 = new person('James', 80, true);
let person5 = new person('Tim', 22, true);

console.log(person4);
console.log(person5);

/* 
    1. Function keyword
    2. Function name (for constructor functions the names should always be capitalized)
    3. parameters of the function (values of the object)
    4. his keyword referring to each keyword in the object
    5. setting the keys for the above related object 
    6. parameters for the new person that we will create
    7 & 8. the new keyword creates a new instance of our function with values that we passed into that function.
*/

