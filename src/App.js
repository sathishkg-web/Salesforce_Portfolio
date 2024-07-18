import React from 'react';
import './style.css';
import Header from './Header.js';
import Banner from './Banner.js';
import Certification from './Certification.js';
import ProjectContainer from './ProjectContainer.js';
import Employer from './Employer.js';
import Footer from './Footer.js';
import Decision from './Decision.js';
import Media from './Media.js';
import Gmail from './Gmail.js';

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Decision />
      <ProjectContainer />
      <Employer />
      <Footer />
      <Media />
      <Gmail />
    </div>
  );
}
