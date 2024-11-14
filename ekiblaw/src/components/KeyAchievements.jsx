import React from "react";
import { Box, Typography, Divider, Grid, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookIcon from '@mui/icons-material/Book';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EKIB3 from '../assets/EKIB3.webp'; // Using the background image URL

const achievements = [
  {
    title: "Public Defender Excellence:",
    description: "Successfully represented hundreds of clients in various criminal cases, achieving favorable outcomes in both misdemeanor and felony cases.",
    icon: <GavelIcon sx={{ color: '#8B4513' }} />,
  },
  {
    title: "Landmark Legal Cases:",
    description: "Achieved significant victories in high-profile cases, including effective plea deals and a stellar trial record.",
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
        <Grid item>
          <Divider
            orientation="vertical"
            sx={{ height: { xs: 40, md: 58 }, backgroundColor: '#447F6D', width: '5px' }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#3D3D3D',
              marginLeft: 2,
              fontFamily: 'Teachers',
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
              backgroundColor: '#ECDAC1',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              padding: 3,
              position: 'relative',
              width: '387px',
              height: '499px',
              background: `url(${EKIB3}) center center / cover no-repeat, #ECDAC1`, // Layering the background image with the initial background color
            }}
          >
            {/* Empty Box for the background image */}
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
