console.log("Simulated Chatbot script loaded");

window.initializeChatbot = () => {
  const chatbox = document.createElement("div");
  chatbox.textContent = "Chatbot UI here";
  chatbox.style.position = "fixed";
  chatbox.style.bottom = "10px";
  chatbox.style.right = "10px";
  chatbox.style.backgroundColor = "lightgrey";
  chatbox.style.color = "black";
  chatbox.style.padding = "5px";
  chatbox.style.cursor = "pointer";
  document.body.appendChild(chatbox);
};
