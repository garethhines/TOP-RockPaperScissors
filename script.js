function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if (ranNum === 0) {
        computerChoice = 'rock';
    } else if (ranNum === 1) {
        computerChoice = 'paper';
    } else if (ranNum === 2) {
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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice){

        if (humanChoice === computerChoice) {
            console.log(`You both chose ${humanChoice}, it's a draw!`)
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore += 1;
            console.log(`You chose ${humanChoice}, computer chose ${computerChoice}, computer wins! The score is Computer ${computerScore} - ${humanScore} Player.`)
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore += 1;
            console.log(`You chose ${humanChoice}, computer chose ${computerChoice}, you win! The score is Computer ${computerScore} - ${humanScore} Player.`)
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore += 1;
            console.log(`You chose ${humanChoice}, computer chose ${computerChoice}, computer wins! The score is Computer ${computerScore} - ${humanScore} Player.`)
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore += 1;
            console.log(`You chose ${humanChoice}, computer chose ${computerChoice}, you win! The score is Computer ${computerScore} - ${humanScore} Player.`)
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore += 1;
            console.log(`You chose ${humanChoice}, computer chose ${computerChoice}, computer wins! The score is Computer ${computerScore} - ${humanScore} Player.`)
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore += 1;
            console.log(`You chose ${humanChoice}, computer chose ${computerChoice}, you win! The score is Computer ${computerScore} - ${humanScore} Player.`)
        }
    }

        while(computerScore < 5 && humanScore < 5){
            playRound(getHumanChoice(), getComputerChoice())
        };

        if (computerScore === 5) {
            console.log(`Tough luck, computer wins ${computerScore} - ${humanScore}!`);
        } else if (humanScore === 5) {
            console.log(`Well done, you win ${humanScore} - ${computerScore}!`);
        }; }

playGame();