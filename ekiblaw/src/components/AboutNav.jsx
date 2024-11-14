import React, { useState } from 'react';
import { Box, IconButton, Drawer, List, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/logo.webp";

const AboutNav = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 900px)');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
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
        overflow: 'hidden', // Prevent overflow
      }}
    >
      {/* Logo Image */}
      <Box
        component="img"
        src={logo}
        alt="Vanguard Law Firm Logo"
        sx={{
          height: '50px', // Keep the Navbar height
          width: 'auto', // Maintain aspect ratio
          cursor: 'pointer',
          transform: isMobile ? 'scale(4.5)' : isTablet ? 'scale(4)' : 'scale(5.3)',
          transformOrigin: 'left center', // Expand to the right
          filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3)) contrast(200%)',
          marginRight: '250px', // Space between logo and links
          paddingLeft: '0px', // Remove left padding
        }}
      />

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
            </List>
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
            to="#contacts"
            onClick={() => setActiveLink('contact us')}
            style={{
              textDecoration: 'none',
              color: activeLink === 'contact us' ? '#D8B482' : '#FFF',
              borderBottom: activeLink === 'contact us' ? '3px solid #D8B482' : 'none',
            }}
          >
            Contact Us
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default AboutNav;
