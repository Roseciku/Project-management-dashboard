// Get references to HTML elements
const enterProjectInput = document.querySelector(".enterproject");
const allProjectsContainer = document.querySelector(".allprojects");
const activeProjectsContainer = document.querySelector(".activeprojects");
const completedProjectsContainer = document.querySelector(".completedprojects");

// Define the Project class
class Project {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
}

// Project arrays
const allProjects = [];

// Function to render projects
function renderProjects() {
  // Clear existing content
  allProjectsContainer.innerHTML = "";
  activeProjectsContainer.innerHTML = "";
  completedProjectsContainer.innerHTML = "";

  allProjects.forEach((project, index) => {
    // Create project element for all projects container
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.textContent = project.name;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => deleteProject(index));

    const completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCheckbox.classList.add("complete-checkbox");
    completeCheckbox.checked = project.completed;
    completeCheckbox.addEventListener("change", () =>
      toggleCompleteProject(index)
    );

    projectElement.appendChild(completeCheckbox);
    projectElement.appendChild(deleteButton);

    // Append to the all projects container
    allProjectsContainer.appendChild(projectElement);

    // Create separate elements for active and completed projects
    const specificProjectElement = document.createElement("div");
    specificProjectElement.classList.add("project-element");
    specificProjectElement.textContent = project.name;

    const specificDeleteButton = document.createElement("button");
    specificDeleteButton.textContent = "Delete";
    specificDeleteButton.classList.add("deletebutton2");
    specificDeleteButton.addEventListener("click", () => deleteProject(index));

    specificProjectElement.appendChild(specificDeleteButton);

    if (project.completed) {
      completedProjectsContainer.appendChild(specificProjectElement);
    } else {
      activeProjectsContainer.appendChild(specificProjectElement);
    }
  });
}

// Function to add a project
function addProject(name) {
  const newProject = new Project(name);
  allProjects.push(newProject);
  renderProjects();
}

// Function to delete a project
function deleteProject(index) {
  allProjects.splice(index, 1);
  renderProjects();
}

// Function to toggle project completion
function toggleCompleteProject(index) {
  allProjects[index].completed = !allProjects[index].completed;
  renderProjects();
}

// Event listener for adding a project
enterProjectInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && enterProjectInput.value.trim() !== "") {
    addProject(enterProjectInput.value.trim());
    enterProjectInput.value = "";
  }
});

// Initial render
renderProjects();
