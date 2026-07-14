import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar()
{
    const [sticky, setSticky] = useState(false);
    useEffect(()=>
    {
        window.addEventListener('scroll', ()=>
        {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    },[]);
    
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="logo is currently unavailable" className="logo"/>
            <ul>
                <li><Link to="hero" smooth={true} offset={0} duration={500}> Home </Link></li>
                <li><Link to="about" smooth={true} offset={-18} duration={500}> About Us </Link></li>
                <li><Link to="services" smooth={true} offset={-290} duration={500}> Services </Link></li>
                <li><Link to="internship" smooth={true} offset={-240} duration={500}> Internship </Link></li>
                <li><Link to="testimonial" smooth={true} offset={-290} duration={500}> Testimonials </Link></li>
                <li><Link to="gallery" smooth={true} offset={-250} duration={500}> Gallery </Link></li>
                <li><Link to="contact" smooth={true} offset={-290} duration={500}> Contact Us </Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;