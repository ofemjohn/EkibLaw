import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import AboutNav from '../components/AboutNav'; // Import your Navbar component
import BlogPost from '../components/BlogPost';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import politicalgovernance from "../assets/politicalgovernance.webp";


const BlogTwo = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          backgroundImage: `url(${politicalgovernance})`,
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
              The New Corporate Political Governance
            </Typography>
            <Typography variant="h5" sx={{ color: '#447F6D', marginBottom: 2 }}>
              Corporate Governance, ESG, Social Activism
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', marginBottom: 3, lineHeight: '1.6' }}>
              Corporate governance and political governance are increasingly intersecting as corporations engage in critical social challenges with their voice, capital, and actions. In a recent article, Tom C.W. Lin examines the convergence of corporate and political governance and its wide-ranging effects on law, politics, business, and society.
            </Typography>

            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              Key Recommendations for Navigating Corporate Political Governance
            </Typography>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>A Different Corporate Overstory:</strong> Lin proposes a new narrative for businesses as politically active and human-centered entities, shifting away from traditional views focused solely on private profit.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>The AILS Framework:</strong> The framework (Analyze, Internalize, Localize, Specialize) guides corporations in organizing and operationalizing their social efforts effectively.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Lessons from Delaware and Nevada:</strong> Lin highlights the regulatory approaches of Delaware and Nevada as models for managing corporate political engagements without succumbing to partisan politics.
              </li>
            </ul>

            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              Conclusion
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', lineHeight: '1.6' }}>
              Addressing the complexities of corporate political governance will be a significant challenge for political leaders, corporate executives, and citizens. While a perfect roadmap is not yet available, Tom C.W. Lin's recommendations provide a thoughtful approach to navigating the evolving landscape.
            </Typography>

            <Typography variant="body1" sx={{ color: '#4F4F4F', fontWeight: 'bold', marginTop: '20px' }}>
              Interested in reading more? Access the full article by Tom C.W. Lin <Link href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4775190" target="_blank" rel="noopener noreferrer" sx={{ color: '#447F6D', textDecoration: 'underline' }}>here</Link>.
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

export default BlogTwo;
