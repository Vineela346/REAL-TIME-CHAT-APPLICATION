// Connect to the backend Socket.IO server
const socket = io("http://localhost:3000");

// DOM elements
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

// Send message when button is clicked
sendBtn.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit("chat message", message); // Emit message to the server
        messageInput.value = ""; // Clear input field
    }
});

// Listen for incoming messages from the server
socket.on("chat message", (msg) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = msg;
    messagesDiv.appendChild(messageElement);
    
    // Scroll to the bottom of the messages
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
