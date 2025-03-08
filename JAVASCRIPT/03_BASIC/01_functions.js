// Addition of two numbers using function
function addTwoNumbers1(num1, num2) {
    console.log(num1 + num2);
}
function addTwoNumbers2(num1, num2) {
    return num1 + num2;
}
// The above is function definition 

// The below are function calling with arguments
addTwoNumbers1(3, 2);
addTwoNumbers1(3, "4");
addTwoNumbers1("3", "4");

// calling function with an variable name 
const result = addTwoNumbers2(3, 2);
console.log(result);


// calling a function with parameter and without parameter
function loginUserMessage(username) {
    return `${username} just logged in`;
}
// with param
console.log(loginUserMessage("Sachin"));     // Sachin just logged in

// without param
console.log(loginUserMessage());            // undefined just logged in



function calculatePrice(...num3) {
    return num3;
}
console.log(calculatePrice(200, 300, 400));
// returns the array of answers 


const user = {
    username: "Sachin",
    price: 25
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}
handleObject(user); // Username is Sachin and Price is 25





