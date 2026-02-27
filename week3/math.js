//common js -> require
// es module -> import/ export

function add(a, b) {
  console.log(a + b);
}
export function saymyname(name) {
  console.log(name);
}

//can only write once
export default add;

// module.exports = {
//   add,
//   saymyname,
// };

//npm init -y
