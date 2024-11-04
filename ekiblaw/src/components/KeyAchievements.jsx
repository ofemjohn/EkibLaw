import React from "react";
import { Box, Typography, Divider, Grid, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import StarIcon from '@mui/icons-material/Star'; // Example icon import
import GavelIcon from '@mui/icons-material/Gavel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BookIcon from '@mui/icons-material/Book';
import HeartIcon from '@mui/icons-material/Favorite';
import ThumbsUpIcon from '@mui/icons-material/ThumbUp';

const achievements = [
  {
    title: "Top 100 Trial Lawyers:",
    description: "Recognized by the National Trial Lawyers for excellence in trial advocacy.",
    icon: <StarIcon sx={{ color: '#FFD700' }} />
  },
  {
    title: "Landmark Case Victory:",
    description: "Secured a multi-million dollar settlement in a groundbreaking corporate litigation case involving intellectual property rights.",
    icon: <GavelIcon sx={{ color: '#8B4513' }} />
  },
  {
    title: "Super Lawyers Recognition:",
    description: "Named in Super Lawyers magazine multiple times for outstanding legal work in civil litigation.",
    icon: <CheckCircleIcon sx={{ color: '#32CD32' }} />
  },
  {
    title: "Author and Speaker:",
    description: "Published numerous legal articles in respected journals and frequently speaks at industry conferences on topics like corporate law, litigation strategy, and dispute resolution.",
    icon: <BookIcon sx={{ color: '#4682B4' }} />
  },
  {
    title: "Leadership in Pro Bono Work:",
    description: "Led several pro bono initiatives, providing legal aid to underprivileged communities and mentoring young attorneys.",
    icon: <HeartIcon sx={{ color: '#FF4500' }} />
  },
  {
    title: "Client Satisfaction Award:",
    description: "Honored for exceptional client service and consistent success in resolving high-stakes disputes.",
    icon: <ThumbsUpIcon sx={{ color: '#FFD700' }} />
  }
];

const KeyAchievements = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container alignItems="center" sx={{ marginBottom: 2 }}>
        {/* Vertical Divider for Key Achievements Header */}
        <Grid item>
          <Divider
            orientation="vertical" // Vertical divider
            sx={{ height: { xs: 40, md: 58 }, backgroundColor: '#447F6D', width: '5px' }} // Divider properties
          />
        </Grid>
        <Grid item>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#3D3D3D', marginLeft: 2 }}>
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
              width: '387px', // Outer ring width
              height: '499px' // Outer ring height
            }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0353e4873432cc219724d1c75ed1f3a3b7f9cc85edd900d0b94a0cd326c7e189?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e"
              alt="Profile of a lawyer"
              style={{
                width: '344.17px',
                height: '443.77px',
                borderRadius: '8px', // Same border radius
                position: 'absolute',
                top: '27px', // Center the image within the background
                left: '21px',
                opacity: 1 
              }}
            />
          </Box>
        </Grid>

        {/* Achievements List Section */}
        <Grid item xs={12} md={6}>
          <List>
            {achievements.map((achievement, index) => (
              <ListItem key={index}>
                <ListItemIcon>{achievement.icon}</ListItemIcon>
                <ListItemText
                  primary={<strong>{achievement.title}</strong>}
                  secondary={achievement.description}
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
