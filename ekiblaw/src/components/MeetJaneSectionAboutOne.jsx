import React from 'react';
import { Box, Typography, Divider, Grid, CardMedia } from '@mui/material';

const MeetJaneSectionAboutOne = () => {
  return (
    <Grid container spacing={12} alignItems="stretch" sx={{ marginBottom: '50px' }}>
      {/* Image Section */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: '100%',
            height: { xs: 'auto', md: '448px' },
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component="img"
            loading="lazy"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/e996f34e13ed14088c4f4ac40589a8ad45d34c30ae6f9fe70c035f1db2aef9de"
            alt="Jane Doe, Esq"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
            }}
          />
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
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'rgba(61, 61, 61, 1)' }}>
              Meet Jane Doe, Esq
            </Typography>
          </Box>
          <Typography
            sx={{
              color: 'rgba(79, 79, 79, 1)',
              lineHeight: { xs: '28px', md: '32px' },
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 400,
              textAlign: 'justify',
            }}
          >
            Jane Doe, Esq. is a highly experienced attorney with over 12 years in both litigation and transactional law, representing individuals, businesses, and corporations. Known for her dedication to excellence, Jane provides practical, results-driven solutions in areas such as civil litigation, business law, estate planning, employment law, and real estate. She is skilled in both litigation and alternative dispute resolution, like mediation, delivering positive outcomes.
          </Typography>
        </Box>
        {/* Read more button removed */}
      </Grid>
    </Grid>
  );
};

export default MeetJaneSectionAboutOne;
