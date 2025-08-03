const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
let maxRound = 5;

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
