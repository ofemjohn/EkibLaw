// Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import MainSection from '../components/MainSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <MainSection />
      <div id="contact-us">  {/* Ensure this ID matches the link */}
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
