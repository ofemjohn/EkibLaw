import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import AboutNav from '../components/AboutNav'; // Import your Navbar component
import BlogPost from '../components/BlogPost';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const BlogTwo = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          backgroundImage: `url(https://cdn.builder.io/api/v1/image/assets/TEMP/7ddac9cd411389d8138da087224da6da6a1dc6214188c635d2f61f4102076279?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: { xs: '20px', md: '45px 70px' },
          minHeight: '500px', // Adjust as needed
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <AboutNav /> {/* Your Navbar component */}
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          padding: { xs: '20px', md: '45px 70px' },
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for depth
          borderRadius: '8px', // Slightly round corners
          margin: { xs: '20px', md: '40px' }, // Add margin to separate from the edges
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" fontWeight={600} sx={{ color: '#3D3D3D', marginBottom: 2 }}>
              Navigating Property Acquisition: Legal Essentials for a Smooth Purchase
            </Typography>
            <Typography variant="h5" sx={{ color: '#447F6D', marginBottom: 2 }}>
              Power of Attorney, Property
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', marginBottom: 3, lineHeight: '1.6' }}>
              Acquiring property is a major milestone, but it can also be a complex legal process. Whether you’re a first-time homebuyer or a seasoned investor, understanding the legalities involved is crucial to avoid costly mistakes.
            </Typography>
            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              Key Steps in Property Acquisition
            </Typography>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>Title Search – Before purchasing, it’s essential to verify the property’s ownership history. A thorough title search ensures there are no hidden claims or legal disputes that could affect your purchase.</li>
              <li style={{ marginBottom: '10px' }}>Property Inspection – Conducting a proper inspection can help uncover structural or legal issues tied to the property, ensuring you're making an informed decision.</li>
              <li style={{ marginBottom: '10px' }}>Drafting Contracts – The purchase agreement outlines the terms of the transaction. It’s critical to have a lawyer review or draft these contracts to protect your rights and interests.</li>
              <li style={{ marginBottom: '10px' }}>Compliance with Local Laws – Property laws vary by location. From zoning regulations to tax obligations, staying compliant with local laws is key to avoiding future legal complications.</li>
            </ul>
            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              Why You Need a Lawyer?
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', lineHeight: '1.6' }}>
              Working with an experienced property lawyer helps streamline the acquisition process, providing guidance on contract negotiations, title searches, and closing procedures. At Vanguard Law Firm, we’re dedicated to safeguarding your investment and ensuring your property purchase is secure and legally sound.
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', fontWeight: 'bold', marginTop: '20px' }}>
              Ready to acquire property with confidence? Contact us today to guide you through every step of the process.
            </Typography>
          </Grid>
        </Grid>
        {/* BlogPost Section */}
      <BlogPost />

      </Box>
      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default BlogTwo;
