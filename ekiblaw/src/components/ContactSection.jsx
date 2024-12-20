import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, IconButton, Snackbar, LinearProgress, Card, CardContent } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import contactBackground from '../assets/contactsectionbackground.webp';

const contactItems = [
  {
    icon: <EmailIcon sx={{ color: '#447F6D', fontSize: '40px', marginRight: 2 }} />,
    label: 'Email',
    value: 'ekib@ekibekurelaw.com',
    href: 'mailto:ekib@ekibekurelaw.com',
  },
  {
    icon: <PhoneIcon sx={{ color: '#447F6D', fontSize: '40px', marginRight: 2 }} />,
    label: 'Telephone',
    value: '(678) 632-0858',
    href: 'tel:+16786320858',
  },
  {
    icon: <InstagramIcon sx={{ color: '#E4405F', fontSize: '40px', marginRight: 2 }} />,
    label: 'Instagram',
    value: '@thenaijalawyer',
    href: 'https://www.instagram.com/thenaijalawyer/',
  },
  {
    icon: <FacebookIcon sx={{ color: '#4267B2', fontSize: '40px', marginRight: 2 }} />,
    label: 'Facebook',
    value: '@thenaijalawyer',
    href: 'https://www.facebook.com/thenaijalawyer',
  },
  {
    icon: <LinkedInIcon sx={{ color: '#0077B5', fontSize: '40px', marginRight: 2 }} />,
    label: 'LinkedIn',
    value: 'Ekib Ekure',
    href: 'https://www.linkedin.com/in/ekib-ekure-89a75665',
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    try {
      const response = await fetch('https://api.sheetbest.com/sheets/f4321c7e-e228-442a-a2a5-2ddba74f31bd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setOpenSnackbar(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Failed to send your message. Please try again.');
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        backgroundImage: `url(${contactBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: { xs: '20px', md: '45px 70px' },
        position: 'relative',
      }}
    >
      <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
        {/* Left Column: Contact Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={600} sx={{ color: '#3D3D3D', marginBottom: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ color: '#4F4F4F', marginBottom: 3 }}>
            Reach out to us through any of the following channels:
          </Typography>

          {/* Contact Items - Displaying in 2 items per row */}
          <Grid container spacing={3}>
            {contactItems.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Card sx={{ 
                    backgroundColor: '#FFF', 
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
                    borderRadius: '10px', 
                    textAlign: 'center', 
                    padding: 2, 
                    border: '2px solid #A9D5B8', // Light Green border
                  }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                        {/* Icon and Text Horizontally Aligned */}
                        {item.icon}
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h6" fontWeight={600} color="#3D3D3D">{item.label}</Typography>
                          <Typography variant="body2" color="#4F4F4F" sx={{ textAlign: 'center' }}>{item.value}</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Column: Contact Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ color: '#447F6D' }}>
            Get in Touch with Us
          </Typography>
          <Typography variant="h6" sx={{ color: '#3D3D3D', marginBottom: 2 }}>
            Fill out this form to set up a free consultation.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ marginBottom: 2 }}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Email Address" name="email" value={formData.email} onChange={handleInputChange} required />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Your Message" name="message" value={formData.message} onChange={handleInputChange} multiline rows={8} required />
              </Grid>
            </Grid>
            {loading && <LinearProgress sx={{ marginBottom: 2 }} />}
            <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: '#EFAE64', color: '#000', padding: 2 }}>
              Submit
            </Button>
          </form>

          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <MuiAlert elevation={6} severity="success" onClose={() => setOpenSnackbar(false)}>
              {successMessage}
            </MuiAlert>
          </Snackbar>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
