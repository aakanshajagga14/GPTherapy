const chatLog = document.getElementById('chat-log');
const memeContainer = document.getElementById('meme-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const botResponses = {
    "Silly": [
        "Why cry when you can vibe? 🕺",
        "Your brain just needs a dance party. 🎉",
        "Imagine a penguin solving your problems. 🐧",
        "Ever tried yelling 'waffles' in a crowd? Game-changer.",
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
