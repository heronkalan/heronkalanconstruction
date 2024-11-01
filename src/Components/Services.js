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
        "Stamped Concrete Driveways", // Added service
        "Gravel Driveways", // Added service
      ],
    },
    {
      service: "Basement Services",
      details: [
        "Basement Waterproofing",
        "Legal Basement Conversions",
        "Basement Finishing and Remodeling", // Added service
        "Egress Window Installation", // Added service
        "Foundation Repair", // Added service that can also apply to basements
      ],
    },
    {
      service: "Roofing Services",
      details: [
        "Roof Installation",
        "Roof Repair",
        "Asphalt Shingle Roofing",
        "Metal Roofing",
        "Flat Roofing Solutions", // Added service
        "Roof Inspections", // Added service
      ],
    },
    {
      service: "Concrete Paving",
      details: [
        "Walkways and Pathways",
        "Patios and Decks",
        "Parking Lots and Driveways",
        "Concrete Slabs for Various Applications", // Added service
        "Decorative Concrete Finishes", // Added service
      ],
    },
    {
      service: "Landscaping and Hardscaping",
      details: [
        "Garden Design and Installation", // Added service
        "Retaining Walls", // Added service
        "Outdoor Lighting", // Added service
        "Fencing Installation", // Added service
      ],
    },
    {
      service: "Additional Services",
      details: [
        "General Contracting", // Added service
        "Home Renovations and Additions", // Added service
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
