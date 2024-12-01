const chatLog = document.getElementById('chat-log');
const memeContainer = document.getElementById('meme-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const botResponses = {
    "Silly": [
        "Why cry when you can vibe? 🕺",
        "Your brain just needs a dance party. 🎉",
        "Imagine a penguin solving your problems. 🐧",
        "Ever tried yelling 'fries' in a crowd? Game-changer.",
        "More jokes, fewer worries. Works every time.",
        "Dance like nobody’s watching, but make it viral. 📹",
        "Why stress when you can press snooze? 💤",
        "Laugh it off. Trust me, it's free therapy. 😂",
        "Your brain needs more memes. FACTS. 📖",
        "Life’s too short for serious chats. Let’s go!"
    ],
    "Sassy": [
        "Oh honey, your life isn't falling apart. It's just dramatic.",
        "Did you just brainrot? Because same. 🙄",
        "Get yourself together, drama llama! 🦙",
        "You’re not a mess; you’re just in beta testing.",
        "That outfit though… are we matching bad vibes? 👗",
        "Stop scrolling TikTok and touch grass. 🌱",
        "Sassy but classy—that’s me and you, right?",
        "Diva moment incoming... oh wait, it's just you. 😉",
        "Channel that energy into memes, darling. 💅",
        "You slay, but take a nap, okay? 🛌"
    ],
    "Deep Thought Dave": [
        "Why do we exist? Probably for memes. 🤔",
        "Your brainrot is the universe’s way of evolving.",
        "Do you even need therapy? Or is life just chaos? 🌌",
        "What if the answer is… waffles? 🧇",
        "The void isn’t scary if you yell at it. Echo therapy.",
        "What’s worse? Homework or existential dread? 🤯",
        "Deep questions require deep fries. 🍟",
        "Reality is overrated. Try imagination instead. 🎨",
        "Who are you without the memes? Think about that.",
        "Life is short; have you tried screaming into a pillow? 😱"
    ]
};

const memes = [
    "https://th.bing.com/th/id/OIP.0MDI4C27d7_8TkC08Su-wgHaHa?rs=1&pid=ImgDetMain", 
    "https://i.imgflip.com/1sfah4.jpg",
    "https://i.imgflip.com/t590k.jpg"
];

// Randomly pick a mood for the bot
let currentMood = pickRandomMood();

window.onload = () => {
    displayRandomMeme();
    const greeting = `Hi there! Welcome, top G. You're chatting with ${currentMood} 🧠`;
    addMessage(greeting, 'bot-message');
};

// Handle sending messages
sendBtn.addEventListener('click', () => {
    const userText = userInput.value.trim();
    if (userText === '') return;

    addMessage(userText, 'user-message');
    generateBotResponse(userText);
    userInput.value = '';
});

// Generate bot responses
function generateBotResponse(input) {
    const moodResponses = botResponses[currentMood];
    const response = moodResponses[Math.floor(Math.random() * moodResponses.length)];
    setTimeout(() => addMessage(`${currentMood} says: ${response}`, 'bot-message'), 500);
}

// Add messages to chat log
function addMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = text;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Display random meme
function displayRandomMeme() {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    const imgElement = document.createElement('img');
    imgElement.src = randomMeme;
    imgElement.alt = "Random Meme";
    memeContainer.innerHTML = ''; // Clear previous meme
    memeContainer.appendChild(imgElement);
}

// Pick a random mood
function pickRandomMood() {
    const moods = Object.keys(botResponses);
    return moods[Math.floor(Math.random() * moods.length)];
}


// Function to calculate Brainrot score based on input
function calculateBrainrotScore(input) {
  let score = 0;
  
  // Simple logic: Increase score based on randomness of input
  if (input.length < 5) {
    score += 1;  // Short messages = low brainrot
  } else if (input.length > 50) {
    score += 3;  // Longer messages = higher brainrot
  
  // Extra randomness
  if (input.includes('potato') || input.includes('meme') || input.includes('random')) {
    score += 2;  // Common brainrot terms boost score
  }
  
  // Wildly random sentences add more brainrot points
  if (input.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    score += 3;  // Punctuation madness increases brainrot
  }

  return Math.min(score, 10);  // Cap the score at 10
}

// Function to update Brainrot Meter
function updateBrainrotMeter(score) {
  const meter = document.getElementById('brainrot-progress');
  const levelText = document.getElementById('brainrot-level');
  
  const percentage = (score / 10) * 100;  // Convert score to percentage
  meter.style.width = percentage + '%';  // Update meter width

  // Update level text based on the score
  if (score === 0) {
    levelText.textContent = 'Brainrot Level: 0 - Mild';
  } else if (score <= 3) {
    levelText.textContent = 'Brainrot Level: 3 - Light';
  } else if (score <= 5) {
    levelText.textContent = 'Brainrot Level: 5 - Medium';
  } else if (score <= 7) {
    levelText.textContent = 'Brainrot Level: 7 - High';
  } else if (score <= 9) {
    levelText.textContent = 'Brainrot Level: 9 - Extreme';
  } else {
    levelText.textContent = 'Brainrot Level: 10 - Meme Sage';
  }
}

// Bot response based on the score
function getBrainrotResponse(score) {
  if (score < 3) {
    return "You're keeping it chill... for now.";
  } else if (score < 6) {
    return "Whoa, you're getting into meme territory.";
  } else if (score < 8) {
    return "Brainrot levels rising! 🌚";
  } else {
    return "Meme Sage detected. You’ve ascended. 🙌";
  }
}

// Main function to handle chat logic
document.getElementById('send-btn').addEventListener('click', () => {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() === '') return; // Don't process empty messages

  // Display the user's message
  const chatLog = document.getElementById('chat-log');
  const userMessage = document.createElement('div');
  userMessage.classList.add('message', 'user-message');
  userMessage.textContent = userInput;
  chatLog.appendChild(userMessage);

  // Calculate and update Brainrot score and response
  const brainrotScore = calculateBrainrotScore(userInput);
  updateBrainrotMeter(brainrotScore);

  // Bot response
  const botResponse = getBrainrotResponse(brainrotScore);
  const botMessage = document.createElement('div');
  botMessage.classList.add('message', 'bot-message');
  botMessage.textContent = botResponse;
  chatLog.appendChild(botMessage);

  // Clear input field
  document.getElementById('user-input').value = '';

  // Scroll to bottom
  chatLog.scrollTop = chatLog.scrollHeight;
});
