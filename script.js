const choices = ["paper", "rock", "scissors"];
const button = document.querySelectorAll(".pick");
const scoreEl = document.getElementById("score");
const main = document.getElementById("main");
const selection = document.getElementById("selection");
const reset = document.getElementById("reset");
const userSelect = document.getElementById("user-select");
const computerSelect = document.getElementById("computer-select");
const winner = document.getElementById("winner");

// model buttons
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const rules = document.getElementById("rules");

let score = 0;
let userChoice = undefined;

button.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");

    checkWinner();
  });
});

reset.addEventListener("click", () => {
  // show selection & hide main
  main.style.display = "flex";
  selection.style.display = "none";
});

openBtn.addEventListener("click", () => {
  // show selection & hide main
  rules.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  // show selection & hide main
  rules.style.display = "none";
});

function checkWinner() {
  const computerChoice = pickRandomChoice();
  //update the view
  updateSelection(userSelect, userChoice);
  updateSelection(computerSelect, computerChoice);

  if (userChoice === computerChoice) {
    // draw
    winner.innerText = "draw";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    updateScore(1); // user wins
    winner.innerText = "win";
  } else {
    updateScore(-1); // user loses
    winner.innerText = "lose";
  }
  main.style.display = "none";
  selection.style.display = "flex";
}

function updateScore(value) {
  score += value;

  scoreEl.innerText = score;
}

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
  // class reset
  selectionEl.classList.remove("btn-paper");
  selectionEl.classList.remove("btn-scissors");
  selectionEl.classList.remove("btn-rock");
  //update the image
  const img = selectionEl.querySelector("img");

  selectionEl.classList.add(`btn-${choice}`);
  img.src = `./images/icon-${choice}.svg`;
  img.alt = choice;
}
