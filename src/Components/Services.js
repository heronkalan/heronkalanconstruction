// src/components/Services.js
import React from "react";
import "./Services.css"; // Import the CSS file

const Services = () => {
  const servicesList = [
    {
      service: "Driveway Construction",
      details: [
        "Asphalt Driveways",
        "Concrete Driveways",
        "Paver Driveways",
        "Stamped Concrete Driveways", 
        "Gravel Driveways", 
      ],
    },
    {
      service: "Basement Services",
      details: [
        "Basement Waterproofing",
        "Legal Basement Conversions",
        "Basement Finishing and Remodeling", 
        "Egress Window Installation", 
        "Side Entrance",
        "Foundation Repair",  
      ],
    },
    {
      service: "Kitchen Renovation",
      details: [
        "Custom cabinetry installation",
        "Countertop installation",
        "Backsplash installation",
        "Lighting design and installation",
        "Flooring installation",
        "Plumbing and electrical work",
        "Appliance installation",
        "Kitchen island construction",
        "Ventilation installation",
      ],
    },
    {
      service: "Bathroom Renovation",
      details: [
        "Shower and tub installation",
        "Vanity and countertop installation",
        "Tile installation",
        "Plumbing and electrical work",
        "Lighting design and installation",
        "Flooring installation",
        "Toilet installation",
        "Bathroom remodeling consultation",
      ],
    },
    {
      service: "Roofing Services",
      details: [
        "Roof Installation",
        "Roof Repair",
        "Asphalt Shingle Roofing",
        "Metal Roofing",
        "Flat Roofing Solutions", 
        "Roof Inspections", 
      ],
    },
    {
      service: "Concrete Paving",
      details: [
        "Walkways and Pathways",
        "Patios and Decks",
        "Parking Lots and Driveways",
        "Concrete Slabs for Various Applications", 
        "Decorative Concrete Finishes", 
      ],
    },
    {
      service: "Landscaping and Hardscaping",
      details: [
        "Garden Design and Installation", 
        "Retaining Walls", 
        "Outdoor Lighting", 
        "Fencing Installation", 
      ],
    },
    {
      service: "Additional Services",
      details: [
        "General Contracting", 
        "Home Renovations and Additions",
        "Plumbing",
        "Flooring & Tiles",
      ],
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Services Offered</h2>
      <div className="services-container"> {/* Using CSS class for styling */}
        {servicesList.map((serviceItem, index) => (
          <div key={index} className="service-box"> {/* Using CSS class for styling */}
            <h3 style={styles.serviceTitle}>{serviceItem.service}</h3>
            <ul style={styles.subList}>
              {serviceItem.details.map((detail, subIndex) => (
                <li key={subIndex} style={styles.subListItem}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    maxWidth: "800px",
    margin: "20px auto",
  },
  heading: {
    fontSize: "1.5em",
    marginBottom: "20px",
    textAlign: "center",
  },
  serviceTitle: {
    fontSize: "1.2em",
    marginBottom: "10px",
    color: "#333",
  },
  subList: {
    listStyleType: "circle",
    paddingLeft: "20px",
  },
  subListItem: {
    fontSize: "0.9em",
    color: "#666",
  },
};

export default Services;
