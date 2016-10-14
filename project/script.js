$(document).ready(function(){
  console.log("IS IT WORKING");

$("#submitInput").on("click", function(evt){
  evt.preventDefault();
  var hintInput = $("#hintEntry").val();
  $("#showHint").html("Hint: " + hintInput);
  $("#hintEntry").val("");
})



})
