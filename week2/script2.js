let person = {
  name: "Erika",
  age: 30,
  isStudent: true,
};
// console.log(Object.keys(person));

//destructuring
let { name: Myname, age, isStudent } = person; //name: Myname is used to rename the variable name to Myname
console.log(Myname);

//let name = "John";

//error handling
let x = 5;
try {
  let z = x + y;
} catch (err) {
  console.log(err);
}
//if try catch is not used, the error will stop the execution of the code and the rest of the code will not run

//destructuring arrays
let numbers = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = numbers; //need variables to destructure the array
console.log(a);

//Global Scope
let name2 = "Erika";

//use function scope that is in function
function sayMyname() {
  //Function scope
  let age = 30;
  if (age > 20) {
    //block scope
    let isStudent = false; //var is function scope, let and const are block scope
    //var isStudent = false; will work if isStudent is called in the function scope but will not work if called outside of the function scope
    console.log(isStudent);
  }
  //console.log(isStudent); //undefined because isStudent is not in function scope
  console.log(age);
}
sayMyname();
//console.log(age); //undefined because age is not in global scope

//Js runs line by line, but can use async
//normal code runs first, even if there is no timer, setTimeout will run after the normal code because it is asynchronous
setTimeout(function () {
  console.log("This is a delayed message");
}, 2000);

// setInterval(function () {
//   console.log("Time updating");
// }, 1000);

console.log("hello"); //will run before the setTimeout
