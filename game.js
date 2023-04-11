/*
This function generates a random number,
which is used to pick a choice for computer.

@returns computer choice
*/
function getComputerChoice() {
    let randomNumber = (Math.random()*2).toFixed();
    let computerChoices = [{rock: `✊`}, {paper: `✋`}, {scissor: `✌`}];
    let randomChoice = computerChoices[randomNumber];
    return randomChoice;
}

/*
updates html with players selected signs
*/
function displaySelectedSigns(computerSign, playerSign){
    const computer = document.querySelector(`.computerChoice`);
    const player = document.querySelector(`.playerChoice`);
    computer.textContent = computerSign;
    player.textContent = playerSign;
}

/*
updates html with round results
*/
function displayRoundInfo(result, info){
    const roundResult = document.querySelector(`.roundResult`);
    const resultInfo = document.querySelector(`.resultInfo`);
    roundResult.textContent = result;
    resultInfo.textContent = info;
}

/*
updates html with players score
*/
function updateScore(computer, player){
    const playerScore = document.querySelector(`.playerScore`);
    const computerScore = document.querySelector(`.computerScore`);
    playerScore.textContent = player;
    computerScore.textContent = computer;
}

/*
on click gets both players choices and
displays selected hand signs by calling 'displaySelectedSigns()'
checks for round winner by calling 'playRound()'
*/
const button = document.querySelectorAll(`button`);
button.forEach(button => button.addEventListener(`click`, (e) => {

    let computer = getComputerChoice();
    let computerChoice = Object.keys(computer).toString();
    let computerHandSign = Object.values(computer);

    let playerChoice = e.target.classList.value;
    let playerHandSign = e.target.textContent;

    displaySelectedSigns(computerHandSign, playerHandSign);
    playRound(computerChoice, playerChoice);
}));
    
/*
variables to store win count
*/
let computerScore = 0;
let playerScore = 0;

/*
This function takes in both player choices and
checks for possible winner and updates their win count.

@param computerChoice
@param playerChoice
*/
function playRound(computerSelection, playerSelection){

    let roundResult = undefined;
    let resultInfo = undefined;

    switch(computerSelection){
        case `rock`:
            if (computerSelection ===`rock` && playerSelection === `paper`){
                roundResult = `You won!`;
                resultInfo = `Paper beats rock`;
                playerScore++;

            }else if (computerSelection ===`rock` && playerSelection === `scissor`){
                roundResult = `You lost!`;
                resultInfo = `Scissor is beaten by rock`;
                computerScore++;

            }else { 
                roundResult = `It's a tie!`;
                resultInfo = `Rock ties with rock`;
            }
            break;

        case `paper`:
            if (computerSelection ===`paper` && playerSelection === `rock`){
                roundResult = `You lost!`;
                resultInfo = `Rock is beaten by paper`;
                computerScore++;

            }else if (computerSelection ===`paper` && playerSelection === `scissor`){
                roundResult = `You won!`;
                resultInfo = `Scissor beats paper`;
                playerScore++;

            }else { 
                roundResult = `It's a tie!`;
                resultInfo = `Paper ties with paper`;
            }
            break;

        case `scissor`:
            if (computerSelection ===`scissor` && playerSelection === `paper`){
                roundResult = `You lost!`;
                resultInfo = `Paper is beaten by scissor`;
                computerScore++;

            }else if (computerSelection ===`scissor` && playerSelection === `rock`){
                roundResult = `You won!`;
                resultInfo = `Rock beats scissor`;
                playerScore++;

            }else { 
                roundResult = `It's a tie!`;
                resultInfo = `Scissor ties with scissor`; 
            }
            break;

        default: console.log(`Something went wrong, try contacting admin.`);
    }

    displayRoundInfo(roundResult, resultInfo);
    updateScore(computerScore, playerScore);
}

/*
This function keeps track of both players win count
and loop over until whoever scores the first five points
and ends the game announcing the winner
*/
function game(){
    while (computerWinCount <5 || playerWinCount <5){
        console.log(`Computer  ${computerWinCount}` + " : " + `Player  ${playerWinCount}`);
        playRound(getComputerChoice(), getPlayerChoice());
        console.log(``);
        if (computerWinCount === 5){
            console.log(`Computer  ${computerWinCount}` + " : " + `Player  ${playerWinCount}`);
            console.log(`You Loose!`);
            break;
        }else if (playerWinCount === 5){
            console.log(`Computer  ${computerWinCount}` + " : " + `Player  ${playerWinCount}`);
            console.log(`You Won!`);
            break;
        }   
    }
}

