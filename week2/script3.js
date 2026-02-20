//synchronous

function LogOne() {
  console.log("One");
}

function LogTwo() {
  LogOne();
  console.log("Two");
}

LogTwo();

//Call Stack (sync only) last in first out
//LogOne()
//LogTwo()

//asynchronous
//callback hell

// function getUser(callback) {
//   setTimeout(() => {
//     console.log("User loaded");
//     callback(1);
//   }, 1000);
// }

// function getOrder(userId, callback) {
//   setTimeout(() => {
//     console.log("Order loaded");
//     callback(["order1", "order2"]);
//   }, 1000);
// }

// function getPayment(orders, callback) {
//   setTimeout(() => {
//     console.log("Payment loaded");
//     callback("Paid");
//   }, 1000);
// }

// getUser((userId) => {
//   getOrder(userId, (orders) => {
//     getPayment(orders, (payment) => {
//       console.log(payment);
//     });
//   });
// });

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User loaded");
      resolve(1);
    }, 1000);
  });
}

function getOrder(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order loaded");
      resolve(["order1", "order2"]);
    }, 1000);
  });
}

function getPayment(orders) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Payment loaded");
      resolve("Paid");
    }, 1000);
  });
}

getUser()
  .then((userId) => getOrder(userId))
  .then((orders) => getPayment(orders))
  .then((payment) => console.log(payment));
//Promise
//pending
//resolve
//reject

const data = new Promise((resolve, reject) => {
  setTimeout(() => {
    let name = "John1";
    if (name === "John") {
      resolve("Success");
    } else {
      reject("Error");
    }
  }, 5000);
});

data
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// function LogOne() {
//   console.log("One");
// }
// function LogTwo() {
//   LogOne();
//   setTimeout(() => {
//     console.log("Two");
//   }, 1000);
//    console.log("3");
// }
// LogTwo();

//call stack
//LogOne()
//LogTwo()

//call back queue (prioritize call stack, then will do the stuff in callback queue)
//log()

//webapis
//set timeout -> 1000
