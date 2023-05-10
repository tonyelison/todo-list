import todoFactory from './todo';

const todo = todoFactory(1, 'Title', 'Description', new Date(), 1, 0);
console.log(todo);
