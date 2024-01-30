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

    playerWins = false;
    drawCondition = false;

    if (playerFirstChar > computerFirstChar) {
        if (playerFirstChar === 'S' && computerFirstChar === 'P') {
            playerWins = true;
        }
    } else if (playerFirstChar < computerFirstChar){
        if (!(playerFirstChar === 'P' && computerFirstChar === 'S')) {
            playerWins = true;
        }
    } else {
        drawCondition = true;   
    }
    
    if (drawConditiongi === true){
        return 0;
    } else if (playerWins === true) {
        return 1;
    } else {
        return 2;
    }
}

function printWinner(player, computer, result) {
    switch (result) {
        case 0:
            message = `>>>>>It's a tie! ${player} equals to ${computer}.<<<<<`;
            console.log(message);
            break;
        case 1:
            message = `>>>>>You Win! ${player} beats ${computer}<<<<<`;
            console.log(message);
            break;
        case 2:
            message = message = `>>>>>You lose! ${player} gets beaten by ${computer}<<<<<`;
            console.log(message);
            break;
        default: 
    }
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

// A large part of this function can be substituted by the method "includes" of the type string
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
    let playerScore = 0;
    let computerScore = 0;
    let drawTimes = 0;
    let totalRounds = 5;
    let result;
    let computerChoice;
    let strPrint;
    for (let i = 0; i < totalRounds; i++)
    {
        playerChoice = getUserInput();
        if (playerChoice === "cancel") {
            alert('You decided to cancel the game. See you next time!');
            break;
        }

        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);

        printWinner(playerChoice, computerChoice, result);

        // updating scores

        if (result === 0) {
            drawTimes++;
        } else if (result === 1) {
            playerScore++;
        }
        else {
            computerScore++;
        }

        strPrint = `>>>>>>>>>>>> Round ${i+1}: Player score = ${playerScore} |||| Computer score = ${computerScore} ` 
        + `|||| Total draws = ${drawTimes}`;
        console.log(strPrint);
    }
    
    // Printing the winner, if there is any
    if (playerScore > 0 || computerScore > 0) {
        if (playerScore > computerScore) {
            console.log("Gz, you win!")
        } else if (playerScore < computerScore) {
            console.log("Damn, in the overall computation you lose. GL next time.")
        } else {
            console.log("IT'S A DRAW!!!")
        }
    }
    else {
        console.log ("You and the computer coudln't even score a single point!")
    }
}