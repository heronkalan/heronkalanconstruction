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

      <section className="services">
        <h2>Testimonials</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Residential Driveway</h3>
            <p>"HeronKalan Construction did an outstanding job on our new driveway! The team was professional, punctual, and kept us informed throughout the entire process. Our stamped concrete driveway looks fantastic, and we've already received compliments from neighbors. Highly recommend them for any driveway work!" - <b>John M., Homeowner</b></p>
          </div>
          <div className="service-item">
            <h3>Asphalt Driveway for Commercial Property</h3>
            <p>"We hired HeronKalan Construction to resurface the driveway for our business, and the results exceeded our expectations. The crew was efficient, and the new asphalt driveway has significantly improved the look and functionality of our property. We couldn't be happier with their work!" - <b>Sarah L., Business Owner</b></p>
          </div>
          <div className="service-item">
            <h3>Concrete Driveway Installation</h3>
            <p>"From start to finish, HeronKalan Construction was amazing. They helped us choose the best material for our needs, and the final result is a beautiful, durable concrete driveway. The attention to detail and quality of work were top-notch!" - <b>Michael T., Homeowner</b></p>
          </div>
          <div className="service-item">
            <h3>Driveway Extension</h3>
            <p>"We needed to extend our driveway for additional parking space, and HeronKalan Construction made the whole process seamless. They completed the project on time and within budget. The new driveway matches perfectly with the old one, and we are beyond satisfied with the result." - <b>Emily R., Homeowner</b></p>
          </div>
          <div className="service-item">
            <h3>Paver Driveway</h3>
            <p>"HeronKalan Construction installed a paver driveway at our home, and the craftsmanship is outstanding! They worked with us on the design, were very responsive, and left the site spotless. Our driveway now adds so much curb appeal. We highly recommend their services!" - <b>David and Lisa S., Homeowners</b></p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 HERONKALAN CONSTRUCTION. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
