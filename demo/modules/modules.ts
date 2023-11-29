/* eslint-disable */
import { strict as assert } from "assert";

//           Rename a type from import
import {add, pi, Int as Integer } from "./math";
      //importing default from coord.ts 
      //not good practice as this can be changed
      //to anything. 
import Point from "./coord";
      //better to import using { Point } and not 
      //using a default export for readability
const three: Integer = 3;

const four = add(2, 2);
// ES modules provide a way to organize code into separate files that can be
// imported and used in other files.To use an ES module, the the `import`
// keyword is used.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/modules.html
