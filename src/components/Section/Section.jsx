
import React from 'react';
import { Paper, Typography } from '@mui/material';

export const Section = ({ title, children }) => {
  return (
    <Paper component="div" sx={{ p: 2, my: 2 }}>
      {title && <Typography variant="h5">{title}</Typography>}
      {children}
    </Paper>
  );
};


