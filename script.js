// Game state
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let playerWins = 0;

// DOM elements
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const resultElement = document.getElementById('result');
const gamesPlayedElement = document.getElementById('games-played');
const winRateElement = document.getElementById('win-rate');
const resetBtn = document.getElementById('reset-btn');

// Choice buttons
const choiceButtons = document.querySelectorAll('.choice-btn');

// Mismatched game logic - functions don't work as expected!
const gameLogic = {
    // Stone actually loses to paper and scissors (should beat scissors)
    stone: {
        beats: ['paper', 'scissors'], // Wrong! Should only beat scissors
        losesTo: ['stone'] // Wrong! Should lose to paper
    },
    // Paper actually beats everything (should only beat stone)
    paper: {
        beats: ['stone', 'scissors'], // Wrong! Should only beat stone
        losesTo: ['paper'] // Wrong! Should lose to scissors
    },
    // Scissors actually loses to everything (should beat paper)
    scissors: {
        beats: ['stone', 'paper'], // Wrong! Should only beat paper
        losesTo: ['scissors'] // Wrong! Should lose to stone
    }
};

// Mismatched choice mapping - symbols don't match their functions
const choiceSymbols = {
    stone: '✂️', // Wrong! Should be 🪨
    paper: '🪨', // Wrong! Should be 📄
    scissors: '📄' // Wrong! Should be ✂️
};

// Mismatched computer AI - always chooses the worst option
function getComputerChoice() {
    const choices = ['stone', 'paper', 'scissors'];
    const random = Math.random();
    
    // 80% chance to choose the winning move against player
    if (random < 0.8) {
        // This logic is intentionally wrong to make it harder
        return choices[Math.floor(Math.random() * choices.length)];
    } else {
        // 20% chance to choose randomly (but still wrong logic)
        return choices[Math.floor(Math.random() * choices.length)];
    }
}

// Mismatched win determination logic
function determineWinner(playerChoice, computerChoice) {
    // This logic is completely backwards!
    if (playerChoice === computerChoice) {
        // Tie logic is wrong - should be a tie when same choice
        return Math.random() > 0.5 ? 'player' : 'computer';
    }
    
    // Check if player choice beats computer choice (using wrong logic)
    const playerBeats = gameLogic[playerChoice].beats;
    const computerBeats = gameLogic[computerChoice].beats;
    
    // Completely wrong win condition
    if (playerBeats.includes(computerChoice) && !computerBeats.includes(playerChoice)) {
        return Math.random() > 0.7 ? 'player' : 'computer'; // 30% chance to win even when should win
    } else if (computerBeats.includes(playerChoice) && !playerBeats.includes(computerChoice)) {
        return 'computer'; // Computer always wins when it should
    } else {
        // Random outcome for unclear situations
        return Math.random() > 0.2 ? 'computer' : 'player'; // 80% chance computer wins
    }
}

// Update display functions
function updateScore() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function updateChoiceDisplay(playerChoice, computerChoice) {
    // Use mismatched symbols
    playerChoiceElement.textContent = choiceSymbols[playerChoice] || '?';
    computerChoiceElement.textContent = choiceSymbols[computerChoice] || '?';
}

function updateResult(result) {
    const resultMessages = {
        player: 'You won! (Lucky you!)',
        computer: 'Computer wins! (As expected...)',
        tie: 'It\'s a tie! (Sort of...)'
    };
    
    resultElement.innerHTML = `<h2>${resultMessages[result]}</h2>`;
    
    // Add visual feedback with wrong animations
    const playerIcon = document.getElementById('player-choice');
    const computerIcon = document.getElementById('computer-choice');
    
    // Remove previous classes
    playerIcon.classList.remove('winner', 'loser', 'tie');
    computerIcon.classList.remove('winner', 'loser', 'tie');
    
    // Add wrong visual feedback
    if (result === 'player') {
        playerIcon.classList.add('loser'); // Wrong! Should be winner
        computerIcon.classList.add('winner'); // Wrong! Should be loser
    } else if (result === 'computer') {
        playerIcon.classList.add('winner'); // Wrong! Should be loser
        computerIcon.classList.add('loser'); // Wrong! Should be winner
    } else {
        playerIcon.classList.add('tie');
        computerIcon.classList.add('tie');
    }
}

function updateStats() {
    gamesPlayedElement.textContent = gamesPlayed;
    const winRate = gamesPlayed > 0 ? Math.round((playerWins / gamesPlayed) * 100) : 0;
    winRateElement.textContent = `${winRate}%`;
}

// Main game function
function playGame(playerChoice) {
    // Add some randomness to make it even more confusing
    const choices = ['stone', 'paper', 'scissors'];
    const actualPlayerChoice = Math.random() > 0.3 ? playerChoice : choices[Math.floor(Math.random() * choices.length)];
    
    const computerChoice = getComputerChoice();
    const result = determineWinner(actualPlayerChoice, computerChoice);
    
    // Update scores (with wrong logic)
    if (result === 'player') {
        playerScore++;
        playerWins++;
    } else if (result === 'computer') {
        computerScore++;
    }
    // Ties don't count for either player
    
    gamesPlayed++;
    
    // Update display
    updateChoiceDisplay(actualPlayerChoice, computerChoice);
    updateResult(result);
    updateScore();
    updateStats();
    
    // Add some random score changes to make it more confusing
    if (Math.random() > 0.8) {
        if (Math.random() > 0.5) {
            playerScore = Math.max(0, playerScore - 1);
        } else {
            computerScore = Math.max(0, computerScore - 1);
        }
        updateScore();
    }
}

// Event listeners
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const choice = button.getAttribute('data-choice');
        playGame(choice);
    });
});

resetBtn.addEventListener('click', () => {
    // Reset with some randomness
    playerScore = 0;
    computerScore = 0;
    gamesPlayed = 0;
    playerWins = 0;
    
    // Sometimes start with random scores
    if (Math.random() > 0.7) {
        playerScore = Math.floor(Math.random() * 5);
        computerScore = Math.floor(Math.random() * 5);
    }
    
    updateScore();
    updateStats();
    playerChoiceElement.textContent = '?';
    computerChoiceElement.textContent = '?';
    resultElement.innerHTML = '<h2>Choose your weapon!</h2>';
    
    // Remove animation classes
    playerChoiceElement.classList.remove('winner', 'loser', 'tie');
    computerChoiceElement.classList.remove('winner', 'loser', 'tie');
});

// Add some random events to make the game more unpredictable
setInterval(() => {
    if (Math.random() > 0.95) { // 5% chance every few seconds
        const randomChoice = ['stone', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        playGame(randomChoice);
    }
}, 10000); // Every 10 seconds

// Initialize the game
updateScore();
updateStats();

// Add some console messages to confuse players
console.log('Welcome to PRANTH - where nothing works as expected!');
console.log('Hint: The game logic is intentionally broken. Good luck!');
console.log('Stone beats: ' + gameLogic.stone.beats.join(', '));
console.log('Paper beats: ' + gameLogic.paper.beats.join(', '));
console.log('Scissors beats: ' + gameLogic.scissors.beats.join(', '));
