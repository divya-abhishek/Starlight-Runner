<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <header class="center">
    <h1>🚀 Starlight Runner</h1>
    <p>A fast-paced, space-themed arcade game!</p>
    <img src="https://i.ibb.co/RpMxcWNv/Untitled-1.jpg" alt="Game Preview">
  </header>

  <hr>

  <section>
    <h2>🌟 Features</h2>
    <ul>
      <li><strong>Dynamic Gameplay:</strong> Collect stars to increase your score while dodging obstacles.</li>
      <li><strong>Immersive Audio:</strong> Background music, collect sounds, and collision effects enhance the gaming experience.</li>
      <li><strong>Note:</strong> Requires an active internet connection to load audio files from external servers.</li>
      <li><strong>Particle Effects:</strong> Stunning particle animations when collecting stars.</li>
      <li><strong>Responsive Design:</strong> Works seamlessly on different screen sizes.</li>
      <li><strong>Keyboard Controls:</strong> Use arrow keys to move and SPACE to start/restart the game.</li>
      <li><strong>Restart Mechanism:</strong> Restart the game instantly after a collision.</li>
    </ul>
  </section>

  <hr>

  <section>
    <h2>🎮 How to Play</h2>
    <ol>
      <li><strong>Start the Game:</strong> Press <code>SPACE</code> to begin the game.</li>
      <li><strong>Move the Player:</strong> Use the <code>Arrow Keys</code> (<code>Up</code>, <code>Down</code>, <code>Left</code>, <code>Right</code>) to navigate your spaceship.</li>
      <li><strong>Collect Stars:</strong> Move your spaceship to collect falling stars and increase your score.</li>
      <li><strong>Avoid Obstacles:</strong> Dodge red obstacles that appear randomly in the game area.</li>
      <li><strong>Restart the Game:</strong> If you collide with an obstacle, press <code>SPACE</code> again to restart.</li>
    </ol>
  </section>

  <hr>

  <section>
    <h2>🛠 Installation</h2>
    <h3>Prerequisites</h3>
    <ul>
      <li>A modern web browser (e.g., Chrome, Firefox, Edge).</li>
      <li>An active internet connection to load sound effects and background music.</li>
      <li>Basic knowledge of running HTML files locally.</li>
    </ul>
    <h3>Steps to Run Locally</h3>
    <ol>
      <li><strong>Clone the Repository:</strong>
        <pre><code>git clone https://github.com/your-username/starlight-runner.git
cd starlight-runner</code></pre>
      </li>
      <li><strong>Open the Game:</strong>
        <ul>
          <li>Open the <code>index.html</code> file in your preferred web browser.</li>
          <li>Alternatively, use a local server for better performance:
            <pre><code>python3 -m http.server</code></pre>
            Then navigate to <a href="http://localhost:8000">http://localhost:8000</a> in your browser.
          </li>
        </ul>
      </li>
      <li><strong>Ensure Internet Connection:</strong> Since the game relies on external servers for sound effects, ensure you have an active internet connection while playing.</li>
    </ol>
  </section>

  <hr>

  <section>
    <h2>📦 File Structure</h2>
    <pre>
starlight-runner/
├── index.html          # Main HTML file containing the game structure
├── game.js             # JavaScript logic for the game
└── README.md           # This documentation
    </pre>
  </section>

  <hr>

  <section>
    <h2>🔧 Customization</h2>
    <p>You can easily customize the game by modifying the following:</p>
    <h3>Player Settings</h3>
    <pre><code>
const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 30,
  height: 30,
  speed: 5, // Change speed here
};
    </code></pre>
    <h3>Stars and Obstacles</h3>
    <pre><code>
const starCount = 50; // Number of stars
const obstacleCount = 10; // Number of obstacles
    </code></pre>
    <h3>Sounds</h3>
    <p>Replace the sound URLs in <code>index.html</code> with custom sound files hosted online.</p>
    <pre><code>
  source src="https://www.example.com/your-background-music.mp3" type="audio/mpeg"
    </code></pre>
    <h3>Canvas Size</h3>
    <pre><code>
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
    </code></pre>
  </section>

  <hr>

  <section>
    <h2>🎶 Sound Credits</h2>
    <p>All sound effects and background music are sourced from <a href="https://www.soundjay.com/">SoundJay</a>, a royalty-free sound library. Special thanks to the creators for providing high-quality audio resources.</p>
    <ul>
      <li><strong>Background Music:</strong> "Cautious Path"</li>
      <li><strong>Collect Sound:</strong> "Small Bell Ring"</li>
      <li><strong>Collision Sound:</strong> "Fail Buzzer"</li>
    </ul>
    <p><strong>Important:</strong> These sounds are hosted on external servers, so an active internet connection is required to load them.</p>
  </section>

  <hr>

  <section>
    <h2>🤝 Contributing</h2>
    <p>We welcome contributions to improve Starlight Runner! Here’s how you can help:</p>
    <ol>
      <li>Fork the repository.</li>
      <li>Make changes (add features, fix bugs, etc.).</li>
      <li>Submit a pull request describing your updates.</li>
    </ol>
  </section>

  <hr>

  <section>
    <h2>📜 License</h2>
    <p>This project is licensed under the <strong>MIT License</strong>. Feel free to use, modify, and distribute the code as per the terms of the license.</p>
  </section>

  <hr>

  <section>
    <h2>🙏 Acknowledgments</h2>
    <ul>
      <li>Inspired by classic arcade games like Asteroids and Space Invaders.</li>
      <li>Built using vanilla HTML, CSS, and JavaScript for simplicity and performance.</li>
      <li>Special thanks to the open-source community for providing tools and resources.</li>
    </ul>
  </section>

  <hr>

  <section>
    <h2>📸 Screenshots</h2>
    <img src="https://i.ibb.co/RpMxcWNv/Untitled-1.jpg" alt="Gameplay Screenshot">
    <p><em>Capture of the gameplay in action.</em></p>
  </section>

  <hr>

  <section>
    <h2>📢 Feedback and Support</h2>
    <p>If you encounter any issues or have suggestions for improvement, feel free to open an issue in the <a href="https://github.com/your-username/starlight-runner/issues">GitHub Issues</a> section. We’d love to hear from you!</p>
  </section>

  <footer class="center">
    <p>Happy gaming! 🚀✨</p>
  </footer>

</body>
</html>
