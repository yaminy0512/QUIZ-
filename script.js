const questions = [
  {
    question: "What is the result of the following expression: 5 + 3 * 2?",
    answers: [
      { text: "A) 16", correct: false },
      { text: "B) 11", correct: true },
      { text: "C) 13", correct: false },
      { text: "D) 10", correct: false },
    ],
  },
  {
    question: "Which method is used to print a message to the console?",
    answers: [
      { text: "A) log()", correct: false },
      { text: "B) console()", correct: false },
      { text: "C) print()", correct: false },
      { text: "D) console.log()", correct: true },
    ],
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    answers: [
      { text: "A) variable name", correct: false },
      { text: "B) var name", correct: true },
      { text: "C) v name", correct: false },
      { text: "D) let name", correct: false },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "A) function: myFunction()", correct: false },
      { text: "B) function myFunction()", correct: true },
      { text: "C) function = myFunction()", correct: false },
      { text: "D) function => myFunction()", correct: false },
    ],
  },
  {
    question: "What is the result of the following expression: 10 % 3?",
    answers: [
      { text: "A) 1", correct: true },
      { text: "B) 2", correct: false },
      { text: "C) 3", correct: false },
      { text: "D) 0", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "A) String", correct: false },
      { text: "B) Boolean", correct: false },
      { text: "C) Float", correct: true },
      { text: "D) Number", correct: false },
    ],
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element with id 'demo'?",
    answers: [
      {
        text: "A) document.getElementByName('demo').innerHTML = 'Hello World!'",
        correct: false,
      },
      {
        text: "B) document.getElementById('demo').innerHTML = 'Hello World!'",
        correct: true,
      },
      {
        text: "C) document.getElement('demo').innerHTML = 'Hello World!'",
        correct: false,
      },
      {
        text: "D) document.getElementById('demo').text = 'Hello World!'",
        correct: false,
      },
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "A) msg('Hello World')", correct: false },
      { text: "B) alertBox('Hello World')", correct: false },
      { text: "C) msgBox('Hello World')", correct: false },
      { text: "D) alert('Hello World')", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  questionElement.innerHTML = questions[currentQuestionIndex].question;
  answerButtons.innerHTML = "";
  for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
    const answer = questions[currentQuestionIndex].answers[i];
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer.correct));
    answerButtons.appendChild(button);
  }
}

function selectAnswer(correct) {
  if (correct) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert("Quiz Finished! Your Score: " + score);
    startQuiz();
  }
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert("Quiz Finished! Your Score: " + score);
    startQuiz();
  }
});

startQuiz();
