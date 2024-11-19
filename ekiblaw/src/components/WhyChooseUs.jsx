import { Box, Typography, Grid, Card, CardContent, Divider } from '@mui/material';
import businesslaw from '../assets/businesslaw.avif';
import criminaldefence from '../assets/criminaldefence.webp';
import personalinjury from '../assets/personalinjury.avif';

const WhyChooseUs = () => {
  return (
    <Box sx={{ width: '100%', textAlign: { xs: 'center', md: 'left' }, marginTop: '30px' }}>
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
          Why Choose Us
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {/* Deep Expertise Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <Box
              sx={{
                width: '100%',
                aspectRatio: '1.66',
                borderRadius: 1,
                minHeight: 220,
                backgroundImage: `url(${businesslaw})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Teachers',
                  color: 'rgba(61, 61, 61, 1)',
                  fontWeight: 600,
                }}
              >
                Deep Expertise
              </Typography>
              <Typography
                sx={{
                  marginTop: 2,
                  fontFamily: 'Teachers',
                  color: 'rgba(79, 79, 79, 1)',
                  fontSize: '20px',
                  lineHeight: '30px',
                }}
              >
                Ekib Ekure is an experienced trial attorney with a stellar trial record. She has successfully handled a wide range of cases from traffic violations to serious felonies, leveraging her deep expertise to fight for clients.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Personalized Service Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <Box
              sx={{
                width: '100%',
                aspectRatio: '1.66',
                borderRadius: 1,
                minHeight: 220,
                backgroundImage: `url(${criminaldefence})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Teachers',
                  color: 'rgba(61, 61, 61, 1)',
                  fontWeight: 600,
                }}
              >
                Personalized Service
              </Typography>
              <Typography
                sx={{
                  marginTop: 2,
                  fontFamily: 'Teachers',
                  color: 'rgba(79, 79, 79, 1)',
                  fontSize: '20px',
                  lineHeight: '30px',
                }}
              >
                We understand that each case is unique. Attorney Ekure’s personalized approach ensures tailored legal strategies, putting each client in the best possible position based on their specific case facts.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Integrity and Ethics Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <Box
              sx={{
                width: '100%',
                aspectRatio: '1.66',
                borderRadius: 1,
                minHeight: 220,
                backgroundImage: `url(${personalinjury})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Teachers',
                  color: 'rgba(61, 61, 61, 1)',
                  fontWeight: 600,
                }}
              >
                Integrity and Ethics
              </Typography>
              <Typography
                sx={{
                  marginTop: 2,
                  fontFamily: 'Teachers',
                  color: 'rgba(79, 79, 79, 1)',
                  fontSize: '20px',
                  lineHeight: '30px',
                }}
              >
                Ekib Ekure Law prides itself on its commitment to transparency, honesty, and the highest ethical standards. From personal injury cases to criminal defense, we ensure our clients feel informed and confident in the process.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
