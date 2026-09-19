
const bum = 28.26;
let num = 1256;

console.log(bum); //works just fine, bum is global
console.log(num); //works just fine, num is global

const two = 2;
const three = '3';

console.log(two); //works just fine, one is global
console.log(three); //works just fine, two is global
                    
let course = "WDD131"; //global scope
if (true) {
    let student = "Alice";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    