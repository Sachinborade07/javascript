//JavaScript is a dynamically typed language, but
// TypeScript is a statically typed language.


/* ************************************************************ */

// Stack (Primitives), Heap(Non-Primitives)


// Primitives

// 7 Types
/*
1. String
2. Number
3. Boolean
4. null
5. Undefined
6. Symbol
7. BigInt
*/
const Id = 100
const anotherId = '100'

console.log(Id == anotherId); // true
// It converts the number into string and then compares

console.log(Id === anotherId);//false
// It doesn't converts the number into string directly compares

const bigNumber = 3423498128492340129n
// not it is an BIGINT of JS


// References (non-primitive)

// Array
// Objects
// Function 

//Array
const heros = ['BatMan', 'SpiderMan', 'IronMan'];

//Objects
let myObj = {
    name: 'Sachin',
    age: 21
}

//Functions
const myFunction = function () {
    console.log("Hello World");
}



