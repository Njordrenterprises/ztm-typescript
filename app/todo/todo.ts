// Importing the filesystem module from Node.js to handle file operations.
import fs from "fs";

// Path to the JSON file where todos are stored.
const todosPath = "todos.json";

// Defining a type for Todo objects, with an id and a task as string.
type Todo = { 
  id: number;
  task: string;
};

// Function to retrieve todos from the JSON file.
function getTodos(): Todo[] {
  // Check if the todos file exists.
  if (!fs.existsSync(todosPath)) {
    // Return an empty array if file does not exist.
    return [];
  }
  // Read the file contents.
  const data = fs.readFileSync(todosPath);
  // Parse the JSON data and return it as an array of Todo objects.
  return JSON.parse(data.toString()) as Todo[];
}

// Function to list all todos to the console.
function listTodos(): void {
  // Retrieve the list of todos.
  const todos: Todo[] = getTodos();
  // Loop through each todo item.
  for (let i = 0; i < todos.length; i++) {
    // Log the todo item. 'todos[i]' accesses the todo at position 'i' in the list.
    console.log(`${todos[i].id}: ${todos[i].task}`);
  }
}

// Function to save todos back to the JSON file.
function saveTodos(todos: Todo[]): void {
  // Write the array of todos to the file, converting it to a JSON string.
  fs.writeFileSync(todosPath, JSON.stringify(todos));
}

// Function to remove a todo item by its id.
function removeTodo(id: number): void {
  // Retrieve the current list of todos.
  const todos: Todo[] = getTodos();
  // Find the index of the todo with the given id.
  const index = todos.findIndex(function(todo) {
    return todo.id === id;
  });
  // Check if the todo was found.
  if (index === -1) {
    // Log an error message if the todo was not found.
    console.log(`Could not find todo with id ${id}`);
    return;
  }

  // Remove the todo from the array and save the updated list.
  const removedTodo = todos.splice(index, 1)[0];
  saveTodos(todos);
  // Log a confirmation message.
  console.log(`Removed todo ${removedTodo.id}: ${removedTodo.task}`)
}

// Function to add a new todo item.
function addTodo(task: string): void {
  // Retrieve the current list of todos.
  const todos: Todo[] = getTodos();
  // Determine the new todo's id.
  const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  // Add the new todo to the array.
  todos.push({ id, task });
  // Save the updated list of todos. 
  saveTodos(todos);
  // Log a confirmation message.
  console.log(`Added todo ${id}: ${task}`);
}

// Main function to handle command-line interface.
function cli(): void {
  // Retrieve the subcommand from command-line arguments.
  const subcommand = process.argv[2];
  // Retrieve additional options from command-line arguments.
  // 'process.argv.slice(3)' gets everything in the command line after the subcommand.
  const option = process.argv.slice(3);

// Function to handle invalid options for subcommands.
function cliInvalidOption(command: string): void {
  // Log an error message for invalid options.
  console.error(`Invalid number of options for subcommand "${command}" `);
}

  // Handle different subcommands based on what the user typed.
  switch (subcommand) {
    case "--help":
      // Display help information.
      console.log("todo add TASK  add todo");
      console.log("todo done ID   complete a todo")
      console.log("todo list      list todo");
      break;

    case "add":
      // Handle the 'add' subcommand.
      // 'option.length === 1' means "If there is exactly one additional argument..."
      if (option.length === 1) {
        addTodo(option[0]);
      } else {
        cliInvalidOption("add");
      }
      break;

    case "done":
      // Handle the 'done' subcommand.
      // Check if exactly one argument is provided.
      if (option.length === 1) {
        const id = parseInt(option[0]);
        if (isNaN(id)) {
          // Log an error if the id is not a number.
          console.log(`Option must be a number for subcommand "done"`);
        } else {
          removeTodo(id);
        }
      } else {
        cliInvalidOption("done");
      }
      break;

    case "list":
      // Handle the 'list' subcommand.
      // 'option.length === 0' means "If there are no additional arguments..."
      if (option.length === 0) {
        listTodos();
      } else {
        cliInvalidOption("list");        
      }
      break;
    default:
      // Log an error for invalid subcommands.
      console.log("Invalid Subcommand");
  }
  // Uncomment below to log the process arguments for debugging.
  // console.log(process.argv);
}

// Execute the CLI function.
cli();

