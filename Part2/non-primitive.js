let username = {
    "first name": "suham", 
    isLoggedIn: true,
};
username.firstname = "Mr. S"
username.lastname = "Pandey"

console.log(username["first name"]);
console.log(username.lastname);
console.log(username);
console.log(typeof username);


let today = new Date();
// console.log(today.getDate());
// console.log(today.getDay());


//  Array

let anotherUser = ["suham", true];
console.log(anotherUser[0]);

console.log(1 + "1");

let isValue = "2";
console.log(Number(isValue));
console.log(typeof Number(isValue));
console.log(Number(null));        //  0
console.log(Number(undefined));   // NaN
