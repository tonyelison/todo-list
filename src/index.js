import domUtil from './dom-util';
import accountFactory from './account';
import projectFactory from './project';
import todoFactory from './todo';

(() => {
  const account = accountFactory();

  const addProject = () => {
    const newProject = projectFactory(account);

    account.addProject(newProject);
    domUtil.addProject(newProject);
  };

  const addTodo = (projectId) => {
    const newTodo = todoFactory('New Task');
    const project = account.projectList().filter((proj) => proj.id === projectId);

    project.addTodo(newTodo);
    domUtil.addTodo(newTodo.id);
  };

  domUtil.setAddProjectEvent(addProject);
  console.log(account);

  // domUtil.setAddTodoEvent(addProject);
})();
