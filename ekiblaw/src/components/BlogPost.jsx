import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography, Divider, Card, CardMedia, CardContent, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import businesslaw from "../assets/businesslaw.webp";
import personalinjury from "../assets/personalinjury.webp";
import politicalgovernance from "../assets/politicalgovernance.webp";
import solicitor from "../assets/solicitor.webp";





const blogPosts = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ddac9cd411389d8138da087224da6da6a1dc6214188c635d2f61f4102076279?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e",
    title: "Criminal Law",
    content: "Today marks the 60th anniversary of Gideon v. Wainwright, the Supreme Court’s landmark decision on the right to counsel.",
    route: "/blogone",
  },
  {
    image: politicalgovernance,
    title: "The New Corporate Political Governance",
    content: "Governance matters. The governance of our business and political institutions impacts all aspects of our lives.",
    route: "/blogtwo",
  },
  {
    image: solicitor,
    title: "Solicitor involved in false PI claim loses strike-off appeal",
    content: "A solicitor who made a fraudulent claim for personal injury compensation was rightly struck off, the High Court has ruled.",
    route: "/blogthree",
  },
  {
    image: personalinjury,
    title: "Court rules that claims survive despite personal injury dishonesty",
    content: "The courts have served up further signs that lying on a personal injury claim is not to be treated as the death knell for other heads of loss.",
    route: "/blogfour",
  },
  {
    image: businesslaw,
    title: "Corporate Law",
    content: "Understanding corporate law essentials for better decision-making in your business.",
    route: "/blogfive",
  },
];

const BlogPostCard = ({ image, title, content, route }) => {
  const navigate = useNavigate();

  const handleBlogClick = () => {
    console.log('Navigating to blog page');
    navigate(route); // Navigate to the specified blog route
    window.setTimeout(() => { // Wait for navigation to complete before scrolling
      document.documentElement.scrollTop = 0; // For most browsers
      document.body.scrollTop = 0; // For Safari
    }, 100); // Adjust timeout as necessary
  };

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
            <Link
              onClick={handleBlogClick} // Use handleBlogClick for routing
              underline="hover"
              sx={{ fontStyle: 'italic', color: '#447F6D', cursor: 'pointer', marginLeft: '8px' }}
            >
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
      </Box>

      {/* Blog Post Carousel */}
      <Carousel
        navButtonsAlwaysVisible
        interval={4000}
        indicators={true}
        animation="slide"
        autoPlay={true}
      >
        {blogPosts.map((post, index) => (
          <Grid container spacing={3} key={index} sx={{ justifyContent: 'center' }}>
            <Grid item xs={12} sm={6} md={4}>
              <BlogPostCard {...post} />
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
};

export default BlogSection;
