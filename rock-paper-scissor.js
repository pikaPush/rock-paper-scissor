const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
let maxRound = 5;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentRound > maxRound) return;

    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    const outcome = playRound(humanChoice, computerChoice);
    displayResult(outcome);
    currentRound++;
  });
});

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    humanScore++;
    computerScore++;
    return "It's a tie";
  } else if (
    (humanSelection === "Rock" && computerSelection === "Scissor") ||
    (humanSelection === "Paper" && computerSelection === "Rock") ||
    (humanSelection === "Scissor" && computerSelection === "Paper")
  ) {
    humanScore++;
    return `You win! ${humanSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${humanSelection}`;
  }
}

function displayResult(messageResult) {
  let rounds = document.createElement("div");
  rounds.textContent = `Round ${currentRound}`;
  result.append(rounds);

  let messageResult = document.createElement("div");
  messageResult.textContent = message;
  result.append(messageResult);

  let scores = document.createElement("div");
  scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
  result.append(scores);
}
