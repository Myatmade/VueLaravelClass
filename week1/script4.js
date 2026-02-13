let usernames = ["John", "Jane", "Doe", "Smith"];

// for reusable code, functions can include parameters for dynamic input
//parameter
function PickWinner(username) {
  if (username == "Doe") {
    console.log("Winner");
  } else {
    console.log("Try Again");
  }
}

//arguement
PickWinner(usernames[2]);
PickWinner(usernames[0]);

function addNumbers(a, b) {
  let sum = a + b;
  return sum; //results can be returned
}
let result = addNumbers(5, 10);
console.log(result); //15

//anonymous function, can be assigned to a variable and called later
let myFunction = function (x, y) {
  console.log(x + y);
};
myFunction(2, 3);

const add = (x, y) => x + y; //arrow function, concise syntax for functions
console.log(add(3, 4)); //7

//use 'this' instead of person
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 20,
//   getFullName: function () {
//     return person.firstName + " " + person.lastName;
//   },
// };

let person2 = {
  firstName: "Mg",
  lastName: "Aye",
  age: 20,

  getFullName() {
    return this.firstName + " " + this.lastName;
  },
  //this refers to the current object
};
console.log(person2.getFullName());
