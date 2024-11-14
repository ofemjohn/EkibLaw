import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import Navbar from './Navbar';
import { HashLink as Link } from "react-router-hash-link";
import EKIB1 from '../assets/EKIB1.webp'; // Using the correct .webp image

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
      <Box>
        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <Grid container spacing={12} alignItems="center" sx={{ marginTop: '0px' }}>
          {/* Left Text Section */}
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
                }}
              >
                Your Trusted Legal Partners in Atlanta
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '16px', md: '20px' },
                  color: 'rgba(210, 210, 210, 1)',
                  fontFamily: 'Teachers',
                }}
              >
                Providing expert legal counsel in personal injury, family <br /> law, and corporate disputes.
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
                    width: '245px',
                    height: '72px',
                    alignSelf: { xs: 'center', md: 'flex-start' },
                    fontFamily: 'Teachers',
                  }}
                >
                  Get A Consultation
                </Button>
              </Link>
            </Box>
          </Grid>

          {/* Right Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                height: '100%',
                backgroundImage: `url(${EKIB1})`,  // Using the imported image as a URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '570px',
                height: '570px',
                borderRadius: '360px 360px 0px 0px',
                boxShadow: '0 0 15px 10px rgba(0, 0, 0, 0.2)',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
