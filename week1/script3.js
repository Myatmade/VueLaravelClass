//for loop
let usernames = ["John", "Jane", "Doe", "Smith"];

//for (counter, condition, increment){}
for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] == "Doe") {
    console.log("Winner");
  } else {
    console.log("Loser");
  }
}

//for in loop
let person = {
  name: "Alice",
  age: 20,
};

for (let key in person) {
  console.log(person[key]); //prints object values
}

//for of loop
for (let name of usernames) {
  console.log(name); //prints array values
}

//while
let i = 0;
while (i < 3) {
  console.log(usernames[i]);
  i++;
}

//do while, excutes at least once even if condition is false
let j = 4;
do {
  console.log(usernames[i]);
} while (j < 3);

//break and continue
console.log("Using break and continue:");
//continue will skip the current iteration and move to the next one
//break will exit the loop entirely
for (let k = 0; k < usernames.length; k++) {
  if (k == 1) {
    continue;
  }
  console.log(usernames[k]);
}
