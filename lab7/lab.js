// index.js - Making js to reverse user input name
// Author: Lavinia Chen
// Date: 5/4/25

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
  

//sortUserName - a function that takes user input and sorts the letters
function sortUserName(){
    var userName = window.prompt("Input name: ")
    console.log("userName=", userName);
    //split using string to array
    var nameArray = userName.split('');
    console.log("nameArray=", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    //Above lines could be a single line:
    //userName.toLower().split("").sort().join("")
    return nameSorted; 

}  

//output
document.writeln("Here's the reversed name: ",
    sortUserName(), "</br>");

