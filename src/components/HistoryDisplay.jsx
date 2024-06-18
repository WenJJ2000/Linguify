import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

const heights = [19, 90]; // Define two values for heights

export default function HistoryDisplay({ language, text }) {
  return (
    <Box sx={{ width: 400 }}>
      {/* Use Paper components directly instead of Masonry */}
      <Paper sx={{ height: heights[0], padding: 2, backgroundColor:'#edf3fa', borderRadius:50 }}>{language}</Paper>
      <Divider orientation="horizontal" variant="middle" flexItem width="1px" sx={{margin:'8'}}/>
      <Paper sx={{ height: heights[1], padding: 2, backgroundColor:'#edf3fa' }}>{text}</Paper>
    </Box>
  );
}