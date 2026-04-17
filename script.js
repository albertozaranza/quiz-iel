const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const quizTitle = document.getElementById("quiz-title");
const quizProgress = document.getElementById("quiz-progress");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreText = document.getElementById("score");
const scorePercent = document.getElementById("score-percent");
const progressBar = document.getElementById("progress-bar");
const message = document.getElementById("message");

const LETTERS = ["A", "B", "C", "D", "E"];

const state = {
  title: "",
  questions: [],
  currentIndex: 0,
  score: 0,
  selectedOption: null,
};

function clearMessage() {
  message.textContent = "";
}

function setMessage(text) {
  message.textContent = text;
}

function resetSelectionStyles() {
  optionsContainer.querySelectorAll(".option-btn").forEach((btn) => {
    btn.classList.remove("selected", "correct", "wrong");
  });
}

function updateProgressBar() {
  const pct = ((state.currentIndex + 1) / state.questions.length) * 100;
  progressBar.style.width = `${pct}%`;
}

function renderQuestion() {
  const currentQuestion = state.questions[state.currentIndex];
  state.selectedOption = null;

  quizProgress.textContent = `Pergunta ${state.currentIndex + 1} de ${state.questions.length}`;
  questionContainer.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";
  updateProgressBar();

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = LETTERS[index] ?? index + 1;

    const label = document.createElement("span");
    label.textContent = option;

    button.appendChild(letter);
    button.appendChild(label);

    button.addEventListener("click", () => {
      state.selectedOption = index;
      resetSelectionStyles();
      button.classList.add("selected");
      clearMessage();
    });

    optionsContainer.appendChild(button);
  });
}

function revealAnswer() {
  const currentQuestion = state.questions[state.currentIndex];
  const optionButtons = optionsContainer.querySelectorAll(".option-btn");

  optionButtons.forEach((btn, index) => {
    if (index === currentQuestion.answer) {
      btn.classList.add("correct");
    } else if (index === state.selectedOption) {
      btn.classList.add("wrong");
    }
  });
}

function goToNextQuestion() {
  state.currentIndex += 1;
  if (state.currentIndex < state.questions.length) {
    renderQuestion();
    return;
  }
  showResult();
}

function handleNextClick() {
  if (state.selectedOption === null) {
    setMessage("Selecione uma alternativa antes de continuar.");
    return;
  }

  const currentQuestion = state.questions[state.currentIndex];
  if (state.selectedOption === currentQuestion.answer) {
    state.score += 1;
  }

  revealAnswer();

  nextBtn.disabled = true;
  setTimeout(() => {
    nextBtn.disabled = false;
    goToNextQuestion();
  }, 550);
}

function showResult() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  const total = state.questions.length;
  const percent = Math.round((state.score / total) * 100);
  scorePercent.textContent = `${percent}%`;
  scoreText.textContent = `Você acertou ${state.score} de ${total} perguntas`;
}

function resetQuiz() {
  state.currentIndex = 0;
  state.score = 0;
  state.selectedOption = null;

  resultContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  clearMessage();
  renderQuestion();
}

function loadQuiz() {
  fetch("quiz.json")
    .then((res) => res.json())
    .then((data) => {
      state.title = data.title;
      state.questions = data.questions;
      quizTitle.textContent = state.title;
      renderQuestion();
    });
}

nextBtn.addEventListener("click", handleNextClick);
restartBtn.addEventListener("click", resetQuiz);

loadQuiz();
