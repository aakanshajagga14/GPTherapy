const chatLog = document.getElementById('chat-log');
const memeContainer = document.getElementById('meme-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const botResponses = {
    "Silly": [
        "Why cry when you can vibe? 🕺",
        "Your brain just needs a dance party. 🎉",
        "Imagine a penguin solving your problems. 🐧",
    ],
    "Sassy": [
        "Oh honey, your life isn't falling apart. It's just dramatic.",
        "Did you just brainrot? Because same. 🙄",
        "Get yourself together, drama llama! 🦙",
    ],
    "Deep Thought Dave": [
        "Why do we exist? Probably for memes. 🤔",
        "Your brainrot is the universe’s way of evolving.",
        "Do you even need therapy? Or is life just chaos? 🌌"
    ]
};

const memes = [
    "https://i.imgflip.com/5z6r1b.jpg", // Funny meme
    "https://i.imgflip.com/4t6d5c.jpg", // Silly face
    "https://i.imgflip.com/2gxnlq.jpg", // Cat meme
];

// Pick a random mood for the bot
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

// Function to generate bot responses
function generateBotResponse(input) {
    const moodResponses = botResponses[currentMood];
    const response = moodResponses[Math.floor(Math.random() * moodResponses.length)];
    setTimeout(() => addMessage(`${currentMood} says: ${response}`, 'bot-message'), 500);
}

// Function to add messages to chat log
function addMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = text;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Display a random meme
function displayRandomMeme() {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    const imgElement = document.createElement('img');
    imgElement.src = randomMeme;
    memeContainer.innerHTML = ''; // Clear previous meme
    memeContainer.appendChild(imgElement);
}

// Pick a random mood
function pickRandomMood() {
    const moods = Object.keys(botResponses);
    return moods[Math.floor(Math.random() * moods.length)];
}
