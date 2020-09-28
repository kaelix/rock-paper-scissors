let playerScore = 0;
let computerScore = 0;
let gameText = document.getElementById('game-text');
const winner = gameText;

const updateComputerScore = document.getElementById('computer-score');

function playerChoice() {
	const playerChoice = document.getElementById('player-choice');
	const rock = document.getElementById('rock-btn');
	const paper = document.getElementById('paper-btn');
	const scissors = document.getElementById('scissors-btn');
	rock.addEventListener('click', () => {
		playerChoice.src = 'images/rock.png';
	});
	paper.addEventListener('click', () => {
		playerChoice.src = 'images/paper.png';
	});
	scissors.addEventListener('click', () => {
		playerChoice.src = 'images/scissors.png';
	});
}

function getComputerChoice() {
	const computerHand = document.getElementById('computer-choice');
	const randomPick = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	const choice = randomPick[randomNumber];

	if (choice === 'rock') {
		computerHand.src = 'images/rock.png';
	} else if (choice === 'paper') {
		computerHand.src = 'images/paper.png';
	} else if (choice === 'scissors') {
		computerHand.src = 'images/scissors.png';
	}
	return choice;
}

function userVsComputer(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case 'rockscissors':
		case 'paperrock':
		case 'scissorspaper':
			win(userChoice, computerChoice);
			break;
		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
			lose(userChoice, computerChoice);
			break;
		case 'rockrock':
		case 'paperpaper':
		case 'scissorsscissors':
			draw(userChoice, computerChoice);
			break;
	}
}

function win() {
	const updateUserScore = document.getElementById('player-score');
	playerScore++;
	updateUserScore.textContent = playerScore;
	winner.textContent = 'Player One Wins!';
}

function lose() {
	const updateComputerScore = document.getElementById('computer-score');
	computerScore++;
	updateComputerScore.textContent = computerScore;
	winner.textContent = 'Computer Wins!';
}

function draw() {
	winner.textContent = 'Tie!';
}

function gamePlay() {
	const rock = document.getElementById('rock-btn');
	const paper = document.getElementById('paper-btn');
	const scissors = document.getElementById('scissors-btn');

	rock.addEventListener('click', function () {
		userVsComputer('rock');
	});
	paper.addEventListener('click', function () {
		userVsComputer('paper');
	});
	scissors.addEventListener('click', function () {
		userVsComputer('scissors');
	});
}

playerChoice();
gamePlay();
