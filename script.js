// Selecting Elements
const chatLog = document.getElementById('chat-log');
const memeContainer = document.getElementById('meme-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const brainrotMeter = document.getElementById('brainrot-progress');
const brainrotLevel = document.getElementById('brainrot-level');

// Bot Mood Responses
const botResponses = {
  Silly: [
    "Why cry when you can vibe? 🕺",
    "Imagine a penguin solving your problems. 🐧",
    "More jokes, fewer worries.",
    "Your brain needs more memes. 📖",
    "If laughter is medicine, you're overdosing. 😂",
    "Just yell into the void. The void doesn't judge. 🌌",
  ],
  Sassy: [
    "Oh honey, your life isn't falling apart. It's just dramatic.",
    "Did you just brainrot? Because same. 🙄",
    "Stop scrolling TikTok and touch grass. 🌱",
    "You're not tired; you're just allergic to productivity. 😏",
    "This is what peak brainrot looks like. Take notes. 📝",
    "Girl, even AI can't fix that brainrot. 💅",
  ],
  Thoughtful: [
    "Why do we exist? Probably for memes. 🤔",
    "Reality is overrated. Try imagination instead.",
    "Life is short; have you tried screaming into a pillow?",
    "Every thought you have adds to the void's mass. 🖤",
    "If the universe is infinite, so are your brainrots. 🌠",
    "Your existential crisis makes for great content. 📚",
  ],
};

// Meme URLs
const memes = [
  "https://i.imgflip.com/1sfah4.jpg",
  "https://i.imgflip.com/t590k.jpg",
  "https://i.imgflip.com/26am.jpg",
  "https://i.imgflip.com/4t0m5.jpg",
  "https://i.imgflip.com/2fm6x.jpg",
  "https://i.imgflip.com/3vzej.jpg",
];

// Initialize conversation stats
let conversationLength = 0;
let currentMood = pickRandomMood(); // Pick a random mood

// Display a welcome message and meme on load
window.onload = () => {
  const greeting = `Hi there! Welcome to GPTherapy!`;
  addMessage(greeting, "bot-message");
  displayRandomMeme();
};

// Handle send button click
sendBtn.addEventListener('click', () => {
  const userText = userInput.value.trim();
  if (!userText) return; // Ignore empty input

  addMessage(userText, "user-message"); // Add user message
  conversationLength += userText.length; // Update conversation length
  generateBotResponse(); // Generate bot response
  updateBrainrotMeter(conversationLength); // Update brainrot level
  userInput.value = ""; // Clear input field
});

// Generate bot response
function generateBotResponse() {
  const responses = botResponses[currentMood];
  const response = responses[Math.floor(Math.random() * responses.length)];
  addMessage(response, "bot-message");
  displayRandomMeme(); // Show a random meme occasionally
}

// Add a message to the chat log
function addMessage(text, className) {
  const messageElement = document.createElement('div');
  messageElement.className = `message ${className}`;
  messageElement.textContent = text;
  chatLog.appendChild(messageElement);
  chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll
}

// Display a random meme (1 in 3 chance)
function displayRandomMeme() {
  if (Math.random() > 0.66) {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    memeContainer.innerHTML = `<img src="${randomMeme}" alt="Meme">`;
  }
}

// Update brainrot meter based on conversation length
function updateBrainrotMeter(length) {
  const brainrotScore = Math.min((length / 50) * 100, 100); // Adjust factor for scaling
  brainrotMeter.style.width = brainrotScore + '%';

  if (brainrotScore > 50) {
    brainrotLevel.textContent = `Brainrot Level: ${Math.round(
      brainrotScore
    )} - Extreme`;
  } else if (brainrotScore > 30) {
    brainrotLevel.textContent = `Brainrot Level: ${Math.round(
      brainrotScore
    )} - High`;
  } else {
    brainrotLevel.textContent = `Brainrot Level: ${Math.round(
      brainrotScore
    )} - Mild`;
  }
}

// Pick random bot mood
function pickRandomMood() {
  const moods = Object.keys(botResponses);
  return moods[Math.floor(Math.random() * moods.length)];
}
