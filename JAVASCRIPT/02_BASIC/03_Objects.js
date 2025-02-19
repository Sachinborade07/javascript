// Objects Litrals

const mySym = Symbol("key");

const user = {
    name: 'Sachin',
    age: 21,
    [mySym]: 'key1',
    location: 'Mumbai',
    email: 'sachinborade195@gmail.com',
    isLoggedIn: false,
}

console.log(user.name);
console.log(user['name']);
// Accessing the Symbols
console.log(user[mySym]);

// Changing the values
user.email = 'sachinborade@yahho.com'
console.log(user['email']);

// Here we can also add an function into object
user.greeting = function () {
    console.log(`Hello ${this.name}`);
}

console.log(user.greeting());


