let timeId = document.querySelector('#time');
let startBtn = document.querySelector('#start');
let questionsId = document.querySelector('#questions');
let choicesId = document.querySelector('#choices');
let userInitials = document.querySelector('#initials');
let submitBtn = document.querySelector('#submit');
let feedbackUser = document.querySelector('#feedback');

let currentQuestion = 0;
let timerCount = questions.length * 15;
let timeInterval;

// Start the quiz
function startQuiz(){
    let startScreen = document.querySelector('#start-screen');
    startScreen.style.display = 'none';
    questionsId.removeAttribute('class');
    showQuestion();
    timeInterval = setInterval(startTimer, 1000);
    startTimer();
}
