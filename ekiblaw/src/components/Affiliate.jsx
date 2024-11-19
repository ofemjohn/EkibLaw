import React from "react";
import { Box, Typography, Divider, Grid, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import GavelIcon from '@mui/icons-material/Gavel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const affiliations = [
  {
    category: "Georgia Courts",
    items: [
      { title: "State and Superior Courts of Georgia", icon: <GavelIcon sx={{ color: '#FFD700' }} /> },
      { title: "Northern District Court – Georgia", icon: <CheckCircleIcon sx={{ color: '#FFD700' }} /> },
    ],
  },
  {
    category: "Nigerian Courts",
    items: [
      { title: "Supreme Court of Nigeria", icon: <GavelIcon sx={{ color: '#FFD700' }} /> },
    ],
  },
  {
    category: "Bar Associations",
    items: [
      { title: "State Bar of Georgia, Member", icon: <StarIcon sx={{ color: '#FFD700' }} /> },
      { title: "Nigerian Bar Association, Member", icon: <StarIcon sx={{ color: '#FFD700' }} /> },
    ],
  },
];

const Affiliate = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f8f8f8' }}> {/* Added background color for contrast */}
      <Grid container alignItems="center" sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Divider orientation="horizontal" sx={{ height: 5, backgroundColor: '#447F6D', width: '100%', mb: 2 }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#3D3D3D', ml: 2, fontFamily: 'Teachers', textAlign: 'center' }}>
            Professional Affiliations
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {affiliations.map((group, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box mb={3}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#3D3D3D', fontFamily: 'Teachers', mb: 2 }}>
                {group.category}
              </Typography>
              <List sx={{ padding: 0 }}>
                {group.items.map((item, itemIndex) => (
                  <ListItem key={itemIndex} sx={{ py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 30 }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={<Typography variant="body1" sx={{ fontFamily: 'Teachers', fontWeight: 500, color: '#3D3D3D' }}>{item.title}</Typography>} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Affiliate;