let fruits = ["apple", "banana", "orange"];
console.log(fruits.length);
fruits.push("kiwi");
fruits.pop();
//delete item from the beginning of the array
fruits.shift();
//add item to the beginning of the array
fruits.unshift("grape");

//flat the nested array
console.log(fruits.flat());

//concat method does not change the original array, it returns a new array
console.log(fruits.concat("orange"));

//slice method does not change the original array, it returns a new array
console.group(fruits.slice(0, 1));

//step index, delete count, and add item; the original array will be changed
fruits.splice(1, 2, "pear");

//convert the array to a string, and it will separate the items with a comma
console.log(fruits.toString());
console.log(fruits);

//print all items in the array by loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//this is a callback function, it will be called for each item in the array
//fruits.forEach(callbackFunction);

//for each item becomes the parameter of the callback function, and the callback function will be called for each item in the array
fruits.forEach(function (item) {
  console.log(item);
});

// let numbers = [1, 2, 3, 4, 5];
// let doubleNumbers = [];
// numbers.forEach(function (number) {
//   doubleNumbers.push(number * 2);
// });
// console.log(doubleNumbers);

//when we want a new array based on the original array, we can use the map method, it will return a new array
let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(function (number) {
  return number * 2; //need to return the new value, otherwise it will be undefined
});
console.log(doubleNumbers);

let evenNumbers = numbers.filter(function (number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

//OR GATE; return true if at least one item in the array satisfies the condition, otherwise return false
let result = numbers.some(function (number) {
  return number > 3;
});
console.log(result);

console.log(evenNumbers);

//AND GATE; return true if all items in the array satisfy the condition, otherwise return false
let result2 = numbers.every(function (number) {
  return number > -1;
});
console.log(result2);

//to reduce the array to a single value, it takes a callback function and an initial value as parameters
let sumResult = numbers.reduce(function (prev, current) {
  let total = prev + current;
  return total;
}, 0);
console.log(sumResult);

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
