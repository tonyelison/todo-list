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

const todoFactory = (title, description, dueDate, priority, status) => ({
  get id() {
    return idSequence.getNext();
  },
  title,
  description,
  dueDate,
  priority: priority || PRIORITY.none,
  status: status || STATUS.incomplete,
});

export default todoFactory;
