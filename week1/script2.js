// + - * / % **

// > < >= <= == ===

let a = "20";
let b = 20;

//b += 10; //shorthand for b = b + 10
console.log(b);

console.log(a > b); // greater than

console.log(a == b); // equality operator (only check value)

console.log(a === b); // strict equality operator (checks both value and data type)

// || && !

true || true; // true
true || false; // true
false || false; // false

true && true; // true
true && false && true; // false
false && false; // false

console.log(a > b || a == b); // false || true => true

console.log(a > b && a == b); // false && false => false

console.log(a > b || a != b); // false || false => false
console.log(a != b); // false

//if else
let isAuth = false;
if (isAuth) {
  console.log("User is authenticated");
} else {
  console.log("Show register button");
}

let score = 80;
if (score >= 80) {
  console.log("Grade A");
} else if (score >= 60 && score < 80) {
  console.log("Grade B");
} else if (score >= 40 && score < 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

let value = 4;
switch (value) {
  case 1:
    console.log("This is 1.");
    break;
  case 2:
    console.log("This is 2.");
    break;
  case 3:
    console.log("This is 3."); // the whole thing is a statement
    break;
  default:
    console.log("This is default.");
}

// condition ? true : false
isAuth
  ? console.log("User is authenticated")
  : console.log("Show register button");

// expression and statement
a + b; // gives a value back so it is called an 'expression'
a > b; // gives a value back so it is called an 'expression'

let c; // does not give a value back so it is called a 'statement'
