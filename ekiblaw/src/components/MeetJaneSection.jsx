import React from 'react';
import { Box, Typography, Button, Divider, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EKIB8 from '../assets/EKIB8.webp'; // Using the correct .webp image

const MeetJaneSection = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/about');
    window.setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  };

  return (
    <Grid container spacing={6} alignItems="stretch" sx={{ marginBottom: '50px', position: 'relative', overflow: 'hidden' }}>
      {/* Image Section */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', md: '500px' },
            height: { xs: '350px', md: '600px' },
            marginLeft: { xs: 0, md: '41px' },
            backgroundColor: '#D8B482',
            borderRadius: '4px 0px 0px 0px',
            overflow: 'hidden',
            backgroundImage: `url(${EKIB8})`,  // Using the imported image as a background
            backgroundSize: 'cover',  // Ensures the image covers the entire container
            backgroundPosition: 'center top', // Ensures the image stays centered but starts at the top (for mobile optimization)
            transition: 'background-position 0.5s ease-in-out', // Smooth transition for background image adjustments
          }}
        />
      </Grid>

      {/* Text Section */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: { xs: '24px', md: '40px' } }}>
            <Divider orientation="vertical" sx={{ height: { xs: 30, md: 58 }, backgroundColor: '#447F6D', width: '5px' }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'rgba(61, 61, 61, 1)', fontFamily: 'Teachers' }}>
            About the Firm
            </Typography>
          </Box>
          <Typography
            sx={{
              color: 'rgba(79, 79, 79, 1)',
              lineHeight: { xs: '24px', md: '32px' },
              fontSize: { xs: '14px', md: '20px' },
              fontWeight: 400,
              textAlign: 'justify',
              fontFamily: 'Teachers',
            }}
          >
Ekib Ekure Law was established in 2024 by Attorney Ekib Ekure to serve the people of Georgia. The firm provides services in a variety of legal areas including Business Law, Criminal Defense, and Personal Injury.
         
<br /><br />
starting a business can be an exciting and intimidating time. Attorney Ekure will be with you from the formation to the maintenance of your business.
<br /><br />
hearing the words “you are under arrest” can lead to a flood of emotions. It is paramount that you have an experienced attorney on your side. Attorney Ekure has experience representing clients charged in various criminal cases from traffic offenses to felony cases.
<br /><br />

          </Typography>
        </Box>
        <Button
          onClick={handleReadMoreClick}
          variant="contained"
          sx={{
            backgroundColor: 'rgba(239, 174, 100, 1)',
            color: 'black',
            fontWeight: 500,
            padding: '10px 32px',
            width: 'fit-content',
            alignSelf: { xs: 'flex-start', md: 'flex-start' },
            fontFamily: 'Teachers',
          }}
        >
          Read more
        </Button>
      </Grid>
    </Grid>
  );
};

export default MeetJaneSection;
