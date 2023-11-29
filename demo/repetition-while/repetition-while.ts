/* eslint-disable */

let i = 1; //when defining a variable do it first then can just change it after:
while (i <= 5) {
  console.log(`${i}`);
  i += 1;
}

i = 1;//changing it like this without let
while (i <= 5) {
  if (i === 4) {
  i += 1;
  continue;
}
  console.log(`${i}`);
  i += 1;
}

i=1;
while (true) {
  if (i >= 30) {
    console.log("quit loop")
    break;
  }
  i += 1;
}// A `while` loop executes the body while (as long as) some boolean expression
// is `true`. It is your responsibility to manage when and how the loop exits.
// 
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
