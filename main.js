let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;
let draw = 0

const header = document.createElement('header');
header.textContent = 'Rock Paper Scissors';
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const playAgainDiv = document.createElement('div');
const resultsDiv = document.createElement('div');
resultsDiv.id = 'resultsDiv';
playAgainDiv.id = 'playAgainDiv';
const playAgainBtn = document.createElement('button');
playAgainBtn.id = "playAgainBtn"
const results = document.createElement('div');
const divBtn = document.createElement('div');
divBtn.id = 'divBtn';
results.id = 'results';
const playerScoreEl = document.createElement('p');
playerScoreEl.id = 'playerScore';
const computerScoreEl = document.createElement('p');
computerScoreEl.id = 'computerScore';
const drawEl = document.createElement('p');
drawEl.id = 'draw'

rockBtn.textContent = ' ✊';
paperBtn.textContent = '✋';
scissorsBtn.textContent = ' ✌️';
results.textContent = 'Score:';
playerScoreEl.textContent = `player: 0`;
computerScoreEl.textContent = `Computer: 0`;
drawEl.textContent = `Draw: 0`;


document.body.appendChild(header);
document.body.appendChild(divBtn);
document.body.appendChild(resultsDiv);
document.body.appendChild(playAgainDiv);
divBtn.appendChild(rockBtn);
divBtn.appendChild(paperBtn);
divBtn.appendChild(scissorsBtn);
resultsDiv.appendChild(results);
results.appendChild(playerScoreEl);
results.appendChild(computerScoreEl);
results.appendChild(drawEl);
playAgainDiv.appendChild(playAgainBtn);


playAgainBtn.textContent = 'Play Again';
playAgainBtn.addEventListener('click', () => {
    playAgain();
})

rockBtn.addEventListener('click', () => {
    playerChoice = 'rock';
    playRound(playerChoice, getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playerChoice = 'paper';
    playRound(playerChoice, getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playerChoice = 'scissors';
    playRound(playerChoice, getComputerChoice());
});

function getComputerChoice() {
    let choice = '';
    const randomNum = Math.floor(Math.random() * 3) + 1
    if (randomNum === 1) {
        choice = 'rock';
    } else if (randomNum === 2) {
        choice = 'paper'
    } else {
        choice = 'scissors'
    }
    return choice
}

function playRound(playerChoice, getComputerChoice) {
    if (playerChoice === getComputerChoice) {
        console.log('Tie!');
        draw++
    } else if (playerChoice === 'rock' && getComputerChoice === 'scissors') {
        console.log('You win!');
        playerScore++;
    } else if (playerChoice === 'paper' && getComputerChoice === 'rock') {
        console.log('You win!');
        playerScore++;
    } else if (playerChoice === 'scissors' && getComputerChoice === 'paper') {
        console.log('You win!');
        playerScore++;
    } else {
        console.log('You lose!');
        computerScore++;
    }
    playerScoreEl.textContent = `player Score: ${playerScore}`;
    computerScoreEl.textContent = `Computer Score: ${computerScore}`
    drawEl.textContent = `Draw: ${draw}`
    if (playerScore === 5) {
        alert('You won the game!');
        playerScore = 0;
        computerScore = 0;
        draw = 0;
        playerScoreEl.textContent = `player Score: ${playerScore}`;
        computerScoreEl.textContent = `Computer Score: ${computerScore}`
        drawEl.textContent = `Draw: ${draw}`

    } else if (computerScore === 5) {
        alert('You lost the game!');
        playerScore = 0;
        computerScore = 0;
        draw = 0;
        playerScoreEl.textContent = `player Score: ${playerScore}`;
        computerScoreEl.textContent = `Computer Score: ${computerScore}`
        drawEl.textContent = `Draw: ${draw}`
    }
}

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    draw = 0;
    playerScoreEl.textContent = `player Score: ${playerScore}`;
    computerScoreEl.textContent = `Computer Score: ${computerScore}`
    drawEl.textContent = `Draw: ${draw}`
}

