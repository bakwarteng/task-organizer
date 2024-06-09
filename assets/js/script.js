// Retrieve tasks and nextId from localStorage

let nextId = JSON.parse(localStorage.getItem("nextId"));
const toDOcol = document.getElementById("todo-cards");
document.getElementById("save-changes").addEventListener("click", function () {
  //replace with handleAddtask.addeventlistener "click", handleAddtask
  const taskName = document.getElementById("taskName").value;
  const taskDes = document.getElementById("taskDes").value;
  const dueDate = document.getElementById("dueDate").value;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const task = {
    id: Math.random(),
    taskName: taskName,
    taskDes: taskDes,
    dueDate: dueDate,
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTaskList();
  // render taskList here
});

//if (localStorage) {
// cardContent.textContent = "tasks";
//} else {
// cardContent.textContent = "No content stored.";
//}
//console.log(taskList);
// Todo: create a function to generate a unique task id
function generateTaskId() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const randomNum = Math.floor(Math.random() * 365);
  return `${year}${month}${day}-${randomNum}`;
}
generateTaskId();

// Todo: create a function to create a task card

//document.getElementById("submit-task").addEventListener("click");
function createTaskCard(tasks) {}

const modal = document.getElementsByClassName("taskCard");

//console.log(taskCard);

renderTaskList();
//task.push(task);
//localStorage.setItem("tasks", JSON.stringify(tasks));

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  //const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //tasks.forEach((task) => {
  //   createTaskCard(task);let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  toDOcol.innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    let divEl = document.createElement("div");
    divEl.classList.add("taskCard", "draggable");
    let h2 = document.createElement("h2");
    h2.textContent = taskList[i].taskName;
    divEl.appendChild(h2);
    let p = document.createElement("p");
    p.textContent = taskList[i].taskDes;
    divEl.appendChild(p);
    let cardContent = document.createElement("p");
    cardContent.textContent = taskList[i].dueDate;
    divEl.appendChild(cardContent);
    toDOcol.appendChild(divEl);
  }
  $(".draggable").draggable({
    opacity: 0.7,
    zIndex: 100,
    helper: function (e) {
      const original = $(e.target).hasClass("ui-draggable")
        ? $(e.target)
        : $(e.target).closest(".ui-draggable");
      return original.clone().css({ maxWidth: original.outerWidth() });
    },
  });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  // move anonymos function from line 5-19
}
function handleDrop(event, ui) {
  let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskId = ui.draggable[0].dataset.taskId;
  const newStatus = event.target.id;
  for (let task of taskList) {
    if (task.Id === parseInt(taskId)) {
      task.status = newStatus;
    }
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();
  }
}
// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
  const taskList = $(this).attr("tasks");
  const tasks = readFromStorage();

  // ? Remove project from the array. There is a method called `filter()` for this that is better suited which we will go over in a later activity. For now, we will use a `forEach()` loop to remove the project.
  projects.forEach((taskCard) => {
    if (tasks.id === tasksId) {
      tasks.splice(tasks.indexOf(tasks), 1);
    }
  });
}

// Todo: create a function to handle dropping a task into a new status lane
$(function () {
  $(".lane").droppable({ accept: ".draggable", drop: handleDrop });
});
// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {});

if (task.dueDate && task.status !== "done") {
  const now = dayjs();
  const taskDueDate = dayjs(project.dueDate, "DD/MM/YYYY");

  // ? If the task is due today, make the card yellow. If it is overdue, make it red.
}
