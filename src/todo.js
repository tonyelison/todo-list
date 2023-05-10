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

const todoFactory = (id, title, description, dueDate, priority, status) => ({
  get id() {
    return id;
  },
  title,
  description,
  dueDate,
  priority: priority || PRIORITY.none,
  status: status || STATUS.incomplete,
});

export default todoFactory;
