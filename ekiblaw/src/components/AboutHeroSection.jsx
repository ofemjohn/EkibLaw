import React from 'react';
import { Box, Typography, Button, Grid } from "@mui/material";
import AboutNav from "./AboutNav";
import EKIB2 from "../assets/EKIB2.webp";

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
        padding: { xs: "20px", md: "45px 70px" },
        position: "relative",
        zIndex: 1,
        marginBottom: "-45px",
      }}
    >
      <Box>
        {/* Navbar */}
        <AboutNav />

        {/* Hero Content */}
        <Grid container spacing={12} alignItems="center" sx={{ marginTop: "0px" }}>
          {/* Left Text Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  color: "rgba(210, 210, 210, 1)",
                  fontFamily: 'Teachers', // Apply custom font
                }}
              >
                Get To Know
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "56px",
                  fontWeight: 600,
                  color: "rgba(210, 210, 210, 1)",
                  fontFamily: 'Teachers', // Apply custom font
                }}
              >
                Ekib Ekure
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontStyle: "italic",
                  fontWeight: 500,
                  lineHeight: "30px",
                  color: "rgba(210, 210, 210, 1)",
                  fontFamily: 'Teachers', // Apply custom font
                }}
              >
                Esq.
              </Typography>
              <Button
                variant="contained"
                onClick={handleConsultationClick}
                sx={{
                  backgroundColor: "#EFAE64",
                  padding: "16px 32px",
                  ":hover": {
                    backgroundColor: "rgba(239, 174, 100, 0.9)",
                  },
                  width: "245px",
                  height: "72px",
                  alignSelf: { xs: "center", md: "flex-start" },
                  fontFamily: 'Teachers', // Apply custom font to button text
                }}
              >
                Get A Consultation
              </Button>
            </Box>
          </Grid>

          {/* Right Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                height: "100%",
              }}
            >
              <Box
                component="img"
                src={EKIB2}
                alt="Ekib Ekure"
                loading="lazy"
                sx={{
                  width: { xs: '400px', sm: '500px', md: '600px' },
                  height: { xs: '400px', sm: '450px', md: '500px' },
                  borderRadius: '180px 0px 0px 0px', // Applied the specified top-right radius
                  objectFit: 'cover',
                  boxShadow: '0 0 1px 1px rgba(255, 255, 255, 0.8)',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutHeroSection;
