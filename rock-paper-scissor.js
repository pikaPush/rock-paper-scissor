function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  let userChoice = prompt('Choose "rock", "paper" or "scissor" ');

  return userChoice;
}

console.log(getHumanChoice());

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice) {}
