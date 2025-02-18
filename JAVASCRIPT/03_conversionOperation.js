let score = "10";
let n1 = "343dfdhf";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let n2 = Number(n1);
console.log(n2);
// We wil get NaN --> i.e. Not a Number


let score1 = null;
score1 = Number(score1);
console.log(score1);
// The null will get converted into 0

let score2 = undefined;
score2 = Number(score2);
console.log(score2);
// We will going to get and NaN

let isLoggedIN = 1;
console.log(isLoggedIN);

isLoggedIN = Boolean(isLoggedIN);
console.log(isLoggedIN);
// 0 -> false
//  1 -> true
// "" -> false
// "sachin" -> true



