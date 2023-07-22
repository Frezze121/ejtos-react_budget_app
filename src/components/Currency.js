import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, setCurrency } = useContext(AppContext);

  // Event handler for changing the currency value
  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    setCurrency(selectedCurrency);
  };

  return (
    <div className='alert alert-secondary'>
      <label>Currency</label>
      <select className="currency" onChange={handleCurrencyChange}>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="$">$ Dollar</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;