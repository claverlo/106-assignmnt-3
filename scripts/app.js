const API = "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

function saveTask() {
  const title = $("#txtTitle").val();
  const desc = $("#txtDescription").val();
  const color = $("#selColor").val();
  const date = $("#selDate").val();
  const status = $("#selStatus").val();
  const budget = Number($("#numBudget").val());

  if (!title || title.length < 3) {
    alert("Title is required and must be at least 3 characters.");
    return;
  }

  if (!date) {
    alert("Please select a date.");
    return;
  }
// comment
  if (budget < 0) {
    alert("Budget cannot be negative.");
    return;
  }

  const taskToSave = new Task(title, desc, color, date, status, budget);
<<<<<<< HEAD

  $.ajax({
    type: "POST",
    url: API,
    contentType: "application/json",
    data: JSON.stringify({
      title: taskToSave.title,
      description: taskToSave.desc,
      color: taskToSave.color,
      date: taskToSave.date,
      status: taskToSave.status,
      budget: taskToSave.budget
    }),
    success: function () {
      displayTask(taskToSave);
    },
    error: function (x) {
      console.log("Error saving task:", x);
    }
  });
=======
  displayTask(taskToSave);
>>>>>>> 45b9437c8e239ab2c0cfe247c9e35a0bb9c77a86
}

function displayTask(task) {
  let syntax = `
    <div class="task" style="border-left-color:${task.color}">
      <div class="info">
        <h4>${task.title}</h4>
        <p>${task.desc}</p>
        <p>Status: ${task.status}</p>
        <p>Date: ${task.date}</p>
        <p>Budget: $${task.budget}</p>
      </div>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  $(".list").append(syntax);
}

$(".list").on("click", ".delete-btn", function () {
  $(this).closest(".task").remove();
<<<<<<< HEAD
=======
});

const API = "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

$.ajax({
  type: "GET",
  url: API,
  dataType: "json",
  success: function (data) {
    console.log("Server responded with:", data);
  },
  error: function (x) {
    console.log("Error fetching data:", x);
  }
>>>>>>> 45b9437c8e239ab2c0cfe247c9e35a0bb9c77a86
});

function loadTasks() {
  $.ajax({
    type: "GET",
    url: API,
    dataType: "json",
    success: function (data) {
      $(".list").html("");

      (data || []).forEach(function (t) {
        const taskObj = new Task(
          t.title,
          t.description,
          t.color,
          t.date,
          t.status,
          Number(t.budget)
        );
        displayTask(taskObj);
      });
    },
    error: function (x) {
      console.log("Error loading tasks:", x);
    }
  });
}

function init() {
  $("#btnSave").click(saveTask);
  loadTasks();
}

window.onload = init;
