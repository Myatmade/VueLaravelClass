//factory function

//let user ={
//
//}
// new Object ();
//Object

function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`,
      );
    },
  };
}
//create object based on object
//prototypes

const user1 = createUser("Alice", 30);
const user2 = createUser("Bob", 25);
console.log(user1);
user1.greet();
user2.greet();

//constructor function
//to create objects
//starts with captial letter, use this~ (dynamic)

// {}
// this ={}
// User => Prototype Object
// return {}

function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  };
}
const user3 = new User("Charlie", 35);
//if not new keyword, this will refer to global object (window in browser) and it will create properties on global object
console.log(user3);

// class
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
const car = new Car("Toyota", "Corolla");
console.log(car);

//encapsulation
class BankAccount {
  #balance;
  //private field, cannot be accessed outside the class
  constructor(balance) {
    this.#balance = balance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    console.log(amount); //cannot use static
  }
  getBalance() {
    return this.#balance;
  }
  setBalance(balance) {
    this.#balance = balance;
  }
}

const bankaccount = new BankAccount(1000);

bankaccount.withdraw(200);

//abstraction

class PaymentService {
  processPayment(amount) {
    this.validatePayment(amount);
    this.connectToBank();
    this.deductMoney(amount);
  }
  validatePayment(amount) {
    // Add validation logic here
    console.log("Validating payment:", amount);
  }
  connectToBank() {
    // Placeholder
    console.log("Connecting to bank...");
  }
  deductMoney(amount) {
    // Placeholder
    console.log("Deducting money:", amount);
  }
}
const paymentService = new PaymentService();
paymentService.processPayment(100);

//inheritance

class Animal {
  eat() {
    console.log("Eating...");
  }
  bark() {
    console.log("Animal is barking...");
  }
}
class Dog extends Animal {}

class Cat extends Animal {
  bark() {
    console.log("meow!");
  }
  play() {
    console.log("Cat is playing...");
  }
}

const dog = new Dog();
dog.eat();
dog.bark();

const cat = new Cat();
cat.eat();
cat.bark();
cat.play();

//polymorphism
class Shape {
  draw() {}
}
class Circle extends Shape {
  draw() {
    console.log("Drawing a circle...");
  }
}
class Square extends Shape {
  draw() {
    console.log("Drawing a square...");
  }
}
