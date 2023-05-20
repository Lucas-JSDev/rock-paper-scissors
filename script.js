let playerScore = 0;
let computerScore = 0;

// UI Buttons
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
// UI Text
const stationTitle = document.querySelector('.stationTitle');
const stationSubtitle = document.querySelector('.stationSubtitle');
const textPlayerScore = document.querySelector('#textPlayerScore');
const textComputerScore = document.querySelector('#textComputerScore');
const playerWeapon = document.querySelector('#playerWeapon');
const computerWeapon = document.querySelector('#computerWeapon');
// UI Modal
const modal = document.querySelector('.resultContainer')
const resultBtn = document.querySelector('.resultBtn');
const resultText = document.querySelector('#resultText')

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  let computerSelection = choice[Math.floor(Math.random() * choice.length)];
  switch (computerSelection) {
      case "Rock": 
          computerWeapon.textContent = '✊';
          break;
      case "Paper":
          computerWeapon.textContent = '✋';
          break;
      case "Scissors":
          computerWeapon.textContent = '✌';
          break;
  }
  return computerSelection;
}


// UI Buttons Events
rockBtn.addEventListener('click', () => {
  const playerSelection = 'Rock';
  const computerSelection = getComputerChoice();
  const playerWeapon = document.querySelector('#playerWeapon')
  playerWeapon.textContent = '✊'
  game(playerSelection, computerSelection);
});

paperBtn.addEventListener('click', () => {
  const playerSelection = 'Paper';
  const computerSelection = getComputerChoice();
  const playerWeapon = document.querySelector('#playerWeapon')
  playerWeapon.textContent = '✋'
  game(playerSelection, computerSelection);
});

scissorsBtn.addEventListener('click', () => {
  const playerSelection = 'Scissors';
  const computerSelection = getComputerChoice();
  const playerWeapon = document.querySelector('#playerWeapon')
  playerWeapon.textContent = '✌'
  game(playerSelection, computerSelection);
});
resultBtn.addEventListener('click', ()=> {
  modal.close()
})


// Game
function game(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    stationTitle.textContent = 'Tied Match!'
    stationSubtitle.textContent = 'I\'s a tie!'
  } else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    stationTitle.textContent = 'You won!'
    stationSubtitle.textContent = `${playerSelection} beats ${computerSelection}`
    textPlayerScore.textContent = `Player Score: ${playerScore}`
  } else {
    computerScore++;
    stationTitle.textContent = 'You lost!'
    stationSubtitle.textContent = `${computerSelection} beats ${playerSelection}`
    textComputerScore.textContent = `Computer Score: ${computerScore}`
  }
    if (playerScore === 5 || computerScore === 5) {
      if (playerScore === 5) {
        resultText.textContent = 'Congratulations! You win!';
      } else {
        resultText.textContent = 'Sorry, you lose!';
      }
      resetGame();
      modal.showModal()
  }
}

// Reset
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
  textPlayerScore.textContent = 'Player Score: 0';
  textComputerScore.textContent = 'Computer Score: 0';
  stationTitle.textContent = 'Choose your weapon';
  stationSubtitle.textContent = 'First to score 5 points wins the game';
  computerWeapon.textContent = '❔';
  playerWeapon.textContent = '❔';
}