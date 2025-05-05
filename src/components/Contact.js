import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/DM.gif";

const EmailForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { firstName, lastName, email, phone, message });

    const serviceid = "";
    const templateid = "";
    const publickey = "";

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      phone: phone,
      message: message,
    };

    emailjs
      .send(serviceid, templateid, templateParams, publickey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={contactImg} alt="Contact illustration" />
      </div>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="emailForm">
          <h2>Get In Touch</h2>
          
          <div className="name-fields">
            <div className="form-group half-width">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group half-width">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="contact-fields">
            <div className="form-group half-width">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group half-width">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;