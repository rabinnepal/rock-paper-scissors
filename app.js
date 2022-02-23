
let options = ["rock", "paper", "scissors"];


function computerPlay() { //computer generates a random answer.
    return options[Math.floor(Math.random() * options.length)];
}

let playerWins, computerWins; 

function playRound(playerSelection, computerSelection) { //plays a round of the game.
    
    if (options.indexOf(playerSelection) == -1) {
        playerWins = false;
        computerWins = false;
        return "Invalid input! You have to pick Rock, Paper or Scissors!";
    }

    console.log("You picked: " + playerSelection + "\n", "The computer picked: " + computerSelection);
    
    if (playerSelection == "rock" && computerSelection == "scissors") {

        playerWins = true;
        computerWins = false;
        return "You win! Rock beats Scissors";

    } else if (playerSelection == "scissors" && computerSelection == "rock") {

        playerWins = false;
        computerWins = true;
        return "You lose! Rock beats Scissors";

    } else if (playerSelection == "scissors" && computerSelection == "paper") {

        playerWins = true;
        computerWins = false;
        return "You win! Scissors beats Paper";

    } else if (playerSelection == "paper" && computerSelection == "scissors") {

        playerWins = false;
        computerWins = true;
        return "You lose! Scissors beats Paper";

    } else if (playerSelection == "paper" && computerSelection == "rock") {

        playerWins = true;
        computerWins = false;
        return "You win! Paper beats Rock";

    } else if (playerSelection == "rock" && computerSelection == "paper") {

        playerWins = false;
        computerWins = true;
        return "You lose! Paper beats Rock";

    } else { // i.e. playerSelection === computerSelection

        playerWins = false;
        computerWins = false;
        return "Draw! You both picked " + playerSelection[0].toUpperCase() + playerSelection.slice(1); //only doing this for styling (want it to be consistently capitalised)

    }
}

let handsWon = 0, computerHandsWon = 0;

function game(){
    for ( i=0; i<5; i++){
        console.log(playRound(prompt("Choose between Rock, Paper or Scissors!!!").toLowerCase(),computerPlay()));
        if (playerWins){
            handsWon++;
        }
        else if (computerWins){
            computerHandsWon++;
        }
        //if they're both false it's a draw, neither gets a point 

    }
    console.log(`You won ${handsWon} times whereas computer won ${computerHandsWon} times!! `);
    if (handsWon > computerHandsWon) {
        console.log("You win overall!");
    } else {
        console.log("You lose overall! Better luck next time!");
    }
}

game();