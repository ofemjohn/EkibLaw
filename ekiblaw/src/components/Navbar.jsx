import React, { useState, useCallback } from 'react';
import { Box, IconButton, Drawer, List, ListItemButton, AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { HashLink as Link } from "react-router-hash-link";
import logo2 from "../assets/logo2.svg"; // Import the SVG logo

// Memoized Link Component
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

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 900px)');

  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen(prev => !prev);
  }, []);

  return (
    <>
      {/* Logo Section (above the navbar) */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2, // Add margin bottom for spacing
          height: '80px',
          width: '100%',
        }}
      >
        <img
          src={logo2}
          alt="Vanguard Law Firm Logo"
          style={{
            maxWidth: '550px', // Increased max-width for better visibility
            height: 'auto',
            cursor: 'pointer',
            filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3))',
          }}
        />
      </Box>

      {/* Navbar with only navigation links */}
      <AppBar
        sx={{
          backgroundColor: '#447F6D',
          borderRadius: '16px', // Re-added rounded corners here
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
        position="relative"
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Mobile View */}
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: '100%', backgroundColor: '#1E1E1E', color: '#FFF' }}>
                  {['Home', 'About Us', 'Services', 'Blog', 'Contact Us'].map((text, index) => (
                    <ListItemButton key={index} onClick={() => {
                      setDrawerOpen(false);
                      setActiveLink(text.toLowerCase());
                    }}>
                      <MemoizedLink
                        text={text}
                        to={`#${text.toLowerCase().replace(' ', '-')}`}
                        activeLink={activeLink}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '24px', alignItems: 'center' }}>
              {/* Desktop View - Spacing out nav links evenly */}
              {['Home', 'About Us', 'Services', 'Blog', 'Contact Us'].map((text, index) => (
                <MemoizedLink
                  key={index}
                  text={text}
                  to={`#${text.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setActiveLink(text.toLowerCase())}
                  activeLink={activeLink}
                />
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
