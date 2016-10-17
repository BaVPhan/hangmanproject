$(document).ready(function(){
  console.log("IS IT WORKING");

var mysteryWord = {
  hangmanWord: [],
  wordUnderscore: []
}

$("#submitInput").on("click", function(evt){
  evt.preventDefault();
  var hintInput = $("#hintEntry").val();
  $("#showHint").html("Hint: " + hintInput);
  $("#hintEntry").val("");
})

$("#submitInput").on("click", function(evt){
  evt.preventDefault();
  var wordInput = $("#wordEntry").val();
  var splitWord = wordInput.split('');
  console.log(splitWord);
  for (i=0; i<splitWord.length; i++)
    mysteryWord.wordUnderscore[i] = " _ ";
    console.log(mysteryWord.wordUnderscore);
    $("#showWord").html(mysteryWord.wordUnderscore);
})

$("#submitGuess").on("click", function(evt){
  evt.preventDefault();
  var guessInput = ("#guessEntry").val();



})
})
