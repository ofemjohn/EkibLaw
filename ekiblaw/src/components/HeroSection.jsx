import { Box, Typography, Button, Grid } from '@mui/material';
import Navbar from './Navbar';
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink

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
                textAlign: { xs: 'center', md: 'left' }, // Center text on smaller screens
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '32px', md: '56px' },
                  fontWeight: 600,
                  color: 'rgba(210, 210, 210, 1)',
                }}
              >
                Your Trusted Legal Partners in Atlanta
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '16px', md: '20px' },
                  color: 'rgba(210, 210, 210, 1)',
                }}
              >
                Providing expert legal counsel in personal injury, family <br></br> law, and corporate disputes.
              </Typography>
              <Link smooth to="#contact" style={{ textDecoration: 'none' }}> {/* Link to Contact Section */}
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
                    alignSelf: { xs: 'center', md: 'flex-start' }, // Center button on smaller screens
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
                justifyContent: { xs: 'center', md: 'flex-end' }, // Center image on smaller screens
                height: '100%', // Ensure it stretches to match the text section
              }}
            >
              <Box
                component="img"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee9666bf002542dfba69ef240eb322c6fb153d4e27c5186f7c8604e03215cadb"
                alt="Hero Image"
                sx={{
                  width: '100%',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
