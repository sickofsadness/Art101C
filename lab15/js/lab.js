const ajaxObj = {
  url: "https://yesno.wtf/api",
  //data:{},
  type: "GET",
  dataType: "json"
}


//when a user clicks a button
$("#sumbuton").click(function() {
  console.log("click!");
//use a jQuery AJAX call to fetch output
   $.ajax(ajaxObj)
    .done(function(data){
      console.log("Success!");
      console.log(data);
      //extract the answer from data
      let answer = data.answer;
     //extract image from data
     let imageURL = data.image;
     //build image html
     let imageHTML = "<img src='" + imageURL + "'>";
     //insert output in the output div
     $("#output").html("<h1>" + answer);
     $("#output").append(imageHTML);
})
//.done tells us what to do when it succeeds

//if reuqest fails
    .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + "Status: " + status);
});

})

//different bettween get and code
//` backticks allow you to put variable in the middle
//of a string
