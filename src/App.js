import React from 'react';
import './App.css';
import SocialMediaBar from './Components/SocialMediaBar';

function App() {
  return (
    <div className="App">
      <SocialMediaBar />
      {/* <img
      className='logo-image' 
      src="heron-kalan-construction-logo.jpg" 
      alt="HeronKalan Construction Logo" 
      /> */}
      <header className="App-header">
        <h1>HERONKALAN CONSTRUCTION</h1>
        <p>Your trusted partner for Driveway and Basement Constructions.</p>
        {/* <button>Contact Us</button> */}
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Driveway Paving</h3>
            <p>We offer expert paving services for your driveways that last for years.</p>
            <p>We Specialize in Private and Commercial Contract Driveway Repairs and Grading</p>
          </div>
          <div className="service-item">
            <h3>Legal Basements</h3>
            <p>Turn your basement into a legal and livable space with our specialized services.</p>
          </div>
          <div className="service-item">
            <h3>Basement Renovations</h3>
            <p>Renovate your basement and make the most of the space in your home.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Testimonials</h2>
      </section>

      <footer>
        <p>&copy; 2024 HERONKALAN CONSTRUCTION. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
