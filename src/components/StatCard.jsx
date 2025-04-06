import { Box, Typography, Paper } from '@mui/material';

const StatCard = ({ icon, title, value, subtitle, color, urgent }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: urgent ? '1px solid #ff9800' : 'none',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box
          sx={{
            backgroundColor: color,
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          {icon}
        </Box>
        {subtitle && (
          <Box
            sx={{
              backgroundColor: subtitle.color,
              borderRadius: 1,
              px: 1,
              py: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              color: subtitle.textColor || '#1a2035',
            }}
          >
            {subtitle.text}
          </Box>
        )}
      </Box>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mt: 0.5 }}>
        {value}
      </Typography>
    </Paper>
  );
};

export default StatCard;