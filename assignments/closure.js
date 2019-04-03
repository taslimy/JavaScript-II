// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let mySelf = "Taslim";
function pizza() {
  return `${mySelf} loves pizza`;
}
console.log(pizza());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // https://www.w3schools.com/js/js_function_closures.asp
  let count = 0;
  return () => {
    count++;
    return count;
  };
};
const myCounter2 = counter();
myCounter2(); //1
myCounter2(); //2
myCounter2(); //3
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
