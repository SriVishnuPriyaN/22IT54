// pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <>
      <section className="page">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
      </section>

      <div className="form-container">
        <h2>Send a Message</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Subject" />
        <textarea
          placeholder="Your Message"
          rows="5"
          style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button type="button">Submit</button>
      </div>
    </>
  );
}
