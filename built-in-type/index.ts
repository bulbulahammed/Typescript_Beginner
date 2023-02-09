// Built in Data type: Number, String, Boolean, Void, Undefine, Null

let firstName: string;
let lastName: string;
let fullName: string;
let age: Number;
let isAdmin: boolean;

firstName = "Bulbul";
lastName = "Ahammed";
fullName = firstName.concat(" ", lastName);
age = 25;
isAdmin = true;

console.log(
  `Your First Name:${firstName}, Your last name is ${lastName}, Your age ${age}, Your Full Name ${fullName}, are you an admin ${isAdmin}`
);
