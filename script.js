document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatLog = document.getElementById('chat-log');
    const moodSelector = document.getElementById('mood-selector');
    
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

    // Set default theme
    let currentTheme = "meme-guru";  // Default mood
    document.body.classList.add(currentTheme + "-theme");

    // Function to change theme
    moodSelector.addEventListener('change', (e) => {
        const newMood = e.target.value;
        document.body.classList.remove(currentTheme + "-theme");
        currentTheme = newMood;
        document.body.classList.add(currentTheme + "-theme");
    });

    // Generate response from selected persona
    function generateBrainrotResponse(input) {
        const selectedPersona = personas[currentTheme];
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
