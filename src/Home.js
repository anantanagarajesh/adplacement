// Home.js

import React from 'react';
import './Home.css';
import ngoImage1 from './images/logo.png';
import ngoImage2 from './images/group.jpg';
import ImageComponent from './imagecomponent'; // Import ImageComponent

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to Margshala Foundation</h1>
        <p>Empowering rural entrepreneurship in Uttarakhand through innovative programs and support.</p>
      </header>

      <section className="Home-section">
        <h2>About Us</h2>
        <p>
          Margshala Foundation is dedicated to fostering entrepreneurship in the rural areas of Uttarakhand. We aim to provide 
          individuals with the tools, knowledge, and resources they need to build successful businesses and create sustainable 
          livelihoods for themselves and their communities.
        </p>
      </section>

      <section className="Home-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower rural entrepreneurs by offering comprehensive support, including training programs, 
          mentorship, and access to financial resources. We believe in the power of entrepreneurship to transform lives 
          and drive economic growth in rural areas.
        </p>
      </section>

      <section className="Home-section">
        <h2>Our Programs</h2>
        <p>
          We offer a variety of programs designed to meet the needs of aspiring entrepreneurs in different stages of their 
          journey. From basic business training to advanced mentoring and funding opportunities, our programs are tailored 
          to help entrepreneurs succeed.
        </p>
        <ul>
          <li>Business Training Workshops</li>
          <li>Mentorship Programs</li>
          <li>Funding and Microfinance</li>
          <li>Market Access Initiatives</li>
        </ul>
      </section>

      <section className="image-gallery">
        <h2>Our Work in Action</h2>
        <div className="image-container">
          <ImageComponent imageUrl={ngoImage1} />
          <ImageComponent imageUrl={ngoImage2} />
        </div>
      </section>
    </div>
  );
}

export default Home;
