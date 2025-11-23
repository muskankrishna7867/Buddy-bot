function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value.trim();
    if (message === "") return;

    showMessage(message, "user");
    input.value = "";

    setTimeout(() => {
        botReply(message);
    }, 500);
}

function showMessage(msg, type) {
    let box = document.getElementById("chat-box");
    let div = document.createElement("div");
    div.className = type;
    div.innerText = msg;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

function botReply(userMsg) {
    let reply = "I am Buddy bot. How can I help you?";

    if (userMsg.includes("hello") || userMsg.includes("hi")) {
        reply = "Hello Muskan! 😊";
    }
    else if (userMsg.includes("name")) {
        reply = "I am Buddy, your AI chat bot!";
    }
    else if (userMsg.includes("help")) {
        reply = "Sure, I am here to help you!";
    }

    showMessage(reply, "bot");
}
