const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const brainrotProgress = document.getElementById("brainrot-progress");
const brainrotLevel = document.getElementById("brainrot-level");
const memeContainer = document.getElementById("meme-container");

let brainrotValue = 0;

const botResponses = [
  "Tell me about your woes, I am here to listen.",
  "Hmm, sounds like a classic case of brainrot.",
  "Ah, the good ol' existential crisis. A common side effect of brainrot.",
  "Let me prescribe some memes to soothe your mind.",
  "Keep going! This therapy session is getting interesting.",
];

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

  setTimeout(() => {
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
