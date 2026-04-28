import { useState } from "react";

function App() {
  const [selectedAsset, setSelectedAsset] = useState('');
  const [amount, setAmount] = useState('');
  const [portfolio, setPortfolio] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

  if (selectedAsset && amount) {
      setPortfolio([...portfolio, {id: Date.now(), asset: selectedAsset, amount }]);
      setSelectedAsset('');
      setAmount('');
    }
  };
  return (
    <main>
      <h1>Portfolio Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Asset:
          <select
            value={selectedAsset}
            onChange={(event) => setSelectedAsset(event.target.value)}
          // here i think we need to fetch the list of assets from the backend - for Dongjun
            >
          <option value="">Choose asset</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="bsv">Bitcoin SV</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="dollar">Dollar</option>
          <option value="euro">Euro</option>
          <option value="sp500">S&P 500</option>
          </select>
        </label>

        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <button type="submit">Add to Portfolio</button>
      </form>

      <h2>My Portfolio</h2>
      <ul>
        {portfolio.map((item) => (
          <li key={item.id}>
            {item.asset}: {item.amount}
          </li>
        ))}
      </ul>


    </main> 
  );
}

export default App;