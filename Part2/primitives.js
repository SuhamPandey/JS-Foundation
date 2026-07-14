//  Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

//boolean
let isActive = true;
let isReallyActive = new Boolean(true);   //not recommeded

// null and undefined

let firstname = null
let lastname = undefined
console.log(firstname);
console.log(lastname);

// String

 let myString = "hello"
 let myStringOne = 'Hola'
 let username = "suham"

 let oldGreet = myString + " suham"
 console.log(oldGreet);
 
 let greetMessage = `hello ${username} !! `;
 let demoOne = `Value is ${2 * 2}`;
 console.log(greetMessage);
 console.log(demoOne);

let sm1 = Symbol("suham");
let sm2 = Symbol("suham");

console.log(sm1 == sm2);
