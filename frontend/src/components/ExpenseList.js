// frontend/src/components/ExpenseList.js
import React from 'react';
import { deleteExpense } from '../services/expenseService';

const ExpenseList = ({ expenses, setExpenses }) => {
    const handleDelete = async (id) => {
        await deleteExpense(id);
        setExpenses(expenses.filter(expense => expense._id !== id));
    };

    return (
        <div>
            <h2>Expenses</h2>
            <ul>
                {expenses.map(expense => (
                    <li key={expense._id}>
                        {expense.amount} - {expense.category} - {expense.date} - {expense.description}
                        <button className="delete-button" onClick={() => handleDelete(expense._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
