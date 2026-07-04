import React,{useEffect, useState} from 'react'
import Logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [sticky, setSticky]=useState(false)
    
    useEffect(()=>{
        window.addEventListener(
            'scroll',()=>{
                window.scrollY > 50 ? setSticky(true) : setSticky(false)
            }
        )
    },[])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={Logo} alt='Logo is currently is unavailable' className='logo'/>
        <ul>
            <li>
                <Link smooth={true} offset={0} duration={500} >Home</Link>
                <Link>About Us</Link>
                <Link>Services</Link>
                <Link>Internship</Link>
                <Link>Testimonial</Link>
                <Link>Gallery</Link>
                <Link>Contact Us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
