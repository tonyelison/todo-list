import projectFactory from './project';
import todoFactory from './todo';

const todo = todoFactory(1, 'Title', 'Description', new Date(), 1, 0);
console.log(todo);

const project = projectFactory(1, 'Project Title', 'This is a project');
console.log(project.todoList().length);

project.addTodo(todo);
console.log(project.todoList().length);

project.removeTodo(todo.id);
console.log(project.todoList().length);

console.log(todo.id);
todo.id = 2;
console.log(todo.id);
