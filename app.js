function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// ===== Schedule =====
let schedules = JSON.parse(localStorage.getItem("schedules")) || [];

function addSchedule() {
  const input = document.getElementById("scheduleInput");
  if (!input.value) return;
  schedules.push(input.value);
  localStorage.setItem("schedules", JSON.stringify(schedules));
  input.value = "";
  renderSchedule();
}

function renderSchedule() {
  const list = document.getElementById("scheduleList");
  list.innerHTML = "";
  schedules.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    list.appendChild(li);
  });
  document.getElementById("courseCount").textContent = schedules.length;
}

// ===== Tasks =====
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value) return;
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    list.appendChild(li);
  });
  document.getElementById("taskCount").textContent = tasks.length;
}

// ===== Notes =====
function saveNote() {
  const note = document.getElementById("noteInput").value;
  localStorage.setItem("note", note);
  renderNote();
}

function renderNote() {
  document.getElementById("savedNote").textContent =
    localStorage.getItem("note") || "";
}

// Init
renderSchedule();
renderTasks();
renderNote();
