import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Drawer, List, ListItemButton, ListItemText, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useMediaQuery } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState('EN');
  const isMobile = useMediaQuery('(max-width: 600px)');
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Update active link based on current location
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveLink('home');
    } else if (path === '/about') {
      setActiveLink('about us');
    } else if (path === '/services') {
      setActiveLink('services');
    } else if (path === '/blog') {
      setActiveLink('blog');
    } else if (path === '/contact') {
      setActiveLink('contact us');
    }
  }, [location]);

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

  const handleNavigation = (link) => {
    // Define routes explicitly
    const routeMap = {
      'home': '/',
      'about us': '/about',
      'services': '/services',
      'blog': '/blog',
      'contact us': '/contact',
    };
    setActiveLink(link); // Update active link
    navigate(routeMap[link]); // Navigate using useNavigate
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
              {['home', 'about us', 'services', 'blog', 'contact us'].map((link) => (
                <ListItemButton key={link} onClick={() => handleNavigation(link)} sx={{ justifyContent: 'center' }}>
                  <ListItemText primary={link.charAt(0).toUpperCase() + link.slice(1)} sx={{ textAlign: 'center' }} />
                </ListItemButton>
              ))}
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
          {['home', 'about us', 'services', 'blog', 'contact us'].map((link) => (
            <Typography
              key={link}
              variant="body1"
              sx={{
                cursor: 'pointer',
                fontWeight: activeLink === link ? 700 : 500,
                color: activeLink === link ? '#D8B482' : '#FFF',
                borderBottom: activeLink === link ? '3px solid #D8B482' : 'none',
                '&:hover': { color: '#D8B482' },
              }}
              onClick={() => handleNavigation(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Typography>
          ))}
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

export default Navbar;