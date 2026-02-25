let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let computerChoice;
    if (ranNum === 1) {
        computerChoice = 'rock';
    } else if (ranNum === 2) {
        computerChoice = 'paper';
    } else if (ranNum === 3) {
        computerChoice = 'scissors';
    } else {
        return 'There has been an error';
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt('Welcome to the game, do you choose Rock, paper, or scissors?').toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice){

}

console.log(getHumanChoice())

// console.log(getComputerChoice());