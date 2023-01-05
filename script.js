
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
        return [tieText,2];
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper') {
        return  [playerWinnerText,1];
    }else if(computerSelection === 'rock' && playerSelection === 'scissors' ||
             computerSelection === 'paper' && playerSelection === 'rock' ||
             computerSelection === 'scissors' && playerSelection === 'paper'){
        return [computerWinnerText,0];
    }



}

// function game(){
//     let userMessage = "Write your choice: "
//     for(let i = 0; i < 5;++i){
//         console.log(playRound(prompt(userMessage),getComputerChoice()));
//     }
// }
let playerScore = 0;
let computerScore = 0;

function clickChoice(e){

    let divResult = document.querySelector('.result');
    let userChoice = e.currentTarget.getAttribute('data-choice')
    let leftScore = document.querySelector('.left-score');
    let rightScore = document.querySelector('.right-score');

    if(playerScore == 5 || computerScore == 5){
        playerScore = 0;
        computerScore = 0;
        divResult.textContent = ''

        leftScore.textContent = '0';
        rightScore.textContent = '0';
    }

    [divResult.textContent,st] = playRound(userChoice,getComputerChoice());


    if(st == 2){
        playerScore++;
        computerScore++;
    }else if(st == 1){
        playerScore++;
    }else if(st == 0){
        computerScore++;
    }

    leftScore.textContent = playerScore.toString();
    rightScore.textContent = computerScore.toString();

    if(playerScore == 5 && computerScore == 5){
        divResult.textContent = 'Es un empate!'
    }
    else if(playerScore == 5){
        divResult.textContent = 'Ganaste!'
    }
    else if(computerScore == 5){
        divResult.textContent = 'Gano la computadora.'
    }



}

let botones = document.querySelectorAll('.elections button');
// console.log(botones)

for(boton of botones){

    boton.addEventListener('click',clickChoice);
    
}