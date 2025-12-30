 const responses = {
            "hello": "Hi there! How can I help you today?",
            "hi": "Hello! What can I do for you?",
            "how are you": "I'm doing great, thanks for asking!",
            "what is your name": "I'm a Simple Chatbot!",
            "bye": "Goodbye! Have a great day!",
            "help": "I'm here to chat with you. Just type your message and I'll respond!"
        };

        function sendMessage() {
            const input = document.getElementById("userInput");
            const message = input.value.trim();
            
            if (!message) return;

            addMessage(message, "user-message");
            input.value = "";

            const response = getResponse(message);
            setTimeout(() => addMessage(response, "bot-message"), 500);
        }

        function addMessage(text, className) {
            const chatMessages = document.getElementById("chatMessages");
            const messageDiv = document.createElement("div");
            messageDiv.className = `message ${className}`;
            messageDiv.textContent = text;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function getResponse(message) {
            const lower = message.toLowerCase();
            return responses[lower] || "I'm not sure how to respond to that. Try saying hello!";
        }

        document.getElementById("userInput").addEventListener("keypress", (e) => {
            if (e.key === "Enter") sendMessage();
        });
    const backButton = document.createElement("button");
    backButton.textContent = "← Back";
    backButton.style.position = "absolute";
    backButton.style.top = "20px";
    backButton.style.left = "20px";
    backButton.onclick = () => window.location.href = "home.html";
    document.body.appendChild(backButton);
    responses["what's up"] = "Not much, just here to chat!";
    responses["what is 2 plus 2"] = "2 plus 2 equals 4!";
    responses["what is pi"] = "Pi is approximately 3.14159!";
    responses["what is the square root of 16"] = "The square root of 16 is 4!";
    responses["how do you calculate area"] = "Area is calculated by multiplying length times width!";
    responses["what is algebra"] = "Algebra is a branch of math that uses variables and equations!";
    responses["explain geometry"] = "Geometry is the study of shapes, sizes, and properties of figures!";
    responses["what is calculus"] = "Calculus is advanced math involving rates of change and areas!";
    responses["how do you solve equations"] = "Isolate the variable by performing the same operation on both sides!";
    responses["what is a prime number"] = "A prime number is only divisible by 1 and itself!";
    responses["explain probability"] = "Probability is the likelihood of an event occurring!";
    responses["who are you"] = "I'm a Simple Chatbot, your friendly assistant!";
    responses["how's it going"] = "I'm doing well, thanks for asking!";
    responses["thanks"] = "You're welcome!";
    responses["thank you"] = "Happy to help!";
    responses["good morning"] = "Good morning! Ready to chat?";
    responses["good evening"] = "Good evening! What's on your mind?";
    responses["what can you do"] = "I can chat with you and answer your questions!";
    responses["tell me a joke"] = "Why did the programmer quit his job? Because he didn't get arrays!";
    responses["how old are you"] = "I'm ageless, existing in the digital realm!";
    responses["nice to meet you"] = "Nice to meet you too!";
    responses["what time is it"] = "I don't have access to the time, but you can check your clock!";
    responses["are you real"] = "I'm an AI, so I exist in code and logic!";
    responses["can you help me"] = "Of course! What do you need help with?";
    responses["see you later"] = "See you later! Come back soon!";
    responses["what's your name"] = "I'm a Simple Chatbot!";
    responses["who are you"] = "I'm a Simple Chatbot, your friendly assistant!";
    responses["how's it going"] = "I'm doing well, thanks for asking!";
    responses["thanks"] = "You're welcome!";
    responses["thank you"] = "Happy to help!";
    responses["good morning"] = "Good morning! Ready to chat?";
    responses["good evening"] = "Good evening! What's on your mind?";
    responses["what can you do"] = "I can chat with you and answer your questions!";
    responses["tell me a joke"] = "Why did the programmer quit his job? Because he didn't get arrays!";
    responses["how old are you"] = "I'm ageless, existing in the digital realm!";
    function getResponse(message) {
        const lower = message.toLowerCase();
        
        return responses[lower] || "I'm not sure how to respond to that. Try saying hello!";
    }   