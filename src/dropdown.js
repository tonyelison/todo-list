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

  const dropdownMenu = document.createElement('ul');
  dropdownMenu.classList.add('dropdown');

  options.forEach((option) => {
    const listItem = document.createElement('li');

    listItem.classList.add('dropdown-option');
    listItem.textContent = option.text;
    listItem.addEventListener('click', () => dropdownAction(option.action, dropdownMenu));

    dropdownMenu.append(listItem);
  });

  adjacentElement.insertAdjacentElement('afterend', dropdownMenu);
  event.stopPropagation();
};

export default {
  open,
};
