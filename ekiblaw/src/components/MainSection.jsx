import { Box } from '@mui/material';
import BlogPost from '../components/BlogPost';
import MeetJaneSection from '../components/MeetJaneSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
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
      <Box>
        <MeetJaneSection />
        <WhyChooseUsSection />
        <PracticeAreaSection />
        {/* New Section: Blog Post */}
        <Box sx={{ width: '100%', textAlign: { xs: 'center', md: 'left' }, marginTop: '100px' }}>
          <BlogPost />
        </Box>
      </Box>
    </Box>
  );
};

export default MainSection;