const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const brainrotProgress = document.getElementById("brainrot-progress");
const brainrotLevel = document.getElementById("brainrot-level");
const memeContainer = document.getElementById("meme-container");
const personalitySelector = document.getElementById("personality-selector");

let brainrotValue = 0;

const personalities = {
  sally: [
    "Tell me more. I’m here for you.",
    "Wow, that must be tough. You're doing great.",
    "I think you’re being really brave.",
  ],
  dave: [
    "Really? That’s your problem?",
    "Classic brainrot. It’s almost impressive.",
    "Oh no, the sarcasm detector is off the charts.",
  ],
  alex: [
    "That’s chill. Let’s just vibe.",
    "You’ve got this. Let’s not overthink it.",
    "We’ll figure this out together. Easy peasy.",
  ],
};

const memes = [
  "https://i.imgur.com/8Yg3FPU.jpeg",
  "https://i.imgur.com/3Oj8WBC.jpeg",
  "https://i.imgur.com/kLjzRAl.jpeg",
  "https://i.imgur.com/TNfO9Ny.jpeg",
  "https://i.imgur.com/Z3R7XYM.jpeg",
];

function updateBrainrotMeter() {
  brainrotValue += 10;
  if (brainrotValue > 100) brainrotValue = 100;
  brainrotProgress.style.width = brainrotValue + "%";
  brainrotLevel.textContent = `Brainrot Meter: ${brainrotValue}%`;
}

function addMessage(content, type) {
  const message = document.createElement("div");
  message.className = `message ${type}-message`;
  message.textContent = content;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  addMessage(userMessage, "user");
  userInput.value = "";

  const selectedPersonality = personalitySelector.value;
  setTimeout(() => {
    const botResponses = personalities[selectedPersonality];
    const botMessage = botResponses[Math.floor(Math.random() * botResponses.length)];
    addMessage(botMessage, "bot");

    if (Math.random() < 0.5) {
      const randomMeme = memes[Math.floor(Math.random() * memes.length)];
      memeContainer.innerHTML = `<img src="${randomMeme}" alt="Meme">`;
    } else {
      memeContainer.innerHTML = "";
    }

    updateBrainrotMeter();
  }, 1000);
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
