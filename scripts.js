const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz-container");
const questionBox = document.getElementById("question");
const answers = document.getElementById("answer-btns");

const shuffleQuestions, questionIndex;

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
    showQuestion(shuffledQuestions[questionIndex])
}

function showQuestion(question)
    questionBox.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', answerButtonElement.appendChild(button))
    })

function resetState(){
  nextButton.classList.add('hide')
  while(answers.firstChild){
    answers.removeChild(answer)

  }
}


function selectAnswer(e) {
   const selectedButton = e.target
   const correct = selectedbutton.dataset.correct

}


const questions = [
    {
        question: "What is love?",
            answers: [
            { text: '42', correct: false },
            { text: 'Baby, dont tell me, no more',  correct: true  },
            { text: 'Finite', correct: false  },
            { text: 'Pain', correct: false  }
         ]
    },
    {
        question: 'What is 7 x 9, motherfuckah??',
        answers: [
          { text: '46', correct: false },
          { text: '63', correct: true },
          { text: '49', correct: false },
          { text: '72', correct: false }
        ]
      },
      {
        question: 'What is 4 x 2?',
        answers: [
          { text: '6', correct: false },
          { text: '8', correct: true }
        ]
      }
]