import sequenceFactory from './sequence';

const idSequence = sequenceFactory();

const projectFactory = (title, description, initialTodos) => {
  let todos = initialTodos || [];

  const todoList = () => [...todos];
  const addTodo = (todo) => todos.push(todo);
  const removeTodo = (todoId) => {
    todos = todos.filter((todo) => todo.id !== todoId);
  };

  return {
    get id() {
      return idSequence.getNext();
    },
    title,
    description,
    todoList,
    addTodo,
    removeTodo,
  };
};

export default projectFactory;
