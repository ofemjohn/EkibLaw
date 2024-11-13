import React from "react";
import { Box, Typography, Divider, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter'; // Removed since your client doesn't use Twitter
import CopyrightIcon from '@mui/icons-material/Copyright';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import footerImage from '../assets/footerImage.png';


const Footer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    console.log('Navigating to Home page');
    navigate('/'); // Navigate to the home page
    window.setTimeout(() => { // Wait for navigation to complete before scrolling
      document.documentElement.scrollTop = 0; // For most browsers
      document.body.scrollTop = 0; // For Safari
    }, 100);
  };

  const contactData = [
    { icon: <PhoneIcon sx={{ color: '#447F6D' }} />, text: "(678) 632-0858" },
    { icon: <EmailIcon sx={{ color: '#447F6D' }} />, text: "ekibekurelaw@gmail.com" },
  ];

  const navItems = [
    { label: "Home", action: handleHomeClick },
    { label: "About", link: "#about-us" },
    { label: "Services", link: "#services" },
    { label: "Blogs", link: "#blog" },
    { label: "Contact Us", link: "#contact" },
  ];

  const socialIcons = [
    { icon: <FacebookIcon sx={{ color: '#4267B2' }} />, link: "https://www.facebook.com/thenaijalawyer", alt: "Facebook" },
    { icon: <InstagramIcon sx={{ color: '#E4405F' }} />, link: "https://www.instagram.com/thenaijalawyer/", alt: "Instagram" },
    { icon: <LinkedInIcon sx={{ color: '#0077B5' }} />, link: "https://www.linkedin.com/in/ekib-ekure-89a75665", alt: "LinkedIn" },
  ];

  return (
    <Box sx={{ position: 'relative', width: '100%', color: '#FFFFFF', textAlign: 'center', padding: '100px 0' }}>
      <Box
        component="img"
        src={footerImage}
        alt="Footer Background"
        loading="lazy"
        sx={{
          position: 'absolute',
          inset: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1,
        }}
      />

      <Typography variant="h4" sx={{ marginBottom: '32px', zIndex: 1 }}>
        Ekib Ekure Law LLC
      </Typography>

      {/* Contact Information */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', marginTop: '32px' }}>
        {contactData.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {item.icon}
            <Typography variant="body1">{item.text}</Typography>
          </Box>
        ))}
      </Box>

      {/* Navigation Links */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: '32px' }}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            onClick={item.action ? item.action : undefined}
            href={item.link ? item.link : undefined}
            sx={{
              color: '#FFFFFF',
              textDecoration: 'none',
              fontWeight: 500,
              '&:hover': { textDecoration: 'none' },
            }}
          >
            {item.label}
          </Link>
        ))}
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: '32px' }}>
        {socialIcons.map((item, index) => (
          <Link key={index} href={item.link} target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit' }}>
            <Box sx={{ borderRadius: '50%', backgroundColor: '#FFFFFF', padding: '10px' }}>
              {item.icon}
            </Box>
          </Link>
        ))}
      </Box>

      <Divider sx={{ minHeight: '2px', borderColor: '#4F4F4F', marginY: '32px' }} />

      {/* Footer Bottom */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', marginTop: '32px' }}>
        <CopyrightIcon sx={{ color: '#FFFFFF' }} />
        <Typography variant="body1"> 2024 Ekib Ekure Law LLC</Typography>
        <Divider orientation="vertical" sx={{ height: '20px', borderColor: '#FFFFFF' }} />
        <Typography variant="body1">All rights reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
