function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    return "rock";
  } else if (randomChoice === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  let userChoice = prompt("Choose: Rock, Paper or Scissor ");
  return userChoice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();
}
