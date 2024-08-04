class Projects {
  constructor() {
    this.projectlist = [];
  }
  getProjectName() {
    let enterProject = document.querySelector(".enterproject");

    let projectarrayLength = this.projectlist.length;

    let id = projectarrayLength + 1;
    let status = false;
    let projectName = enterProject.value.trim();

    if (projectName !== "") {
      this.project = {
        id,
        projectName,
        status,
      };
    } else {
      alert("Invalid project name.");
    }
  }

  addProject() {
    this.getProjectName();

    if (this.project) {
      this.projectlist.push(this.project);

      this.displayProjects(this.projectlist);

      document.querySelector(".enterProject").value = "";
    }
  }

  displayProjects(projectsArray) {
    let allProjectsContainer = document.querySelector(".allprojects");
    let allActiveContainer = document.querySelector(".activeprojects");
    let allCompletedContainer = document.querySelector(".completedprojects");

    let allPjs = document.querySelectorAll(".allprojects .projectsdiv");
    allPjs.forEach((el) => {
      el.remove();
    });
    let allActive = document.querySelectorAll(
      ".activeprojects .project-element"
    );
    allActive.forEach((el) => {
      el.remove();
    });
    let allCompleted = document.querySelectorAll(
      ".completedprojects .project-element"
    );
    allCompleted.forEach((el) => {
      el.remove();
    });

    projectsArray.forEach((project, index) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("projectsdiv");
      projectElement.textContent = project.projectName;

      const controlContainer = document.createElement("div");
      controlContainer.classList.add("control-container");

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-button");
      deleteButton.addEventListener("click", () => this.deleteProject(index));

      const completeCheckbox = document.createElement("input");
      completeCheckbox.type = "checkbox";
      completeCheckbox.classList.add("complete-checkbox");
      completeCheckbox.checked = project.status;
      completeCheckbox.addEventListener("change", () => {
        project.status = completeCheckbox.checked;
        this.displayProjects(this.projectlist);
      });

      controlContainer.appendChild(completeCheckbox);
      controlContainer.appendChild(deleteButton);

      projectElement.appendChild(controlContainer);

      allProjectsContainer.appendChild(projectElement);

      const specificProjectElement = document.createElement("div");
      specificProjectElement.classList.add("project-element");
      specificProjectElement.textContent = project.projectName;

      const specificDeleteButton = document.createElement("button");
      specificDeleteButton.textContent = "Delete";
      specificDeleteButton.classList.add("deletebutton2");
      specificDeleteButton.addEventListener("click", () =>
        this.deleteProject(index)
      );

      specificProjectElement.appendChild(specificDeleteButton);

      if (project.status) {
        document
          .querySelector(".completedprojects")
          .appendChild(specificProjectElement);
      } else {
        document
          .querySelector(".activeprojects")
          .appendChild(specificProjectElement);
      }
    });
  }
  deleteProject(index) {
    this.projectlist.splice(index, 1);
    this.displayProjects(this.projectlist);
  }
  filterStatus(status) {
    let filteredArray = this.projectlist.filter((project) => {
      return project.status === status;
    });
    this.displayProjects(filteredArray);
  }
}

let currentProject = new Projects();

let inputForm = document.querySelector(".inputform");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  currentProject.addProject();
});
let everyProjects = document.querySelector(".all");
let activeProjects = document.querySelector(".active");
let completedProjects = document.querySelector(".completed");

everyProjects.addEventListener("click", () => {
  currentProject.displayProjects(currentProject.projectlist);
  everyProjects.style.color = "blue";
  completedProjects.style.color = "white";
  activeProjects.style.color = "white";
});

activeProjects.addEventListener("click", () => {
  currentProject.filterStatus(false);
  activeProjects.style.color = "blue";
  everyProjects.style.color = "white";
  completedProjects.style.color = "white";
  allActiveContainer.style.display = "block";
  allCompletedContainer.style.display = "none";
  allProjectsContainer.style.display = "none";
});

completedProjects.addEventListener("click", () => {
  currentProject.filterStatus(true);
  completedProjects.style.color = "blue";
  activeProjects.style.color = "white";
  everyProjects.style.color = "white";
  allCompletedContainer.style.display = "block";
  allActiveContainer.style.display = "none";
  allProjectsContainer.style.display = "none";
});
