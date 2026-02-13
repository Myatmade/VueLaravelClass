let name = "erika";

//checking the length of the string
console.log(name.length);

//getting the character at index 2
console.log(name.charAt(2));

//converting the string to lowercase
console.log(name.toLowerCase());

//start, stop index for substring
console.log(name.substring(1, 4));

let name2 = "  Erika  ";

//removing whitespace from both ends of the string
console.log(name2.trimEnd());
console.log(name2.trimStart());
console.log(name2.trim());

let phrase = "my name is erika erika";
let text = "50.1";

//replacing a substring with another substring
console.log(phrase.replaceAll("erika", "john"));

console.log(text.padEnd(4, "0"));
console.log(phrase.repeat(100));

console.log(phrase.split(""));
console.log(phrase.concat(" from earth"));
console.log(phrase.slice(0, 7));

let number = 40;
//make number to string, fixed point notation, check if integer
console.log(number.toString());
console.log(number.toFixed(2));
console.log(Number.isInteger(number));
console.log(Number.isInteger(parseFloat(text)));
