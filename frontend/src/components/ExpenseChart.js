import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const ExpenseChart = (props) => 
    {
        const expenses = props.expenses;

        // Sort by DAte to make things easier to rtack
        const sortedExpenses = expenses.slice().sort((a, b) => 
            {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                if (dateA < dateB) 
                {
                    return -1;
                } 
                else if (dateA > dateB) 
                {
                    return 1;
                } else 
                {
                    return 0;
                }
            });

        // make the label from the date
        const labels = sortedExpenses.map((expense) => 
            {
                const date = new Date(expense.date);
                return date.toLocaleDateString();
            });

        // put some points on that there chart
        const dataPoints = sortedExpenses.map((expense) => 
            {
            return expense.amount;
            });

        // const sets = 
        
        // Prepare data for chart
        const data = 
            {
                labels: labels,
                datasets:
                [
                {
                    label: 'Here is your spending!',
                    data: dataPoints,
                    fill: false,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                },
                ],
            };

        // Chart options
        const options = 
            {
                maintainAspectRatio: false,
                scales: {
                x: {
                    type: 'category',
                    title: 
                    {
                    display: true,
                    text: 'Day of expense',
                    },
                },
                y: 
                {
                    title: 
                    {
                    display: true,
                    text: 'Amount',
                    },
                    beginAtZero: true,
                },
                },
            };

        return (
            <div popover="auto" id="chart" className="chart-container"> {/* Render Line chart */}
                <Line data={data}  options={options} width={800} height={500} />
            </div>
        
        );
    };

export default ExpenseChart;
