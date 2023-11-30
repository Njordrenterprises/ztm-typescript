import fs from "fs";

const todosPath = "todos.json";

type Todo = { 
id: number;
task: string;
};

fucntion getTodos(): Todo[] {
  if (!fs.existsSync(todosPath)) {
  return [];
  }
  const data = fs.readFileSync(todosPath);
return JSON.parse(data.toString()) as Todo [];
}

function listTodos(): void {}

function saveTodos(todos: Todo []): void {
  fs.writeFileSync(todosPath, JSON.stringify(todos));
}

function removeTodo(id: number): void {}

function addTodo(task: string): void {
  const todos: Todo [] = getTodos();
  const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  todos.push({ id, task });
  saveTodos(todos);
  console.log(`Added todo ${id}: ${task}`);
}

function cli(): void { }

