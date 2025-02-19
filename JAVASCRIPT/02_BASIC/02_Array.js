const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

// arr1.push(arr2);
// console.log(arr1);
// console.log(arr1[5][1]);

// const arr = arr1.concat(arr2);
// console.log(arr);

// Spread Operator

const all_array = [...arr1, ...arr2];
console.log(all_array);

// converting String to Array 

console.log(Array.from('SACHIN'));


let val1 = 100;
let val2 = 200;
let val3 = 300;

console.log(Array.of(val1, val2, val3));

