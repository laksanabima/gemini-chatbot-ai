document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    // In-memory conversation history
    let conversationHistory = [];

    // Set options for marked to ensure it renders line breaks
    if (window.marked) {
        marked.setOptions({
            breaks: true,
            gfm: true,
        });
    }

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const userMessage = userInput.value.trim();
        if (!userMessage) {
            return; // Don't send empty messages
        }

        // Add user message to UI and history
        addMessageToChatBox('user', userMessage);
        conversationHistory.push({ role: 'user', text: userMessage });
        userInput.value = ''; // Clear input field

        // Show a "Thinking..." message while waiting for the response
        const thinkingMessageElement = addMessageToChatBox('model', 'Thinking...');
        thinkingMessageElement.classList.add('thinking');

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    conversation: conversationHistory
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get response from server.');
            }

            const data = await response.json();

            // Replace "Thinking..." with the actual, rendered response
            if (data && data.result) {
                updateMessageContent(thinkingMessageElement, data.result);
                // Add the raw model response to the history
                conversationHistory.push({ role: 'model', text: data.result });
            } else {
                thinkingMessageElement.textContent = 'Sorry, no response received.';
                thinkingMessageElement.classList.add('error');
            }

        } catch (error) {
            console.error('Error during fetch:', error);
            thinkingMessageElement.textContent = 'Failed to get response from server.';
            thinkingMessageElement.classList.add('error');
        } finally {
            // Clean up "thinking" class and scroll to the latest message
            thinkingMessageElement.classList.remove('thinking');
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });

    /**
     * Adds a message to the chat box UI, rendering Markdown for model messages.
     */
    function addMessageToChatBox(role, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `${role}-message`);

        // Render Markdown for model messages if marked.js is available
        if (role === 'model' && window.marked) {
            messageElement.innerHTML = marked.parse(text);
        } else {
            messageElement.textContent = text;
        }
        
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        return messageElement;
    }

    /**
     * Updates an existing message element's content, parsing it as Markdown.
     */
    function updateMessageContent(element, newText) {
        if (window.marked) {
            element.innerHTML = marked.parse(newText);
        } else {
            element.textContent = newText;
        }
    }
});
