const timeLimitPerQuestion = 45; // 45 seconds per question
let remainingTime = timeLimitPerQuestion;
let totalTime = 0;
let questions = [
  {
    question: "Which one of the five is least like the other four?",
    difficulty: "medium",
    answers: [
      { text: "Dog", correct: false },
      { text: "Snake", correct: true },
      { text: "Mouse", correct: false },
      { text: "Elephant", correct: false },
    ],
  },
  {
    question: "Which number should come next in the series?\n1 - 1 - 2 - 3 - 5 - 8 - 13",
    answers: [
      { text: "31", correct: false },
      { text: "13", correct: false },
      { text: "21", correct: true },
      { text: "31", correct: false },
    ],
  },
  {
    question: "Which one of the five choices makes the best comparison?\nPEACH is to HCAEP as 46251 is to:",
    answers: [
      { text: "15264", correct: true },
      { text: "25641", correct: false },
      { text: "12654", correct: false },
      { text: "51462", correct: false },
    ],
  },
  {
    question: "Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?",
    answers: [
      { text: "20", correct: false },
      { text: "28", correct: false },
      { text: "26", correct: false },
      { text: "24", correct: true },
    ],
  },
  {
    question: "Which larger shape would be made if the two sections are fitted together?",
    imageUrl: "iq5th.png",
    imageAlt: "Two pieces to make a square",
    imageWidth: "30px", 
    imageHeight: "20px",
    answers: [
      { text: "Fig-a", correct: false },
      { text: "Fig-b", correct: false },
      { text: "Fig-c", correct: true },
      { text: "Fig-d", correct: false },
    ],
  },
  {
    question: "Which one of the numbers does not belong in the following series?\n2 - 3 - 6 - 7 - 8 - 14 - 15 - 30",
    answers: [
      { text: "THIRTY", correct: false },
      { text: "EIGHT", correct: true },
      { text: "SEVEN", correct: false },
      { text: "FIFTEEN", correct: false },
    ],
  },{
    question: "Which one of the four choices makes the best comparison? Finger is to Hand as Leaf is to:",
    answers: [
      { text: "Barch", correct: true },
      { text: "Twig", correct: false },
      { text: "Tree", correct: false },
      { text: "Bark", correct: false },
    ],
  },
  {
    question: 'If you rearrange the letters "CIFAIPC" you would have the name of a/an:',
    answers: [
      { text: "City", correct: false },
      { text: "Animal", correct: false },
      { text: "River", correct: false },
      { text: "Ocean", correct: true },
    ],
  },
  {
    question: "John needs 13 bottles of water from the store. John can only carry 3 at a time. What's the minimum number of trips John needs to make to the store?",
    answers: [
      { text: "5", correct: true },
      { text: "4 & 1/2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "If all Bloops are Razzies and all Razzies are Lazzies, all Bloops are definitely Lazzies.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: 'Choose the word most similar to "Trustworthy":',
    answers: [
      { text: "Resolute", correct: false },
      { text: "Tenacity", correct: false },
      { text: "Relevant", correct: false },
      { text: "Reliable", correct: true },
    ],
  },
  {
    question: 'If you rearrange the letters "LNGEDNA" you have the name of a/an:',
    answers: [
      { text: "Animal", correct: false },
      { text: "Country", correct: true },
      { text: "State", correct: false },
      { text: "City", correct: false },
    ],
  },
  {
    question: "Which one of the numbers does not belong in the following number set?\n1 - 2 - 26 - 5 - 13 - 0 - 28",
    answers: [
      { text: "13", correct: false },
      { text: "0", correct: true },
      { text: "1", correct: false },
      { text: "26", correct: false },
    ],
  },
  {
    question: "Ralph likes 25 but not 24; he likes 400 but not 300; he likes 144 but not 145. Which does he like:",
    answers: [
      { text: "10", correct: false },
      { text: "50", correct: false },
      { text: "200", correct: false },
      { text: "1600", correct: true },
    ],
  },
  {
    question: "How many four-sided figures appear in the diagram below?",
    imageUrl: "iq15th.png",
    imageAlt: "Two pieces to make a square",
    imageWidth: "30px", 
    imageHeight: "20px",
    answers: [
      { text: "10", correct: false },
      { text: "16", correct: false },
      { text: "25", correct: true },
      { text: "28", correct: false },
    ],
  },
  {
    question: "What is the missing number in the sequence shown below?\n1 - 8 - 27 - ? - 125 - 216",
    answers: [
      { text: "36", correct: false },
      { text: "64", correct: false },
      { text: "99", correct: false },
      { text: "45", correct: true },
    ],
  },
  {
    question: "Which one of the following things is the least like the others?",
    answers: [
      { text: "Flower", correct: true },
      { text: "Novel", correct: false },
      { text: "Statue", correct: false },
      { text: "Poem", correct: false },
    ],
  },
  {
    question: "Choose the number that is 1/4 of 1/2 of 1/5 of 200:",
    answers: [
      { text: "50", correct: false },
      { text: "5", correct: true },
      { text: "10", correct: false },
      { text: "25", correct: false },
    ],
  },
  {
    question: "What is the probability of flipping a coin and getting 5 tails in a row?",
    answers: [
      { text: "25%", correct: false },
      { text: "12.5%", correct: false },
      { text: "3.125%", correct: true },
      { text: "6.25%", correct: false },
    ],
  },
  {
    question: "Which of the figures below the line of drawings best completes the series?",
    imageUrl: "iq20th.png",
    imageAlt: "Two pieces to make a square",
    imageWidth: "30px", 
    imageHeight: "20px",
    answers: [
      { text: "Fig-a", correct: false },
      { text: "Fig-b", correct: false },
      { text: "Fig-c", correct: false },
      { text: "Fig-d", correct: true },
    ],
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";

  questions = shuffleArray(questions); // Randomize the order of questions

  // Calculate totalTime
  totalTime = timeLimitPerQuestion * questions.length;

  startTimer(); // Start the timer
  showQuestion();
}

let timerInterval; // Add this variable at the beginning of the script

function startTimer() {
  remainingTime = timeLimitPerQuestion;
  updateTimerDisplay(); // Display the initial time before starting the countdown

  timerInterval = setInterval(() => {
    remainingTime--;
    updateTimerDisplay(); // Update the timer display with the new remaining time

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      handleNextButton();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = `Time left: ${remainingTime}s`;
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = `${questionNo}.) ${currentQuestion.question}`;
  // Split the question text by '\n' to create line breaks
  // Join the lines with <br> to create line breaks in the HTML
  // Clear the image container first
  const imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = "";

  if (currentQuestion.imageUrl) {
    const image = document.createElement("img");
    image.src = currentQuestion.imageUrl;
    image.alt = currentQuestion.imageAlt;
    imageContainer.appendChild(image);
  }

  // Remove the old event listeners
  answerButtons.querySelectorAll(".btn").forEach(button => {
    button.removeEventListener("click", selectAnswer);
  });

  // Display the answers in their original order (no shuffling)
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}


function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;

  // Check if the button has already been marked as correct or incorrect
  if (!selectedBtn.classList.contains("correct") && !selectedBtn.classList.contains("incorrect")) {
    // Check if the answer is correct.
    const selectedAnswer = questions[currentQuestionIndex].answers.find(
      answer => answer.text === selectedBtn.textContent
    );
    if (selectedAnswer.correct) {
      score = score + 1;
    }

    // Deselect all of the other buttons.
    answerButtons.querySelectorAll(".btn").forEach(otherButton => {
      if (otherButton !== selectedBtn) {
        otherButton.classList.remove("correct");
        otherButton.classList.remove("incorrect");
      }
    });

    // Mark the selected button as correct or incorrect.
    selectedBtn.classList.add(selectedAnswer.correct ? "correct" : "incorrect");

    nextButton.style.display = "block";
  }
}

function showScore() {
  const iq = calculateIQ(score, totalTime); // Use the totalTime calculated in startQuiz()
  questionElement.innerHTML = `Congratulations! Your IQ is ${iq}`;

  const timerElement = document.getElementById("timer");
  timerElement.style.display = "none"; // Hide the timer

  // Hide the answer option buttons and the next button
  answerButtons.style.display = "none";
  nextButton.style.display = "none";

  // Clear the image container
  const imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = "";
}

const weightedScores = {
  easy: 1,
  medium: 2,
  hard: 3,
};

function calculateMaxScore() {
  // Calculate the maximum score achievable for the entire quiz
  let maxScore = 0;
  questions.forEach(question => {
    const weight = weightedScores[question.difficulty] || 1;
    maxScore += weight;
  });
  return maxScore;
}

function calculateIQ(score, totalTime) {
  const maxScore = calculateMaxScore(); // Calculate the maximum score
  const minIQ = 80; // Set the minimum IQ to 80
  const maxIQ = 145; // Set the maximum IQ to 145
  const iqRange = maxIQ - minIQ;
  const percentageScore = (score / maxScore) * 100;
  const iq = Math.round((percentageScore / 100) * iqRange + minIQ);
  // Calculate penalty for exceeding time limit
  const timePenalty = Math.floor(totalTime / 5);
  // Adjust the total score with the time penalty
  const adjustedScore = Math.max(0, score - timePenalty);
  return iq;
}

nextButton.addEventListener("click", handleNextButton);
startQuiz();

function handleNextButton() {
  clearInterval(timerInterval); // Clear the timer before moving to the next question

  // Check if the user didn't select any option (time ran out)
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.answers.find(answer => answer.correct);

  if (!correctAnswer || !answerButtons.querySelector(".correct")) {
    // If the user didn't select any correct option, treat it as an incorrect answer
    answerButtons.querySelectorAll(".btn").forEach(button => {
      button.classList.remove("correct");
      button.classList.add("incorrect");
    });
  }

  // Check if it is the last question
  if (currentQuestionIndex === questions.length - 1) {
    showScore(); // Show the final score if it is the last question
    nextButton.style.display = "none"; // Hide the next button after showing the result
  } else {
    currentQuestionIndex++;
    startTimer(); // Reset the timer for the next question
    showQuestion();
  }
}








