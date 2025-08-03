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
