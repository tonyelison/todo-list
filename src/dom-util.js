const rectangleSvg = require('./assets/rectangle.svg');

const main = document.querySelector('main');
const customProjects = document.querySelector('nav ul.user-defined-projects');

const addProject = (project) => {
  // add nav item
  if (!customProjects.hasChildNodes()) {
    customProjects.style.borderTop = '1px solid var(--border-grey)';
  }

  const projectNavItem = document.createElement('li');

  const itemLink = document.createElement('a');
  itemLink.classList.add('project');

  const icon = document.createElement('img');
  icon.classList.add('icon', 'custom');
  icon.src = rectangleSvg;
  icon.alt = 'project icon';

  const title = document.createElement('span');
  title.classList.add('title');
  title.textContent = project.getTitle();

  const taskTotal = document.createElement('span');
  taskTotal.classList.add('task-total');
  taskTotal.textContent = 0;

  itemLink.append(icon, title, taskTotal);
  projectNavItem.appendChild(itemLink);
  customProjects.appendChild(projectNavItem);

  // add main page content
  const currentContent = main.querySelector('main > *');
  const newDiv = document.createElement('div');
  const projectTitleInput = document.createElement('input');

  newDiv.classList.add('project-page');

  projectTitleInput.classList.add('title');
  projectTitleInput.placeholder = 'New Project';

  const projectTitleUpdate = () => {
    if (projectTitleInput.value === '') {
      projectTitleInput.value = 'New Project';
    }
    title.textContent = projectTitleInput.value;
    project.setTitle(projectTitleInput.value);
  };

  projectTitleInput.addEventListener('focusout', projectTitleUpdate);
  projectTitleInput.addEventListener('keypress', (event) => {
    if (event.code === 'Enter') {
      projectTitleInput.blur();
    }
  });

  newDiv.appendChild(projectTitleInput);
  main.replaceChild(newDiv, currentContent);

  projectTitleInput.focus();
};

const setAddProjectEvent = (event) => {
  const addProjectBtn = document.querySelector('.nav-footer .add-btn');
  addProjectBtn.addEventListener('click', event);
};

const domUtil = {
  addProject,
  setAddProjectEvent,
};

export default domUtil;
