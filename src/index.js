import domUtil from './dom-util';
import accountFactory from './account';
import projectFactory from './project';
import todoFactory from './todo';

const app = (() => {
  const account = accountFactory();

  const newProject = (...args) => {
    const project = projectFactory(account, ...args);
    account.addProject(project);
    return project;
  };

  // assign new todos to a default project if one is not provided
  // that way the account is still aware of them
  const defaultProject = newProject('Default Project');

  const newTodo = (project = defaultProject) => {
    const todo = todoFactory(project);
    project.addTodo(todo);
    return todo;
  };

  const getAllTodos = () => {
    let allTodos = [];
    account.projectList().forEach((project) => {
      allTodos = allTodos.concat(project.todoList());
    });
    return allTodos;
  };

  // TODO: need to update these...
  const getTodayTodos = () => getAllTodos.filter((todo) => todo.date === new Date().getDay);
  const getUpcomingTodos = () => getAllTodos.filter((todo) => todo.date === new Date().getDay);

  return {
    newProject,
    newTodo,
    getAllTodos,
    getTodayTodos,
    getUpcomingTodos,
  };
})();

domUtil.init(app);
