const accountFactory = () => {
  let projects = [];

  const projectList = () => [...projects];
  const addProject = (project) => projects.push(project);
  const removeProject = (projectId) => {
    projects = projects.filter((project) => project.id !== projectId);
  };

  return {
    projectList,
    addProject,
    removeProject,
  };
};

export default accountFactory;
