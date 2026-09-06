Project 1 — AI-Assisted Frontend Website

A frontend web project created to practice modern website development, responsive UI design, and AI-assisted user interaction.

✨ Features

- Responsive frontend interface
- AI chat assistant
- Direct WhatsApp messaging
- User-friendly navigation
- Modern website layout
- Interactive UI elements

🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- AI API / AI Assistant
- WhatsApp Integration

🎯 Project Objective

The main objective of this project was to understand the fundamentals of frontend web development and explore how AI assistance and direct communication features can be integrated into a website.

📚 What I Learned

- Building responsive web interfaces
- Working with JavaScript
- Integrating an AI chat assistant
- Implementing WhatsApp communication
- Structuring a frontend project
- Improving user experience through interactive elements

🚀 Future Improvements

- Add backend functionality
- Add user authentication
- Improve AI capabilities
- Add database integration
- Improve accessibility and performance

👨‍💻 Project Status

Completed — Academic/Practice Project# CraftWave Studio - Frontend & AI Integration Portfolio

A modern, responsive business website integrated with a grounded AI customer support widget powered by **Google Gemini 2.5 Flash-Lite**.

---

## 🌟 Key Features

1. **Grounded AI Knowledge Base**: Answers questions regarding products, pricing, and shipping strictly using `src/data/businessData.js`.
2. **Dual-Layer Architecture**:
   - **Production (Vercel)**: Calls `/api/chat.js` serverless route to protect Gemini API keys.
   - **Development**: Client-side fallback using `.env` for quick local setup.
3. **WhatsApp Handoff**: If the AI encounters missing data or an API error, it generates a pre-formatted `https://wa.me/` link containing the conversation context.
4. **Responsive Floating UI**: Custom CSS matching the website's dark slate palette (`#0f172a`, `#1e293b`, `#3b82f6`).

---

## 🚀 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_actual_gemini_api_key
VITE_GEMINI_MODEL=gemini-2.5-flash-lite
