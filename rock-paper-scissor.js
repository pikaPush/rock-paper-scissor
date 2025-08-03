const result = document.getElementById("result");

function playRound(humanSelection, computerSelection) {
  const choices = ["Rock", "Paper", "Scissor"];
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
}
