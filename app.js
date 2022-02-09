const myArray=["rock","paper","scissors"]

function computerPlay(){
    return Math.floor(Math.random() * myArray.length);
}
// console.log(computerPlay())

//function that plays a single game of Rock Paper Scissors
function playRound(playerSelection,computerSelection){
    // console.log()
    computerSelection = computerPlay().toString().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if(computerSelection == playerSelection){
        displayResults("The game is tied")
    }
    else if(computerSelection == "paper" && playerSelection == "rock"){
        displayResults("You Lose! Paper beats Rock")
    }
    else if(computerSelection =="rock" && playerSelection == "scissors"){
        displayResults("You Lose! Rock beat Scissors")
    }
    else if (computerSelection =="scissors" && playerSelection == "paper"){
        displayResults("You Lose! Scissors beat Paper")
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));