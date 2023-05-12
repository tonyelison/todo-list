const closeOpenDropdown = (event) => {
  const dropdown = document.querySelector('.dropdown');
  if (dropdown && dropdown !== event.target && !dropdown.contains(event.target)) {
    dropdown.remove();
  }
};

(() => {
  const body = document.querySelector('body');
  body.addEventListener('click', closeOpenDropdown);
})();

const dropdownAction = (action, dropdown) => {
  action();
  dropdown.remove();
};

const open = (event, options, adjacentElement) => {
  if (document.querySelector('.dropdown')) {
    return; // defer to body event to close the open dropdown
  }

  const dropdownMenu = document.createElement('div');
  dropdownMenu.classList.add('dropdown');

  options.forEach((option) => {
    const listItem = document.createElement('li');
    const icon = document.createElement('img');
    const text = document.createElement('span');

    listItem.classList.add('dropdown-option', option.icon);
    listItem.addEventListener('click', () => dropdownAction(option.action, dropdownMenu));

    icon.classList.add(option.icon);
    text.textContent = option.text;

    listItem.append(icon, text);
    dropdownMenu.appendChild(listItem);
  });

  adjacentElement.insertAdjacentElement('afterend', dropdownMenu);
  event.stopPropagation();
};

export default {
  open,
};
