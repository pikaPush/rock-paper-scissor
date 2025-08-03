const result = document.getElementById("result");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");

function playRound(humanSelection, computerSelection) {
  const choices = ["Rock", "Paper", "Scissor"];
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerSelection);
}
