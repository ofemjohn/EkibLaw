import React from "react";
import { Box, Typography, Divider, Link } from "@mui/material";

const Footer = () => {
  const contactData = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/abb5cc729611e0bdb358b85da49e92b79685d4eb49422246db4688796ebceff6?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e", text: "303-434-4567", alt: "Phone icon" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc881fe048a47f1713e8040c3670faf26ab398899d8f2fc7af6055e8175219f6?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e", text: "thelaw@lawfirm.com", alt: "Email icon" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/caa2157555570509ef16160f7fbe35b667818e1a72fb622171471d9628a9d361?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e", text: "Lancaster, TX 75134 Brownlee Park Dallas", alt: "Location icon" }
  ];

  const navItems = ["Home", "About", "Services", "Our Team", "Blogs", "Contact Us"];

  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a2510b3332cee116c47b95dc29a31b627da45d1468399f0bf46013308e69189?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e", alt: "Facebook icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/57caaa549683fe8f5c5a7f9b47c6e1ee87c14846e38c2db2c30072a79c708e5e?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e", alt: "Twitter icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9d0d27bd89233550117bf8e2e82ffa110499f8f1e470f2985fd9c326388270f?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e", alt: "Instagram icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/603dda2d6a2af158951cba98825606a9dc4572d31a7369681883c5129806cd82?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e", alt: "LinkedIn icon" }
  ];

  return (
    <Box sx={{ position: 'relative', width: '100%', color: '#FFFFFF', textAlign: 'center', padding: '100px 0' }}>
      <Box
        component="img"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1da4359a1e79f2652bd0f4d6d47a2650bf44dc4899a8b79c913064ad5d4ee472?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e"
        alt="Footer Background"
        loading="lazy"
        sx={{
          position: 'absolute',
          inset: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1
        }}
      />

      <Typography variant="h4" sx={{ marginBottom: '32px', zIndex: 1 }}>
        The Vanguard Law Firm
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', marginTop: '32px' }}>
        {contactData.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src={item.icon} alt={item.alt} style={{ width: '32px' }} />
            <Typography variant="body1">{item.text}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: '32px' }}>
        {navItems.map((item, index) => (
          <Link key={index} href={`#${item.toLowerCase().replace(' ', '-')}`} sx={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 500 }}>
            {item}
          </Link>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: '32px' }}>
        {socialIcons.map((icon, index) => (
          <Box key={index} sx={{ borderRadius: '50%', backgroundColor: '#FFFFFF', padding: '10px' }}>
            <img src={icon.src} alt={icon.alt} style={{ width: '24px' }} />
          </Box>
        ))}
      </Box>

      <Divider sx={{ minHeight: '2px', borderColor: '#4F4F4F', marginY: '32px', }} />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', marginTop: '32px' }}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3462d12a9934c7fe78ed950b9674443d554f8eb63ae5adbd99e389bc94edb33?placeholderIfAbsent=true&apiKey=548d97d02f3248759f0eec44133ed12e" alt="Copyright icon" style={{ width: '20px' }} />
        <Typography variant="body1">Copyright 2024 The Law</Typography>
        <Divider orientation="vertical" sx={{ height: '20px', borderColor: '#FFFFFF' }} />
        <Typography variant="body1">All rights reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
