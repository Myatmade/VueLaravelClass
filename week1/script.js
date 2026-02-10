console.log("Hello, World!");
//Primitive data types: string, number, boolean, null, undefined
//Primitive data types are copied by value

//Reference data types: array, object
//Reference data types are copied by reference

// var: not used anymore, let const

let studentName = "erika"; //new variable, can change
// saved in memory, and bring it back
studentName = "erika2";
console.log(studentName);
const name = "myat";
//name = "hehe"; const variable cannot be changed

// if consolole.log(name) is before declaring variable for const, it will
// give error. but for var, it will give undefined.
// if let => Cannot access 'teacherName' before initialization, go into death zone

//console.log(teacherName);
//var teacherName = "sarah"; This will give undefined

// string: '' or ""
let studentCount = 20; //number, js does not have float or int, just number
let isClassFinished = true; //boolean: true or false
let emptyBox = null; //null: empty value
console.log(emptyBox); //null

let hello;
console.log(hello); //undefined: no value assigned

let a = 10;
let b = a;
b = 20; // b is copied from a, but when we change b, a is not changed
console.log(a); //10, primitive data type is copied by value
console.log(b); //20

//array
let username = [
  1,
  "erika",
  true,
  null,
  undefined,
  [hello, "mg mg", true, 2000, [1, "Aye Aye"]],
];
//index:      0      1       2      3        4
console.log(username[5]); //accessing array element
console.log(username[5][4][1]); //accessing nested array element

let person = ["Justin", 20, true];
person[3] = 2000; //adding new element to array
console.log(person);
person[1] = 21; //changing element
console.log(person);

//object: key-value pair
let teacher = {
  name: "John",
  age: 30,
  isMarried: false,
};
console.log(teacher.age);
person["hello"] = 40; //adding new key-value pair to object or can modify existing one
console.log(person);

// to do app
let todos = [
  {
    text: "todo 1",
    isCompleted: false,
  },
  {
    text: "todo 2",
    isCompleted: true,
  },
];
console.log(todos[1].isCompleted);

let teacher2 = teacher;
teacher2.name = "Mike";
console.log(teacher.name); // Mike, reference data type is copied by reference
console.log(teacher2.name); // Mike
