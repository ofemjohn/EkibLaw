import React from "react";
import { Box, Typography, Divider, Grid, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookIcon from '@mui/icons-material/Book';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EKIB5 from '../assets/EKIB5.webp'; // Using the background image URL

const achievements = [
  {
    title: "Public Defender Excellence:",
    description: "Successfully represented hundreds of clients in various criminal cases, achieving favorable outcomes in both misdemeanor and felony cases.",
    icon: <GavelIcon sx={{ color: '#8B4513' }} />,
  },
  {
    title: "Significant Legal Victories:",
    description: "Achieved strong results in various cases, including effective plea deals and a proven trial record.",
    icon: <CheckCircleIcon sx={{ color: '#32CD32' }} />,
  },  
  {
    title: "Pro Bono Leadership:",
    description: "Led several pro bono initiatives, providing legal aid to underprivileged communities and mentoring young attorneys.",
    icon: <FavoriteIcon sx={{ color: '#FF4500' }} />,
  },
  {
    title: "Educational Distinction:",
    description: "Graduated with honors from top institutions, including the University of South Carolina and Nigeria Law School.",
    icon: <BookIcon sx={{ color: '#4682B4' }} />,
  },
  {
    title: "Community Engagement:",
    description: "Actively volunteers with her church and supports various local community service events.",
    icon: <VolunteerActivismIcon sx={{ color: '#E91E63' }} />,
  },
  {
    title: "Client-Centered Approach:",
    description: "Known for providing practical, client-focused legal strategies, resulting in high client satisfaction.",
    icon: <ThumbUpIcon sx={{ color: '#FFD700' }} />,
  },
];

const KeyAchievements = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container alignItems="center" sx={{ marginBottom: 2 }}>
        <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', marginBottom: { xs: 1, md: 2 } }}>
          <Divider
            orientation="vertical"
            sx={{
              height: { xs: 30, md: 58 },
              backgroundColor: '#447F6D',
              width: '5px',
              marginRight: { xs: 2, md: 4 }, // Adjust margin for smaller screens
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#3D3D3D',
              fontFamily: 'Teachers',
              fontSize: { xs: '24px', sm: '28px', md: '36px' }, // Adjust text size for smaller screens
            }}
          >
            Key Achievements
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={12}>
        {/* Profile Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'relative',
              backgroundImage: `url(${EKIB5})`,  // Using the background image URL
              backgroundSize: 'cover',
              backgroundPosition: 'center',  // Ensure the background image is centered
              backgroundRepeat: 'no-repeat', // Prevent repeating of background image
              height: { xs: '400px', sm: '500px', md: '600px' },  // Set height for different screen sizes
            }}
          >
            {/* The image is now set as the background */}
          </Box>
        </Grid>

        {/* Achievements List Section */}
        <Grid item xs={12} md={6}>
          <List>
            {achievements.map((achievement, index) => (
              <ListItem key={index}>
                <ListItemIcon>{achievement.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: 'Teachers', fontWeight: 600, color: '#3D3D3D' }}
                    >
                      {achievement.title}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{
                        fontFamily: 'Teachers',
                        color: '#4F4F4F',
                        fontSize: '16px',
                        lineHeight: '24px',
                      }}
                    >
                      {achievement.description}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default KeyAchievements;
