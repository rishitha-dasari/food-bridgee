import React from 'react';
import Navbar from './Navbar';
import './css-files/about.css'; // Separate CSS for About page

const About = () => {
  return (
    <div className="about-page">
      <Navbar /> {/* Reusable Navbar */}

      {/* Split Section */}
      <section className="split-about">
        {/* Left Side - Text */}
        <div className="about-text">
          <h1>ABOUT US</h1>
          <p>
            FOOD BRIDGE is a student-led initiative dedicated to combating food waste and alleviating hunger in our communities. 
            With a passionate team of students, we're committed to making a meaningful impact by redistributing surplus food from local businesses to those in need.
            <br /><br />
            Driven by our belief in the power of collective action, we strive to foster a culture of sustainability and compassion. Through strategic partnerships and innovative solutions, we aim to ensure that no edible food goes to waste while simultaneously addressing food insecurity.
            <br /><br />
           
          </p>
        </div>

        {/* Right Side - Map */}
        <div className="about-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.1666147479586!2d81.51952307583996!3d16.56811898418594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4eb220051d%3A0xea3d7b50d0a1458!2sShri%20Vishnu%20Engineering%20College%20Autonomous!5e0!3m2!1sen!2sin!4v1757777143158!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: "0" }} 
            allowFullScreen="" 
            title="Location Map"
          ></iframe>
          </div>
      </section>
    </div>
  );
};

export default About;
