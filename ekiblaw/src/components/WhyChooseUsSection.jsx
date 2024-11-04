import { Box, Typography, Divider, Grid, Card, CardMedia, CardContent } from '@mui/material';

const WhyChooseUsSection = () => {
  return (
    <Box sx={{ width: '100%', textAlign: { xs: 'center', md: 'left' }, marginTop: '30px' }}>
      <Box sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'start' }, alignItems: 'center', gap: 2, fontSize: '40px' }}>
        <Divider orientation="vertical" sx={{ height: { xs: 40, md: 58 }, backgroundColor: '#447F6D', width: '5px' }} />
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'rgba(61, 61, 61, 1)' }}>
          Why Choose Us
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {/* Expertise Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <CardMedia
              component="img"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/f1a69b7c53b0170d8a9df28f417d57eb95893a6018b6b237dcf5b65edf6ca559"
              alt="Deep Expertise"
              sx={{
                width: '100%',
                aspectRatio: '1.66',
                borderRadius: 1,
                minHeight: 220,
              }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ color: 'rgba(61, 61, 61, 1)', fontWeight: 600 }}>
                Deep Expertise
              </Typography>
              <Typography sx={{ marginTop: 2, color: 'rgba(79, 79, 79, 1)', fontSize: '20px', lineHeight: '30px' }}>
                Our team comprises seasoned legal professionals with expertise in various fields, ready to provide profound legal insights for every case.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Personalized Service Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <CardMedia
              component="img"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/0686f05e190cf75496b312080e927cbf04ef46464a2e8c0bbaa7ca775a325216"
              alt="Personalized Service"
              sx={{
                width: '100%',
                aspectRatio: '1.66',
                borderRadius: 1,
                minHeight: 220,
              }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ color: 'rgba(61, 61, 61, 1)', fontWeight: 600 }}>
                Personalized Service
              </Typography>
              <Typography sx={{ marginTop: 2, color: 'rgba(79, 79, 79, 1)', fontSize: '20px', lineHeight: '30px' }}>
                We understand that each client has unique needs. We offer personal service and solutions customized to your specific requirements.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Integrity and Ethics Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <CardMedia
              component="img"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/2cd202b7a97f2c7d60280dbf0578b4634ea5c3bebf64b23c4dd90c757f9d9cbe"
              alt="Integrity and Ethics"
              sx={{
                width: '100%',
                aspectRatio: '1.66',
                borderRadius: 1,
                minHeight: 220,
              }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ color: 'rgba(61, 61, 61, 1)', fontWeight: 600 }}>
                Integrity and Ethics
              </Typography>
              <Typography sx={{ marginTop: 2, color: 'rgba(79, 79, 79, 1)', fontSize: '20px', lineHeight: '30px' }}>
                We uphold high standards of integrity and ethics, ensuring that every step taken by our firm aligns with legal norms and regulations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUsSection;
