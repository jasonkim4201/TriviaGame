
//Add button to start the game
//On clicking start button, a timer should start. setTimeout(functionToRun(), time in milliseconds)
// Add a timer on screen reflecting the time left.  
//setinterval if time=0 game over
$(document).ready(function() {
  console.log("ready");
});

// correct and incorrect
var correct = 0;
var wrong = 0;
var unanswered = 0;
//Total time
var timeLeft = 90;
var intervalId;

//The start trivia button which will start the timer and show the questions
$("#startButton").click(function (event) {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);

  $("#triviaStartScreen").hide();
  $("#triviaContent").show();
  setInterval(function() { 
    console.log("90 second countdown is up.")
  }, 90000);
});

//Submit button. On click it will end the timer. On submit answers will be collected determine which ones are correct or not on a new page also stop timer on submit.
$("#submitTrivia").click(function () {
  var getAnswers=[];
  var answer;
$("#triviaContent").hide();
  for (var i =1; i < 11; i++) {

    var answer=$("input[type='radio'][name='q" + i + "']:checked").val();
    console.log(answer);
    getAnswers[i]=answer;
   if (answer ==="correct") {
    //add counter for correct
    correct++;
   }
   if (answer === "wrong") {
     //add counter for wrong
     wrong++;
   }
   if (answer === undefined) {
    // add counter for unanswered
    unanswered++;
   } 
   endTime();
  }

  $("#results").append("<h1>Correct answers: "+ correct +"</h1>");
  $("#results").append("<h1>Wrong answers: "+ wrong +"</h1>");
  $("#results").append("<h1>Unanswered answers: "+ unanswered +"</h1>");
  
console.log("Answers correct: " + correct);
console.log("Answers wrong: " + wrong);
console.log ("Unanswered questions: " + unanswered);  
});

// in game restart game
$("#resetTriviainGame").click(function() {
  location.reload();
})

//decrement function here
function decrement() {
  timeLeft--;
  $("#tickTock").html("Time remaining: " + timeLeft);
  if (timeLeft === 0)
  endTime();
}

//end time function
function endTime() {
  clearInterval(intervalId);
}
