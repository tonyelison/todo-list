import sequenceFactory from './sequence';

const PRIORITY = {
  none: 0,
  low: 1,
  medium: 2,
  high: 3,
};

const idSequence = sequenceFactory();

const todoFactory = (project, title, description, dueDate, priority, completed) => {
  const id = idSequence.getNext();
  let isComplete = completed || false;

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
    get isComplete() {
      return isComplete;
    },
    toggleStatus() {
      isComplete = !isComplete;
    },
  };
};

export default todoFactory;
