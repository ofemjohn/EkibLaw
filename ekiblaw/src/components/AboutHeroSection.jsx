import React from 'react';
import { Box, Typography, Button, Grid } from "@mui/material";
import AboutNav from "./AboutNav";

const AboutHeroSection = () => {
  const handleConsultationClick = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 10 },
        position: "relative",
        zIndex: 1,
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%), url(/path/to/your/background.jpg)', //Replace with your background image path or remove for a gradient only
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        animation: 'subtleBackground 10s ease-in-out infinite',
      }}
    >
      <AboutNav />

      <Grid container alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <Box sx={{ textAlign: "center", maxWidth: '600px', margin: '0 auto' }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '24px', md: '32px' },
                color: "rgba(255, 255, 255, 0.7)",
                fontFamily: 'Teachers',
                fontWeight: 500,
                mb: 2,
                "&:hover": {
                  textShadow: "0px 0px 10px rgba(255,255,255,0.3)",
                  cursor: 'default',
                }
              }}
            >
              Get To Know
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '48px', md: '72px' },
                fontWeight: 700,
                color: "rgba(255, 255, 255, 1)",
                fontFamily: 'Teachers',
                lineHeight: 1.1,
                mb: 4,
                letterSpacing: '-0.05em',
                "&:hover": {
                  textShadow: "0px 0px 10px rgba(255,255,255,0.3)",
                  cursor: 'default',
                }
              }}
            >
              Ekib Ekure
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontStyle: "italic",
                fontWeight: 500,
                lineHeight: 1.5,
                color: "rgba(255, 255, 255, 0.7)",
                fontFamily: 'Teachers',
                mb: 6,
                "&:hover": {
                  textShadow: "0px 0px 10px rgba(255,255,255,0.3)",
                  cursor: 'default',
                }
              }}
            >
              Esq.
            </Typography>
            <Button
              variant="contained"
              onClick={handleConsultationClick}
              sx={{
                backgroundColor: "#EFAE64",
                py: 2,
                px: 6,
                fontSize: '1.1rem',
                borderRadius: 20,
                "&:hover": {
                  backgroundColor: "rgba(239, 174, 100, 0.9)",
                  transform: "scale(1.02)",
                  boxShadow: '0px 6px 15px rgba(0,0,0,0.3)',
                },
                fontFamily: 'Teachers',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
              }}
            >
              Get A Consultation
            </Button>
          </Box>
        </Grid>
      </Grid>
      <style jsx>{`
        @keyframes subtleBackground {
          0% { filter: brightness(1) }
          50% { filter: brightness(1.05) }
          100% { filter: brightness(1) }
        }
      `}</style>
    </Box>
  );
};

export default AboutHeroSection;