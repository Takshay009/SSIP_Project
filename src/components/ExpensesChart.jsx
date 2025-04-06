import { Line } from 'react-chartjs-2';
import { Box, Paper, Typography, FormControl, Select, MenuItem } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ExpensesChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Expenses',
        data: [40000, 45000, 42000, 38000, 46000, 45000],
        borderColor: '#4e7df7',
        backgroundColor: 'rgba(78, 125, 247, 0.1)',
        pointBackgroundColor: '#4e7df7',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 6,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(26, 32, 53, 0.8)',
        padding: 10,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `₹${context.raw.toLocaleString()}`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          callback: function(value) {
            return `₹${value/1000}K`;
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" component="div">
          Monthly Expenses Trend
        </Typography>
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <Select
            value="last6months"
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            size="small"
          >
            <MenuItem value="last6months">Last 6 months</MenuItem>
            <MenuItem value="last12months">Last 12 months</MenuItem>
            <MenuItem value="thisyear">This Year</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ height: 300 }}>
        <Line data={data} options={options} />
      </Box>
    </Paper>
  );
};

export default ExpensesChart;