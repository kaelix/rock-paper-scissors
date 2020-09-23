function playerChoice() {
    const playerChoice = document.getElementById('player-choice');
    const rock = document.getElementById('rock-btn');
    const paper = document.getElementById('paper-btn');
    const scissors = document.getElementById('scissors-btn');

    rock.addEventListener('click', () => {
        playerChoice.src = "images/rock.png";
    })

    paper.addEventListener('click', () => {
        playerChoice.src = 'images/paper.png';
    })
    scissors.addEventListener('click', () => {
        playerChoice.src = 'images/scissors.png';
    })
}

playerChoice();