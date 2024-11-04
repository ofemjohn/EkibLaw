import { Box } from '@mui/material';
import BlogPost from '../components/BlogPost';
import MeetJaneSectionAbout from '../components/MeetJaneSectionAbout';
import MeetJaneSection from './MeetJaneSection';
import MeetJaneSectionAboutOne from './MeetJaneSectionAboutOne';
import KeyAchievements from './KeyAchievements';
import Affiliate from './Affiliate';

const MainSectionAbout = () => {
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
        <MeetJaneSectionAboutOne />
        <MeetJaneSectionAbout />
        <KeyAchievements />
        <Affiliate />

      </Box>
    </Box>
  );
};

export default MainSectionAbout;
