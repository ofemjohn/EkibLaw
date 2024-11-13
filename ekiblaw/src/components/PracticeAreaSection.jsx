import { Box, Typography, Divider, Grid } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const PracticeAreaSection = () => {
  return (
    <Box sx={{ width: '100%', textAlign: { xs: 'center', md: 'left' }, marginTop: '50px' }}>
      <Box sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'start' }, alignItems: 'center', gap: 2, fontSize: '40px' }}>
        <Divider orientation="vertical" sx={{ height: { xs: 40, md: 58 }, backgroundColor: '#447F6D', width: '5px' }} />
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Teachers',
            fontWeight: 700,
            color: 'rgba(61, 61, 61, 1)',
          }}
        >
          Our Practice Area
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {/* Business Law Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              borderRadius: '4px',
              backgroundColor: '#447F6D',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '32px 45px',
              height: '100%',
            }}
          >
            <BusinessCenterIcon sx={{ fontSize: 60, color: '#FFFFFF', marginBottom: '20px' }} />
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Teachers',
                fontWeight: 600,
                color: '#FFFFFF',
              }}
            >
              Business Law
            </Typography>
            <Typography
              sx={{
                marginTop: '22px',
                fontFamily: 'Teachers',
                color: '#4F4F4F',
                lineHeight: '30px',
                textAlign: 'center',
              }}
            >
              Expert legal counsel in business formation, registration, contracts, and litigation to help your business thrive.
            </Typography>
          </Box>
        </Grid>

        {/* Criminal Defense Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              borderRadius: '4px',
              backgroundColor: '#D8B482',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '32px 45px',
              height: '100%',
            }}
          >
            <GavelIcon sx={{ fontSize: 60, color: '#FFFFFF', marginBottom: '20px' }} />
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Teachers',
                fontWeight: 600,
                color: '#FFFFFF',
              }}
            >
              Criminal Defense
            </Typography>
            <Typography
              sx={{
                marginTop: '22px',
                fontFamily: 'Teachers',
                color: '#4F4F4F',
                lineHeight: '30px',
                textAlign: 'center',
              }}
            >
              Comprehensive defense for traffic offenses, misdemeanors, felonies, drug charges, assault, theft, and gun charges.
            </Typography>
          </Box>
        </Grid>

        {/* Personal Injury Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              borderRadius: '4px',
              backgroundColor: '#30B0C7',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '32px 45px',
              height: '100%',
            }}
          >
            <LocalHospitalIcon sx={{ fontSize: 60, color: '#FFFFFF', marginBottom: '20px' }} />
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Teachers',
                fontWeight: 600,
                color: '#FFFFFF',
              }}
            >
              Personal Injury
            </Typography>
            <Typography
              sx={{
                marginTop: '22px',
                fontFamily: 'Teachers',
                color: '#4F4F4F',
                lineHeight: '30px',
                textAlign: 'center',
              }}
            >
              Legal representation for car accidents, dog bites, slip and falls, ensuring your rights are protected and you receive fair compensation.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PracticeAreaSection;
