/* eslint-disable */
import { strict as assert } from "assert";

type Title = string;
type PublishYear = number;
//COOL! Add tuple types to set data type of an array
type Book = [Title, PublishYear];
//cant add data to a tuple type beyond what is set in the tuple
const sample: Book = ["sample", 1980];
assert.equal(sample[0], "sample");
assert.equal(sample[1], "1980");

//create function called coord then with : create type tuple.
function coord(): [number, number] {
  return [3,5];
}

const coordinate = coord();
assert.equal(coordinate[0], 3);
assert.equal(coordinate[1], 5);

//destructuring a tuple - here takes the tuple in function coord
//places the index 0 to x and the index 1 to y. 
const [x,y] = coord();
assert.equal(x, 3);
assert.equal(x, 5);

//putting a tuple inside an array. 
const multi: [number, number][] = [
  coord(), 
  [1,1], 
  [0,0],
  [9,9],
];

// Tuples provide a wamicrosofty to express an array with a fixed number of elements of
// different types, creating a data structure with multiple different types.
// They can be especially handy when dealing with scenarios such as
// representing coordinates, storing key-value pairs, or returning multiple
// values from a function. Since they are type-checked, TypeScript can ensure
// that the values in the tuple are correct at compile time.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
