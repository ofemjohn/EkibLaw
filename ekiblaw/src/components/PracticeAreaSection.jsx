import { Box, Typography, Divider, Grid } from '@mui/material';

const PracticeAreaSection = () => {
  return (
    <Box sx={{ width: '100%', textAlign: { xs: 'center', md: 'left' }, marginTop: '50px' }}>
      <Box sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'start' }, alignItems: 'center', gap: 2, fontSize: '40px' }}>
        <Divider orientation="vertical" sx={{ height: { xs: 40, md: 58 }, backgroundColor: '#447F6D', width: '5px' }} />
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'rgba(61, 61, 61, 1)' }}>
          Our Practice Area
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
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
            <Box
              sx={{
                borderRadius: '100px',
                display: 'flex',
                height: '80px',
                width: '80px',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/icon1.png"
                alt="Business Law"
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
              />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Business Law
            </Typography>
            <Typography sx={{ marginTop: '22px', color: '#4F4F4F', lineHeight: '30px', textAlign: 'center' }}>
              Expert legal counsel in business formations, contracts, and litigation for companies of all sizes.
            </Typography>
          </Box>
        </Grid>

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
            <Box
              sx={{
                borderRadius: '100px',
                display: 'flex',
                height: '80px',
                width: '80px',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/icon2.png"
                alt="Family Law"
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
              />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Family Law
            </Typography>
            <Typography sx={{ marginTop: '22px', color: '#4F4F4F', lineHeight: '30px', textAlign: 'center' }}>
              Compassionate legal services for divorce, custody disputes, and adoption cases.
            </Typography>
          </Box>
        </Grid>

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
            <Box
              sx={{
                borderRadius: '100px',
                display: 'flex',
                height: '80px',
                width: '80px',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/icon3.png"
                alt="Estate Planning"
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
              />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Estate Planning
            </Typography>
            <Typography sx={{ marginTop: '22px', color: '#4F4F4F', lineHeight: '30px', textAlign: 'center' }}>
              Wills, trusts, and estate planning solutions tailored to protect your legacy.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PracticeAreaSection;
