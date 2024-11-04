import React from 'react';
import { Box, Typography, Grid, CardMedia } from '@mui/material';

const MeetJaneSectionAbout = () => {
  return (
    <Grid container spacing={12} alignItems="stretch" sx={{ marginBottom: '50px' }}>
      {/* Text Section */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography
            sx={{
              color: 'rgba(79, 79, 79, 1)',
              lineHeight: { xs: '28px', md: '32px' },
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 400,
              textAlign: 'justify',
            }}
          >
            As a senior attorney, Jane has led numerous high-profile cases in both state and federal courts, and she is particularly skilled at resolving disputes through litigation or alternative dispute resolution methods such as mediation and arbitration. Her clients appreciate her hands-on approach, where she not only provides legal expertise but also takes the time to understand their individual needs, goals, and concerns. Jane’s ability to build lasting client relationships is a testament to her dedication, integrity, and personal touch in every case she handles.
          </Typography>
        </Box>
      </Grid>

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
    </Grid>
  );
};

export default MeetJaneSectionAbout;
