import { useState } from "react";

function App() {
  const [selectedAsset, setSelectedAsset] = useState('bitcoin');

  const handleSubmit = (event) => {
    event.preventDefault();
    // here I think we will have to send the selected asset to the backend
    console.log(`Selected asset: ${selectedAsset}`);
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
        <button type="submit">Add to Portfolio</button>
      </form>
    </main> 
  );
}

export default App;