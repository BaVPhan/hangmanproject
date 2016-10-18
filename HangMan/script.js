$(document).ready(function(){
  console.log("IS IT WORKING");

var mysteryWord = {
  hangmanWord: [],
  wordUnderscore: [],
  wordArray: [],
  counter: -1,
  bodyParts: ["#headcenter", "#torsocenter", "#armleft", "#armright", "#legleft", "#legright"]
}

var start = new Date;

setInterval(function() {
    $('.timer').text((new Date - start) / 1000 + " Seconds");
}, 1000);

$("#submitInput").on("click", function(evt){
  evt.preventDefault();
  var hintInput = $("#hintEntry").val();
  $("#showHint").html("Hint: " + hintInput);
  $("#hintEntry").val("");
  hideAll();
})

$("#submitInput").on("click", function(evt){
  evt.preventDefault();
  mysteryWord.hangmanWord = $("#wordEntry").val();
  mysteryWord.wordArray = mysteryWord.hangmanWord.split('');
  for (i=0; i < mysteryWord.wordArray.length; i++)
    mysteryWord.wordUnderscore[i] = " _ ";
    console.log(mysteryWord.wordUnderscore);
    $("#showWord").html(mysteryWord.wordUnderscore);
    $("#wordEntry").val("");
})

$("#submitGuess").on("click", function(evt){
  evt.preventDefault();
  var guessInput = $("#guessEntry").val();
  if (mysteryWord.wordArray.includes(guessInput)) {
    for (i=0; i< mysteryWord.wordArray.length; i++) {
      if (mysteryWord.wordArray[i] === guessInput) {
        mysteryWord.wordUnderscore[i] = guessInput;
        console.log(mysteryWord.wordUnderscore);
        $("#showWord").html(mysteryWord.wordUnderscore);
      }
    }
  } else if (mysteryWord.counter >= 5) {
    alert("GAME OVER!");
  }
  else {
    mysteryWord.counter += 1;
    console.log(mysteryWord.counter);
    $(mysteryWord.bodyParts[mysteryWord.counter]).show();
    $("#displayGuesses").append(" <b>" + guessInput + "</b>");
  }
  $("#guessEntry").val("");
})

function hideAll (){
  $("#headcenter").hide();
  $("#torsocenter").hide();
  $("#armleft").hide();
  $("#armright").hide();
  $("#legleft").hide();
  $("#legright").hide();
}
//function checkGuess() {

//}

})
