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
  let computerPick = document.createElement("div");
  computerPick.textContent = `Computer: ${computerSelection}`;
  result.append(computerPick);
}
