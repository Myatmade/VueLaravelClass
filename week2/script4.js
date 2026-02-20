//went onto webapi, other stuff on call stack will run first
//calling from api endpoint to fetch data.
// let todos = fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// console.log("Hello");

// let data = new Promise((resolve, reject) => {});

// async function getData() {
//   return "data";
// }

// getData().then((data) => console.log(data));

function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data");
    }, 2000);
  });
}
//will return result immediately because await use promise and wait for it to resolve or reject before moving on to next line of code
//await bring out the success stuff from promise (can only use await inside async function)

async function getData2() {
  try {
    let result = await wait();
    console.log("1"); //will run first because wait is still waiting for 2 seconds to resolve
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

console.log(getData2()); //will return promise because getData2 is an async function, it will wait for the promise to resolve before returning the result

//promise comes out first, then 1, then data.
//why?
//because getData2 is an async function, it will return a promise immediately, then it will wait for the promise to resolve before moving on to the next line of code. So it will log 1 and data after 2 seconds, but it will return the promise immediately.

//micro first before macro, so promise will come out first, and then setTimeout (both goes to webapi)

async function getData3() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let todos = await response.json();
  console.log(todos);
}
getData3();
