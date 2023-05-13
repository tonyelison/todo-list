import dropdown from './dropdown';

const rectangleSvg = require('./assets/rectangle.svg');
const ellipsisSvg = require('./assets/ellipsis.svg');

let app; // populated during init

const main = document.querySelector('main');
const userDefinedProjects = document.querySelector('nav ul.user-defined-projects');

const renderDefaultView = () => {
  main.replaceChild(document.createElement('div'), main.firstChild);
};

const formatNavTitle = (inputValue) => inputValue || 'New Project';

function blurKeyEventHandler(event) {
  if (event.code === 'Enter') {
    this.blur();
  }
}

const removeProject = (project) => {
  const navItem = userDefinedProjects.querySelector(`nav li#project-${project.id}`);
  navItem.remove();

  const { account } = project;
  account.removeProject(project.id);

  renderDefaultView();
};

const updateProjectTitle = (titleInput, project) => {
  const navItemTitle = document.querySelector(`nav li#project-${project.id} span.title`);
  navItemTitle.textContent = formatNavTitle(titleInput.value);
  project.title = titleInput.value;
};

const renderEllipsisMenu = (titleInput, project) => {
  const ellipsisMenu = document.createElement('img');

  ellipsisMenu.classList.add('ellipsis-menu');
  ellipsisMenu.src = ellipsisSvg;

  const ellipsisOptions = [
    { text: 'Rename', icon: 'edit', action: () => titleInput.focus() },
    { text: 'Delete', icon: 'delete', action: () => removeProject(project) },
  ];

  const openDropdown = (event) => dropdown.open(event, ellipsisOptions, ellipsisMenu);
  ellipsisMenu.addEventListener('click', openDropdown);

  return ellipsisMenu;
};

const renderTodo = (todo, parentNode) => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-item');

  todoDiv.textContent = todo.id;
  parentNode.appendChild(todoDiv);
};

const renderProjectTodos = (todos) => {
  const container = document.createElement('div');
  container.classList.add('todo-list');

  todos.forEach((todo) => renderTodo(todo, container));

  return container;
};

const renderProjectView = (project) => {
  const projectDetails = document.createElement('div');
  const headerContainer = document.createElement('div');
  const titleInput = document.createElement('input');

  projectDetails.classList.add('project-details');
  headerContainer.classList.add('header-container');

  titleInput.classList.add('title');
  titleInput.placeholder = 'New Project';
  titleInput.value = project.title;

  titleInput.addEventListener('focusout', () => updateProjectTitle(titleInput, project));
  titleInput.addEventListener('keypress', blurKeyEventHandler);

  const ellipsisMenu = renderEllipsisMenu(titleInput, project);
  const todoListContainer = renderProjectTodos(project.todoList());

  headerContainer.append(titleInput, ellipsisMenu);
  projectDetails.append(headerContainer, todoListContainer);
  main.replaceChild(projectDetails, main.querySelector('.project-details'));

  if (!project.title) {
    titleInput.focus();
  }

  setAddTodoBtnAction(project);
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

const addTodo = (todo) => {
  const parentNode = document.querySelector('.todo-list') || document.querySelector('.project-details');
  renderTodo(todo, parentNode);
};

function setAddProjectBtnAction() {
  const addProjectBtn = document.querySelector('.nav-footer .add-btn');

  addProjectBtn.addEventListener('click', () => {
    const project = app.newProject();
    addProject(project);
  });
}

function setAddTodoBtnAction(project) {
  const addTodoBtn = document.querySelector('main button.add-todo');
  if (!addTodoBtn) return;

  const newAddBtn = addTodoBtn.cloneNode(true);
  addTodoBtn.parentNode.replaceChild(newAddBtn, addTodoBtn);

  newAddBtn.addEventListener('click', () => {
    const todo = app.newTodo(project);
    addTodo(todo);
  });
}

const init = (appState) => {
  app = appState;

  setAddProjectBtnAction();
  setAddTodoBtnAction();
};

export default { init };
