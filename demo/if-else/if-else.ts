/* eslint-disable */
import { strict as assert } from "assert";

//constants
const answer = 2 +2;
assert.equal(answer, 4);

//if  
if (answer > 4) {
  console.log(">4");
}

//else
if (answer === 4) { 
  console.log("=4");
} else {
  console.log("!4");
}

if (answer < 4){
  console.log("Its less then 4");
} else if (answer > 4) {
  console.log("That's bigger then 4.");
} else {
  console.log("That's equal to 4.")
}

// if - else if - else --  can have as many else if as we want

const age = 6;
const likesHavingFun = true;

if (age <= 12 && likesHavingFun) {
  //play at the park
} else if (age > 12 && !likesHavingFun) {
  //be bored
} else {
  //work on hobbies
}

//simplifying else-if

//Overtime approval 
//constants
const hasTheSkills = true;
const day = "tuesday";
const hoursWorked = 9;
const totalOvertime = 0.5;
const holidaySeason = false;

function approveWork() {
  if (
  (hasTheSkills &&
      (day === "tuesday" || (hoursWorked > 8 && totalOvertime < 1))) || //or
  holidaySeason
  ) {
    //approve work
  } else {
    //go home
  }
}

//overtime approval making cleaner

function approveMoreWork () {
  if (!hasTheSkills) {
    //go home
    return;
  }

  // const canWorkOvertime = hoursWorked > 8 && totalOvertime < 1;
  if (!hasOvertimeHours(hoursWorked, totalOvertime)) {
    // go home
    return;
  }
  
  if (!isBusyDay(day, holidaySeason)) {
    //go home
    return;
  }

  //monthly max
  
  //employee late issue

  // approve work
 }

function isBusyDay(day: string, holidaySeason: boolean): boolean {
  return holidaySeason || day === "tuesday";
}

function hasOvertimeHours(hoursWorked: number, totalOvertime: number): boolean {
  const hasHours = hoursWorked > 8 && totalOvertime < 1;
  return hasHours;
}

//encaspulate logic into functions 
// move logic into individual units



//else if
// Control flow is the order in which statements are executed in a program. It
// allows programmers to control the flow of their code based on certain
// conditions or events. Control flow structures include conditional
// statements, loops, and function calls, which allow for branching and
// repetition of code.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
