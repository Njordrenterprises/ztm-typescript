/* eslint-disable */
import { strict as assert } from "assert";

const numbers: number[] = [1, 2, 3]
let letters: string[] = ["a", "b", "c"];

letters = ["a", "b", "c"];
//          0    1    2

//if we want to read something its on the right side.
const b = letters[1];
assert.equal(b, "b")

//if we write something it will be on the left side of the =
letters[1] = "z";
assert(letters[1] === "z");
assert.deepEqual(letters, ["a", "z", "c"]);

//try to avoid this:
const mixed = [1, "hello"];

//multidimensional arrays
const names = [
  ["Njord", "L"], //0
  //  0      1
  ["Alice", "B"], //1
  //  0      1
]

const njord = names[0][0];
const L = names [0][1];
const B = names [1][1];

//add an element
  const nums: number[] = []; 
nums.push(10);
nums.push(20);
nums.push(30);
assert.deepEqual(nums, [10,20,30]);


//remove last element 
nums.pop();
assert.deepEqual(nums, [10,20]);
assert.deepEqual(nums, [10,20]);

nums.splice(0,1); //the second number here says how many elements to remove.  The first shows the starting element
assert.deepEqual(nums, [10,20]);






// Arrays offer a way to store and manipulate collections of values of the same/ type. They are defined using square brackets and can be populated with
// values at initialization, or later using various methods such as push(),
// splice(), and concat(). Arrays can be of a fixed length or dynamically
// resized as needed, and they can be used with various array methods to
// perform common operations like sorting, filtering, and mapping.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/Javacript/Reference/Global_Objects/Array
