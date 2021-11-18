// Where to start my JavaScript

var timeLeft = 60;
var currentIndex = 0
var timerObj;
var startButton = document.querySelector(".start-quiz")
var questionHeading = document.querySelector(".question-heading")
var questionContainer = document.querySelector(".question")
questionContainer.style.display = "none"
var answerContainer = document.querySelector(".answer-container")
var timeRemaining = document.getElementById("timer")

var saveHighScores = document.getElementById("user-scores") //is this placed correctly



var questionChoice1 =  document.getElementById("option1")
questionChoice1.addEventListener("click", checkAnswer)

var questionChoice2 = document.getElementById("option2")
questionChoice2.addEventListener("click", checkAnswer)

var questionChoice3 = document.getElementById("option3")
questionChoice3.addEventListener("click", checkAnswer)

var questionChoice4 = document.getElementById("option4")
questionChoice4.addEventListener("click", checkAnswer)

var score = 0;

//const resultsContainer = document.getElementById('results');
//const submitButton = document.getElementById('submit');

//function buildQuiz(){}
function showResults(){
  console.log("SCore",score,timeLeft)
}

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
  timerObj = setInterval(function(){
     timeRemaining.textContent = timeLeft;
     if (timeLeft <= 0){
      questionContainer.style.display = "none"
       clearInterval(timerObj);
       showResults()
     } else {
       timeLeft-- ;//timeLeft = timeLeft -1;
     }
    
  },1000)
  showQuestion()
})

function showQuestion(){
  questionHeading.textContent = myQuestions[currentIndex].question
  questionChoice1.textContent = myQuestions[currentIndex].choices[0]
  questionChoice2.textContent = myQuestions[currentIndex].choices[1]
  questionChoice3.textContent = myQuestions[currentIndex].choices[2]
  questionChoice4.textContent = myQuestions[currentIndex].choices[3]
}

function checkAnswer(){ //would this be better in a for loop?
  var userChoice = this.getAttribute("data-optionvalue")
  console.log(userChoice)
  if (userChoice == myQuestions[currentIndex].correctAnswer){
    score+=10
    //textContent = "Correct!" - Want to show this message before moving on
  }else{
    timeLeft-=5
    //textContent = "Wrong!" - want to show this message before moving on
  }
  if (currentIndex<myQuestions.length-1){
    currentIndex++
    showQuestion()
  } else {
    questionContainer.style.display = "none"
    clearInterval(timerObj);
  }
}

function saveHighScores(){
  //must only appear once quiz is completed
  //tell it to save score in the 'hsList' table once 'Save High Scores' is clicked
  //
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
    choices: ["Throg", "Bill Foster", "Donald Blake", "Adam Warlock"],
    correctAnswer: 2
  },
  {
    question: "Which of these villains does Thor fear the most?",
    choices: ["Cul Borson", "Gorr the God Butcher", "Galactus", "Hela"],
    correctAnswer: 1
  },
]

// look at Robot Gladiatiors for High Scores ex