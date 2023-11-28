/* eslint-disable */
 const sum = function (lhs: number, rhs: number): number {
  return lhs + rhs;
}

//arrow function addition 
const arrowSum = (lhs: number, rhs: number): number => {
  return lhs + rhs;
}

const arrowSub = (lhs: number, rhs: number): number => {
  return lhs - rhs;
}

const two = sum(1,1);
const three = arrowSum(2,1);

//function signature

//function alias
type calculationFn = (lhs: number, rhs: number) => number;

function calculate(
  fn: calculationFn, lhs: number, rhs: number): number {
  const result = fn(lhs, rhs);
  if (result === 7) {
    console.log("you win extra!");
  }
  return result;
}

console.log(calculate(arrowSum, 5, 5));
console.log(calculate(arrowSub, 10, 3));
// Arrow functions provide a concise syntax for defining functions. They are
// defined using a fat arrow (=>) and can be used in place of traditional
// function expressions. Arrow functions automatically bind the 'this' keyword
// to the parent context, making them useful in event handlers and callback
// functions. They also support implicit return statements for one-liner
// functions, which makes the code more readable.
// 
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
