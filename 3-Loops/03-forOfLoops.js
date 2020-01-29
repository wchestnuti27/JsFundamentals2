// For Of Loops // 
/*
    - forOf Loops look at the iterable properties on an array (object) 
    - cant use forOf Loops on objects because objects are enumerable, not iterable
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript"
    week: 1
}

for (let item of student) {
    console.log(item);
}
//  Don't use a forOf look with objects, just arrays

let dogArray = ["great dane", 'husky', 'border collie', 'dalmation', 'pug']

for (let dog of dogArray){
    console.log(dog, 'goes bark');
}
