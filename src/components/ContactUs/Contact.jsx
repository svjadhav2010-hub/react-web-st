import React from 'react';
import './Contact.css'
import mail_img from '../../assets/mail.svg';
import email from '../../assets/email.jpg';
import mobile from '../../assets/phone.png';
import address from '../../assets/location.png';
import rightArrow from '../../assets/right-arrow.png';
import contact_form from '../../assets/contact-form.png';

function Contact()
{
    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send Us a Message</h3><img src={mail_img} alt="" />
                <p>Feel Free to Reach Out through Contact Form. Also You Can Reach us through Following Contact Information. Your Feedback/ Suggestions are Important to Us as we strive to provide exceptional service to our customers</p>
                <ul>
                    <li><img src={email} alt='' />swayam@gmail.com</li>
                    <li><img src={mobile} alt='' />+91 9144XXXXXX</li>
                    <li><img src={address} alt='' />Seema Technologies, Vakratunda Row Bunglow, Amrtudham , Nashik-422003, Maharashtra</li>
                </ul>
            </div>
        </div>
    );
}
export default Contact;