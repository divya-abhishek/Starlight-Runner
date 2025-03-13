const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Game variables
let score = 0;
let gameOver = false;
let gameStarted = false;

// Audio elements
const backgroundMusic = document.getElementById('backgroundMusic');

// Function to play collect sound
function playCollectSound() {
  const collectSound = new Audio('https://www.soundjay.com/misc/sounds/small-bell-ring-01a.mp3'); // Create a new instance
  collectSound.play(); // Play immediately
}

const collisionSound = document.getElementById('collisionSound');

// Overlay elements
const overlay = document.getElementById('overlay');
const startText = document.getElementById('startText');
const endScore = document.getElementById('endScore');
const finalScore = document.getElementById('finalScore');
const restartText = document.getElementById('restartText');

// Player object
const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 30,
  height: 30,
  speed: 5,
  dx: 0,
  dy: 0,
  angle: 0,
};

// Stars array
const stars = [];
const starCount = 50;

// Obstacles array
const obstacles = [];
const obstacleCount = 10;

// Particle system
const particles = [];

// Initialize stars
for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    opacity: Math.random(),
  });
}

// Initialize obstacles
for (let i = 0; i < obstacleCount; i++) {
  obstacles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 30 + 10,
  });
}

// Event listeners for player movement
document.addEventListener('keydown', (e) => {
  if (!gameStarted || gameOver) return;
  if (e.key === 'ArrowUp') player.dy = -player.speed;
  if (e.key === 'ArrowDown') player.dy = player.speed;
  if (e.key === 'ArrowLeft') player.dx = -player.speed;
  if (e.key === 'ArrowRight') player.dx = player.speed;
});

document.addEventListener('keyup', (e) => {
  if (!gameStarted || gameOver) return;
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') player.dy = 0;
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') player.dx = 0;
});

// Spacebar to trigger Play/Restart
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    if (!gameStarted) {
      startGame();
    } else if (gameOver) {
      resetGame();
    }
  }
});

// Update player position
function updatePlayer() {
  player.x += player.dx;
  player.y += player.dy;

  // Keep player within bounds
  player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));

  // Calculate angle based on movement direction
  player.angle = Math.atan2(player.dy, player.dx);
}

// Draw player
function drawPlayer() {
  ctx.save();
  ctx.translate(player.x + player.width / 2, player.y + player.height / 2);
  ctx.rotate(player.angle + Math.PI / 2);
  ctx.fillStyle = 'cyan';
  ctx.beginPath();
  ctx.moveTo(0, -player.height / 2);
  ctx.lineTo(-player.width / 2, player.height / 2);
  ctx.lineTo(player.width / 2, player.height / 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// Update stars
function updateStars() {
  stars.forEach((star) => {
    star.y += 1; // Move stars downward
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
}

// Draw stars
function drawStars() {
  stars.forEach((star) => {
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Update obstacles
function updateObstacles() {
  obstacles.forEach((obstacle) => {
    obstacle.y += 2; // Move obstacles downward
    if (obstacle.y > canvas.height) {
      obstacle.y = 0;
      obstacle.x = Math.random() * canvas.width;
    }

    // Check collision with player
    const dx = player.x + player.width / 2 - obstacle.x;
    const dy = player.y + player.height / 2 - obstacle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < player.width / 2 + obstacle.radius) {
      gameOver = true;
      collisionSound.play(); // Play collision sound
      backgroundMusic.pause(); // Stop background music
      showEndScreen();
    }
  });
}

// Draw obstacles
function drawObstacles() {
  obstacles.forEach((obstacle) => {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(obstacle.x, obstacle.y, obstacle.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Add particles
function addParticles(x, y) {
  for (let i = 0; i < 10; i++) {
    particles.push({
      x: x,
      y: y,
      size: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 5,
      dy: (Math.random() - 0.5) * 5,
      life: Math.random() * 50 + 50,
    });
  }
}

// Update particles
function updateParticles() {
  particles.forEach((particle, index) => {
    particle.x += particle.dx;
    particle.y += particle.dy;
    particle.life--;

    if (particle.life <= 0) {
      particles.splice(index, 1);
    }
  });
}

// Draw particles
function drawParticles() {
  particles.forEach((particle) => {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Update score
function updateScore() {
  stars.forEach((star, index) => {
    const dx = player.x + player.width / 2 - star.x;
    const dy = player.y + player.height / 2 - star.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < player.width / 2 + star.size) {
      score++;
      playCollectSound(); // Play collect sound immediately
      addParticles(star.x, star.y); // Add particle effect
      stars.splice(index, 1); // Remove star
      stars.push({
        x: Math.random() * canvas.width,
        y: 0,
        size: Math.random() * 3 + 1,
        opacity: Math.random(),
      }); // Add new star
    }
  });

  document.getElementById('score').innerText = `Score: ${String(score).padStart(2, '0')}`;
}

// Show start screen
function showStartScreen() {
  overlay.classList.remove('hidden');
  startText.style.display = 'block';
  endScore.classList.add('hidden');
  restartText.classList.add('hidden');
}

// Show end screen
function showEndScreen() {
  overlay.classList.remove('hidden');
  startText.style.display = 'none';
  endScore.classList.remove('hidden');
  restartText.classList.remove('hidden');
  finalScore.innerText = String(score).padStart(2, '0'); // Format score as 03
}

// Start game
function startGame() {
  gameStarted = true;
  overlay.classList.add('hidden');
  backgroundMusic.play(); // Start background music
  gameLoop();
}

// Reset game state
function resetGame() {
  score = 0;
  gameOver = false;
  gameStarted = false;

  player.x = canvas.width / 2;
  player.y = canvas.height / 2;
  player.dx = 0;
  player.dy = 0;

  stars.length = 0;
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      opacity: Math.random(),
    });
  }

  obstacles.length = 0;
  for (let i = 0; i < obstacleCount; i++) {
    obstacles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 30 + 10,
    });
  }

  particles.length = 0;

  document.getElementById('score').innerText = `Score: ${String(score).padStart(2, '0')}`;
  backgroundMusic.currentTime = 0; // Restart background music
  startGame(); // Directly start the game again
}

// Game loop
function gameLoop() {
  if (!gameStarted || gameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  updatePlayer();
  drawPlayer();

  updateStars();
  drawStars();

  updateObstacles();
  drawObstacles();

  updateParticles();
  drawParticles();

  updateScore();

  requestAnimationFrame(gameLoop);
}

// Initial setup
showStartScreen();