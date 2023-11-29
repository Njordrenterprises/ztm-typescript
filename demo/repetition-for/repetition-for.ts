/* eslint-disable */

//        init   bool  inc   
for (let i = 1; i<=5; i++) {
  console.log(`${i}`);
}

for (let i = 5; i > 0; i--) {
  console.log(`${i}`); 
}

for (let i = 1; i<=10000; i++) {
  console.log(`${i}`);
 //if i equals three then it breaks and prints 3
  if (i === 3) {
    break;
  }
}

for (let i = 1; i<=10000; i++) {
  console.log(`${i}`);
 //if i equals three then it breaks and prints 3
  if (i === 3) {
    break;
  }
}

for (let i = 1; i<=10000; i++) {
  console.log(`${i}`);
 //if i equals three then it breaks and prints 3
  if (i === 3) {
    break;
  }
}

for (let i = 1; i<=10000; i++) {
  console.log(`${i}`);
 //if i equals three then it breaks and prints 3
  if (i === 3) {
    break;
  }
}

for (let i = 1; i<=10000; i++) {
  console.log(`${i}`);
 //if i equals three then it breaks and prints 3
  if (i === 3) {
    break;
  }
}

for (let i = 1; i<=10000; i++) {
  console.log(`${i}`);
 //if i equals three then it breaks and prints 3
  if (i === 5) {
    break;
  }
  
  if (i === 3) {
    continue;
  }


console.log("hi")
}

//iterating through an array - this just lists the letters 
//in the sequence of the array - not appropriate nowadays
const letters = ["a", "b", "c"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]); 
}
// The `for` loop consists of three expressions separated by semicolons,
// followed by curly braces where the loop body is placed.
//
// for (A;B;C) { }
//
// A: This is evaluated one time when the `for` loop is first encountered.
//    It is typically used to create a loop counter variable.
// B: A boolean expression which is checked _before_ the loop executes
//    the next iteration. This is used to determine whether the loop
//    should continue.
// C: An expression that is evaluated _after_ the loop body executes, on each
//    iteration. It is normally used to increment the loop counter created
//    in (A).
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
