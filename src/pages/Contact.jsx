import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import "../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully! (Backend integration needed)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Let's build something amazing together. Feel free to reach out!</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaCommentDots className="icon" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">
            Send Message <FaPaperPlane className="send-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
