import React from 'react'
import "../components/FooterStyle.css"
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    <div>
                        <p>123 housing socity</p>
                        <p>bangaldesh</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color:"#fff", marginRight:"2rem" }} />
                    1-2323-343-23</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem" }} />
                    www.info@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>about the website</h4>
                <p>this is me kabir. i enjoy discussing new project and design challenge.</p>
                <div className="social">
                    <FaFacebook size={30} style={{ color:"#fff", marginRight:"1rem"}} />
                    <FaInstagram size={30} style={{ color:"#fff", marginRight:"1rem"}} />
                    <FaTwitter size={30} style={{ color:"#fff", marginRight:"1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;