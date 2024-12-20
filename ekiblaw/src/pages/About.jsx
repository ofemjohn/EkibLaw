import React from 'react';
import AboutHeroSection from '../components/AboutHeroSection';
import MainSectionAbout from '../components/MainSectionAbout';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <AboutHeroSection />
      <MainSectionAbout />
      <div id="contacts" >
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export default About;
