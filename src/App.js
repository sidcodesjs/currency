import React, { useState, useEffect } from 'react';
import { getUserLocation } from './Geo';
import { getExchangeRate } from './Currency';
import './App.css'

const App = () => {
  const [currency, setCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(1);
  const basePrice = 100;

  useEffect(() => {
    const fetchData = async () => {
      const location = await getUserLocation();
      const rates = await getExchangeRate();
      if (location && rates) {
        if (location.country === 'IN') {
          setCurrency('INR');
          setExchangeRate(rates.INR);
        } else {
          setCurrency('USD');
          setExchangeRate(1);
        }
      }
    };
    fetchData();
  }, []);

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    setCurrency(selectedCurrency);
    if (selectedCurrency === 'INR') {
      setExchangeRate(74); 
    } else {
      setExchangeRate(1);
    }
  };

  const convertedPrice = basePrice * exchangeRate;

  return (
    <div>
      <h1>Price: {currency === 'INR' ? '₹' : '$'}{convertedPrice.toFixed(2)}</h1>
      <select onChange={handleCurrencyChange} value={currency}>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
      </select>
    </div>
  );
};
export default App;