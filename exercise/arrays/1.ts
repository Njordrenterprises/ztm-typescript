// You received a small set of generated data from a client that looks like
// it's out of order. The client noted that they have a bug report open to fix
// the issue, but in the meantime you'll need to sort it out on your own.
// 
//  ----->I've got disorganised data. There is a bug report
//
// Since this data landed in your department and you love writing programs, you
// decide to write one for this task instead of just swapping the values in
// your text editor. 
//
// ----->Create program to order data
//
// The data set consists of two arrays where each element in one array is
// associated with the element at the same index in the other array. For
// example:
//
//   [4,       2,      3]         // ranks
//   ["brown", "gold", "purple"]  // team colors
//
//   Team "brown" ranked 8 while team "gold" ranked 2.
//  
//  -----> Just 3 data sets : 
//         rank(4):team(brown), 
//         rank(2): team(gold) 
//         rank(3): team(purple)
//
//
// Produce a program that can sort the two arrays in order from rank 1 to rank
// 4. Using the example from above, the target arrays should look like this:
//  
//   [2,       3,        4]        // ranks
//   ["gold",  "purple", "brown"]  // team colors
//      0        1         2 
//   -----> Reorder the sets. 
//          empty: [0]
//          empty: [0]
//          rank(2): gold(team)[3],
//          rank(3): purple(team)[4],
//          rank(4): brown(team)[5]
//         
// In order to maximize billable hours, you opt to _not_ use the builtin
// sorting functionality.
//
// Restrictions:
// - Do not use the builtin sort method
// - Do not use an indexing operations (no ranking[1] = ranking[2], for example)
// - Only use array methods
//
// Notes:
// - The solution does not need to work for any arbitrary data set. It only
//   needs to work for the given data set.
// - You don't have to sort in-place (you can make a copy of the data).
//
// Perform the following steps and add assertions to confirm that your program
// behaves as expected:
//
// 1. Sort the `ranking` and `teams` arrays given the above restrictions
// 2. Assert that the `ranking` is [1, 2, 3, 4] and `teams`
//    is ["green", "yellow", "red", "blue"]
// 3. Add team "pink" at rank 5
// 4. Assert that the `ranking` is now [1, 2, 3, 4, 5]
//    and `teams` is ["green", "yellow", "red", "blue", "pink"]
// 5. Sort the updated rankings in reverse order because the client called and
//    wants this done
// 6. Assert that the `ranking` is now [5, 4, 3, 2, 1]
//    and `teams` is now ["pink", "blue", "red", "yellow", "green"]

// 1. Sort the `ranking` and `teams` arrays given the above restrictions
// 2. Assert that the `ranking` is [1, 2, 3, 4] and `teams`
//    is ["green", "yellow", "red", "blue"]:
// 3. Add team "pink" at rank 5
// 4. Assert that the `ranking` is now [1, 2, 3, 4, 5]
//    and `teams` is ["green", "yellow", "red", "blue", "pink"]
// 5. Sort the updated rankings in reverse order because the client called and
//    wants this done:
// 6. Assert that the `ranking` is now [5, 4, 3, 2, 1]
//    and `teams` is now ["pink", "blue", "red", "yellow", "green"]

// Import the assert module for testing
import { strict as assert } from "assert";

// Initial rankings and teams
const ranking = [3, 4, 1, 2];
const teams = ["red", "blue", "green", "yellow"];

// 1. Sort the `ranking` and `teams` arrays given the above restrictions
const fixedRanking = ranking.splice(2, 2);
const newRanking = fixedRanking.concat(ranking);

const fixedTeams = teams.splice(2,2);
const newTeams = fixedTeams.concat(teams)

//2. Assert that the `ranking` is [1, 2, 3, 4] and `teams`
//   is ["green", "yellow", "red", "blue"]:

assert.deepEqual(newRanking, [1, 2, 3, 4]);
assert.deepEqual(newTeams, ["green", "yellow", "red", "blue"]);

//3. Add team "pink" at rank 5
newRanking.push(5);
newTeams.push("pink");

// 4. Assert that the `ranking` is now [1, 2, 3, 4, 5]
//    and `teams` is ["green", "yellow", "red", "blue", "pink"]

assert.deepEqual(newRanking, [1, 2, 3, 4, 5]);
assert.deepEqual(newTeams, ["green", "yellow", "red", "blue", "pink"]);

// 5. Sort the updated rankings in reverse order because the client called and
//    wants this done:

const rankUpdate = newRanking.reverse();
const teamUpdate = newTeams.reverse();

//add a new constant that is used for further updates
assert.deepEqual(rankUpdate, [5, 4, 3, 2, 1]);
assert.deepEqual(teamUpdate, ["pink", "blue", "red", "yellow", "green"]);
