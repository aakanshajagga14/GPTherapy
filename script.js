const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const botResponses = [
    "Why cry when you can vibe? 🕺",
    "Your life isn't falling apart; it's just a plot twist!",
    "Potato therapy is underrated. Just yell 'POTATO!' 😤",
    "Have you tried turning your problems off and on again?",
    "Life is just brainrot with extra steps.",
    "You’re not lost; you’re exploring chaotic vibes!",
    "What if your brainrot is actually your superpower? 🧠⚡",
    "Fun fact: Memes are cheaper than therapy.",
    "Your brain just needs a dance party. Problem solved. 🎉",
    "Imagine a penguin solving your problems. Feel better yet? 🐧",
    "Step 1: Panic. Step 2: Do it anyway. 💪",
    "Remember, chaos is just misunderstood order. 🤔",
    "Drink water, touch grass, and vibe. That's the cure.",
    "You're not lazy; you're in energy-saving mode. 🔋"
];

// Greet the user when the page loads
window.onload = () => {
    const greeting = "Welcome, top G! Ready for some sigma-level therapy?";
    addMessage(greeting, 'bot-message');
};

// Handle sending messages
sendBtn.addEventListener('click', () => {
    const userText = userInput.value.trim();
    if (userText === '') return;

    // Add user message to chat
    addMessage(userText, 'user-message');

    // Generate bot response
    const botResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
    setTimeout(() => addMessage(botResponse, 'bot-message'), 500);

    userInput.value = '';
});

// Function to add messages to the chat log
function addMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.textContent = text;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}
