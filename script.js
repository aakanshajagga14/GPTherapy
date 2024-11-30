document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatLog = document.getElementById('chat-log');

    const personas = {
        "meme-guru": [
            "Why cry when you can vibe?",
            "Your life isn't falling apart; it's just a plot twist.",
            "More memes, less drama. That's my therapy."
        ]
    };

    // Default to Meme Guru theme
    document.body.classList.add('meme-guru-theme');

    // Generate response from Meme Guru persona
    function generateBrainrotResponse(input) {
        const selectedPersona = personas["meme-guru"];
        const randomIndex = Math.floor(Math.random() * selectedPersona.length);
        return selectedPersona[randomIndex];
    }

    // Handle sending a message
    sendButton.addEventListener('click', () => {
        const inputText = userInput.value;
        if (inputText.trim() === "") return;
        
        // Add user message to chat log
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.textContent = inputText;
        chatLog.appendChild(userMessageDiv);
        
        // Clear input field
        userInput.value = '';
        chatLog.scrollTop = chatLog.scrollHeight;

        // Generate bot response and add to chat log
        const botResponse = generateBrainrotResponse(inputText);
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('bot-message');
        botMessageDiv.textContent = botResponse;
        chatLog.appendChild(botMessageDiv);
        chatLog.scrollTop = chatLog.scrollHeight;
    });
});
