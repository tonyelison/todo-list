const rectangleSvg = require('./assets/rectangle.svg');

const main = document.querySelector('main');
const userDefinedProjects = document.querySelector('nav ul.user-defined-projects');

const formatNavTitle = (inputValue) => inputValue || 'New Project';

function blurKeyEventHandler(event) {
  if (event.code === 'Enter') {
    this.blur();
  }
}

const updateProjectTitle = (titleInput, project) => {
  const navItemTitle = document.querySelector(`nav li#project-${project.id} span.title`);
  navItemTitle.textContent = formatNavTitle(titleInput.value);
  project.title = titleInput.value;
};

const renderProjectView = (project) => {
  const newDiv = document.createElement('div');
  const projectTitleInput = document.createElement('input');

  newDiv.classList.add('project-page');

  projectTitleInput.classList.add('title');
  projectTitleInput.placeholder = 'New Project';
  projectTitleInput.value = project.title;

  projectTitleInput.addEventListener('focusout', () => updateProjectTitle(projectTitleInput, project));
  projectTitleInput.addEventListener('keypress', blurKeyEventHandler);

  newDiv.appendChild(projectTitleInput);
  main.replaceChild(newDiv, main.querySelector('main > *'));

  if (!project.title) {
    projectTitleInput.focus();
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
