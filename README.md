<div align="center">

# 🧠 Clarity Capital
### AI-Powered Trading Intelligence Suite for the Indian Stock Market

[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev)
[![Gemini](https://img.shields.io/badge/Gemini-AI%20Core-4285F4?style=flat&logo=google&logoColor=white)](https://deepmind.google)

</div>

---

## 🎯 Overview

Clarity Capital is an **advanced AI trading analysis suite** built for the Indian stock market (NSE/BSE). It synthesizes technical analysis, option chain data, news sentiment, and AI reasoning into single, high-confidence trade plans — giving retail traders **institutional-grade insights**.

The UI is inspired by a *"Neural Intelligence"* design philosophy — futuristic, immersive, and built for speed.

---

## ✨ Features

### 📊 Multi-Source Data Synthesis
- Real-time NSE/BSE price feeds integration
- Option chain analysis for market sentiment gauging
- Technical indicator stack (RSI, MACD, Bollinger Bands, Volume)
- News sentiment scoring via NLP

### 🤖 AI Trade Plans
- Gemini AI generates structured trade plans with entry, exit, stop-loss
- Confidence scoring per trade recommendation
- Risk/reward ratio calculation
- Multi-timeframe analysis (intraday, swing, positional)

### 📈 Interactive Dashboards
- Recharts-powered real-time visualizations
- Option chain heatmaps
- P&L scenario builder
- Historical backtesting view

### ⚡ Real-time Streaming
- WebSocket price feeds
- Live AI commentary via SSE streaming
- Sub-second UI updates

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Language | TypeScript (strict) |
| AI Core | Google Gemini API |
| Charts | Recharts |
| Styling | Tailwind CSS + custom neural theme |
| State | React Context + hooks |
| Data | WebSocket + REST APIs |
| Build | Vite + ESBuild |

---

## ⚡ Quick Start

```bash
# 1. Clone
git clone https://github.com/Prince8085/Clarity-Capital-.git
cd Clarity-Capital-

# 2. Install
npm install

# 3. Configure
# Create .env with:
# VITE_GEMINI_API_KEY=your_gemini_api_key

# 4. Run
npm run dev
# Open http://localhost:5173
```

---

## 🏗️ Architecture

```
┌─────────────────────────────────────┐
│           React Frontend            │
│  Dashboard · Charts · Trade Plans   │
└──────────────┬──────────────────────┘
               │
    ┌──────────▼──────────┐
    │   Gemini AI Core    │  ← Trade plan generation
    │   Analysis Engine   │  ← Sentiment + technicals
    └──────────┬──────────┘
               │
    ┌──────────▼──────────┐
    │   Data Layer        │
    │  WebSocket Feeds    │
    │  NSE/BSE APIs       │
    │  News Aggregator    │
    └─────────────────────┘
```

---

## 📊 Key Metrics

| Capability | Detail |
|---|---|
| Markets covered | NSE + BSE (Indian equities + F&O) |
| Analysis modes | Intraday / Swing / Positional |
| AI model | Google Gemini Pro |
| Update frequency | Real-time (WebSocket) |
| Trade plan generation | < 3 seconds |

---

## 👨💻 Built By

**Prince Khatik** — Founder, Innovix Solutions  
[LinkedIn](https://linkedin.com/in/prince-kachhwaha-) · [Portfolio](https://princekachhwaha.tech) · [GitHub](https://github.com/Prince8085)
