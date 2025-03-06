const player = document.getElementById('player');
const fallingObject = document.getElementById('falling-object');
const gameContainer = document.querySelector('.game-container');

let playerPositionX = 125;
let fallingObjectPositionY = -50;
let fallingObjectPositionX = Math.random() * (gameContainer.offsetWidth - 30);
let score = 0;
let gameInterval, objectInterval;

// Function to move the player with arrow keys
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && playerPositionX > 0) {
    playerPositionX -= 10;
  }
  if (event.key === 'ArrowRight' && playerPositionX < gameContainer.offsetWidth - 50) {
    playerPositionX += 10;
  }

  player.style.left = playerPositionX + 'px';
});

// Function to start the game
function startGame() {
  gameInterval = setInterval(() => {
    fallingObjectPositionY += 5;

    // If the object hits the ground, reset its position
    if (fallingObjectPositionY > gameContainer.offsetHeight) {
      fallingObjectPositionY = -50;
      fallingObjectPositionX = Math.random() * (gameContainer.offsetWidth - 30);
    }

    // Check for collision with the player
    if (
      fallingObjectPositionY + 30 >= gameContainer.offsetHeight - 60 &&
      fallingObjectPositionX + 30 > playerPositionX &&
      fallingObjectPositionX < playerPositionX + 50
    ) {
      score++;
      fallingObjectPositionY = -50;
      fallingObjectPositionX = Math.random() * (gameContainer.offsetWidth - 30);
      console.log('Score:', score);
    }

    fallingObject.style.top = fallingObjectPositionY + 'px';
    fallingObject.style.left = fallingObjectPositionX + 'px';
  }, 50);
}

// Start the game when the page loads
startGame();
