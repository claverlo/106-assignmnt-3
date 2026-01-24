// create a funtion 52:59 

function saveTask() {  // Save what the user typed so JavaScript can use it

  // 1. Get values from the DOM
  const title = $("#txtTitle").val(); // const → create a variable that won’t change
  const desc = $("#txtDescription").val(); // title → the variable name/ llok in the html to compare it
  const color = $("#selColor").val();// = → store the value on the right into the variable
  const date = $("#selDate").val(); // $() → jQuery’s way to find an element in the HTML (DOM)
  const status = $("#selStatus").val(); // "#txtTitle" → selects the HTML element with id="txtTitle"
  const budget = $("#numBudget").val();// .val() → gets the value the user typed into the input
// 
  // 2. Create an object using our class (Model)
  //Take what the user typed into the form,
  //put it into a new task, and save that task in a variable called taskToSave.

  const taskToSave = new Task(title, desc, color, date, status, budget);
// const → create a variable that cannot be changed
// taskToSave → the variable name
// new Task(...) → make a new task object using the Task class
// values inside () → come from the HTML form inputs

// 3. Log the task to the console to make sure it was created correctly
// This lets us see the task object and verify the values from the form
console.log(taskToSave);

//4. pass the object to the displayTask function
displayTask(taskToSave);
}



function displayTask(task)
{
  // create the HTML syntax using the values from the task object
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

// displayTask(task)
// This function is waiting for ONE task object

// let syntax = `
// Creates a variable called "syntax"
// It stores HTML as TEXT (not real HTML yet)

// <div class="task" ...>
// Builds the outer task box

// style="border-color:${task.color}"
// Uses the task's color to style the border

// <div class="info">
// Inner container for task details

// <h4>${task.title}</h4>
// Shows the task title

// <p>${task.desc}</p>
// Shows the task description

// $(".list").append(syntax);
// jQuery finds the element with class="list"
// Appends (adds) this task HTML into the page




const API="https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";
//////////////////////////////
// this is the URL point to the server
// PURPOSE:
// This line stores the SERVER API address in a variable called API.
//
// WHAT THIS IS:
// - It is NOT a webpage
// - It is a BACKEND API endpoint
// - It lives on Azure (cloud server)
//
// WHAT IT IS USED FOR:
// - JavaScript uses this URL to SEND and RECEIVE data
// - Used in AJAX requests (GET, POST, etc.)
// - Example: $.ajax({ url: API })
//
// SIMPLE EXPLANATION:
// This is the address your app uses to talk to the server and get task data.


$.ajax({
  type: "GET",            // HTTP verb: READ data
  url: API,               // Where to send the request
  dataType: "json",       // We expect JSON back

  success: function(data) {
    console.log("Server responded with:", data);
  },

  error: function(x) {
    console.log("Error fetching data:", x);
  }
});


/*
WHAT THIS AJAX CODE IS FOR (STEP BY STEP – BIG PICTURE)

1) The browser loads the page ONE time:
   - HTML loads
   - CSS loads
   - JavaScript loads
   After that, the page stays on screen.

2) AJAX lets JavaScript talk to a SERVER
   WITHOUT reloading the page.

3) $.ajax(...) sends a request in the BACKGROUND:
   - The user can still scroll
   - The page does not freeze
   - Nothing reloads

4) type: "GET"
   - Means we are READING data from the server
   - We are not saving or changing anything

5) url: API
   - This is the server address (endpoint)
   - The request is sent here to ask for data

6) dataType: "json"
   - We tell JavaScript what format we expect back
   - JSON is easy for JavaScript to understand

7) success: function(data)
   - This runs ONLY if the server responds correctly
   - "data" is the information sent back by the server
   - Later, this data is used to build HTML and show it on the page

8) error: function(x)
   - This runs ONLY if something goes wrong
   - Wrong URL, server down, no internet, etc.
   - Used for debugging and learning

IMPORTANT CONCEPT BEING TAUGHT:
- The website does NOT reload
- JavaScript waits for the server asynchronously
- When the server responds, JavaScript decides what to do next

REAL-WORLD USE:
- Load tasks
- Load users
- Load products
- Save data
- Update the page dynamically

ONE-LINE SUMMARY:
AJAX allows JavaScript to communicate with a server in the background
and update the webpage without refreshing it.
*/


function init(){
  // Hook up the Save button so that when the user clicks it, the saveTask() function runs
$("#btnSave").click(saveTask) // When the Save button is clicked, run the saveTask() function

}



window.onload = init; // Run init() when the page finishes loading


// Passing the content means the app takes what the user typed and puts it into the task object.


// How AJAX works:
// 1. Request: The client asks for data (like "get me the menu")
// 2. Async: While the server works, the page does NOT freeze
// 3. Response: The server sends data back (usually JSON)
// 4. Callback: JavaScript uses the data (success function)



// SPA (Single Page Application) step-by-step:
// 1) Browser loads the app ONE time (HTML/CSS/JS).
// 2) JavaScript takes control of the page.
// 3) When you click buttons/links, the app does NOT reload the whole page.
// 4) Instead, JavaScript swaps/updates parts of the page (DOM changes).
// 5) If it needs new data, it sends a request (AJAX/fetch) in the background.
// 6) Server sends data back (often JSON).
// 7) JavaScript uses that data to update the screen.
// Result: it feels fast because the page doesn’t refresh.
