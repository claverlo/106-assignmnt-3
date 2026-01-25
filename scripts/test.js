function sayGoodBye() {        
  console.log("Bye Bye");
}

function sayHello() {            
  console.log("Hello there!");
  sayGoodBye();                      
}

function init() {
  console.log("hello im the init function");
  sayHello();
}

window.onload = init;
 