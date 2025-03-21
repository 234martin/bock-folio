import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../Styles/home.css";
import profilePic from "../assets/profile.png/image.png";  // Import your profile picture
import project1 from "../assets/project1.png/image.png";   // Import project images
import project2 from "../assets/project2.png/image.png";
import project3 from "../assets/project3.png/image.png";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <motion.div
          className="overlay"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profilePic} alt="profile" className="profile-pic" />
          <h1>Hi, I'm <span className="highlight">Martin Kihungi</span></h1>
          <p>A Passionate <span className="highlight">Frontend Developer</span> 🚀</p>
          <motion.a
            href="#projects"
            className="btn"
            whileHover={{ scale: 1.1 }}
          >
            View My Work <FaArrowRight />
          </motion.a>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:your@email.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>My Work</h2>
        <motion.div 
          className="project-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="project-card">
            <img src={project1} alt="Project 1" />
            <h3>🔹 E-Commerce Platform</h3>
            <p>Built with React, Node.js & MongoDB</p>
          </div>
          <div className="project-card">
            <img src={project2} alt="Project 2" />
            <h3>🔹 AI Chatbot</h3>
            <p>Machine Learning chatbot using Python</p>
          </div>
          <div className="project-card">
            <img src={project3} alt="Project 3" />
            <h3>🔹 Portfolio Website</h3>
            <p>Fully responsive with animations</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
