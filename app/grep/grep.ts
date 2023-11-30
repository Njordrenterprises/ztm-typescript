// Importing 'readFileSync' from the 'fs' module – that's our key to reading files.
import { readFileSync } from "fs";

// Here, we're grabbing the command-line arguments. The first two aren't needed, so let's skip them.
const args = process.argv.slice(2);

// The first user argument is our filename. Think of it as the map to our treasure.
const filename = args[0];

// Next up, we've got our searchString. This is what we're looking to find in the file, like a detective looking for clues.
const searchString = args[1];

// Reading the file's content here. Using 'utf8' so the file speaks to us in a language we understand.
const contents = readFileSync(filename, "utf8"); 

// Let's split the file contents into lines. Each line is like an individual piece of the puzzle.
const lines = contents.split("\n"); 
console.log(lines); // Quick check: Let's see all the lines we've got.

// Time to loop through each line. We're on a mission to find our searchString.
for (let i = 0; i < lines.length; i++) {
  // Does this line have what we're looking for?
  if (lines[i].includes(searchString)) {
    // Bingo! Found it. Let's show this line to the world.
    console.log(lines[i]);
  }
}

