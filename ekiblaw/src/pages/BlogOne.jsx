import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import AboutNav from '../components/AboutNav';
import BlogPost from '../components/BlogPost';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const BlogOne = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          backgroundImage: `url(https://cdn.builder.io/api/v1/image/assets/TEMP/7ddac9cd411389d8138da087224da6da6a1dc6214188c635d2f61f4102076279?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e)`,
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
              Reframing the Indigent Defense Crisis
            </Typography>
            <Typography variant="h5" sx={{ color: '#447F6D', marginBottom: 2 }}>
              Criminal Law, Indigent Defense
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', marginBottom: 3, lineHeight: '1.6' }}>
              Today marks the 60th anniversary of Gideon v. Wainwright, the Supreme Court’s landmark decision on the right to counsel. Despite the recognition that “lawyers in criminal courts are necessities, not luxuries,” the failure to provide adequate representation to defendants in our criminal courts remains a national crisis.
            </Typography>

            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              The Indigent Defense Crisis
            </Typography>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>Criminal cases account for a large percentage of state court filings, and in most of these cases, the accused cannot afford counsel.</li>
              <li style={{ marginBottom: '10px' }}>Reports have documented systemic failures in indigent defense across multiple states, highlighting the ongoing violation of the right to counsel.</li>
              <li style={{ marginBottom: '10px' }}>The American Bar Association’s workload studies show that public defenders are overwhelmed, requiring a doubling of current staffing levels to provide adequate representation.</li>
              <li style={{ marginBottom: '10px' }}>Funding for indigent defense has lagged behind, while investment in the prison industrial complex has grown rapidly, exacerbating the crisis.</li>
            </ul>

            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              A Call for Reform
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', lineHeight: '1.6' }}>
              The failure to adequately fund indigent defense systems has led to ineffective assistance of counsel for the majority of defendants. This crisis challenges the legitimacy of our justice system and undermines the constitutional right to counsel. Reform is needed to address the disparity between the volume of criminal cases and the availability of qualified public defenders.
            </Typography>

            <Typography variant="body1" sx={{ color: '#4F4F4F', fontWeight: 'bold', marginTop: '20px' }}>
              Read the full essay for a comprehensive analysis and proposed solutions to the indigent defense crisis. Access the full essay <Link href="https://harvardlawreview.org/blog/2023/03/reframing-the-indigent-defense-crisis/" target="_blank" rel="noopener noreferrer" sx={{ color: '#447F6D', textDecoration: 'underline' }}>here</Link>.
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

export default BlogOne;
