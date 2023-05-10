import sequenceFactory from './sequence';

const idSequence = sequenceFactory(1000, 1);

const projectFactory = (title, description, initialTodos) => {
  const id = idSequence.getNext();
  let todos = initialTodos || [];

  const todoList = () => [...todos];
  const addTodo = (todo) => todos.push(todo);
  const removeTodo = (todoId) => {
    todos = todos.filter((todo) => todo.id !== todoId);
  };

  return {
    get id() {
      return id;
    },
    title,
    description,
    todoList,
    addTodo,
    removeTodo,
  };
};

export default projectFactory;
