import React from "react";
import { Box, Typography, Divider, Grid, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import StarIcon from '@mui/icons-material/Star'; // Example icon import

// List of affiliations
const affiliations = [
  {
    title: "Member, [State Bar Association]",
    icon: <StarIcon sx={{ color: '#FFD700' }} />
  },
  {
    title: "Fellow, American Bar Foundation",
    icon: <StarIcon sx={{ color: '#FFD700' }} />
  },
  {
    title: "Member, National Association of Women Lawyers",
    icon: <StarIcon sx={{ color: '#FFD700' }} />
  }
];

// Main Affiliate Component
const Affiliate = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container alignItems="center" sx={{ marginBottom: 2 }}>
        {/* Vertical Divider for Affiliate Header */}
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Divider
            orientation="vertical"
            sx={{ height: { xs: 40, md: 58 }, backgroundColor: '#447F6D', width: '5px' }} // Divider properties
          />
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#3D3D3D', marginLeft: 2 }}>
            Professional Affiliations
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={12} > {/* Aligns text and image heights */}
        {/* Affiliations List Section */}
        <Grid item xs={12} md={6}>
          <List sx={{ padding: 0 }}>
            {affiliations.map((affiliation, index) => (
              <ListItem key={index}>
                <ListItemIcon>{affiliation.icon}</ListItemIcon>
                <ListItemText primary={<strong>{affiliation.title}</strong>} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#ECDAC1',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              padding: 2,
              position: 'relative',
              height: '448px', // Adjusted height for alignment
              overflow: 'hidden' // Prevent overflow
            }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fea823f0b3f27231095b5ef8297b71dd5f6c74812bace91312e223b6fda29d8f?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e"
              alt="Professional affiliations representation"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'fill',
                opacity: 1,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Affiliate;
