import React from "react";
import { Box, Typography, Divider, Grid, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookIcon from '@mui/icons-material/Book';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

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
    description: "Graduated with honors from top institutions, including the North Carolina Central University School of Law and Nigeria Law School.",
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
      <Grid container alignItems="center" sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Divider orientation="horizontal" sx={{ height: 5, backgroundColor: '#447F6D', width: '100%', mb: 2 }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#3D3D3D', fontFamily: 'Teachers', fontSize: { xs: '24px', sm: '28px', md: '36px' }, textAlign: 'center' }}>
            Key Achievements
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {achievements.map((achievement, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ListItem>
              <ListItemIcon>{achievement.icon}</ListItemIcon>
              <ListItemText
                primary={<Typography variant="h6" sx={{ fontFamily: 'Teachers', fontWeight: 600, color: '#3D3D3D' }}>{achievement.title}</Typography>}
                secondary={<Typography sx={{ fontFamily: 'Teachers', color: '#4F4F4F', fontSize: '16px', lineHeight: '24px' }}>{achievement.description}</Typography>}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KeyAchievements;