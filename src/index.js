import domUtil from './dom-util';
import accountFactory from './account';
import projectFactory from './project';
import todoFactory from './todo';

(() => {
  const account = accountFactory(); // TODO: persist to local storage

  const app = {
    newProject: () => {
      const project = projectFactory(account);
      account.addProject(project);
      return project;
    },
    newTodo: (project) => {
      const todo = todoFactory(project);
      project?.addTodo(todo);
      return todo;
    },
  };

  domUtil.init(app);
})();
