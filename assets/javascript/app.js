
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

//Total time
var timeLeft = 90;
var intervalId;

//The start trivia button which will start the timer and show the questions
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

//Submit button. On click it will end the timer. On submit answers will be collected determine which ones are correct or not on a new page.
$("#submitTrivia").click(function () {
  //$("input[type='radio'][name='']")
  var getAnswers=[];
  //for(var i=0; i<9; i++){
  var answer1=$("input[type='radio'][name='q1']:checked").val();
  var answer2=$("input[type='radio'][name='q2']:checked").val();
  var answer3=$("input[type='radio'][name='q3']:checked").val();
  var answer4=$("input[type='radio'][name='q4']:checked").val();
  var answer5=$("input[type='radio'][name='q5']:checked").val();
  var answer6=$("input[type='radio'][name='q6']:checked").val();
  var answer7=$("input[type='radio'][name='q7']:checked").val();
  var answer8=$("input[type='radio'][name='q8']:checked").val();
  var answer9=$("input[type='radio'][name='q9']:checked").val();
  var answer10=$("input[type='radio'][name='q10']:checked").val();
  console.log("Ans q1 :"+answer1);
  console.log("Ans q2 :"+answer2);
  console.log("Ans q3 :"+answer3);
  console.log("Ans q4 :"+answer4);
  console.log("Ans q5 :"+answer5);
  console.log("Ans q6 :"+answer6);
  console.log("Ans q7 :"+answer7);
  console.log("Ans q8 :"+answer8);
  console.log("Ans q9 :"+answer9);
  console.log("Ans q10 :"+answer10);
  getAnswers.push(answer1);
  getAnswers.push(answer2);
  getAnswers.push(answer3);
  getAnswers.push(answer4);
  getAnswers.push(answer5);
  getAnswers.push(answer6);
  getAnswers.push(answer7);
  getAnswers.push(answer8);
  getAnswers.push(answer9);
  getAnswers.push(answer10);
  console.log(getAnswers);
  for (var i =0; i < 9; i++) {
   if (getAnswers[i] ==="correct") {
    //add counter for correct
    correct++;
   }
   if (getAnswers[i] === "wrong") {
     //add counter for wrong
     wrong++;
   } 
  }
console.log("Answers correct: " + correct);
console.log("Answers wrong: " + wrong);
  //}
});




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

//reset game function over here. Clear all selections. 
function reset() {

}

//
