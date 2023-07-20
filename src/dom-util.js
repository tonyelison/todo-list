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

const toggleTodoStatus = (todo) => {
  todo.toggleStatus();

  const checkBox = document.querySelector(`#todo-${todo.id} .check-box`);
  if (todo.isComplete) {
    checkBox.classList.add('complete');
  } else {
    checkBox.classList.remove('complete');
  }
};

const renderEllipsisMenu = (ellipsisOptions) => {
  const ellipsisMenu = document.createElement('img');

  ellipsisMenu.classList.add('ellipsis-menu');
  ellipsisMenu.src = ellipsisSvg;

  const openDropdown = (event) => dropdown.open(event, ellipsisOptions, ellipsisMenu);
  ellipsisMenu.addEventListener('click', openDropdown);

  return ellipsisMenu;
};

const getTodoParentNode = () => document.querySelector('.todo-list') || document.querySelector('.project-details');

const removeTodo = (todo) => {
  const todoContainer = document.querySelector(`#todo-${todo.id}`);
  todoContainer.remove();

  const { project } = todo;
  project.removeTodo(todo.id);
};

const initTodoEditView = (todoContainer, todo) => {
  if (!todoContainer.classList.contains('edit-view')) {
    todoContainer.classList.add('edit-view');

    const ellipsisOptions = [
      { text: 'Delete', icon: 'delete', action: () => removeTodo(todo) },
    ];

    const todoItem = todoContainer.querySelector('.todo-item');
    const ellipsisMenu = renderEllipsisMenu(ellipsisOptions);

    todoItem.appendChild(ellipsisMenu);
  }
};

const renderTodo = (todo, parentNode) => {
  const container = document.createElement('div');
  const todoItem = document.createElement('div'); // TODO: can we merge container and todoItem elements?
  const checkBox = document.createElement('div');
  const titleInput = document.createElement('input');

  // make divs focusable, but not accessible by tabbing
  container.tabIndex = -1;
  checkBox.tabIndex = -1;

  container.classList.add('todo-container');
  checkBox.classList.add('check-box');

  container.addEventListener('focus', () => initTodoEditView(container, todo));
  checkBox.addEventListener('click', () => toggleTodoStatus(todo));

  container.addEventListener('focusout', (e) => {
    const { relatedTarget, target } = e;
    const didClickOutside = relatedTarget !== container && !target.contains(relatedTarget);
    const didToggleCheckBox = relatedTarget === checkBox || checkBox.contains(relatedTarget);

    if (didClickOutside && !didToggleCheckBox) {
      container.classList.remove('edit-view');
      container.querySelector('.ellipsis-menu')?.remove();
    }
  });

  todoItem.classList.add('todo-item');
  todoItem.id = `todo-${todo.id}`;

  titleInput.classList.add('title');
  titleInput.placeholder = 'New Task';
  titleInput.value = todo.title;

  titleInput.addEventListener('focusin', () => initTodoEditView(container, todo));
  titleInput.addEventListener('keypress', blurKeyEventHandler);
  titleInput.addEventListener('focusout', () => {
    todo.title = titleInput.value;
  });

  todoItem.append(checkBox, titleInput);
  container.appendChild(todoItem);
  parentNode.appendChild(container);

  if (!todo.title) {
    titleInput.focus();
  }
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

  const ellipsisOptions = [
    { text: 'Rename', icon: 'edit', action: () => titleInput.focus() },
    { text: 'Delete', icon: 'delete', action: () => removeProject(project) },
  ];

  const ellipsisMenu = renderEllipsisMenu(ellipsisOptions);
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
  renderTodo(todo, getTodoParentNode());
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
