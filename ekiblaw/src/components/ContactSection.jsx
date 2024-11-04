import React from 'react';
import { Box, Typography, Grid, TextField, Button, IconButton, Card, CardMedia } from '@mui/material';

const contactItems = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/efb64a751cb7d5d85d94cb184a091cc8d45b9b3ef60ccd34ef01621031d6c2cb?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e',
    label: 'Email',
    value: 'vanguard@vanguardfirm.com',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b29a66c6955137a4184c9579c2fe1398070617b5d12747f68c93dad2e781324?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e',
    label: 'Telephone',
    value: '425-356-0578',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a839cbadebaf7e8a372e352709a4a81ff1117e61718dfcd4577548608b3b8fae?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e',
    label: 'Address',
    value: '1234 Main St, Suite 500, Houston, TX 77002',
  },
];

const ContactSection = () => {
  return (
    <Box sx={{ backgroundColor: '#ECDAC1', padding: { xs: '20px', md: '45px 70px' }, position: 'relative' }}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c13277110fd8d9b65dd5dc8df11452e458f7a0fafae037b5092a8eacbf2fbfb?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }}
      />

      <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
        {/* Left Column: Contact Info and Map */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={600} sx={{ color: '#3D3D3D', marginBottom: 2 }}>
            Vanguard Law Firm
          </Typography>
          <Typography variant="body1" sx={{ color: '#4F4F4F', marginBottom: 3 }}>
            Have questions or need legal assistance? Reach out to us today — we're here to help!
          </Typography>

          {contactItems.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
              <IconButton sx={{ backgroundColor: '#EFAE64', padding: 1 }}>
                <img src={item.icon} alt={item.label} style={{ width: '24px', height: '24px' }} />
              </IconButton>
              <Box>
                <Typography variant="h6" fontWeight={600} color="#3D3D3D">
                  {item.label}
                </Typography>
                <Typography variant="body2" color="#4F4F4F">
                  {item.value}
                </Typography>
              </Box>
            </Box>
          ))}

          {/* Map */}
          <Box sx={{ marginTop: 5.5 }}>
            <Card sx={{ height: '250px', borderRadius: 2 }}>
              <CardMedia
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11004.295102431242!2d-95.36296961896488!3d29.74990787790574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf3ef5f3ff4d%3A0x6e5d2d6b3875b5a!2s1234%20Main%20St%2C%20Houston%2C%20TX%2077002!5e0!3m2!1sen!2sus!4v1636589140915!5m2!1sen!2sus"
                title="Vanguard Law Firm Location"
                sx={{ width: '100%', height: '100%', borderRadius: 2 }}
              />
            </Card>
          </Box>
        </Grid>

        {/* Right Column: Contact Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ color: '#447F6D' }}>
            Get in Touch with Us
          </Typography>
          <Typography variant="h6" sx={{ color: '#3D3D3D', marginBottom: 2 }}>
            Fill out this form to set up a free consultation.
          </Typography>

          <form>
            <Grid container spacing={2} sx={{ marginBottom: 2 }}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="First Name"
                  required
                  sx={{
                    backgroundColor: '#FFFFFF',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#cccccc', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#aaaaaa', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#447F6D', // Focus border color
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Last Name"
                  required
                  sx={{
                    backgroundColor: '#FFFFFF',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#cccccc', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#aaaaaa', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#447F6D', // Focus border color
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email Address"
                  required
                  sx={{
                    backgroundColor: '#FFFFFF',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#cccccc', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#aaaaaa', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#447F6D', // Focus border color
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Phone Number"
                  required
                  sx={{
                    backgroundColor: '#FFFFFF',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#cccccc', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#aaaaaa', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#447F6D', // Focus border color
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Subject"
                  required
                  sx={{
                    backgroundColor: '#FFFFFF',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#cccccc', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#aaaaaa', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#447F6D', // Focus border color
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Your Message"
                  multiline
                  rows={8} // Increase this to adjust the height to match the map
                  required
                  sx={{
                    backgroundColor: '#FFFFFF',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#cccccc', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#aaaaaa', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#447F6D', // Focus border color
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button fullWidth variant="contained" sx={{ backgroundColor: '#EFAE64', color: '#000', padding: 2 }}>
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
