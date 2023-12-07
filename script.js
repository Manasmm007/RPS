let playerName = "";
let playerWins = 0;
let computerWins = 0;
let draws = 0;
let totalGames = 0;
let history = [];

function playGame(playerChoice) {
  totalGames++;
  const computerChoices = ['R', 'P', 'S'];
  const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  let result;
  if (playerChoice === computerChoice) {
    draws++;
    result = "Draw";
  } else if (
    (playerChoice === "R" && computerChoice === "S") ||
    (playerChoice === "P" && computerChoice === "R") ||
    (playerChoice === "S" && computerChoice === "P")
  ) {
    playerWins++;
    result = "Player Wins";
  } else {
    computerWins++;
    result = "Computer Wins";
  }

  history.unshift(`${playerName} (${playerChoice}) vs Computer (${computerChoice}) - ${result}`);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('recordArea').value = `${playerName} Wins: ${playerWins}\nComputer Wins: ${computerWins}\nDraws: ${draws}\nTotal Games: ${totalGames}`;
  document.getElementById('historyArea').value = history.join('\n');
}

function resetGame() {
  playerWins = 0;
  computerWins = 0;
  draws = 0;
  totalGames = 0;
  history = [];
  updateDisplay();
}

function setPlayerName() {
  const newPlayerName = document.getElementById('playerName').value.trim();
  if (newPlayerName !== '') {
    if (playerName !== newPlayerName) {
      playerName = newPlayerName;
      resetGame();
    } else {
      updateDisplay();
    }
    document.getElementById('gameButtons').style.display = 'block'; // Display game buttons
  }
}

document.getElementById('rockBtn').addEventListener('click', () => playGame('R'));
document.getElementById('paperBtn').addEventListener('click', () => playGame('P'));
document.getElementById('scissorsBtn').addEventListener('click', () => playGame('S'));
document.getElementById('resetBtn').addEventListener('click', resetGame);
document.getElementById('setNameBtn').addEventListener('click', setPlayerName);
