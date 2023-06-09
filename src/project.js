import sequenceFactory from './sequence';

const idSequence = sequenceFactory();

const projectFactory = (account, title, description, initialTodos) => {
  const id = idSequence.getNext();
  let todos = initialTodos || [];

  const todoList = () => [...todos];
  const addTodo = (todo) => todos.push(todo);
  const removeTodo = (todoId) => {
    todos = todos.filter((todo) => todo.id !== todoId);
  };
  const clearTodos = () => {
    todos = [];
  };

  return {
    get id() {
      return id;
    },
    get account() {
      return account;
    },
    title: title || '',
    description: description || '',
    todoList,
    addTodo,
    removeTodo,
    clearTodos,
  };
};

export default projectFactory;
