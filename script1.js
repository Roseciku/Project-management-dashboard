const projectname = document.querySelector(".enterproject").value;
const allProjectsContainer = document.querySelector(".allprojects");
const activeProjectsContainer = document.querySelector(".activeprojects");
const completedProjectsContainer = document.querySelector(".completedprojects");
const inputContainer = document.querySelector(".inputcontainer");
// Define the Project class

class allproject {
  constructor(projectname, active) {
    this.projectname = projectname;
    this.active = active;
  }
}

class completedproject {
  constructor(projectname, active) {
    this.projectname = projectname;
    this.active = active;
  }
  isActive() {
    if (this.active === false) {
      Pending();
    }
  }
}

class activeproject {
  constructor(projectname, active) {
    this.projectname = projectname;
    this.active = active;
  }
}

// Project arrays
const allProjects = [];
const activeProjects = [];
const completedProjects = [];

inputContainer.addEventListener("keydown", (e) => {
  e.preventDefault();
  let datainputs = projectname;

  if (e.key === "Enter" && !datainputs) {
    console.log("some task details missing");
  } else {
    let newEnteredroject = new allproject(projectname);

    allProjects.push(newEnteredroject);
    newEnteredroject.isActive();
    newEnteredroject = "";
  }
});
function deleteTask(index) {
  allProjects.splice(index, 1);
  Pending();
}
