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
                }}
              >
                Jane Doe
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontStyle: "italic",
                  fontWeight: 500,
                  lineHeight: "30px",
                  color: "rgba(210, 210, 210, 1)",
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb19efdff6e2c3d1cfed864faa6f3ca0ac5479a72a517d333ae8dcfbdbb78b89?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e"
                alt="Profile picture"
                loading="lazy"
                sx={{
                  width: '100%',
                  borderRadius: '180px 0 0 0',
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
