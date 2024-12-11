import React, { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackbarComponent = ({ message, severity, open, onClose }) => {
  return (
    <Snackbar 
      open={open} 
      autoHideDuration={3000} 
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
