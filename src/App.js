import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Ensure this import is correct
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Insights from './components/Insights';
import Settings from './components/Settings';

function App() {
  const [isConnected, setIsConnected] = React.useState(false);

  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const response = await window.solana.connect();
        setIsConnected(true);
        console.log('Connected to Phantom Wallet:', response.publicKey.toString());
      } catch (error) {
        console.error('Error connecting to Phantom Wallet:', error);
      }
    } else {
      alert('Please install Phantom Wallet!');
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    console.log('Disconnected from Phantom Wallet');
  };

  return (
    <Router>
      <div>
        <Header
          isConnected={isConnected}
          connectWallet={connectWallet}
          disconnectWallet={disconnectWallet}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;