const user = {
    userName: "Sachin",
    price: 100,
    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`);
        // this keyword is used to refer the current context
        // let's console {this} and we will get to know 
        console.log("THIS IS CONTEXT FORM (THIS)", this);

    }
}

user.welcomeMessage();
user.userName = "Sai";
user.welcomeMessage();

// what will happen if we print this outside the context
console.log(this); // we will get an empty object 
// But if we try it within the function 

function thisKaiAnderKyaHai() {
    console.log(this);
}
thisKaiAnderKyaHai();

/*
  <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
} 
*/


// const hello = function () {
//     console.log(this.userName);
// }
// hello(); //undefined

// Arrow Function 
const hello = () => {
    console.log(this.userName);
}
hello(); //undefined

// In arrow function we can use `this` keyword as well

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) => (num1 + num2);

// {} if we have written parenthesis then `return` keyword is must       => Explicit Return 
// () if we have written parenthesis then `return` keyword is not there  => Implicit Return 

// const addTwo = (num1, num2) => num1 + num2;


const addTwo = (num1, num2) => ({ userName: "Sachin" });
console.log(addTwo(3, 2));




