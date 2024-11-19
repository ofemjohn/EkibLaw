import React, { useState } from "react";
import { Box, Typography, Grid, Divider, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const PracticeAreaSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState('');

  const handleClickOpen = (area) => {
    setSelectedArea(area);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedArea('');
  };

  return (
    <Box sx={{ width: '100%', textAlign: { xs: 'center', md: 'left' }, marginTop: '50px' }}>
      <Box sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'start' }, alignItems: 'center', gap: 2, fontSize: '40px' }}>
        <Divider orientation="vertical" sx={{ height: { xs: 40, md: 58 }, backgroundColor: '#447F6D', width: '5px' }} />
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Teachers',
            fontWeight: 700,
            color: 'rgba(61, 61, 61, 1)',
          }}
        >
          Our Practice Area
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {/* Business Law Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              borderRadius: '4px',
              backgroundColor: '#447F6D',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '32px 45px',
              height: '100%',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              },
            }}
            onClick={() => handleClickOpen('business-law')}
          >
            <BusinessCenterIcon sx={{ fontSize: 60, color: '#FFFFFF', marginBottom: '20px' }} />
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Teachers',
                fontWeight: 600,
                color: '#FFFFFF',
              }}
            >
              Business Law
            </Typography>
            <Typography
              sx={{
                marginTop: '22px',
                fontFamily: 'Teachers',
                color: '#4F4F4F',
                lineHeight: '30px',
                textAlign: 'center',
              }}
            >
              Expert legal counsel in business formation, registration, contracts, and litigation to help your business thrive.
            </Typography>
          </Box>
        </Grid>

        {/* Criminal Defense Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              borderRadius: '4px',
              backgroundColor: '#D8B482',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '32px 45px',
              height: '100%',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              },
            }}
            onClick={() => handleClickOpen('criminal-defense')}
          >
            <GavelIcon sx={{ fontSize: 60, color: '#FFFFFF', marginBottom: '20px' }} />
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Teachers',
                fontWeight: 600,
                color: '#FFFFFF',
              }}
            >
              Criminal Defense
            </Typography>
            <Typography
              sx={{
                marginTop: '22px',
                fontFamily: 'Teachers',
                color: '#4F4F4F',
                lineHeight: '30px',
                textAlign: 'center',
              }}
            >
              Comprehensive defense for traffic offenses, misdemeanors, felonies, drug charges, assault, theft, and gun charges.
            </Typography>
          </Box>
        </Grid>

        {/* Personal Injury Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              borderRadius: '4px',
              backgroundColor: '#30B0C7',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '32px 45px',
              height: '100%',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              },
            }}
            onClick={() => handleClickOpen('personal-injury')}
          >
            <LocalHospitalIcon sx={{ fontSize: 60, color: '#FFFFFF', marginBottom: '20px' }} />
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Teachers',
                fontWeight: 600,
                color: '#FFFFFF',
              }}
            >
              Personal Injury
            </Typography>
            <Typography
              sx={{
                marginTop: '22px',
                fontFamily: 'Teachers',
                color: '#4F4F4F',
                lineHeight: '30px',
                textAlign: 'center',
              }}
            >
              Legal representation for car accidents, dog bites, slip and falls, ensuring your rights are protected and you receive fair compensation.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{selectedArea === 'business-law' && 'Business Law' || selectedArea === 'criminal-defense' && 'Criminal Defense' || selectedArea === 'personal-injury' && 'Personal Injury'}</DialogTitle>
        <DialogContent>
          <Typography>
            {/* Display content based on selected area */}
            {selectedArea === 'business-law' && (
              <div>
                <Typography variant="body1" sx={{ fontFamily: 'Teachers' }}>
                  Business law is crucial when starting and managing a business. From formation to contracts, Ekib Ekure Law is here to help you every step of the way.
                </Typography>
              </div>
            )}
            {selectedArea === 'criminal-defense' && (
              <div>
                <Typography variant="body1" sx={{ fontFamily: 'Teachers' }}>
                  Criminal defense services for all kinds of charges including traffic offenses, DUIs, misdemeanors, felonies, and more.
                </Typography>
              </div>
            )}
            {selectedArea === 'personal-injury' && (
              <div>
                <Typography variant="body1" sx={{ fontFamily: 'Teachers' }}>
                  Our personal injury services include helping victims of accidents, falls, and other injuries claim their rightful compensation.
                </Typography>
              </div>
            )}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PracticeAreaSection;
