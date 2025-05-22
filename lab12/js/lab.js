/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Lavinia Chen
   Date: 22 May 2025
*/


function AvatarElement(num){
    //Get remainder when divided by 4
    let remainder = num % 4;

    //Defining an object to hold the element info
    let element = {
        name: "",
        className: ""
    };

    //Assign element based on the remainer
    if (remainder == 0){
        element.name = "Fire.";
        element.className = "element-fire";
    } else if (remainder == 1) {
        element.name = "Water.";
        element.className = "element-water";
    }else if (remainder == 2) {
        element.name = "Earth.";
        element.className = "element-earth";
    }else if (remainder == 3) {
        element.name = "Air.";
        element.className = "element-air";
    }
    return element;
}

//attach click handler to submit button
$("#button").click(function(){
    //get value in the #input text box, assign to a variable name
    let name = $("#input").val()
    console.log(name);
    //get the length of the name
    let nameLength = name.length;
    console.log(nameLength);
    //get the element
    let element = AvatarElement(nameLength);
    console.log(element);
    //add element to output div
    $("#output").html('<h1 class="'+element.className + '">'+ "Your Element is: " + element.name + '</h1>');
})