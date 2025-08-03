const result = document.getElementById("result");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");

rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorButton.addEventListener("click", () => playRound("Scissor"));

function playRound(humanSelection, computerSelection) {
  const choices = ["Rock", "Paper", "Scissor"];
  computerSelection = choices[Math.floor(Math.random() * choices.length)];

  let myPick = document.createElement("div");
  myPick.textContent = `You: ${humanSelection}`;
  result.append(myPick);

  let computerPick = document.createElement("div");
  computerPick.textContent = `Computer: ${computerSelection}`;
  result.append(computerPick);

  let humanScore = 0;
  let computerScore = 0;
  let resultDisplay = document.createElement("div");

  if (humanSelection === computerSelection) {
    resultDisplay.textContent = "It's a tie";
    result.append(resultDisplay);
    humanScore++;
  } else if (
    (humanSelection === "Rock" && computerSelection === "Scissor") ||
    (humanSelection === "Paper" && computerSelection === "Rock") ||
    (humanSelection === "Scissor" && computerSelection === "Paper")
  ) {
    resultDisplay.textContent = `You won! ${humanSelection} beats ${computerSelection}`;
    result.append(resultDisplay);
    humanScore++;
  } else {
    resultDisplay.textContent = `You lose! ${computerSelection} beats ${humanSelection}`;
    result.append(resultDisplay);
    computerScore++;
  }

  let scores = document.createElement("div");
  scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
  result.append(scores);
}
