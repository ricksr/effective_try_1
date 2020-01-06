// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["Hi", 5];
// nested array

// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.

var myArray = [ourArray, "hi"];

console.log(myArray);


// array with index
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// Only change code below this line.
myArray[0] = 45;
myArray[1] = 64;
myArray[2] = 99;

//Access Multi-Dimensional Arrays With Indexess

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[0][0];

myData = myArray[2][1];
console.log(myData)

//Manipulate Arrays With pop()


// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();


//Manipulate Arrays With shift()

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();




