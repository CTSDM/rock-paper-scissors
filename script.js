function getComputerChoice() {
    options = ["Rock", "Paper", "Scissors"];
    index = Math.floor(Math.random()*3);
    return options[index];
}

function playRound(playerSelection, computerSelection) {
    // We only compare the first digit of the player and computer selections
    // We have a bool for the player win and a tie
    // We only check for winning and tie conditions --> If these conditions are not met then the player loses
    
    playerFirstChar = playerSelection[0];
    computerFirstChar = computerSelection[0];

    console.log(`User selection: ${playerSelection}.        Computer selection: ${computerSelection}.`);

    message = '';
    playerWins = false;
    isDraw = false;

    if (playerFirstChar > computerFirstChar) {
        if (playerFirstChar === 'S' && computerFirstChar === 'P') {
            playerWins = true;
        }
    } else if (playerFirstChar < computerFirstChar){
        if (!(playerFirstChar === 'P' && computerFirstChar === 'S')) {
            playerWins = true;
        } else {
        }       
    } else {
        isDraw = true;   
    }
    
    if (isDraw === true){
        message = `>>>>>It's a tie! ${playerSelection} equals to ${computerSelection}.<<<<<`
    } else if (playerWins === true) {
        message = `>>>>>You Win! ${playerSelection} beats ${computerSelection}<<<<<`;
    } else {
        message = `>>>>>You lose! ${playerSelection} gets beaten by ${computerSelection}<<<<<`;
    }
    return message;
}

function checkUserInput(playerChoice) {
    switch (playerChoice) {
        case 'Rock':
        case 'Paper':
        case 'Scissors':
            return true;
        default:
            return false;
    }
}

// A large part of this function can be substituted by the method "substitutes" of the type string
function getUserInput() {
    isInputOkay = false;
    while(isInputOkay == false){
        strInput = prompt('What is your choice? (Rock, Paper, Scissors)');
        // If the user press cancel the prompt returns a null data type
        if (strInput === null) {
            return "cancel";
        }
        // We check for an empty string in case the user press okay without an answer. 
        else if (strInput !== '') {
            strInput = normalizeString(strInput);
            isInputOkay = checkUserInput(strInput);
        }
    }
    return strInput;
}

function normalizeString(str) {
    // We convert the whole string into lower case and then only the first letter is converted back into upper case
    str = str.toLowerCase();
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

function playGame() {
    let scoreUser = 0;
    let scoreComputer = 0;
    let drawTimes = 0;
    for (let i = 0; i < 5; i++)
    {
        playerChoice = getUserInput();
        if (playerChoice === "cancel") {
            alert('You decided to cancel the game. See you next time!');
            break;
        }
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}

