/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Lavinia Chen
   Date: 10 May 2025
*/


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

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

  // add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});


// adding a button to the problems section
$("#problems").append("<button id='button-problems'>Make Special</button>");

// adding a click listener to the problems button
$("#button-problems").click(function(){
    // adding a special 2 class to the button
    $("#problems").toggleClass("special2");
});


// adding a button to the results section
$("#results").append("<button id='button-results'>Make Special</button>");

//adding a click listener to the results button
$("#button-results").click(function(){
    //adding a special3 class to the button
    $("#results").toggleClass("special3");
});
