import React from "react";
import { Box, Typography, Divider, Grid, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import GavelIcon from '@mui/icons-material/Gavel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EKIB7 from '../assets/EKIB7.webp';


const affiliations = [
  {
    title: "State and Superior Courts of Georgia",
    icon: <GavelIcon sx={{ color: '#FFD700' }} />,
  },
  {
    title: "Northern District Court – Georgia",
    icon: <CheckCircleIcon sx={{ color: '#FFD700' }} />,
  },
  {
    title: "Supreme Court of Nigeria",
    icon: <GavelIcon sx={{ color: '#FFD700' }} />,
  },
  {
    title: "State Bar of Georgia, Member",
    icon: <StarIcon sx={{ color: '#FFD700' }} />,
  },
  {
    title: "Nigerian Bar Association, Member",
    icon: <StarIcon sx={{ color: '#FFD700' }} />,
  },
];

const Affiliate = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container alignItems="center" sx={{ marginBottom: 2 }}>
        {/* Title Section */}
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Divider
            orientation="vertical"
            sx={{ height: { xs: 40, md: 58 }, backgroundColor: '#447F6D', width: '5px' }}
          />
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#3D3D3D',
              marginLeft: 2,
              fontFamily: 'Teachers',
            }}
          >
            Professional Affiliations
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={12}>
        {/* Affiliations List Section */}
        <Grid item xs={12} md={6}>
          <List sx={{ padding: 0, marginTop: '60px' }}>
            {affiliations.map((affiliation, index) => (
              <ListItem key={index}>
                <ListItemIcon>{affiliation.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'Teachers',
                        fontWeight: 600,
                        color: '#3D3D3D',
                      }}
                    >
                      {affiliation.title}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#BDE2D7',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              padding: 2,
              position: 'relative',
              height: '70%',
              overflow: 'hidden',
            }}
          >
            <img
              src={EKIB7}
              alt="Professional affiliations representation"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                position: "relative",
                zIndex: 2,
                top: 25,
                right: 20,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Affiliate;
