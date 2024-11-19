import React, { useState, useCallback } from 'react';
import { Box, IconButton, Drawer, List, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { HashLink as Link } from "react-router-hash-link";
import logo1 from "../assets/logo1.svg";

// Memoized Link Component to prevent unnecessary re-renders
const MemoizedLink = React.memo(({ text, to, activeLink, onClick }) => (
  <Link
    smooth
    to={to}
    onClick={onClick}
    style={{
      textDecoration: 'none',
      color: activeLink === text.toLowerCase() ? '#D8B482' : '#FFF',
      borderBottom: activeLink === text.toLowerCase() ? '3px solid #D8B482' : 'none',
    }}
  >
    {text}
  </Link>
));

const AboutNav = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 900px)');

  // Memoized function for toggling drawer state
  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen(prev => !prev);
  }, []);

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
        overflow: 'hidden',
      }}
    >
      {/* Logo Image */}
      <Box
        component="img"
        src={logo1}
        alt="Vanguard Law Firm Logo"
        sx={{
          height: '50px',
          width: 'auto',
          cursor: 'pointer',
          transform: isMobile ? 'scale(4.5)' : isTablet ? 'scale(4)' : 'scale(5.3)',
          transformOrigin: 'left center',
          filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3)) contrast(200%)',
          marginRight: '250px',
          paddingLeft: '0px',
        }}
      />

      {isMobile ? (
        <>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ color: '#FFF' }}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
            <List sx={{ width: '100%', backgroundColor: '#1E1E1E', color: '#FFF' }}>
              {['Home', 'Contact Us'].map((text, index) => (
                <ListItemButton key={index} onClick={() => setDrawerOpen(false)}>
                  <MemoizedLink
                    text={text}
                    to={text === 'Home' ? '/' : `#contacts`}  // Correct home and contact links
                    onClick={() => setActiveLink(text.toLowerCase())}
                    activeLink={activeLink}
                  />
                </ListItemButton>
              ))}
            </List>
          </Drawer>
        </>
      ) : (
        <Box sx={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Desktop View */}
          <MemoizedLink
            text="Home"
            to="/"
            onClick={() => setActiveLink('home')}
            activeLink={activeLink}
          />
          <MemoizedLink
            text="Contact Us"
            to="#contacts"  // Correctly links to the contact section
            onClick={() => setActiveLink('contact us')}
            activeLink={activeLink}
          />
        </Box>
      )}
    </Box>
  );
};

export default AboutNav;
