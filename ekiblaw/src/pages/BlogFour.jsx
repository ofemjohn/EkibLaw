import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import AboutNav from '../components/AboutNav';
import BlogPost from '../components/BlogPost';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import personalinjury from "../assets/personalinjury.webp";


const BlogFour = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          backgroundImage: `url(${personalinjury})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: { xs: '20px', md: '45px 70px' },
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
          
        }}
      >
        <AboutNav />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          padding: { xs: '20px', md: '45px 70px' },
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          margin: { xs: '20px', md: '40px' },
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" fontWeight={600} sx={{ color: '#3D3D3D', marginBottom: 2 }}>
              Court Rules That Claims Survive Despite Personal Injury Dishonesty
            </Typography>
            <Typography variant="h5" sx={{ color: '#447F6D', marginBottom: 2 }}>
              Legal Ethics, Personal Injury, Court Decisions
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', marginBottom: 3, lineHeight: '1.6' }}>
              The courts have provided further indications that dishonesty in a personal injury (PI) claim does not automatically invalidate other heads of loss. In <strong>Senay & Anor v Mulsanne Insurance Company</strong>, His Honour Judge Charman stated that the fundamental dishonesty provisions should apply solely to the PI claim and not extend to other valid claims.
            </Typography>

            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              Case Overview
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', lineHeight: '1.6' }}>
              In the Senay case, the claimant was found to have lied about his PI claim following a road traffic collision. However, Judge Charman ruled that the claims related to vehicle damage and loss of use were still valid and should attract compensation.
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', marginBottom: 3, lineHeight: '1.6' }}>
              The decision aligns with a recent ruling in <strong>Reynolds v Chief Constable of Kent Police</strong>, where a claim for false imprisonment was upheld despite the PI claim being dismissed due to dishonesty.
            </Typography>

            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              Legal Implications
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', lineHeight: '1.6' }}>
              The judge highlighted that section 57 of the Criminal Justice and Courts Act 2015 requires the dismissal of dishonest PI claims but does not mandate the dismissal of other legitimate claims arising from the same incident. This interpretation suggests that even when dishonesty is found in one part of the claim, it does not negate the claimant’s right to compensation for other heads of loss.
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', lineHeight: '1.6' }}>
              The defendant argued that the value of the lost PI damages should be deducted from the costs payable. However, the judge stated that such an approach would unjustly strip claimants of their property rights related to vehicle damage caused by a negligent defendant.
            </Typography>

            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              Conclusion
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', lineHeight: '1.6' }}>
              While the policy behind section 57 aims to penalize dishonest PI claims, it does not extend to depriving claimants of their rightful compensation for other damages. This ruling underscores the importance of distinguishing between different heads of loss and ensures that claimants’ property rights are protected, even when dishonesty is involved in one aspect of their claim.
            </Typography>

            <Typography variant="body1" sx={{ color: '#4F4F4F', fontWeight: 'bold', marginTop: '20px' }}>
              For the full article, visit: <Link href="https://www.lawgazette.co.uk/news/court-rules-that-claims-survive-despite-personal-injury-dishonesty/5121237.article" target="_blank" rel="noopener noreferrer" sx={{ color: '#447F6D', textDecoration: 'underline' }}>Law Gazette</Link>
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
};

export default BlogFour;
