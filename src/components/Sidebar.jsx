import { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DescriptionIcon from '@mui/icons-material/Description';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = ({ selectedIndex, onMenuSelect }) => {
  const handleListItemClick = (index) => {
    onMenuSelect(index);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Head-wise Expense', icon: <ReceiptIcon /> },
    { text: 'Bill Entry', icon: <DescriptionIcon /> },
    { text: 'Monthly Patrak', icon: <AssessmentIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <Box
      sx={{
        width: 240,
        height: '100%',
        backgroundColor: '#1a2035',
        color: 'white',
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PM Poshan System
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
      <List component="nav" aria-label="main mailbox folders" sx={{ p: 1 }}>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
              sx={{
                borderRadius: '8px',
                mb: 0.5,
                '&.Mui-selected': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
                '&.Mui-selected:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)',
                },
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;