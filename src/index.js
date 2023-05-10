import projectFactory from './project';
import todoFactory from './todo';

const defaultProject = projectFactory('title', 'description');
console.log(defaultProject);

const defaultProject2 = projectFactory('title2', 'description2');
console.log(defaultProject2);
