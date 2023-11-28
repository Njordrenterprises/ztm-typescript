/* eslint-disable */
import { strict as assert } from "assert";
import { parseInt } from "core-js/core/number";

let someNumber = parseInt("10");
const sample = "sample";
const someString = `${sample}`;

//switch statement
switch (someString) {
  case "test":
  //A
  break;
  case "sample":
  //B
  break;
  case "a":
  //C
}

//same thing in else-if
if (someString === "test") {
  //A
} else if (someString === "sample") {
  //B
} else if (someString === "c"){
  //C
}

//switch example
someNumber = parseInt("3");
switch (someNumber) {
  case 1:
    break;
  case 2: 
    break;
  case 3:
    break;
  default:
    // always will run if no case doesnt match. 
}

//same as switch above
if (someNumber === 1) {
  //A
} else if (someNumber === 2) {
  //B
} else {
  //C
}

switch (someNumber) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    break;
}
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
