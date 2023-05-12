import dropdown from './dropdown';

const rectangleSvg = require('./assets/rectangle.svg');
const ellipsisSvg = require('./assets/ellipsis.svg');

const main = document.querySelector('main');
const userDefinedProjects = document.querySelector('nav ul.user-defined-projects');

const formatNavTitle = (inputValue) => inputValue || 'New Project';

function blurKeyEventHandler(event) {
  if (event.code === 'Enter') {
    this.blur();
  }
}

const removeProject = (project) => {
  console.log('remove project');
  // removeProjectNavItem(project);
  // renderProjectView(project);
  // remove project from account ... ?
};

const updateProjectTitle = (titleInput, project) => {
  const navItemTitle = document.querySelector(`nav li#project-${project.id} span.title`);
  navItemTitle.textContent = formatNavTitle(titleInput.value);
  project.title = titleInput.value;
};

const renderProjectView = (project) => {
  const projectDetails = document.createElement('div');
  const headerContainer = document.createElement('div');
  const titleInput = document.createElement('input');
  const ellipsisMenu = document.createElement('img');

  projectDetails.classList.add('project-details');
  headerContainer.classList.add('header-container');

  titleInput.classList.add('title');
  titleInput.placeholder = 'New Project';
  titleInput.value = project.title;

  titleInput.addEventListener('focusout', () => updateProjectTitle(titleInput, project));
  titleInput.addEventListener('keypress', blurKeyEventHandler);

  ellipsisMenu.classList.add('ellipsis-menu');
  ellipsisMenu.src = ellipsisSvg;

  const ellipsisOptions = [
    { text: 'Rename', icon: '', action: () => titleInput.focus() },
    { text: 'Delete', icon: '', action: () => removeProject(project) },
  ];

  ellipsisMenu.addEventListener('click', (event) => dropdown.open(event, ellipsisOptions, ellipsisMenu));

  headerContainer.append(titleInput, ellipsisMenu);
  projectDetails.appendChild(headerContainer);
  main.replaceChild(projectDetails, main.querySelector('main > *'));

  if (!project.title) {
    titleInput.focus();
  }
};

const addProjectNavItem = (project) => {
  if (!userDefinedProjects.hasChildNodes()) {
    userDefinedProjects.style.borderTop = '1px solid var(--border-grey)';
  }

  const li = document.createElement('li');
  li.id = `project-${project.id}`;

  const a = document.createElement('a');
  a.classList.add('project');
  a.addEventListener('click', () => renderProjectView(project));

  const icon = document.createElement('img');
  icon.classList.add('icon', 'custom');
  icon.src = rectangleSvg;
  icon.alt = 'project icon';

  const title = document.createElement('span');
  title.classList.add('title');
  title.textContent = formatNavTitle(project.title);

  const taskTotal = document.createElement('span');
  taskTotal.classList.add('task-total');
  taskTotal.textContent = 0;

  a.append(icon, title, taskTotal);
  li.appendChild(a);
  userDefinedProjects.appendChild(li);
};

const addProject = (project) => {
  addProjectNavItem(project);
  renderProjectView(project);
};

const setAddProjectEvent = (event) => {
  const addProjectBtn = document.querySelector('.nav-footer .add-btn');
  addProjectBtn.addEventListener('click', event);
};

export default {
  addProject,
  setAddProjectEvent,
};
