import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import AboutNav from '../components/AboutNav'; // Import your Navbar component
import BlogPost from '../components/BlogPost';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import businesslaw from "../assets/businesslaw.webp";


const BlogFive = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          backgroundImage: `url(${businesslaw})`,
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
        <AboutNav /> {/* Your Navbar component */}
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
              Ownership and Trust—A Corporate Law Framework for Board Decision-Making in the Age of AI
            </Typography>
            <Typography variant="h5" sx={{ color: '#447F6D', marginBottom: 2 }}>
              Corporate Governance, AI, Compliance
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', marginBottom: 3, lineHeight: '1.6' }}>
              In a new paper, Katja Langenbucher explores the legal ramifications for boards using AI as a ‘prediction machine’. By enhancing decision-making, AI can reinforce known interrelationships or point out novel, unanticipated correlations.
            </Typography>
            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              Key Insights on AI and Board Decision-Making
            </Typography>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>AI is used to support decision-making, but boards must own their decisions fully, even when relying on AI tools.</li>
              <li style={{ marginBottom: '10px' }}>Corporate law expects board members to make well-informed decisions without delegating their authority entirely to AI.</li>
              <li style={{ marginBottom: '10px' }}>Legal frameworks allow AI as a support tool, but board discretion remains crucial in compliance and risk management decisions.</li>
              <li style={{ marginBottom: '10px' }}>Boards need to evaluate AI recommendations critically, especially when dealing with black-box AI predictions.</li>
            </ul>

            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              The Role of Corporate Law in AI Decision-Making
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', lineHeight: '1.6' }}>
              Corporate law frameworks have established expectations for board decision-making. The use of AI in corporate decisions must be carefully balanced with the board's responsibility to own and understand these decisions. The legal landscape emphasizes the need for critical evaluation and discretion when integrating AI tools into the decision-making process.
            </Typography>

            <Typography variant="body1" sx={{ color: '#4F4F4F', fontWeight: 'bold', marginTop: '20px' }}>
              Discover more about how AI is shaping corporate governance. Read the full paper for a deeper understanding of the evolving role of AI in board decision-making. Access the full paper <Link href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4746241&dgcid=ejournal_htmlemail_corporate%3Agovernance%3Ainternal%3Agovernance%2C%3Aorganization%2C%3Aprocesses%3Aejournal_abstractlink" target="_blank" rel="noopener noreferrer" sx={{ color: '#447F6D', textDecoration: 'underline' }}>here</Link>.
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

export default BlogFive;
