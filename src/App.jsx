import { Box } from '@mui/material';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import HeadwiseExpense from './components/HeadwiseExpense';
import './App.css'

function App() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
      <Sidebar selectedIndex={selectedMenu} onMenuSelect={setSelectedMenu} />
      {selectedMenu === 0 && <Dashboard />}
      {selectedMenu === 1 && <HeadwiseExpense />}
    </Box>
  );
}

export default App;
