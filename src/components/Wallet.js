import React, { useState } from 'react'; // Add useState import
import { Connection, PublicKey } from '@solana/web3.js'; // Add Connection and PublicKey imports
import HyperbolicGraph from './HyperbolicGraph';

const Wallet = ({ setAddress }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState(null); // SOL balance
  const [data, setData] = useState([]); // Sample data for hyperbolic graph

  // Solana connection
  const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        // Connect to Phantom Wallet
        const response = await window.solana.connect();
        const publicKey = new PublicKey(response.publicKey.toString());
        setAddress(publicKey.toString());
        setIsConnected(true);

        // Fetch SOL balance
        const solBalance = await connection.getBalance(publicKey);
        setBalance(solBalance / 1e9); // Convert lamports to SOL

        // Generate sample data for hyperbolic graph
        setData([
          { x: 0, y: 0 },
          { x: 1, y: 1 },
          { x: -1, y: -1 },
        ]);
      } catch (error) {
        console.error('Error connecting to Phantom Wallet:', error);
      }
    } else {
      alert('Please install Phantom Wallet!');
    }
  };

  return (
    <div>
      <button onClick={connectWallet} className="bg-blue-500 text-white p-2 rounded">
        {isConnected ? 'Connected' : 'Connect Wallet'}
      </button>

      {isConnected && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Wallet Assets</h2>
          {balance !== null && (
            <p>
              SOL Balance: {balance} SOL
            </p>
          )}
          <HyperbolicGraph data={data} />
        </div>
      )}
    </div>
  );
};

export default Wallet;