import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import Navbar from './Navbar';
import { HashLink as Link } from "react-router-hash-link";
import EKIB3 from '../assets/EKIB3.webp';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1E1E1E',
        padding: { xs: '20px', md: '45px 70px' },
        position: 'relative',
        zIndex: 1,
        marginBottom: '-45px',
      }}
    >
      <Navbar />

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '32px', md: '56px' },
                fontWeight: 600,
                color: 'rgba(210, 210, 210, 1)',
                fontFamily: 'Teachers',
                transition: 'text-shadow 0.3s ease', // Add transition for smooth effect
                "&:hover": {
                  textShadow: "2px 2px 5px rgba(255,255,255,0.5)", // Add text shadow on hover
                  cursor: 'default', // Prevents the default cursor, which can be jarring
                },
              }}
            >
              Your Trusted Legal Counsel in Atlanta
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '16px', md: '20px' },
                color: 'rgba(210, 210, 210, 1)',
                fontFamily: 'Teachers',
                transition: 'text-shadow 0.3s ease', // Add transition for smooth effect
                "&:hover": {
                  textShadow: "2px 2px 5px rgba(255,255,255,0.5)", // Add text shadow on hover
                  cursor: 'default',
                },
              }}
            >
              Providing expert legal counsel in personal injury, Business <br /> law, and Criminal Defence.
            </Typography>
            <Link smooth to="#contact" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#EFAE64',
                  padding: '16px 32px',
                  ':hover': {
                    backgroundColor: 'rgba(239, 174, 100, 0.9)',
                  },
                  width: { xs: '155.5px', md: '245px' },
                  height: { xs: '45px', md: '72px' },  
                  alignSelf: { xs: 'center', md: 'flex-start' },
                  fontFamily: 'Teachers',
                }}
              >
                Get A Consultation
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              position: 'relative',
              width: '100%',
              height: { xs: '300px', sm: '400px', md: '600px' },
              maxWidth: '100%',
              backgroundImage: `url(${EKIB3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '360px 360px 0px 0px',
              boxShadow: '0 0 15px 10px rgba(0, 0, 0, 0.2)',
              marginTop: '12px',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;