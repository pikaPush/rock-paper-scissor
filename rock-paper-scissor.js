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

function getHumanChoice() {
  let userChoice = prompt("Choose: Rock, Paper or Scissor ");
  return userChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      computerScore++;
      humanScore++;
      return `It's a tie. Player: ${humanChoice} vs Computer: ${computerChoice}`;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}`;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
      computerScore++;
      return `You Lose! ${computerChoice} beats ${humanChoice}`;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
      computerScore++;
      return `You Lose! ${computerChoice} beats ${humanChoice}`;
    } else {
      humanScore++;
      return `You won! ${humanChoice} beats ${computerChoice}`;
    }
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  console.log(`Your pick: ${humanSelection}`);
  console.log(`Computer's pick: ${computerSelection}`);
  console.log(playRound(humanSelection, computerSelection));
  console.log(`Your score: ${humanScore++}`);
  console.log(`Computer score: ${computerScore}`);
}

function game() {
  for (let i = 0; i < 5; i++) {
    playGame();
  }
  console.log("Game Over!");
}

game();
