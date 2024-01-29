function getComputerChoice() {
    options = ["Rock", "Paper", "Scissors"];
    index = Math.floor(Math.random()*3);
    return options[index];
}

playerSelection = "Rock";

function playRound(playerSelection, computerSelection) {
    // We only compare the first digit of the player and computer selections
    // We have a bool for the player win and a tie
    // We only check for winning and tie conditions --> If these are not met then the player loses
    playerFirstChar = playerSelection[0];
    computerFirstChar = computerSelection[0];
    console.log(playerSelection);
    console.log(computerSelection);
    message = '';
    playerWins = false;
    isDraw = false;

    if (playerFirstChar > computerFirstChar) {
        if (playerFirstChar === 'S' && computerFirstChar === 'P') {
            playerWins = true;
            console.log("Player wins.");
        } else {
            // console.log("Computer wins.");
        }
    } else if (playerFirstChar < computerFirstChar){
        if (playerFirstChar === 'P' && computerFirstChar === 'S') {
            // console.log("Computer wins.");
        } else {
            playerWins = true;
            console.log("Player wins.");
        }       
    } else {
        isDraw = true;   
    }
    
    if (isDraw === true){
        message = `It's a tie! ${playerSelection} equals to ${computerSelection}`
    } else if (playerWins === true) {
        message = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        message = `You lose! ${playerSelection} gets beaten by ${computerSelection}`;
    }
    return message;
}

console.log(playRound(playerSelection, getComputerChoice()));

