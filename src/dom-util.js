import dropdown from './dropdown';

const rectangleSvg = require('./assets/rectangle.svg');
const ellipsisSvg = require('./assets/ellipsis.svg');

let app; // populated during init

const main = document.querySelector('main');
const userDefinedProjects = document.querySelector('nav ul.user-defined-projects');

const activateNavItem = (elementId) => {
  const activeLi = document.querySelector('nav li.active');
  const li = document.getElementById(elementId);

  activeLi?.classList.remove('active');
  li.classList.add('active');
};

const renderEditTodoView = (todo, parentNode) => {
  const container = document.createElement('div');
  const header = document.createElement('div');
  const checkBox = document.createElement('div');
  const titleInput = document.createElement('input');

  container.tabIndex = -1; // make div focusable, but not accessible by tabbing
  container.classList.add('todo-container');
  container.addEventListener('focus', () => container.classList.add('edit-view'));
  container.addEventListener('focusout', (e) => {
    if (e.relatedTarget !== container && !e.target.contains(e.relatedTarget)) {
      container.classList.remove('edit-view');
    }
  });

  header.classList.add('todo-item');
  checkBox.classList.add('check-box');

  titleInput.classList.add('title');
  titleInput.placeholder = 'New Todo';
  titleInput.value = todo.title;

  titleInput.addEventListener('focusin', () => container.classList.add('edit-view'));
  titleInput.addEventListener('keypress', blurKeyEventHandler);
  titleInput.addEventListener('focusout', () => {
    todo.title = titleInput.value;
  });

  header.append(checkBox, titleInput);
  container.appendChild(header);
  parentNode.appendChild(container);

  if (!todo.title) {
    titleInput.focus();
  }
};

const renderTodo = (todo, parentNode) => {
  const todoDiv = document.createElement('div');
  const checkBox = document.createElement('div');
  const title = document.createElement('div');

  todoDiv.classList.add('todo-item');
  checkBox.classList.add('check-box');
  title.classList.add('title');
  title.textContent = todo.title || 'New Todo';

  todoDiv.append(checkBox, title);
  parentNode.appendChild(todoDiv);
};

const renderTodoList = (todos) => {
  const container = document.createElement('div');
  container.classList.add('todo-list');

  todos.forEach((todo) => renderTodo(todo, container));

  return container;
};

const renderAllTodosView = () => {
  const projectDetails = document.createElement('div');
  const headerContainer = document.createElement('div');
  const h1 = document.createElement('h1');

  projectDetails.classList.add('project-details');
  headerContainer.classList.add('header-container');

  h1.classList.add('title');
  h1.textContent = 'All Tasks';

  headerContainer.appendChild(h1);
  projectDetails.appendChild(headerContainer);
  projectDetails.appendChild(renderTodoList(app.getAllTodos()));

  main.replaceChild(projectDetails, main.querySelector('.project-details'));

  activateNavItem('all-tasks');
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

  renderAllTodosView();
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

const renderProjectView = (project) => {
  const projectDetails = document.createElement('div');
  const headerContainer = document.createElement('div');
  const titleInput = document.createElement('input');

  projectDetails.classList.add('project-details');
  headerContainer.classList.add('header-container');

  titleInput.classList.add('title');
  titleInput.placeholder = 'New Project';
  titleInput.value = project.title;

  titleInput.addEventListener('keypress', blurKeyEventHandler);
  titleInput.addEventListener('focusout', () => updateProjectTitle(titleInput, project));

  const ellipsisMenu = renderEllipsisMenu(titleInput, project);
  const todoListContainer = renderTodoList(project.todoList());

  headerContainer.append(titleInput, ellipsisMenu);
  projectDetails.append(headerContainer, todoListContainer);
  main.replaceChild(projectDetails, main.querySelector('.project-details'));

  if (!project.title) {
    titleInput.focus();
  }

  setAddTodoBtnAction(project);
  activateNavItem(`project-${project.id}`);
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
  renderEditTodoView(todo, parentNode);
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

const setDefaultNavLinkActions = () => {
  const allTodosLink = document.querySelector('nav a.project.all');
  allTodosLink.addEventListener('click', () => {
    renderAllTodosView();
    setAddTodoBtnAction();
  });
};

const init = (appState) => {
  app = appState;

  setDefaultNavLinkActions();
  setAddProjectBtnAction();
  setAddTodoBtnAction();
  renderAllTodosView();
};

export default { init };
