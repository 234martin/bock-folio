import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import "../styles/about.css";
import profilePic from "../assets/profile.png/image.png"; // Make sure this image exists

const About = () => {
  return (
    <section className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="about-content">
          {/* Profile Image */}
          <motion.img
            src={profilePic}
            alt="Profile"
            className="profile-pic"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* About Text */}
          <div className="about-text">
            <h1>👋 Hi, I'm <span>Martin Kihungi</span></h1>
            <p>
              I'm a passionate **Frontend Developer** with expertise in **React, Node.js, and JavaScript**. 
              I love building modern, scalable web applications and solving real-world problems.
            </p>
            <p>
              My journey in tech started with curiosity, and today, I specialize in crafting user-friendly experiences.
            </p>
            <p>📍 Based in **Nairobi, Kenya** | Available for remote work 🌍</p>
            
            {/* Skills Section */}
            <div className="skills">
              <h3>⚡ Skills & Technologies:</h3>
              <ul>
                <li>🚀 React.js & Next.js</li>
                <li>💻 Node.js & Express.js</li>
                <li>🎨 Tailwind CSS & Bootstrap</li>
                <li>🛠 MongoDB & Firebase</li>
              </ul>
            </div>

            {/* Contact Buttons */}
            <div className="about-buttons">
              <a href="/contact" className="btn-primary">📩 Contact Me</a>
              <a href="/portfolio" className="btn-secondary">📂 View Portfolio</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
