function saveTask() {

  //1. Get Values from the DOM
  const title = $("#txtTitle").val();
  const desc = $("#txtDescription").val();
  const color = $("#selColor").val();
  const date = $("#selDate").val();
  const status = $("#selStatus").val();
  const budget = $("#numBudget").val();

  //2. Create an object using our class (Model)
  const taskToSave = new Task(title, description, color, date, status, budget);

  //3. Log it to verify
  console.log(taskToSave);

  //4. Send to Server
  $.ajax({
    type: "POST", //HTTP Verb: Create
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


function displayTask(task)
{
  let syntax = `
    <div class="task" style="border-left-color:${task.color}">
      <div class="info">
        <h4>${task.title}</h4>
        <p>${task.description}</p>
        <p>Status: ${task.status}</p>
        <p>Date: ${task.date}</p>
        <p>Budget: $${task.budget}</p>
      </div>
    </div>
  `;
  $(".list").append(syntax);
}



//MiniChallenge
// Create a fuction that removes some entry in to the server

function deleteEntry(){
  $.ajax({
    type: "DELETE", // Remove
    url: "https://106api-bobnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks/15",
    success: function(response)
    {
      console.log("the element was removed", response);
      alert("Contect removed");
    },
    error: function(fail)
    {
      console.log(fail)
    }
  })
}

function update(){
  $.ajax({
    type: "PUT", //HTTP Verb: Update
    url: "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks/5",
    data: JSON.stringify({
      title: "Hello world",
      budget: 9999999,
    }),
    contentType: "application/json",
    success: function(response){
      console.log(response);
    },
    error: function(notresponse)
    {
      console.log(notresponse);
    }
  })
}

//this is the URL point to the server
const API = "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

function loadTask(){
  $.ajax({
    type: "GET", //HTTP Verb. READ
    url: API, //destination
    dataType: "json", //expected format
    success: function(data){
      console.log("Server responded with: ", data);
      $(".list").empty(); //Clear the list to avoid duplicates

      for(let i = 0; i < data.length; i++)
      {
        displayTask(data[i]);
      }
    },
    error: function(x){
      console.log("Error fetching data: ", x)
    }
  });
}

function init(){
  console.log("hello");

  //hook up to save button
  $("#btnSave").click(saveTask);
  loadTask();
}

window.onload = init;
