import { Box, Typography, Divider, Grid, Card, CardMedia, CardContent } from '@mui/material';
import whychooseusone from '../assets/whychooseusone.webp';
import whychooseustwo from '../assets/whychooseustwo.webp';
import whychooseusthree from '../assets/whychooseusthree.webp';


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
        {/* Expertise Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <CardMedia
              component="img"
              image={whychooseusone}
              alt="Deep Expertise"
              sx={{
                width: '100%',
                aspectRatio: '1.66',
                borderRadius: 1,
                minHeight: 220,
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
                Our firm specializes in handling complex personal injury cases. Whether it's a motor vehicle accident or a slip and fall, we leverage our deep expertise to secure the compensation you deserve.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Personalized Service Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <CardMedia
              component="img"
              image={whychooseustwo}
              alt="Personalized Service"
              sx={{
                width: '100%',
                aspectRatio: '1.66',
                borderRadius: 1,
                minHeight: 220,
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
                We understand that every injury case is unique. Our personalized approach ensures tailored legal strategies that meet the specific needs of each client, fighting for your rights every step of the way.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Integrity and Ethics Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <CardMedia
              component="img"
              image={whychooseusthree}
              alt="Integrity and Ethics"
              sx={{
                width: '100%',
                aspectRatio: '1.66',
                borderRadius: 1,
                minHeight: 220,
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
                At Ekib Ekure Law, we uphold the highest standards of integrity and ethics. We handle personal injury cases with transparency and honesty, ensuring our clients are well-informed and confident in their legal journey.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
