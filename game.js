/*
This function generates a random number,
which is used to pick a choice for computer.

@returns computer choice
*/
function getComputerChoice() {
    let randomNumber = (Math.random()*2).toFixed();
    let computerChoices = [`rock`, `paper`, `scissor`];
    let randomChoice = computerChoices[randomNumber];
    console.log(`Computer: `+randomChoice);
    return randomChoice;
}

/*
This function prompts player to enter a choice,
which matches aganist possible choices to see if there is.
any typo or digits. If there is any the player is asked
to enter again.

choice is case-insensitive

@returns player choice
*/
function getPlayerChoice() {
    let promptBox = prompt(`Enter your choice: rock or paper or scissor`);
    if (!promptBox.match(/^(rock|paper|scissor)$/i)){
        alert (`Allowed choices : rock or paper or scissor`);
        return getPlayerChoice();
    } else { 
        console.log(`Player: `+promptBox);
        return promptBox.toLowerCase();
    }
}

/*
variables to store win count
*/
let computerWinCount = 0;
let playerWinCount = 0;

/*
This function takes in both player choices and
checks for possible winner and updates their win count.

@param computerChoice
@param playerChoice
*/
function playRound(computerSelection, playerSelection){
    switch(computerSelection){
        case `rock`:
            if (computerSelection ===`rock` && playerSelection === `paper`){
                console.log(`Yay! Paper beats Rock`);
                playerWinCount++;
            }else if (computerSelection ===`rock` && playerSelection === `scissor`){
                console.log(`Oh no! Scissor loses to Rock`);
                computerWinCount++;
            }else { console.log(`It\'s a Tie`) }

            break;

        case `paper`:
            if (computerSelection ===`paper` && playerSelection === `rock`){
                console.log(`Oh no! Rock loses to Paper`);
                computerWinCount++;
            }else if (computerSelection ===`paper` && playerSelection === `scissor`){
                console.log(`Yay! Scissor beats Paper`);
                playerWinCount++;
            }else { console.log(`It\'s a Tie`) }

            break;

        case `scissor`:
            if (computerSelection ===`scissor` && playerSelection === `paper`){
                console.log(`Oh no! Paper loses to Scissor`);
                computerWinCount++;
            }else if (computerSelection ===`scissor` && playerSelection === `rock`){
                console.log(`Yay! Rock beats Scissor`);
                playerWinCount++;
            }else { console.log(`It\'s a Tie`) }

            break;

        default: console.log(`Something went wrong, try contacting admin.`);
    }
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

// Runs the game
game();