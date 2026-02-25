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
    let humanChoice = prompt('Welcome to the game, do you choose Rock, Paper, or Scissors?').toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log(`You both chose ${humanChoice}, it's a draw!`)
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}, computer wins!`)
        computerScore += 1;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}, you win!`)
        humanScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}, computer wins!`)
        computerScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}, you win!`)
        humanScore += 1;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}, computer wins!`)
        computerScore += 1;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}, you win!`)
        humanScore += 1;}
}

console.log(getHumanChoice())
playRound(getHumanChoice(), getComputerChoice())

// console.log(getComputerChoice());