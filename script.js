const personas = {
    "meme-guru": [
        "Why cry when you can vibe? *insert dancing meme*",
        "Your life isn't falling apart; it's just a plot twist.",
        "More memes, less drama. That's my therapy."
    ],
    "chaotic-therapist": [
        "Honestly, just yell 'potato' in public. Works for me.",
        "Have you considered becoming a pigeon? Low stress, high vibes.",
        "What if... you solve all your problems by eating cake?"
    ],
    "existential-bot": [
        "Why do you even need therapy? We're all floating in a void.",
        "Your brainrot is just a sign of overthinking reality.",
        "What if this is all a simulation, and your problems aren't real?"
    ]
};

function generateBrainrotResponse(input, mood) {
    const selectedPersona = personas[mood];
    const randomResponse = selectedPersona[Math.floor(Math.random() * selectedPersona.length)];

    const messageContainer = document.createElement('div');
    messageContainer.classList.add('bot-message');
    messageContainer.textContent = randomResponse;

    const chatLog = document.getElementById('chat-log');
    chatLog.appendChild(messageContainer);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
}

document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    
    // Get selected mood from dropdown menu
    const selectedMood = document.getElementById('mood-selector').value;
    
    if (userInput.trim() !== "") {
        // Create user message
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = userInput;
        
        // Add user message to chat-log
        const chatLog = document.getElementById('chat-log');
        chatLog.appendChild(userMessage);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
        
        // Generate bot response based on selected mood
        generateBrainrotResponse(userInput, selectedMood);
        
        // Clear input field
        document.getElementById('user-input').value = '';
    }

    document.body.classList.remove('meme-guru-theme', 'existential-bot-theme', 'chaotic-therapist-theme');
    document.body.classList.add(`${selectedMood}-theme`);
});
