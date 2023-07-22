import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency, expenses } = useContext(AppContext);

    // Funktion zum Aktualisieren des Budgets
    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value);

        // Überprüfen, ob das neue Budget größer oder gleich den Gesamtausgaben ist
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        if (newBudget >= totalExpenses) {
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        } else {
            alert("Cannot set budget lower than total expenses!");
        }
    };

    return (
        <div className='alert alert-secondary' style={{ display: "flex" }}>
            <span style={{ whiteSpace: "nowrap" }}>Budget: {currency}</span>
            <input
                step="10"
                type='number'
                value={budget}
                style={{ size: 10 }}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;