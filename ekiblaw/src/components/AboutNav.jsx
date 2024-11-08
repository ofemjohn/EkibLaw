import React, { useState } from 'react';
import { Box, Typography, IconButton, Drawer, List, ListItemButton, ListItemText, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useMediaQuery } from '@mui/material';
import { HashLink as Link } from "react-router-hash-link";

const AboutNav = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState('EN');
  const isMobile = useMediaQuery('(max-width: 600px)');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLanguageMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    setLanguage(language === 'English' ? 'EN' : 'ES');
    handleLanguageMenuClose();
  };

  return (
    <Box
      sx={{
        backgroundColor: '#447F6D',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: { xs: '20px', md: '30px 40px' },
        borderRadius: '16px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        flexDirection: isMobile ? 'column' : 'row',
        marginTop: '40px',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, color: '#FFF' }}>
        Vanguard Law Firm
      </Typography>

      {isMobile ? (
        <>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ color: '#FFF' }}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
            <List sx={{ width: '100%', backgroundColor: '#1E1E1E', color: '#FFF' }}>
              <ListItemButton onClick={() => setDrawerOpen(false)}>
                <Link to="/" onClick={() => setActiveLink('home')} style={{ textDecoration: 'none', color: 'inherit' }}>
                  Home
                </Link>
              </ListItemButton>
              <ListItemButton onClick={() => setDrawerOpen(false)}>
                <Link smooth to="#contact" onClick={() => setActiveLink('contact us')} style={{ textDecoration: 'none', color: 'inherit' }}>
                  Contact Us
                </Link>
              </ListItemButton>
              <ListItemButton onClick={handleLanguageMenuClick} sx={{ justifyContent: 'center' }}>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {language} <ArrowDropDownIcon />
                    </Box>
                  }
                  sx={{ textAlign: 'center' }}
                />
              </ListItemButton>
            </List>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleLanguageMenuClose}>
              <MenuItem onClick={() => handleLanguageChange('English')}>English</MenuItem>
              <MenuItem onClick={() => handleLanguageChange('Spanish')}>Spanish</MenuItem>
            </Menu>
          </Drawer>
        </>
      ) : (
        <Box sx={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link
            to="/"
            onClick={() => setActiveLink('home')}
            style={{
              textDecoration: 'none',
              color: activeLink === 'home' ? '#D8B482' : '#FFF',
              borderBottom: activeLink === 'home' ? '3px solid #D8B482' : 'none',
            }}
          >
            Home
          </Link>
          <Link
            smooth
            to="#contact"
            onClick={() => setActiveLink('contact us')}
            style={{
              textDecoration: 'none',
              color: activeLink === 'contact us' ? '#D8B482' : '#FFF',
              borderBottom: activeLink === 'contact us' ? '3px solid #D8B482' : 'none',
            }}
          >
            Contact Us
          </Link>
          <Button
            color="inherit"
            endIcon={<ArrowDropDownIcon />}
            onClick={handleLanguageMenuClick}
            sx={{
              color: '#FFF',
              textTransform: 'none',
              '&:hover': { color: '#D8B482' },
            }}
          >
            {language}
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleLanguageMenuClose}>
            <MenuItem onClick={() => handleLanguageChange('English')}>English</MenuItem>
            <MenuItem onClick={() => handleLanguageChange('Spanish')}>Spanish</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
};

export default AboutNav;
