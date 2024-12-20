import { Box } from '@mui/material';
import BlogPost from '../components/BlogPost';
import MeetJaneSection from '../components/MeetJaneSection';
import WhyChooseUs from '../components/WhyChooseUs';
import PracticeAreaSection from '../components/PracticeAreaSection';

const MainSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F8F8F8',
        padding: { xs: '20px', md: '45px 70px' },
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box id="about-us">
        <MeetJaneSection />
      </Box>
      <WhyChooseUs />
      <Box id="services">
        <PracticeAreaSection />
      </Box>
      <Box id="blog" sx={{ width: '100%', textAlign: { xs: 'center', md: 'left' }, marginTop: '100px' }}>
        <BlogPost />
      </Box>
    </Box>
  );
};

export default MainSection;
