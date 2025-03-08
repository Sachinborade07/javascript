// Scope of Variable


// Impact of Local Scope on var
// Here globally c = 300 but due to local call it become 30

var c = 300
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a); //ReferenceError: a is not defined
// console.log(b); // ReferenceError: a is not defined
console.log(c);  // But in case of var we will get our value 
// 30 as output 

// The same case if not with other variables

let a = 200;
const b = 300;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}
console.log(a);
console.log(b);



function one() {
    const userName = "Sachin";

    function two() {
        const website = "www.mywebsite.com";
        console.log(website);
    }
    // console.log(website); // ReferenceError: website is not defined
    two()
}
one();

if (true) {
    const username = "sachin";
    if (username === "sachin") {
        const website = "www.sachin.com";
        console.log(username + website);
    }
    // console.log(username + website); //ReferenceError: website is not defined
}
// console.log(username);


// ************************************************************ //
/* 
    The below are two methods are defined to create an function 
*/

console.log(addOne(5));
function addOne(num) {
    return num + 1;
}
console.log(addOne(5));
// In this first type of function definition I can able to access the function even 
// if call the function definition first and then write down its function definition 


// In this second type if I call the function before the function definition the function 
// is not going get executed it will throw an error 

// console.log(addTwo(20)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(20));


