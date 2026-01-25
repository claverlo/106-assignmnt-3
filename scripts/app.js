function saveTask() {
  const title = $("#txtTitle").val();
  const desc = $("#txtDescription").val();
  const color = $("#selColor").val();
  const date = $("#selDate").val();
  const status = $("#selStatus").val();
  const budget = $("#numBudget").val();

  const taskToSave = new Task(title, desc, color, date, status, budget);

  console.log(taskToSave);

  displayTask(taskToSave);
}

function displayTask(task) {
  let syntax = `
    <div class="task" style="border-color:${task.color}">
      <div class="info">
        <h4>${task.title}</h4>
        <p>${task.desc}</p>
      </div>
    </div>
  `;

  $(".list").append(syntax);
}

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
