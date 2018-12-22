
//Add button to start the game
//On clicking start button, a timer should start. setTimeout(functionToRun(), time in milliseconds)
// Add a timer on screen reflecting the time left.  
//setinterval if time=0 game over
$(document).ready(function() {
  console.log("ready");
});

// correct and incorrect and variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
//Total time
var timeLeft = 100;
var intervalId;
console.log(correct);
//The start trivia button which will start the timer and show the questions
$("#startButton").click(function (event) {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);

  $("#triviaStartScreen").hide();
  $("#triviaContent").show();
  setInterval(function() { 
    console.log("120 second countdown is up.")
  }, 120000);
});

//Submit button. On click it will end the timer. On submit answers will be collected determine which ones are correct or not
$("#submitTrivia").click(function () {
  sumbit(); 
});

// in game restart game
$("#resetTriviainGame").click(function() {
  location.reload();
})

// sumbit function 
function sumbit() {
  var getAnswers=[];
  var answer;
  //hide trivia questions then uses a loop based on the form name + the numbers 1-10 following q
$("#triviaContent").hide();
  for (var i = 1; i < 11; i++) {
//match up the form values with true/false and tallies them accordingly to add score. also records unanswered as undefined
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
   //add jumbotron class to score page
   $("#scoreBanner").addClass("jumbotron p-2")

  }
  //place results in empty div
  $("#results").append("<h1>Correct answers: "+ correct +"</h1>");
  $("#results").append("<h1>Wrong answers: "+ wrong +"</h1>");
  $("#results").append("<h1>Unanswered answers:  </h1>"+ "<h1 id='color'>" + unanswered +"</h1>");
  
console.log("Answers correct: " + correct);
console.log("Answers wrong: " + wrong);
console.log ("Unanswered questions: " + unanswered);
}

//decrement function here //Tied auto submission of answers to decrement function
function decrement() {
  timeLeft--;
  $("#tickTock").html("Time remaining: " + timeLeft);
  if (timeLeft === 0){
  sumbit();  
 
  }
}

//end time function
function endTime() {
  clearInterval(intervalId);
}

