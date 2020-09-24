let playerScore = 0;
let computerScore = 0;

function playerChoice() {
    const playerChoice = document.getElementById('player-choice');
    const rock = document.getElementById('rock-btn');
    const paper = document.getElementById('paper-btn');
    const scissors = document.getElementById('scissors-btn');
    rock.addEventListener('click', () => {
        playerChoice.src = "images/rock.png";
    });
    paper.addEventListener('click', () => {
        playerChoice.src = 'images/paper.png';
    });
    scissors.addEventListener('click', () => {
        playerChoice.src = 'images/scissors.png';
    });
}


const options = document.querySelectorAll('.options-btn button');
const randomPick = ['rock', 'paper', 'scissors'];
const randomNumber = Math.floor(Math.random() * 3);
const choice = randomPick[randomNumber];

console.log(choice);


playerChoice();