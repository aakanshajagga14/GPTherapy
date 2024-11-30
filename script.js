// Function to generate a brainrot response
function generateBrainrotResponse(input) {
    const personas = {
        "Meme Guru": [
            "Why cry when you can vibe? *insert dancing meme*",
            "Your life isn't falling apart; it's just a plot twist.",
            "More memes, less drama. That's my therapy."
        ],
        "Chaotic Therapist": [
            "Honestly, just yell 'potato' in public. Works for me.",
            "Have you considered becoming a pigeon? Low stress, high vibes.",
            "What if... you solve all your problems by eating cake?"
        ],
        "Existential Bot": [
            "Why do you even need therapy? We're all floating in a void.",
            "Your brainrot is just a sign of overthinking reality.",
            "What if this is all a simulation, and your problems aren't real?"
        ]
    };

    // Randomly pick a persona
    const personaNames = Object.keys(personas);
    const selectedPersona = personaNames[Math.floor(Math.random() * personaNames.length)];

    // Randomly pick a response from the selected persona
    const responses = personas[selectedPersona];
    const response = responses[Math.floor(Math.random() * responses.length)];

    return `${selectedPersona} says: "${response}"`;
}

// Event listener for the Send button
document.getElementById('send-btn').addEventListener('click', () => {
    // Get user input
    const userInput = document.getElementById('user-input').value;

    // Check if input is empty
    if (userInput.trim() === "") {
        alert("Please type something!");
        return;
    }

    // Generate bot response
    const botResponse = generateBrainrotResponse(userInput);

    // Display user input in the chat log
    const chatLog = document.getElementById('chat-log');
    const userMsg = document.createElement('div');
    userMsg.textContent = `You: ${userInput}`;
    userMsg.className = "user-message"; // Optional CSS class for user messages
    chatLog.appendChild(userMsg);

    // Display bot response in the chat log
    const botMsg = document.createElement('div');
    botMsg.textContent = `GPTherapy: ${botResponse}`;
    botMsg.className = "bot-message"; // Optional CSS class for bot messages
    chatLog.appendChild(botMsg);

    // Clear the input field after sending
    document.getElementById('user-input').value = "";

    // Auto-scroll chat log to the bottom
    chatLog.scrollTop = chatLog.scrollHeight;
});
