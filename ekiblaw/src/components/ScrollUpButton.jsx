import React from 'react';
import { Fab } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        console.log('Scroll to top button clicked');
        document.documentElement.scrollTop = 0; // For most browsers
        document.body.scrollTop = 0; // For Safari
      };
      

  return (
    <Fab
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: '#447F6D',
        color: 'white',
        zIndex: 1000,
        '&:hover': {
          backgroundColor: '#356956',
        },
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
      }}
    >
      <KeyboardDoubleArrowUpIcon sx={{ fontSize: '1.5rem' }} />
    </Fab>
  );
};

export default ScrollToTopButton;
