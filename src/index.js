import domUtil from './dom-util';
import accountFactory from './account';
import projectFactory from './project';
import todoFactory from './todo';

domUtil.init();

const account = accountFactory();
const defaultProj = projectFactory('Default Project', 'description goes here');
const newTodo = todoFactory('New Task', 'description', new Date());

defaultProj.addTodo(newTodo);
account.addProject(defaultProj);
