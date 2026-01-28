const API = "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

function saveTask() {
  const title = $("#txtTitle").val();
  const description = $("#txtDescription").val(); 
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

  const taskToSave = new Task(title, description, color, date, status, budget);

  $.ajax({
    type: "POST", // HTTP Verb: Create
    url: API,
    data: JSON.stringify(taskToSave),
    contentType: "application/json",
    success: function (created) {
      console.log(created);
      displayTask(created);
    },
    error: function (err) {
      console.log(err);
    }
  });
}

function displayTask(task) {
  let syntax = `
    <div class="task" style="border-left-color:${task.color}">
      <div class="info">
        <h4>${task.title}</h4>
        <p>${task.description}</p> <!-- CHANGED -->
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

function deleteEntry() {
  $.ajax({
    type: "DELETE",
    url: "https://106api-bobnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks/1",
    success: function (response) {
      console.log("the element was removed", response);
    },
    error: function (fail) {
      console.log(fail);
    }
  });
}



function update() {
  $.ajax({
    type: "PUT",
    url: "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks/1",
    data: JSON.stringify({
      title: "Hello world",
      budget: 999999
    }),
    contentType: "application/json",
    success: function (response) {
      console.log(response);
    },
    error: function (notresponse) {
      console.log(notresponse);
    }
  });
}



function loadTask() {
  $.ajax(
    {
      type: "GET", //HTTP Verb. READ
      url: API, //destination
      dataType: "json", //expected format
      success: function (data) {
        console.log("Server responded with: ", data);
        $(".list").empty(); //clear the list to avoid duplicates

        //loop through the array of tasks
        for (let i = 0; i < data.length; i++) {
          displayTask(data[i]);
        }
      },
      error: function (x) {
        console.log("Error fetching data: ", x);
      }
    }
  );
}

function init() {
  $("#btnSave").click(saveTask);
  loadTask();
}

window.onload = init;
