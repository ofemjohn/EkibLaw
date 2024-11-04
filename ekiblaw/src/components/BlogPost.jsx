import React from 'react';
import { Box, Typography, Divider, Grid, Card, CardMedia, CardContent, Link, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const blogPosts = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ddac9cd411389d8138da087224da6da6a1dc6214188c635d2f61f4102076279?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e",
    title: "Power of Attorney",
    content: "Acquiring property is a major milestone, but it can also be a complex legal process.",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f05e6c3e8c55f9741c64b07f7b91f71e52824484389e246d0bc4f9200210f9db?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e",
    title: "Family Law",
    content: "Separation doesn't stop you from your parental responsibilities. Follow our guides to be in the lives of your children.",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9b6933f810c34b9aadb8d1b1ff0bdc7eeeccffccb5c32aac28ed1764fbb67c4?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e",
    title: "Pro Bono",
    content: "Read more on our campus tour, and how we encourage young minds towards a noble cause.",
  },
];

const BlogPostCard = ({ image, title, content }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: 180, objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
      />
      <CardContent sx={{ padding: '16px', flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3D3D3D', marginBottom: '8px' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#4F4F4F', marginBottom: '16px' }}>
          {content}
          <span style={{ display: 'inline' }}>
            <Link href="#" underline="hover" sx={{ fontStyle: 'italic', color: '#ACACAC', cursor: 'pointer', marginLeft: '8px' }}>
              Read more...
            </Link>
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};

const BlogSection = () => {
  return (
    <Box sx={{ width: '100%', textAlign: { xs: 'center', md: 'left' }, marginTop: '50px' }}>
      {/* Blog Post Title */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, fontSize: '40px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Divider orientation="vertical" sx={{ height: { xs: 40, md: 58 }, backgroundColor: '#447F6D', width: '5px' }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'rgba(61, 61, 61, 1)' }}>
            Blog Post
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton sx={{ borderRadius: '50%', backgroundColor: '#ECDAC1', color: '' }}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton sx={{ borderRadius: '50%', backgroundColor: '#D8B482', color: '' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Blog Post Cards */}
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogPostCard {...post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSection;
