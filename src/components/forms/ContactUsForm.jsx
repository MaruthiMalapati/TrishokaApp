// src/ContactUs.js
import React, { useState } from "react";
// import "./ContactUs.css"; // Import the CSS file
// src/index.js or src/App.js
import "./ContactUsform.css";
// import styles from "./ContactUsform.module.scss";
// import "font-awesome/css/font-awesome.min.css";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., send data to your server)
  };

  return (
    <div className="contactContainer">
      <div className="formSection">
        <h2>Write us</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submitButton">
            Send Message
          </button>
        </form>
      </div>
      <div className="infoSection">
        <h2>Contact Information</h2>
        <p>We're open for any suggestion or just to have a chat</p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <p>📍</p>
          <p>
            <strong>Address:</strong> 198 West 21st Street, Suite 721, New York,
            NY 10016
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <p>📞</p>
          <p>
            <strong>Phone:</strong> +1235 235 598
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <p>📧</p>
          <p>
            <strong>Email:</strong> info@yoursite.com
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <p>🌐</p>
          <p>
            <strong>Website:</strong> yoursite.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
