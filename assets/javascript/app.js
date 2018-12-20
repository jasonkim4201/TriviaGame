
//Add button to start the game
//On clicking start button, a timer should start. setTimeout(functionToRun(), time in milliseconds)
// Add a timer on screen reflecting the time left.  
//setinterval if time=0 game over
$(document).ready(function() {
  console.log("ready");
});

//Total time
var timeLeft = 90;
var intervalId;

$("#startButton").click(function (event) {
  /* event.preventDefault(); */
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);

  $("#triviaStartScreen").hide();
  $("#triviaContent").show();
  setInterval(function() { 
    console.log("90 second countdown is up.")
  }, 90000);

});

//decrement function here
function decrement() {
  timeLeft--;
  $("#tickTock").html(timeLeft);
  if (timeLeft === 0)
  endTime();
}

//end time function
function endTime() {
  clearInterval(intervalId);
}




