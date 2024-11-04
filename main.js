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

function getHumanChoice() {
    let userInput = prompt('rock, paper or scissors?');
    userInput.toLowerCase();
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === getComputerChoice) {
        console.log('Tie!');
    } else if (getHumanChoice === 'rock' && getComputerChoice === 'scissors') {
        console.log('You win!');
        humanScore++;
    } else if (getHumanChoice === 'paper' && getComputerChoice === 'rock') {
        console.log('You win!');
        humanScore++;
    } else if (getHumanChoice === 'scissors' && getComputerChoice === 'paper') {
        console.log('You win!');
        humanScore++;
    } else {
        console.log('You lose!');
        computerScore++;
    }
}

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    if (humanScore > computerScore) {
        console.log('You won the game!');
    } else if (humanScore < computerScore) {
        console.log('You lost the game!');
    }
}
playGame()