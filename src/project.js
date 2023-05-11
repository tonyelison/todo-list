import sequenceFactory from './sequence';

const idSequence = sequenceFactory();

const projectFactory = (projTitle, projDesc, initialTodos) => {
  let todos = initialTodos || [];
  let title = projTitle || 'New Project';
  let description = projDesc;

  const getTitle = () => title;
  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const getDescription = () => description;
  const setDescription = (newDesc) => {
    description = newDesc;
  };

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
      return idSequence.getNext();
    },
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    todoList,
    addTodo,
    removeTodo,
    clearTodos,
  };
};

export default projectFactory;
