# Gemini Chatbot API - AI Doctor Assistant

## Description

AI Doctor Assistant is a healthcare chatbot application powered by Google Gemini AI that provides preliminary medical guidance and helps with initial diagnosis consultations. The application offers a simple web interface for interacting with an AI assistant capable of answering health-related questions and providing general medical advice.

## Features

- Interactive chatbot powered by Google Gemini AI
- Responsive web interface with healthcare theme
- Multi-turn conversation support for contextual dialogue
- Customizable configuration via environment variables
- User-friendly chat interface with real-time responses

## Prerequisites

- Node.js (version 16.0 or higher)
- npm (typically installed with Node.js)
- Google Gemini API Key (obtain from [Google AI Studio](https://aistudio.google.com/))

## Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:laksanabima/gemini-chatbot-ai.git gemini-chatbot-api
   cd gemini-chatbot-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy the `.env.copy` file to `.env`:
     ```bash
     cp .env.copy .env
     ```
   - Edit the `.env` file and fill in the required information:
     ```
     GEMINI_API_KEY=your_google_gemini_api_key_here
     PORT=8989
     AI_TEMPERATURE=0.9
     AI_SYSTEM_PROMPT=
     ```

## Running the Application

1. **Start the server:**
   ```bash
   node index.js
   ```

2. **Open in browser:**
   - Navigate to `http://localhost:8989` (or your configured port)
   - You will see the AI Doctor Assistant chatbot interface

## Usage

1. **Start a conversation:**
   - Type your symptoms, health questions, or medical condition description in the input field
   - Press the send button (paper plane icon) or press Enter

2. **Interact with AI:**
   - The AI will respond with general health information based on your query
   - You can continue the conversation to seek clarification or additional information

3. **Usage tips:**
   - Describe your symptoms in detail for more accurate responses
   - Ask questions about prevention, common treatments, or health information
   - Remember that this AI is not a substitute for medical professionals; use it as an initial reference guide only

## Project Structure

```
gemini-chatbot-api/
├── index.js              # Main Express server
├── package.json          # Project dependencies and scripts
├── .env.copy             # Environment variables template
├── public/               # Frontend static files
│   ├── index.html        # Main chatbot interface
│   ├── style.css         # Healthcare-themed styling
│   └── script.js         # Chat interaction JavaScript
└── README.md             # Project documentation
```

## Configuration

Customize the application behavior through the `.env` file:

- `GEMINI_API_KEY`: Google Gemini API key (required)
- `PORT`: Server port (default: 8989)
- `AI_TEMPERATURE`: AI response creativity level (0.0-1.0, default: 0.7)
- `AI_SYSTEM_PROMPT`: System instructions for AI behavior (default: medical assistant prompt)

## Troubleshooting

- **Error "API key not found"**: Ensure the `.env` file has been created and `GEMINI_API_KEY` is filled with a valid API key
- **Port already in use**: Change the `PORT` value in `.env` to another available port
- **Server fails to start**: Verify that Node.js is installed and run `npm install` before starting the server


## Screenshoot App
<img src="https://i.ibb.co.com/0RrtgwgG/Screenshot-2026-03-13-at-21-41-22.png" alt="Screenshot-2026-03-13-at-21-41-22" border="0">
