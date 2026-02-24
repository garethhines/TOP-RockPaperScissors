function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let computerChoice;
    if (ranNum === 1) {
        computerChoice = 'Rock';
    } else if (ranNum === 2) {
        computerChoice = 'Paper';
    } else if (ranNum === 3) {
        computerChoice = 'Scissors';
    } else {
        return 'There has been an error';
    }

    return computerChoice;
}

console.log(getComputerChoice());