let playerScore = 0;
let computerScore = 0;
let drawTimes = 0;
let currentRound = 1;
const MAX_ROUNDS = 5;
const divResults = document.querySelector('#results');
const divFinal = document.querySelector('#final-result')
const divRound = document.querySelector('#n-round')
const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', game);
    btn.addEventListener('mouseenter', styleButtons);
    btn.addEventListener('mouseleave', styleButtons);
})


function getComputerChoice() {
    options = ["Rock", "Paper", "Scissors"];
    index = Math.floor(Math.random() * 3);
    return options[index];
}

function playRound(playerSelection, computerSelection) {
    // We only compare the first digit of the player and computer selections
    // We have a bool for the player win and a tie
    // We only check for winning and tie conditions --> If these conditions are not met then the player loses

    playerFirstChar = playerSelection[0];
    computerFirstChar = computerSelection[0];

    playerWins = false;
    drawCondition = false;

    if (playerFirstChar > computerFirstChar) {
        if (playerFirstChar === 'S' && computerFirstChar === 'P') {
            playerWins = true;
        }
    } else if (playerFirstChar < computerFirstChar) {
        if (!(playerFirstChar === 'P' && computerFirstChar === 'S')) {
            playerWins = true;
        }
    } else {
        drawCondition = true;
    }

    if (drawCondition === true) {
        return 0;
    } else if (playerWins === true) {
        return 1;
    } else {
        return 2;
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
    while (isInputOkay == false) {
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

function game() {
    this.classList.toggle('rotation');
    let playerChoice = this.id;
    let computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    updateScore(result);
    showRoundWinner(playerChoice, computerChoice, result);
    updateShowRound();
    currentRound++;
    if (currentRound > MAX_ROUNDS) {
        btns.forEach((btn) => {
            btn.removeEventListener('click', game);
        })
        showFinalResult();
    }
}

function updateScore(result) {
    if (result === 0) {
        drawTimes++;
    } else if (result === 1) {
        playerScore++;
    }
    else {
        computerScore++;
    }
}

function showFinalResult() {
    if (playerScore > 0 || computerScore > 0) {
        if (playerScore > computerScore) {
            divFinal.textContent = "Gz, you win!";
        } else if (playerScore < computerScore) {
            divFinal.textContent = "Damn, in the overall computation you lose. GL next time.";
        } else {
            divFinal.textContent = `IT'S A DRAW!!!`;
        }
    }
    else {
        divFinal.textContent= "You and the computer coudln't even score a single point!";
    }
}

function showRoundWinner(player, computer, result) {
    switch (result) {
        case 0:
            divResults.textContent = `SCORE: You ${playerScore} - ${computerScore} Computer >>>>>It's a tie! ${player} equals to ${computer}.<<<<<`;
            break;
        case 1:
            divResults.textContent = `SCORE: You ${playerScore} - ${computerScore} Computer >>>>>You Win! ${player} beats ${computer}<<<<<`;
            break;
        case 2:
            divResults.textContent = `SCORE: You ${playerScore} - ${computerScore} Computer >>>>>You lose! ${player} gets beaten by ${computer}<<<<<`;
            break;
        default:
    }
}

function updateShowRound() {
    divRound.textContent = `Number of rounds played: ${currentRound}`;
}

function styleButtons() {
    this.classList.toggle('active');
}