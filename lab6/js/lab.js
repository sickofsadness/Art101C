// index.js - Lab 6: Arrays and Objects, declaring variables
// Author: Lavinia Chen
// Date: 4/28/25

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


//Define Variables
myTransport = ["Ford Taurus", "bike", "rides from friends", "Lime Scooter"];


//create an object for my main ride
myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "Rusty",
  year: 1995,
  //we can define a fuuncton within our object (called a method)
  //that uses the value of year above (using this.year)
  age:function() {
    return 2025 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use:", myTransport, "</br>");
//this little trick allows us to write an object too the document
document.writeln("My Main Ride <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
