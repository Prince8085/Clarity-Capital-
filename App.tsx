import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LiveTradingHub from './components/LiveTradingHub';
import ChartAnalyzer from './components/ChartAnalyzer';
import OptionChainView from './components/OptionChainView';
import MarketPulse from './components/MarketPulse';
import AIInsights from './components/AIInsights';
import OptionChainAnalyzer from './components/OptionChainAnalyzer';
import LiquidityHunter from './components/LiquidityHunter';
import ScalpersEdge from './components/ScalpersEdge';
import AIConfluenceEngine from './components/AIConfluenceEngine';
import Settings from './components/Settings';
import Login from './components/Login';
import Alerts from './components/Alerts';
import Portfolio from './components/Portfolio';
import AIHistory from './components/AIHistory';
import { AnalysisProvider } from './contexts/AnalysisContext';
import { useAuth } from './contexts/AuthContext';
import { AlertProvider } from './contexts/AlertContext';
import ToastContainer from './components/ToastContainer';
import NeuralBackground from './components/NeuralBackground';
import type { Page } from './types';
import LandingPage from './components/LandingPage';
import { HistoryProvider } from './contexts/HistoryContext';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'portfolio':
        return <Portfolio />;
      case 'confluence-engine':
        return <AIConfluenceEngine />;
      case 'live-hub':
        return <LiveTradingHub />;
      case 'market-pulse':
        return <MarketPulse />;
      case 'chart-analyzer':
        return <ChartAnalyzer />;
      case 'liquidity-hunter':
        return <LiquidityHunter />;
      case 'scalpers-edge':
        return <ScalpersEdge />;
      case 'option-chain':
        return <OptionChainView />;
      case 'option-chain-analyzer':
        return <OptionChainAnalyzer />;
      case 'ai-insights':
        return <AIInsights />;
      case 'history':
        return <AIHistory onNavigate={handleNavigation} />;
      case 'settings':
        return <Settings />;
      case 'alerts':
        return <Alerts />;
      default:
        return <Dashboard />;
    }
  };

  const handleNavigation = useCallback((page: Page) => {
    setCurrentPage(page);
    setIsSidebarOpen(false);
  }, []);

  if (!isAuthenticated) {
    if (showLogin) {
      return <Login onBackToHome={() => setShowLogin(false)} />;
    }
    return <LandingPage onGetStarted={() => setShowLogin(true)} />;
  }

  return (
    <AnalysisProvider>
      <AlertProvider>
        <div className="flex min-h-screen text-slate-800 dark:text-light-azure font-sans relative">
          <NeuralBackground />
          <Sidebar 
            currentPage={currentPage} 
            onNavigate={handleNavigation} 
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          <div className="flex-1 flex flex-col min-w-0 z-10">
            <Header onMenuClick={toggleSidebar} />
            <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
              {renderContent()}
            </main>
          </div>
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/60 z-30 md:hidden"
              onClick={toggleSidebar}
              aria-hidden="true"
            />
          )}
        </div>
        <ToastContainer />
      </AlertProvider>
    </AnalysisProvider>
  );
};

export default App;