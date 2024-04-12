// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

document.getElementById("save-changes").addEventListener("click", function () {
  const taskName = document.getElementById("taskName").value;
  const taskDes = document.getElementById("taskDes").value;
  const dueDate = document.getElementById("dueDate").value;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const task = {
    taskName: taskName,
    taskDes: taskDes,
    dueDate: dueDate,
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
});
if (localStorage) {
  cardContent.textContent = "tasks";
} else {
  cardContent.textContent = "No content stored.";
}

// Todo: create a function to generate a unique task id
function generateTaskId() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const randomNum = Math.floor(Math.random() * 356);
}

// Todo: create a function to create a task card
document.getElementById("submit-task").addEventListener("click");
function createTaskCard(task) {}
const taskCard = JSON.parse(localStorage.getItem("tasks")) || [];
const ul = document.getElementById("cardContent");

console.log(taskCard);
for (let i = 0; i < taskCard.length; i++) {
  let li = document.createElement("li");
  li.textContent = taskCard[i].taskName;
  ul.appendChild(li);
  let li2 = document.createElement("li");
  li2.textContent = taskCard[i].taskDes;
  ul.appendChild(li2);
  let li3 = document.createElement("li");
  li3.textContent = taskCard[i].dueDate;
  ul.appendChild(li3);
}

retrivecreateTaskCard();

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {}
$(".selector").sortable({
  sort: function (event, ui) {
    $(".selector").on("sort", function (event, ui) {});
  },
});

// Todo: create a function to handle adding a new task
function handleAddTask(event) {}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {}
".selector".sortable({
  cancel: "a,button",
});

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {});
