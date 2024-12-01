const chatLog = document.getElementById('chat-log');
const memeContainer = document.getElementById('meme-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const botResponses = {
  Silly: [
    "Why cry when you can vibe? 🕺",
    "Imagine a penguin solving your problems. 🐧",
    "More jokes, fewer worries. Works every time.",
    "Your brain needs more memes. FACTS. 📖",
  ],
  Sassy: [
    "Oh honey, your life isn't falling apart. It's just dramatic.",
    "Did you just brainrot? Because same. 🙄",
    "Stop scrolling TikTok and touch grass. 🌱",
  ],
  "Deep Thought Dave": [
    "Why do we exist? Probably for memes. 🤔",
    "Reality is overrated. Try imagination instead. 🎨",
    "Life is short; have you tried screaming into a pillow? 😱",
  ],
};

const memes = [
  "https://i.imgflip.com/1sfah4.jpg",
  "https://i.imgflip.com/t590k.jpg",
  "https://i.imgflip.com/26am.jpg",
];

// Pick a random bot mood
let currentMood = pickRandomMood();

window.onload = () => {
  displayRandomMeme();
  const greeting = `Hi there! Welcome, top G. You're chatting with ${currentMood} 🧠`;
  addMessage(greeting, "bot-message");
};

// Send button event listener
sendBtn.addEventListener("click", () => {
  const userText = userInput.value.trim();
  if (!userText) return;

  addMessage(userText, "user-message");
  generateBotResponse(userText);
  userInput.value = "";
});

// Generate bot response
function generateBotResponse(input) {
  const moodResponses = botResponses[currentMood];
  const response = moodResponses[Math.floor(Math.random() * moodResponses.length)];
  setTimeout(() => addMessage(`${currentMood} says: ${response}`, "bot-message"), 500);
}

// Add a message to the chat log
function addMessage(text, className) {
  const messageElement = document.createElement("div");
  messageElement.className = `message ${className}`;
  messageElement.textContent = text;
  chatLog.appendChild(messageElement);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Display random meme
function displayRandomMeme() {
  const randomMeme = memes[Math.floor(Math.random() * memes.length)];
  const imgElement = document.createElement("img");
  imgElement.src = randomMeme;
  imgElement.alt = "Random Meme";
  memeContainer.innerHTML = ""; // Clear previous meme
  memeContainer.appendChild(imgElement);
}

// Pick a random bot mood
function pickRandomMood() {
  const moods = Object.keys(botResponses);
  return moods[Math.floor(Math.random() * moods.length)];
}

// Update brainrot meter
function updateBrainrotMeter(score) {
  const meter = document.getElementById("brainrot-progress");
  const levelText = document.getElementById("brainrot-level");
  const percentage = (score / 10) * 100;

  meter.style.width = percentage + "%";
  levelText.textContent = `Brainrot Level: ${score} - ${getBrainrotDescription(score)}`;
}

// Calculate brainrot score
function calculateBrainrotScore(input) {
  let score = input.length > 50 ? 7 : 3;
  return Math.min(score, 10);
}

// Brainrot description
function getBrainrotDescription(score) {
  return score > 7 ? "Extreme" : score > 4 ? "High" : "Mild";
}

// Listen for input changes to update brainrot
userInput.addEventListener("input", () => {
  const userText = userInput.value.trim();
  const brainrotScore = calculateBrainrotScore(userText);
  updateBrainrotMeter(brainrotScore);
});

