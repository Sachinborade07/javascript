// array

const myArr = [0, 1, 2, 3, 4, 5, true, 'Sachin'];

console.log(myArr);
// Accessing the elements using index
// console.log(myArr[0]);

// JavaScript copy-operation crates shallow copies

// The shallow copy of an object is a copy whose properties share the same references
// If you change the copy or original object the changes will occures in both

// Deep Copy :- The copy which does not shares the same references


//Array Methods 
// Inserting element
myArr.push(6);
console.log(myArr);
myArr.push(7);
console.log(myArr);

// Removing element
myArr.pop();
console.log(myArr);
// It doesn't take any kind of parameter just removes the last element of the array 

// Adds the 9 at the front 
myArr.unshift(9);
console.log(myArr);

// Remove the value from front 
myArr.shift();
console.log(myArr);



const newArr = myArr.join();

console.log(myArr);
console.log(newArr);


let myn1 = [1, 2, 3, 4, 5, 6, 7];

const n1 = myn1.slice(0, 3);
console.log("This is Slice", n1);
console.log("The original Array ", myn1);

const n2 = myn1.splice(0, 3);
console.log("This is Splice", n2);
console.log("The original Array ", myn1);
