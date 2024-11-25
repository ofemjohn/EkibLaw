import React from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';
import EKIB2 from '../assets/EKIB2.webp';

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
            backgroundImage: `url(${EKIB2})`,  // Using the background image URL
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
              About the Firm
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
                       Ekib Ekure Law was established in 2024 by Attorney Ekib Ekure to serve the people of Georgia. The firm provides services in a variety of legal areas including Business Law, Criminal Defense, and Personal Injury.


<br /><br />


<strong>Business</strong> – starting a business can be an exciting and intimidating time. Attorney Ekure will be with you from the formation to the maintenance of your business.


<br /><br />


<strong>Criminal Defense</strong> – hearing the words “you are under arrest” can lead to a flood of emotions. It is paramount that you have an experienced attorney on your side. Attorney Ekure has experience representing clients charged in various criminal cases from traffic offenses to felony cases.

<br /><br />


Traffic cases are tickets for moving or motor violations. These cases are generally handled in municipal, traffic, or state court.


<br /><br />


Misdemeanor cases are offenses punishable by 12 months or less in the county jail. These offenses are generally handled in state court. They include but are not limited to DUIs, Family Violence Battery, Simple Assault, Possession of Marijuana less than an ounce, etc.


<br /><br />


Felony cases are the more serious offenses in our criminal justice system. These offenses are punishable by more than a year in custody, a life sentence, or death in certain cases. Felony cases take a special set of skills to maneuver. Call us today to discuss your rights.


<br /><br />


<strong>Personal Injury</strong> – if you have been injured by the negligence of others you have a limited time to exercise rights provided by law. Motor vehicle accidents, slip and falls can lead to serious injuries that may lead to lifelong consequences. Call Ekib Ekure Law to fight for your rights.
         </Typography>

        </Box>
      </Grid>
    </Grid>
  );
};

export default MeetJaneSectionAboutOne;
