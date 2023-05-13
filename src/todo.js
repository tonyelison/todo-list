import sequenceFactory from './sequence';

const PRIORITY = {
  none: 0,
  low: 1,
  medium: 2,
  high: 3,
};

const STATUS = {
  incomplete: 0,
  complete: 1,
};

const idSequence = sequenceFactory();

const todoFactory = (project, title, description, dueDate, priority, status) => {
  const id = idSequence.getNext();

  return {
    get id() {
      return id;
    },
    get project() {
      return project;
    },
    title: title || '',
    description: description || '',
    dueDate,
    priority: priority || PRIORITY.none,
    status: status || STATUS.incomplete,
  };
};

export default todoFactory;
