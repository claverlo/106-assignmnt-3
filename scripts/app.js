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

  if (budget < 0) {
    alert("Budget cannot be negative.");
    return;
  }

  const taskToSave = new Task(title, desc, color, date, status, budget);
  displayTask(taskToSave);
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
});

function init() {
  $("#btnSave").click(saveTask);
}

window.onload = init;
