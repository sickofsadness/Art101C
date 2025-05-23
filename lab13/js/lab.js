/*
   lab.js - This Javascript is a for loop which goes through each number until 200, and if they're multiple of 3, 5, and 7
   then they say Fizz! Buzz! and Boom! respectively. If there is a number that's both a multiple of 2 of the numbers, then 
   it prints a combination of words

   Requirements: jQuery must be loaded for this script to work.

   Author: Lavinia Chen
   Date: 26 May 2025
*/


let oneLongString = "";


for (let num = 1; num <=200; num++) {
    if(num % 15 == 0){
        oneLongString += num + " FizzBuzz!<br>"; 
    } else if (num % 21 == 0){
        oneLongString += num + " FizzBoom!<br>"; 
    } else if (num % 35 == 0){
        oneLongString += num + " BuzzBoom!<br>"; 
    } else if (num % 3 == 0){
        oneLongString += num + " Fizz!<br>"; 
    } else if (num % 5 == 0) {
        oneLongString += num + " Buzz!<br>"; 
    } else if (num % 7 == 0) {
        oneLongString += num + " Boom!<br>"; 
    } else {
        oneLongString += num + "<br>";
    }

}

   $("#output").html(oneLongString);
    