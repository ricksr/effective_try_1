// function

function functionName() {
    console.log("Hello World");
  }

// write resuable functions with JS

// Example
function ourReusableFunction() {
    console.log("Heyya, World");
  }
  
  ourReusableFunction();
  
  // Only change code below this line
  function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();

  //passing-values-to-functions-with-arguments


// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
  }
  ourFunctionWithArgs(10, 5); // Outputs 5
  
  // Only change code below this line.
  function functionWithArgs(a, b) {
    console.log(a + b);
  }
  functionWithArgs(10, 5);

  //global-scope-and-functions

  // Declare your variable here
var myGlobal = 10;
var oopsGlobal;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
