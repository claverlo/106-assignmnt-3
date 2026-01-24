function sayGoodBye() {         //// this would run 3rd casue in "function sayHello"  has sayGoodBye"
  console.log("Bye Bye");
}

function sayHello() {             // this would run 2nd casue in "function init has" sayHello"
  console.log("Hello there!");
  sayGoodBye();                      
}

function init() {
  console.log("hello im the init function"); // this would run forst cause in window.omload ="init"
  sayHello();
}

window.onload = init;
 //Very simple answer:
// It’s important because it stops JavaScript from running too early and breaking your page.
//One sentence:
//window.onload = init; makes sure the page loads first, so your code can find buttons, inputs, and IDs without errors.