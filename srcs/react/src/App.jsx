import React, { useState } from 'react';

const ASSETS = [
  { type: 'Crypto',      symbol: 'BTC',  name: 'Bitcoin',         qty: 0.452,  price: 63480.20 },
  { type: 'Crypto',      symbol: 'ETH',  name: 'Ethereum',        qty: 4.81,   price: 3120.55  },
  { type: 'Crypto',      symbol: 'SOL',  name: 'Solana',          qty: 28.5,   price: 148.30   },
  { type: 'Stock',       symbol: 'AAPL', name: 'Apple Inc.',      qty: 20,     price: 189.30   },
  { type: 'Stock',       symbol: 'NVDA', name: 'NVIDIA Corp.',    qty: 15,     price: 875.40   },
  { type: 'Stock',       symbol: 'TSLA', name: 'Tesla Inc.',      qty: 8,      price: 172.50   },
  { type: 'Metal',       symbol: 'XAU',  name: 'Gold (oz)',       qty: 2.5,    price: 2340.00  },
  { type: 'Metal',       symbol: 'XAG',  name: 'Silver (oz)',     qty: 120,    price: 27.85    },
  { type: 'ETF',         symbol: 'SPY',  name: 'S&P 500 ETF',    qty: 30,     price: 520.10   },
  { type: 'ETF',         symbol: 'QQQ',  name: 'Nasdaq-100 ETF', qty: 15,     price: 442.75   },
  { type: 'Cash',        symbol: 'USD',  name: 'US Dollar',       qty: 12400,  price: 1.00     },
  { type: 'Cash',        symbol: 'USDC', name: 'USD Coin',        qty: 5000,   price: 1.00     },
];

const TYPES = ['All', ...Array.from(new Set(ASSETS.map(a => a.type)))];

export default function App() {
  const [filter, setFilter] = useState('All');

  const visible = filter === 'All' ? ASSETS : ASSETS.filter(a => a.type === filter);
  const total = visible.reduce((sum, a) => sum + a.qty * a.price, 0);

  return (
    <div style={{ padding: '32px', fontFamily: 'monospace' }}>
      <h1>Asset Dashboard</h1>
      <p>Total: ${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

      {/* Filter buttons */}
      <div style={{ margin: '16px 0' }}>
        {TYPES.map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{ marginRight: 8, fontWeight: filter === type ? 'bold' : 'normal' }}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Asset table */}
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Type</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price (USD)</th>
            <th>Value (USD)</th>
          </tr>
        </thead>
        <tbody>
          {visible.map(asset => (
            <tr key={asset.symbol}>
              <td>{asset.type}</td>
              <td>{asset.symbol}</td>
              <td>{asset.name}</td>
              <td>{asset.qty}</td>
              <td>${asset.price.toLocaleString()}</td>
              <td>${(asset.qty * asset.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}