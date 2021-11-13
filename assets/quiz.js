// Where to start my JavaScript

var timeLeft = 60;
var currentIndex = 0
var startButton = document.querySelector(".start-quiz")
var pushButton = document.querySelector(".push-button")
var questionHeading = document.querySelector(".question-heading")
var questionContainer = document.querySelector(".question-container")
var answerContainer = document.querySelector(".answer-container")

//const quizContainer = document.getElementById('quiz');
//const resultsContainer = document.getElementById('results');
//const submitButton = document.getElementById('submit');

//function buildQuiz(){}
//function showResults(){}

//display quiz right away
//buildQuiz();

// on submit, show results
//submitButton.addEventListener('click', showResults);

var startButton = document.getElementById("start-quiz")

function startQuiz(){
  push
  console.log("click")
}
startButton.onclick = startQuiz


//use an array of objects for questions
var myQuestions = [
  {
    question: "Who was the first character to wield Thor's hammer Mjollnir?",
    choices: ["Odin", "Thor", "Jane Foster", "Heimdall"],
    correctAnswer: "Odin"
  },
  {
    question: "What is the name of Thor's human alter ego?",
    answers: ["Throg", "Bill Foster", "Donald Blake", "Adam Warlock"],
    correctAnswer: "Donald Blake"
  },
  {
    question: "Which of these villains does Thor fear the most?",
    answers: ["Cul Borson", "Gorr the God Butcher", "Galactus", "Hela"],
    correctAnswer: "Gorr the God Butcher"
  },
]