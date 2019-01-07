//Add button to start the game
//On clicking start button, a timer should start. setTimeout(functionToRun(), time in milliseconds)
// Add a timer on screen reflecting the time left.  
//setinterval if time=0 game over
$(document).ready(function () {
  console.log("ready");
});

// correct and incorrect and variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
//Total time
var timeLeft = 120;
var intervalId;

//Trivia Questions here
var questions = [{
    Question: "Which company was the first to be worth a trillion dollars in America?",
    Answers: ["Amazon", "Apple", "Microsoft", "Google"],
    correctAnswer: "Apple"
  },
  {
    Question: "This company is known for pruducing graphics processing units(GPUs) for gaming and professional markets but in recent years have expanded into artificial intelligence, deep/machine learning, data centers, and autonomous driving.",
    Answers: ["IBM", "Micron", "Nvidia", "AMD"],
    correctAnswer: "Nvidia"
  },
  {
    Question: "When Jeff Bezos initially incorporated Amazon in 1994, what was the orginal name for the company?",
    Answers: ["Cadabra", "Relentless", "Amazon", "Pantheon"],
    correctAnswer: "Cadabra"
  },
  {
    Question: "This individial is the current president and CEO of AMD and has a close relative who is also the founder and CEO of their main competitor, Nvidia.",
    Answers: ["Jensen" + "&nbsp" +  "Huang", "Sundar"+ "&nbsp" + "Pichai", "Satya" + "&nbsp" + "Nadella", "Lisa" + "&nbsp" + "Su"],
    correctAnswer: "Lisa" + "&nbsp" + "Su"
    //says this one is incorrect???? 
  },
  {
    Question: "Jack Dorsey, co-founder and CEO of Twitter, is also the co-founder and CEO of which mobile payment company?",
    Answers: ["PayPal", "Square", "Venmo", "Stripe"],
    correctAnswer: "Square"
  },
  {
    Question: "In 2007, which company became first to be worth one trillion dollars?",
    Answers: ["Saudi" + "&nbsp" + "Aramco", "Petrobras", "British" + "&nbsp" + "Petroleum" + "&nbsp" + "(BP)", "PetroChina"],
    correctAnswer: "PetroChina"
  },
  {
    Question: "General Electric(GE) was the longest continuous company to be listed on the Dow Jones Industrial Index from 1907 to 2018. On June 26, 2018 they were replaced by which company?",
    Answers: ["Tesla", "Walgreens", "Wells Fargo", "Lockheed" + "&nbsp" + "Martin"],
    correctAnswer: "Walgreens"
  },
  {
    Question: "This is the most popular options Greek. It measures an option's price sensitivity relative to changes in the price of the underlying asset, and is the number of points that an option's price is expected to move for each one-point change in the underlying.",
    Answers: ["Delta", "Gamma", "Theta", "Vega"],
    correctAnswer: "Delta"
  },
  {
    Question: "This Greek is also known as time decay as it measures the theoretical dollar amount an option loses everyday as time passes, assuming price and volitility of the underlying asset remains the same.",
    Answers: ["Delta", "Theta", "Vega", "Rho"],
    correctAnswer: "Theta"
  },
  {
    Question: "This Greek measures the sensitivity of an option or options portfolio to a change in interest rate.",
    Answers: ["Delta", "Gamma", "Vega", "Rho"],
    correctAnswer: "Rho"
  },
  {
    Question: "This Greek measures an option's sensitivity to changes in the volatility of the underlying, and represents the amount that an option's price changes in response to a 1% change in volatility of the underlying market.",
    Answers: ["Delta", "Gamma", "Vega", "Rho"],
    correctAnswer: "Vega"
  }
]

//The start trivia button which will start the timer and show the questions
$("#startButton").click(function (event) {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);

  $("#triviaStartScreen").hide();
  $("#triviaContent").show();
  setInterval(function () {
    console.log("120 second countdown is up.")
  }, 120000);
  $("#triviaContent").append("<h3>Let's see if you know some corporate history</h3>");
  for (var i = 0; i < questions.length; i++) {
    $("#triviaContent").append("<p id=Q" + [i] + ">" + questions[i].Question + "</p>");
    for (var j = 0; j < questions[i].Answers.length; j++) {
      $("#triviaContent").append('<input type= "radio" name=radioGroup' + [i] + ' value=' + questions[i].Answers[j] + '>' + '<label for=choiceGroup' + [i] + '>' + questions[i].Answers[j] + '</label>');
      console.log(questions[i].Answers[j]);
    }
  }

  $("<br><br>").insertBefore("#Q7");
  $("<h3>Too easy for you? Fine, let's talk about Greeks.</h3>").insertBefore("#Q7");
  $("#triviaContent").append("<br>");
  $("#triviaContent").append("<button type='button' class='btn btn-primary btn-lg' id='submitTrivia'>Submit</button>");
  $("#triviaContent").append("<button type='button' class='btn btn-primary btn-lg' id='resetTriviainGame'>Reset game</button>");

});

//Submit button. On click it will end the timer. On submit answers will be collected determine which ones are correct or not
$(document).on("click", "#submitTrivia", sumbit);

// in game restart game
$(document).on("click", "#resetTriviainGame", function() {
  location.reload();
});

// sumbit function 
function sumbit() {
  var getAnswers = [];
  var answer;

  //hide trivia questions then uses a loop based on the form name + the numbers 1-10 following q
  $("#triviaContent").hide();

  for (var i = 0; i < questions.length; i++) {
    var rightAnswer = questions[i].correctAnswer;
    var userInput = $("input[type='radio'][name='radioGroup" + i + "']:checked").val();
    console.log(userInput);
    if (userInput === rightAnswer) {
      console.log("CORRECT");
      correct++;
    }
    else if (userInput === undefined) {
      unanswered++;
    }
    else {
      wrong++;
    }
    endTime();
    $("#scoreBanner").addClass("jumbotron p-2")
  }

  //place results in empty div
  $("#results").append("<h1>Correct answers: " + correct + "</h1>");
  $("#results").append("<h1>Wrong answers: " + wrong + "</h1>");
  $("#results").append("<h1>Unanswered: " + unanswered + "</h1>");
  $("#endText").html("<h4>Click below to test your knowledge again!</h4>");
  $("#resultReset").append("<button type='button' class='btn btn-primary btn-lg' id='resetTriviainGame'>Reset game</button>");

  console.log("Answers correct: " + correct);
  console.log("Answers wrong: " + wrong);
  console.log("Unanswered questions: " + unanswered);
}

//decrement function here //Tied auto submission of answers to decrement function
function decrement() {
  timeLeft--;
  $("#tickTock").html("Time remaining: " + timeLeft);
  if (timeLeft === 0) {
    sumbit();

  }
}

//end time function
function endTime() {
  clearInterval(intervalId);
}