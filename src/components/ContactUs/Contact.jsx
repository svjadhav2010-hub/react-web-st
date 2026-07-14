import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/mail.svg";
import mail_icon from "../../assets/mail.png";
import phone_icon from "../../assets/phone.png";
import location_icon from "../../assets/location.png";
import rightarrow from "../../assets/right-arrow.png";
import contact_form from "../../assets/contact-form.png";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "1a2b3c4d-5678-90ab-cdef-1234567890ab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) 
    {
      setResult("Form Submitted Successfully");
      event.target.reset();
    }
    else 
    {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">

      <div className="contact-col">
        <h3>
          Send us a message
          <img src={msg_icon} alt="" />
        </h3>

        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions and suggestions are
          important to us as we strive to provide exceptional service.
        </p>

        <ul>
          <li>
            <img src={mail_icon} alt="" />
            swayamvjadhav2010@gmail.com
          </li>

          <li>
            <img src={phone_icon} alt="" />
            9168469900
          </li>

          <li>
            <img src={location_icon} alt="" />
            Seema Technologies, Vakratund Row Bunglow,
            Amrutdham, Nashik - 422003
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>

            <h3>
                Contact Form
                <img src={contact_form} alt="" />
            </h3>

            <label>Enter your name</label>
            <input
                type="text"
                name="Name"
                placeholder="Enter your name"
                required
            />

            <label>Enter your phone number</label>
            <input
                type="tel"
                name="Phone"
                placeholder="Enter your phone number"
                required
            />

            <label>Enter your courses of interest</label>
            <input
                type="text"
                name="Courses"
                placeholder="Enter your courses of interest"
                required
            />

            <label>Write your message</label>
            <textarea
                name="Message"
                rows="6"
                placeholder="Enter your message"
                required
            ></textarea>

            <button type="submit" className="btn dark-btn">
                Submit
                <img src={rightarrow} alt="" />
            </button>

        </form>

        <span>{result}</span>
    </div>

    </div>
  );
};

export default Contact;