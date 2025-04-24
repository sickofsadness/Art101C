// lab.js - Lab 5
// Author: Lavinia Chen
// Date: 4/24/2025

// Define Variables
let make = "Ford";
let model = "Taurus";
let color = "Rusty";
let year = 1995;
let ownIt = false;

// calculate
let age = 2019 - year;

console.log("Year: " + year)
console.log("Make: " + make)
console.log("Model: " + make)
console.log("Color: " + color)
console.log("Age: " + age)
console.log(ownIt);


// output
document.getElementById("output").innerHTML = `
  Make: ${make}<br>
  Model: ${model}<br>
  Color: ${color}<br>
  Year: ${year}<br>
  Age: ${age} years<br>
`;

// Example function (not used yet)
function myFunction(param1, param2) {
  // Just a placeholder
  return param1 + param2;
}

// Main function
function main() {
  console.log("Main function started.");
  // Other startup code here
}

// Let's go!
main();
