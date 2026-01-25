<<<<<<< HEAD
function sayGoodBye() {
  console.log("Bye Bye");
}

function sayHello() {
  console.log("Hello there!");
  sayGoodBye();
}

function init() {
  console.log("hello im the init function");
=======
function sayGoodBye() {         //// this would run 3rd casue in "function sayHello"  has sayGoodBye"
  console.log("Bye Bye");
}

function sayHello() {             // this would run 2nd casue in "function init has" sayHello"
  console.log("Hello there!");
  sayGoodBye();                      
}

function init() {
  console.log("hello im the init function"); // this would run forst cause in window.omload ="init"
>>>>>>> 76b8a90d549e64b9c4ace4676b2280b2225ed029
  sayHello();
}

window.onload = init;
<<<<<<< HEAD
=======
 //Very simple answer:
// It’s important because it stops JavaScript from running too early and breaking your page.
//One sentence:
//window.onload = init; makes sure the page loads first, so your code can find buttons, inputs, and IDs without errors.
>>>>>>> 76b8a90d549e64b9c4ace4676b2280b2225ed029
