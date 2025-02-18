const accountId = 10;
let accountEmail = 'sachinborade193432323@yahho.com';
var accountPassword = "2323230";
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);


// accountId = 20;
// once with assigned (const) so we can't change the value
accountEmail = '23@gmail.com'
console.log(accountEmail);


// A variable can be declared in this format as well
accountMethod = 'Cash';

var m1 = 'sachin';
/* 
    Prefer not to use var because of issue in block scope & functional scope
*/

// console table 
console.table([accountId, accountEmail, accountPassword]);
// IT will going to create an table for you
/*  ┌─────────┬────────────────┐
    │ (index) │ Values         │
    ├─────────┼────────────────┤
    │ 0       │ 10             │
    │ 1       │ '23@gmail.com' │
    │ 2       │ '2323230'      │
    └─────────┴────────────────┘
*/

let account;
console.log(account); // ye to undefiened return karega 


