let startBtn = document.getElementById("start-btn");
let nextBtn = document.getElementById("next-btn");
let quizContainer = document.getElementById("quiz-container");
let questionBox = document.getElementById("questio");
let answers = document.getElementById("answer-btns");

let shuffleQuestions, questionIndex;

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    questionIndex++
    nextQuestion()    
})

function startQuiz() {
    startBtn.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    quizContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    resetState()
    showQuestions(shuffledQuestions[questionIndex])
}


function selectAnswer() {
    
}


