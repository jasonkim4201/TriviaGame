
//Add button to start the game
//On clicking start button, a timer should start. setTimeout(functionToRun(), time in milliseconds)
// Add a timer on screen reflecting the time left.  
$(document).ready(function() {
  console.log("ready");
});

//Total time
var timeLeft = 120;


$("#startButton").click(function (event) {
  event.preventDefault();
  $("#triviaStartScreen").hide();
  $("#triviaContent").show();
  setTimeout(function() {
    alert("5 second countdown is up.")
  }, 5000);

});


//Trivia questions



