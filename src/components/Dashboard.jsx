import { Grid, Box, Typography, Button } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import StatCard from './StatCard';
import ExpensesChart from './ExpensesChart';

const Dashboard = () => {
  return (
    <Box sx={{ p: 3, width: '100%', overflow: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
          Dashboard Overview
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Stat Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<CurrencyRupeeIcon />}
            title="Total Expenses"
            value="₹3,19,000"
            subtitle={{ text: "+8.2% from last month", color: "#e6f7e9", textColor: "#4caf50" }}
            color="#2196f3"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<DescriptionIcon />}
            title="Total Bills"
            value="156"
            subtitle={{ text: "12 new this week", color: "#e6f7e9", textColor: "#4caf50" }}
            color="#4caf50"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<PeopleIcon />}
            title="Active Users"
            value="24"
            subtitle={{ text: "3 online now", color: "#e3f2fd", textColor: "#2196f3" }}
            color="#9c27b0"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<PendingActionsIcon />}
            title="Pending Approvals"
            value="8"
            subtitle={{ text: "5 urgent", color: "#ffebee", textColor: "#f44336" }}
            color="#ff9800"
            urgent={true}
          />
        </Grid>

        {/* Expenses Chart */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <Button 
              variant="outlined" 
              startIcon={<FileDownloadIcon />}
              size="small"
              sx={{ borderRadius: 2 }}
            >
              Download Report
            </Button>
          </Box>
          <ExpensesChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;