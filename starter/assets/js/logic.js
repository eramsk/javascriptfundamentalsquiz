var startEl = document.getElementById("start")
var questionEl = document.getElementById("questions")
var questionNumber = 0;
var questionTitleEl = document.getElementById("question-title");
var button1El = document.getElementById("option1");
var button2El = document.getElementById("option2");
var button3El = document.getElementById("option3");
var button4El = document.getElementById("option4");

button1El.addEventListener("click",checkAnswer); 
button2El.addEventListener("click",checkAnswer);
button3El.addEventListener("click",checkAnswer);
button4El.addEventListener("click",checkAnswer);

startEl.addEventListener("click",function(evt){
    questionEl.classList.remove("hide")
    document.getElementById("start-screen").classList.add("hide")
    renderQuestion();
})

function renderQuestion(){
    questionTitleEl.textContent = questionsList[questionNumber].question
    button1El.textContent = questionsList[questionNumber].choices[0]
    button2El.textContent = questionsList[questionNumber].choices[1]
    button3El.textContent = questionsList[questionNumber].choices[2]
    button4El.textContent = questionsList[questionNumber].choices[3]
}

function checkAnswer(event){
    console.log(event.target.textContent)
    //eval
     // deduct timer
     //proceed - 
}