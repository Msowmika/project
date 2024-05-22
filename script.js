let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result;
    
    if (playerChoice === computerChoice) {
        result = 'tie';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'win';
    } else {
        result = 'loss';
    }
    
    updateScore(result);
    displayResult(playerChoice, computerChoice, result);
}

function updateScore(result) {
    if (result === 'win') {
        playerScore++;
        document.querySelector('#playerScore span').innerText = playerScore;
    } else if (result === 'loss') {
        computerScore++;
        document.querySelector('#computerScore span').innerText = computerScore;
    }
}

function displayResult(playerChoice, computerChoice, result) {
    document.querySelector('#game-page').classList.add('hidden');
    
    if (result === 'win') {
        document.querySelector('#next-page').classList.remove('hidden');
    } else if (result === 'loss') {
        document.querySelector('#lost-page').classList.remove('hidden');
    } else {
        document.querySelector('#tie-page').classList.remove('hidden');
    }
    
    document.querySelectorAll('.results').forEach(resultDiv => {
        resultDiv.classList.remove('hidden');
    });
    
    document.querySelectorAll('.results-result').forEach((resultDiv, index) => {
        if (index % 2 === 0) {
            resultDiv.innerHTML = `<img src="${playerChoice}.png" alt="${playerChoice}">`;
        } else {
            resultDiv.innerHTML = `<img src="${computerChoice}.png" alt="${computerChoice}">`;
        }
    });
}

function showRules() {
    document.querySelector('#gameRules').classList.remove('hidden');
}

function closeRules() {
    document.querySelector('#gameRules').classList.add('hidden');
}

function resetGame() {
    document.querySelector('#next-page').classList.add('hidden');
    document.querySelector('#lost-page').classList.add('hidden');
    document.querySelector('#tie-page').classList.add('hidden');
    document.querySelector('#game-page').classList.remove('hidden');
}

function replay() {
    resetGame();
}
function winCelebrationPage() {
    document.querySelector('#next-page').classList.add('hidden');
    document.querySelector('#win-page').classList.remove('hidden');
}
