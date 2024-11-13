import { Box, Typography, Button, Divider, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EKIB9 from '../assets/EKIB9.jpg';

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
            // boxShadow: '0 0 30px 10px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src={EKIB9}
            alt="Ekib Ekure, Esq"
            loading="lazy"
            sx={{
              position: 'absolute',
              top: { xs: '-10px', md: '-25px' }, // Responsive top offset
              left: { xs: '10px', md: '30px' }, // Responsive left offset
              width: { xs: '90%', md: '100%' },
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
              // boxShadow: '0 0 30px 10px rgba(255, 255, 255, 0.8)',
            }}
          />
        </Box>
      </Grid>

      {/* Text Section */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: { xs: '24px', md: '40px' } }}>
            <Divider orientation="vertical" sx={{ height: { xs: 30, md: 58 }, backgroundColor: '#447F6D', width: '5px' }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'rgba(61, 61, 61, 1)', fontFamily: 'Teachers' }}>
              Meet Ekib Ekure, Esq
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
            Ekib Ekure is the founder and Managing Attorney at Ekib Ekure Law LLC. She is an experienced trial attorney who has always fought for the rights of the people. Her fight for the people began at a young age. As a child, she was regularly called upon by her friends to defend them when parents accused them of wrongdoing. The saying was “if we talk, we will get in trouble but if Ekib talks for us, we won’t get into trouble.” What she did not know was that this little exercise in trouble avoidance was preparing her for a career as a defense attorney.
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
