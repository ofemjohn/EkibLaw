import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import AboutNav from '../components/AboutNav';
import BlogPost from '../components/BlogPost';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import solicitor from "../assets/solicitor.webp";


const BlogThree = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          backgroundImage: `url(${solicitor})`,
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
              Solicitor Involved in False PI Claim Loses Strike-Off Appeal
            </Typography>
            <Typography variant="h5" sx={{ color: '#447F6D', marginBottom: 2 }}>
              Legal Ethics, Personal Injury, Fraud
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', marginBottom: 3, lineHeight: '1.6' }}>
              A solicitor who made a fraudulent claim for personal injury compensation was rightly struck off, the High Court has ruled. In the case of <strong>Abbas v Solicitors’ Regulatory Authority</strong>, Mrs. Justice McGowan DBE concluded that a permanent ban for Farrukh Abbas was ‘entirely justified’ given the nature of the dishonesty he showed.
            </Typography>

            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              Case Overview
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', lineHeight: '1.6' }}>
              Farrukh Abbas, admitted in 2014, was involved in a minor car accident with an uninsured colleague. Despite no serious physical injury, Abbas instructed Prime Law Solicitors to represent him in a personal injury (PI) claim. Abbas falsely claimed to have been the driver and provided misleading information to the medical expert involved in the case.
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', marginBottom: 3, lineHeight: '1.6' }}>
              The claim was not pursued and was reported to the Solicitors Regulation Authority by the Insurance Fraud Bureau. The Solicitors Disciplinary Tribunal found three allegations of dishonesty proved and ordered Abbas to be struck off the roll, citing his full and knowing involvement in the deception for personal financial gain.
            </Typography>

            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              Court's Ruling
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', lineHeight: '1.6' }}>
              On appeal, Abbas argued that the tribunal erred in not finding exceptional circumstances in his case. He claimed to be a secondary party in the incident and cited personal and family medical issues as mitigating factors. However, the judge ruled that Abbas had knowingly participated in the deception for nine months, and his involvement was substantial.
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', lineHeight: '1.6' }}>
              Mrs. Justice McGowan stated, “This was a clear case of a systematic attempt to defraud an insurance company by a false and dishonest claim. The necessary elements of a criminal offence were established, and the appellant, along with others, was fortunate not to have been prosecuted.”
            </Typography>

            <Typography variant="h6" sx={{ color: '#3D3D3D', marginTop: '20px' }}>
              Public Confidence and Legal Profession
            </Typography>
            <Typography variant="body1" sx={{ color: '#4F4F4F', lineHeight: '1.6' }}>
              The judge emphasized that public confidence in the legal profession was damaged by Abbas’s conduct. She noted that the need for public trust in the profession would be further compromised if the sanctions did not reflect the seriousness of his actions.
            </Typography>

            <Typography variant="body1" sx={{ color: '#4F4F4F', fontWeight: 'bold', marginTop: '20px' }}>
              For the full article, visit: <Link href="https://www.lawgazette.co.uk/news/solicitor-involved-in-false-pi-claim-loses-strike-off-appeal/5121457.article" target="_blank" rel="noopener noreferrer" sx={{ color: '#447F6D', textDecoration: 'underline' }}>Law Gazette</Link>
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

export default BlogThree;
