
let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {

    return choices[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {


    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let tieText = `It's a tie, player selection (${playerSelection}) it's the same as computer selection (${computerSelection})`
    let playerWinnerText = `Player wins, ${playerSelection} beats ${computerSelection}`
    let computerWinnerText = `Computer wins, ${computerSelection} beats ${playerSelection}`




    if (playerSelection === computerSelection) {
        return tieText;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper') {
        return  playerWinnerText;
    }else if(computerSelection === 'rock' && playerSelection === 'scissors' ||
             computerSelection === 'paper' && playerSelection === 'rock' ||
             computerSelection === 'scissors' && playerSelection === 'paper'){
        return computerWinnerText;
    }



}

function game(){
    let user_message = "Write your choice: "
    for(let i = 0; i < 5;++i){
        console.log(playRound(prompt(user_message),getComputerChoice()));
    }
}