// A student management system requires functionality to add and remove student
// enrollments for various sections (classes). Each student has a list of
// enrollments which may have sections added or removed at any time.
//
    //---> pop and push to an array. the array is the list of the enrollments <--// 
  
// The faculty also needs the ability to determine how many sections any given
// student is enrolled in.

    //---> call length on the array of classes <--//
//
//
// Sections consist only of a section name, for example "Computer Science".
//
//  //---> type of data will be a string in the arrays <--//
//
// Perform the following steps and add assertions to confirm that your program
// behaves as expected:
//
// 1. Add a section titled "CompSci" for `alice`
// 2. Add a section titled "Networking" for `alice`
// 3. Remove a section titled "CompSci" from `alice`

     //---> const alice = {
//          name: "alice",
//          enrollments: []
//}  
// 4. Assert that alice's enrollments consist of only "Networking"
// 5. Add a section titled "Networking" for `bob`
// 6. Assert that bob's enrollments consist of "Algorithms" and "Networking"
// 7. Assert that bob's total enrollment count is equal to 2
//
// Tips:
//
// - Create an `addSection` function to add an enrollment for a student.
// - Create a `removeSection` function to remove an enrollment from a student.
// - Create a `totalEnrollments` function to calculate the number of
//   sections a student is enrolled in.


import { strict as assert } from "assert";

// Define an object called "students" to store information about multiple students
const students = {
  alice: {
    name: "Alice",
    enrollments: [], // Each student has an "enrollments" array to store their course enrollments
  },

  bob: {
    name: "Bob",
    enrollments: [],
  },
};

// Function to add a section (course) to a student's enrollments
function addSection(student, section) {
  student.enrollments.push(section); // Add the section to the student's enrollments array
}

// Function to remove a section (course) from a student's enrollments
function removeSection(student, section) {
  const index = student.enrollments.indexOf(section); // Find the index of the section in the enrollments array
  if (index !== -1) {
    student.enrollments.splice(index, 1); // Remove the section from the enrollments array if it exists
  }
}

// Function to calculate the total number of enrollments for a student
function totalEnrollments(student) {
  return student.enrollments.length; // Return the length of the enrollments array
}

// 1. Add a section titled "CompSci" for alice
addSection(students.alice, "CompSci");

// 2. Add a section titled "Networking" for alice
addSection(students.alice, "Networking");

// 3. Remove a section titled "CompSci" from alice
removeSection(students.alice, "CompSci");

// 4. Assert that alice's enrollments consist of only "Networking"
assert.deepEqual(students.alice.enrollments, ["Networking"]);

// 5. Add a section titled "Networking" for bob
addSection(students.bob, "Networking");

// 6. Assert that bob's enrollments consist of "Algorithms" and "Networking"
assert.deepEqual(students.bob.enrollments, ["Algorithms", "Networking"]);

// 7. Assert that bob's total enrollment count is equal to 2
assert.strictEqual(totalEnrollments(students.bob), 2);
