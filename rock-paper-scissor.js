const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
let maxRound = 5;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentRound > maxRound) return;

    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const outcome = playRound(humanChoice, computerChoice);
    displayResult(outcome);
    currentRound++;
    gameWinner();
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    humanScore++;
    computerScore++;
    return "It's a tie";
  } else if (
    (humanSelection === "rock" && computerSelection === "scissor") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissor" && computerSelection === "paper")
  ) {
    humanScore++;
    return `You win! ${humanSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${humanSelection}`;
  }
}

function displayResult(message) {
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

let winner = document.createElement("div");
function gameWinner() {
  if (currentRound > maxRound) {
    winner.textContent =
      humanScore > computerScore
        ? "Congratulations! You win this game! 🏆"
        : humanScore < computerScore
        ? "You lose! 😞 better luck next time!"
        : "It's a tie";
    return result.append(winner);
  }
}
