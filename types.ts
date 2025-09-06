export type Page = 'dashboard' | 'confluence-engine' | 'live-hub' | 'market-pulse' | 'chart-analyzer' | 'option-chain' | 'option-chain-analyzer' | 'ai-insights' | 'liquidity-hunter' | 'scalpers-edge' | 'settings' | 'alerts' | 'portfolio' | 'history';

export type ConfluenceState = 'Bullish' | 'Bearish' | 'Neutral';

export interface ConfluenceAnalysis {
  priceAction: ConfluenceState;
  optionChain: ConfluenceState;
  orderFlow: ConfluenceState;
  sentiment: ConfluenceState;
}

export interface LiveSignal {
  signal: 'BUY' | 'SELL' | 'HOLD';
  confidence: number;
  strategy: string;
  premiumRange: string;
  entry: string;
  stopLoss: string;
  targets: string[];
  rationale: string;
  riskRewardRatio: string;
  confluence: ConfluenceAnalysis;
}

export interface StockPrice {
  date: string;
  price: number;
  volume: number;
}

export interface OptionData {
  strike: number;
  calls: {
    iv: number;
    oi: string;
    volume: string;
    ltp: number;
    delta: number;
    gamma: number;
    theta: number;
    vega: number;
  };
  puts: {
    iv: number;
    oi: string;
    volume: string;
    ltp: number;
    delta: number;
    gamma: number;
    theta: number;
    vega: number;
  };
}

export interface GeminiAnalysis {
    overview: string;
    news: string;
    sentiment: string;
    levels: string;
}

export interface MarketNews {
    headline: string;
    summary: string;
}

export interface EconomicEvent {
    date: string;
    event: string;
    impact: 'High' | 'Medium' | 'Low';
}

// Types for the AI Confluence Engine
export interface AnalysisEvidence {
    id: string;
    type: 'SMC Analysis' | 'Liquidity Analysis' | 'Scalping Analysis' | 'Option Chain Analysis' | 'Manual Input';
    source: string;
    content: string;
    timestamp: Date;
}

export interface SynthesizedSignal {
    signal: 'BUY' | 'SELL' | 'HOLD' | 'INCONCLUSIVE';
    confidence: number;
    tradePlan: string;
    rationale: string;
    risks: string;
}


export interface AnalysisContextType {
    evidence: AnalysisEvidence[];
    addEvidence: (evidence: Omit<AnalysisEvidence, 'id' | 'timestamp'>) => void;
    clearEvidence: () => void;
}

export interface UserAlert {
    id: string;
    stock: string;
    condition: 'above' | 'below';
    value: number;
    triggeredAt?: number; // Timestamp when it was triggered
}

export interface ToastNotification {
    id: string;
    message: string;
    type: 'success' | 'info' | 'error';
}

export interface PortfolioHolding {
    id: string;
    symbol: string;
    quantity: number;
    avgPrice: number;
    ltp: number;
}

export interface HistoryItem {
    id: string;
    source: string; // e.g., 'Live Trading Hub', 'SMC Analyzer'
    content: any; // The AI response object or string
    timestamp: number;
    bookmarked: boolean;
}