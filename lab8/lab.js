// index.js - Using Callback functions and also arrays, and using anonymous functions
// Author: Lavinia Chen
// Date: 8 May 2025

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
  // let's get this party started
  main();

  //set an array of numbers
const array = [1, 2, 3, 4, 5, 6];
console.log(array)


//creating a function that divides by 5
function divideBy5(x) {
    var results = x / 5;
    return results;
}


//showing results in console using my function
console.log(divideBy5(19484))


//using a callback with an anon function and inputting it directly in the console
console.log (array.map(function(x) {
    var results = x * 8 - 2356 + 324
    return results;
}))


//using the callback function and displaying the results
var mapResults = array.map(divideBy5);
console.log("Results: ", mapResults)


// Your map results data
var mapResults = "Map Results: " + mapResults; 

    
// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);


 

