import { useState } from 'react';
import { Box, Paper, Typography, Select, MenuItem, Button, Grid, List, ListItem, ListItemText } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const HeadwiseExpense = () => {
  const [year, setYear] = useState('2024');
  const [quarter, setQuarter] = useState('Q1');

  const expenseData = {
    'Food Grains': { amount: 250000, percentage: 35 },
    'Transportation': { amount: 150000, percentage: 21 },
    'Kitchen Equipment': { amount: 100000, percentage: 14 },
    'Staff Salary': { amount: 180000, percentage: 25 },
    'Miscellaneous': { amount: 35000, percentage: 5 }
  };

  const totalExpense = Object.values(expenseData).reduce((sum, item) => sum + item.amount, 0);

  const chartColors = [
    '#4e7df7',  // Food Grains
    '#00c9a7',  // Transportation
    '#ffc107',  // Kitchen Equipment
    '#ff6b6b',  // Staff Salary
    '#8e44ad'   // Miscellaneous
  ];

  const data = {
    labels: Object.keys(expenseData),
    datasets: [{
      data: Object.values(expenseData).map(item => item.percentage),
      backgroundColor: chartColors,
      borderWidth: 0
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 800,
      easing: 'easeOutQuart'
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(26, 32, 53, 0.9)',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 13
        },
        displayColors: true,
        boxPadding: 5,
        callbacks: {
          label: (context) => {
            const value = expenseData[context.label].amount;
            return [
              `Amount: ₹${value.toLocaleString()}`,
              `Percentage: ${context.raw}%`
            ];
          }
        }
      }
    }
  };

  return (
    <Box sx={{ p: 3, width: '100%', overflow: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
          Head-wise Expense Analysis
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            size="small"
            sx={{ minWidth: 100 }}
          >
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
          </Select>
          <Select
            value={quarter}
            onChange={(e) => setQuarter(e.target.value)}
            size="small"
            sx={{ minWidth: 120 }}
          >
            <MenuItem value="Q1">Q1 (Apr-Jun)</MenuItem>
            <MenuItem value="Q2">Q2 (Jul-Sep)</MenuItem>
            <MenuItem value="Q3">Q3 (Oct-Dec)</MenuItem>
            <MenuItem value="Q4">Q4 (Jan-Mar)</MenuItem>
          </Select>
          <Button
            variant="contained"
            startIcon={<FileDownloadIcon />}
            size="small"
            sx={{ bgcolor: '#4caf50', '&:hover': { bgcolor: '#388e3c' } }}
          >
            Export Report
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                borderRadius: 2, 
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Expense Distribution
            </Typography>
            <Box sx={{ height: 300, position: 'relative' }}>
              <Pie data={data} options={options} />
            </Box>
            <Box 
              sx={{ 
                mt: 3, 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2,
                justifyContent: 'center'
              }}
            >
              {Object.entries(expenseData).map(([category, data], index) => (
                <Box 
                  key={category} 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    p: 1,
                    borderRadius: 1,
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: chartColors[index]
                    }}
                  />
                  <Typography variant="body2">{category}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                borderRadius: 2,
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Detailed Breakdown
            </Typography>
            <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary' }}>
              Total: ₹{totalExpense.toLocaleString()}
            </Typography>
            <List>
              {Object.entries(expenseData).map(([category, data]) => (
                <ListItem
                  key={category}
                  sx={{
                    px: 2,
                    py: 1.5,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.04)',
                      transform: 'translateX(4px)'
                    },
                    '&:last-child': { borderBottom: 'none' }
                  }}
                >
                  <ListItemText
                    primary={category}
                    secondary={`${data.percentage}% of total`}
                  />
                  <Typography>₹{data.amount.toLocaleString()}</Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeadwiseExpense;