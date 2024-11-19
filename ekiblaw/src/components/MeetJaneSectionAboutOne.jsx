import React from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';
import EKIB10 from '../assets/EKIB10.webp'; // Using the background image URL

const MeetJaneSectionAboutOne = () => {
  return (
    <Grid container spacing={12} alignItems="stretch" sx={{ marginBottom: '50px' }}>
      {/* Image Section */}
      <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 0 } }}> {/* Change order on smaller screens */}
        <Box
          sx={{
            backgroundColor: '#333333',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            padding: 2,
            position: 'relative',
            height: { xs: '600px', sm: '700px', md: '800px' },  // Set height for different screen sizes
            overflow: 'hidden',
            backgroundImage: `url(${EKIB10})`,  // Using the background image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',  // Ensure the image is centered
          }}
        >
          {/* Empty Box for the background image */}
        </Box>
      </Grid>

      {/* Text Section */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              fontSize: { xs: '30px', md: '40px' },
            }}
          >
            <Divider
              orientation="vertical"
              sx={{ height: { xs: 40, md: 58 }, backgroundColor: '#447F6D', width: '5px' }}
            />
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Teachers',
                fontWeight: 700,
                color: 'rgba(61, 61, 61, 1)',
              }}
            >
              Meet Our Attorney
            </Typography>
          </Box>

          {/* Breaking the text into paragraphs as per the client's request */}
          <Typography
            sx={{
              fontFamily: 'Teachers',
              color: 'rgba(79, 79, 79, 1)',
              lineHeight: { xs: '28px', md: '32px' },
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 400,
              textAlign: 'justify',
            }}
          >
            Ekib Ekure is the founder and Managing Attorney at Ekib Ekure Law LLC. She is an experienced trial attorney who has always fought for the rights of the people.
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Teachers',
              color: 'rgba(79, 79, 79, 1)',
              lineHeight: { xs: '28px', md: '32px' },
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 400,
              textAlign: 'justify',
            }}
          >
            Her fight for the people began at a young age. As a child, she was regularly called upon by her friends to “defend them” when parents accused them of wrongdoing. The saying was “if we talk, we will get in trouble but if Ekib talks for us, we won’t get into trouble.” What she did not know was that this little exercise in trouble avoidance was preparing her for a career as a defense attorney. She’s not afraid to fight for you.
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Teachers',
              color: 'rgba(79, 79, 79, 1)',
              lineHeight: { xs: '28px', md: '32px' },
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 400,
              textAlign: 'justify',
            }}
          >
            Ekib started her career as a Public Defender where she represented hundreds of indigent clients in various cases from traffic violations to serious felonies. Her zeal for advocacy led to a stellar trial record and effective plea deals. Her approach to each case is practical and realistic. She understands that each case is different, so her goal is to always put the client in the best possible position based on the facts of their case.
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Teachers',
              color: 'rgba(79, 79, 79, 1)',
              lineHeight: { xs: '28px', md: '32px' },
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 400,
              textAlign: 'justify',
            }}
          >
            Ekib was born in Nigeria but grew up in Columbia, South Carolina. She spent her formative years in South Carolina School of Law where she graduated from the University of South Carolina with a degree in African American Studies with a minor in Political Science. She completed her legal education at North Carolina Central University where she graduated Cum Laude with a host of other honors and awards. She further continued her legal education by seeking a second law degree from the Nigeria Law School where she also graduated with high honors. In her spare time, Ekib enjoys volunteering with her church, finding new restaurants in Atlanta, and traveling the world.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MeetJaneSectionAboutOne;
