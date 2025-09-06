
# Clarity Capital 🧠⚡

> An advanced, AI-powered trading analysis suite designed for the Indian stock market. Clarity Capital leverages a "Neural Intelligence" design philosophy to create an immersive, futuristic interface that feels like a window into the mind of a sentient AI.

This application synthesizes multiple data points and analytical models into single, high-confidence trade plans, empowering traders with institutional-grade insights.

---

## ✨ Created By

This project was envisioned and built by **Prince Kachhwaha**.

- **LinkedIn:** [https://www.linkedin.com/in/prince-kachhwaha-/](https://www.linkedin.com/in/prince-kachhwaha-/)

---

## 🚀 Live Demo

**[Link to your live demo here]**

---

## 📸 Screenshots

*(Placeholder: Add screenshots of the Dashboard, AI Confluence Engine, and mobile views here to showcase the stunning UI.)*

---

## 🌟 Core Features

- **AI Confluence Engine**: The core of the platform. It synthesizes evidence from various specialized tools into a single, master trade plan with a clear confidence score.
- **Live Trading Hub**: Delivers real-time, automated trade signals for the NIFTY 50 index based on a continuous analysis of market confluence.
- **Specialized Analysis Tools**: A suite of powerful modules, each targeting a specific trading discipline:
  - **SMC Analyzer**: Analyzes charts for Smart Money Concepts.
  - **AI Option Chain Analyzer**: Provides strategic breakdowns from option chain screenshots.
  - **AI Liquidity Hunter**: Identifies key liquidity zones to anticipate stop hunts.
  - **Scalper's Edge AI**: Offers immediate, actionable insights for short-term charts.
- **Portfolio Tracker**: A complete interface to monitor your holdings, track your Profit & Loss, and visualize asset allocation.
- **AI History & Bookmarks**: Automatically saves every AI-generated response. Users can bookmark crucial insights for quick access.
- **Customizable Experience**: Features a theme toggle (Dark/Light mode) and user preferences that persist across sessions.
- **Fully Mobile-Responsive**: Complex data tables and dashboards are intelligently redesigned into a user-friendly card format on smaller screens.
- **Interactive UI**: A sleek, futuristic interface with glassmorphism, glowing effects, and animated backgrounds to create an immersive experience.

---

## 🎨 Design Philosophy: "Neural Intelligence"

The UI is crafted to feel like an extension of an intelligent, living system.

- **Vibe**: Dark, futuristic, and electric, inspired by neural networks and bionic interfaces.
- **Color Palette**: A deep space blue background is accented with electric cyan and pulsing magenta to highlight data and interactive elements.
- **Effects**: Glassmorphism, glow effects, and subtle animations are used to create depth and a sense of emitted light, enhancing the high-tech feel.
- **Typography**: A mix of futuristic display fonts (`Oxanium`) and clean, monospaced fonts (`Roboto Mono`) ensures both style and perfect data alignment.

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, React Hooks
- **Styling**: Tailwind CSS (with a custom design system)
- **AI Integration**: Google Gemini API (`@google/genai`)
- **Charting**: Recharts
- **State Management**: React Context API
- **Deployment**: Modern bundler-less setup using ES Modules and Import Maps.

---

## ⚙️ Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

- A modern web browser that supports ES Modules (Chrome, Firefox, Edge).
- A valid Google Gemini API key.

### Configuration: The API Key

This project requires a Google Gemini API key to function.

1.  **Get your API Key**: Obtain your key from [Google AI Studio](https://aistudio.google.com/app/apikey).

2.  **Set the API Key**:
    - Open the file: `services/geminiService.ts`
    - Find the following line at the top of the file:
      ```typescript
      const API_KEY = process.env.API_KEY;
      ```
    - **Replace `process.env.API_KEY`** with your actual API key string:
      ```typescript
      // BEFORE
      // const API_KEY = process.env.API_KEY;

      // AFTER
      const API_KEY = "YOUR_SECRET_GEMINI_API_KEY_HERE";
      ```
    - Save the file. **Do not commit this change to a public repository.**

### Running the Application

Because this project uses a modern, bundler-less setup, you don't need to run `npm install` or `npm start`. You simply need a local web server to serve the files.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/clarity-capital.git
    cd clarity-capital
    ```

2.  **Start a local server:**
    If you have Python installed, you can easily start a server:
    ```sh
    # For Python 3
    python -m http.server

    # For Python 2
    python -m SimpleHTTPServer
    ```
    Alternatively, you can use the VS Code "Live Server" extension or any other local server tool.

3.  **Open in browser:**
    Navigate to `http://localhost:8000` (or the port your server is running on) in your web browser. The application should now be running.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
