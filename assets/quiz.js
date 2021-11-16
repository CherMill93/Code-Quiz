// Where to start my JavaScript

var timeLeft = 60;
var currentIndex = 0
var startButton = document.querySelector(".start-quiz")
var questionHeading = document.querySelector(".question-heading")
var questionContainer = document.querySelector(".question")
var answerContainer = document.querySelector(".answer-container")
questionContainer.style.display = "none"

var questionChoice1 =  document.getElementById("option1")
questionChoice1.addEventListener("click", checkAnswer)

var questionChoice2 = document.getElementById("option2")
questionChoice2.addEventListener("click", checkAnswer)

var questionChoice3 = document.getElementById("option3")
questionChoice3.addEventListener("click", checkAnswer)

var questionChoice4 = document.getElementById("option4")
questionChoice4.addEventListener("click", checkAnswer)

//const quizContainer = document.getElementById('quiz');
//const resultsContainer = document.getElementById('results');
//const submitButton = document.getElementById('submit');

//function buildQuiz(){}
//function showResults(){}

//display quiz right away
//buildQuiz();

// on submit, show results
//submitButton.addEventListener('click', showResults);




function countDown(){
//use timer from activity
}

startButton.addEventListener("click",function(){
  questionContainer.style.display = "block"
  startButton.style.display = "none"
  showQuestion()
})


function highScores(){
  push
  console.log("click")
}



function showQuestion(){
  questionHeading.textContent = myQuestions[currentIndex].question
  questionChoice1.textContent = myQuestions[currentIndex].choices[0]
  questionChoice2.textContent = myQuestions[currentIndex].choices[1]
  questionChoice3.textContent = myQuestions[currentIndex].choices[2]
  questionChoice4.textContent = myQuestions[currentIndex].choices[3]
}

function checkAnswer(){
  var userChoice = this.getAttribute("data-optionvalue")
  console.log(userChoice)
}

//use an array of objects for questions
var myQuestions = [
  {
    question: "Who was the first character to wield Thor's hammer Mjollnir?",
    choices: ["Odin", "Thor", "Jane Foster", "Heimdall"],
    correctAnswer: 0
  },
  {
    question: "What is the name of Thor's human alter ego?",
    answers: ["Throg", "Bill Foster", "Donald Blake", "Adam Warlock"],
    correctAnswer: 2
  },
  {
    question: "Which of these villains does Thor fear the most?",
    answers: ["Cul Borson", "Gorr the God Butcher", "Galactus", "Hela"],
    correctAnswer: 1
  },
]