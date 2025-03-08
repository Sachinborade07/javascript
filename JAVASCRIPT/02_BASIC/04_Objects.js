const instagramUser = new Object(); // This is an singleton object
// const instagramUserUser = {} // This is an non-singleton object

instagramUser.id = '1211212';
instagramUser.name = 'SachinBorade';
instagramUser.isLoggedIn = false;

console.log(instagramUser);
// { id: '1211212', name: 'SachinBorade', isLoggedIn: false }

const regularUser = {
    email: "Sachin@gmail.com",
    fullName: {
        firstName: "Sachin",
        lastName: "Borade"
    },
    profile: instagramUser
}
console.log(regularUser);

// Also we can access the elements inside the objects 
console.log(regularUser.fullName.firstName); // Sachin
console.log(regularUser.fullName.lastName);  // Borade

console.log(regularUser.profile.id);   // 1211212
console.log(regularUser.profile.name); // SachinBorade

// Object.assign() definition;
const target = { 1: 'a', 2: 'b' };
const source = { 3: 'c', 4: 'd' };

const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);
// all the values of target going to merge with source 
console.log(returnedTarget === target);

// spread operator
const obj3 = { ...target, ...source };
console.log(obj3);

// accessing the keys of objects
console.log(Object.keys(instagramUser));
// [ 'id', 'name', 'isLoggedIn' ]

// accessing the values of objects
console.log(Object.values(instagramUser));
// [ '1211212', 'SachinBorade', false ]

// converting keys and values into an single nested array structure
console.log(Object.entries(instagramUser));

// [
//     [ 'id', '1211212' ],
//     [ 'name', 'SachinBorade' ],
//     [ 'isLoggedIn', false ]
//   ]

// Checking if the keys is present in the object or not 
console.log(instagramUser.hasOwnProperty('isLoggedIn'));

const users = [
    {
        id: 1,
        email: 'S@gmail.com'
    },
    {
        id: 1,
        email: 'S@gmail.com'
    },
    {
        id: 1,
        email: 'S@gmail.com'
    }
];


const course = {
    courseName: "JAVASCRIPT",
    instructorName: "Sachin",
    price: "Free"
}


// Concept of Destructuring 

// const { courseName } = course
// console.log(courseName);

const { courseName: c } = course     // Giving an alias to courseName
console.log(c);



// JSON
// Javascript Objct Notation 

{ }