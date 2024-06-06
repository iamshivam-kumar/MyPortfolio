import React from 'react';
import { FaHome, FaPhoneAlt, FaFile, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ul>
          <li><FaHome style={{ marginRight: '10px' }} /> Dariyapur Lakhisarai Bihar, India</li>
          <li><FaPhoneAlt style={{ marginRight: '10px' }} /> +91-99050 46505</li>
          <li><IoMdMail style={{ marginRight: '10px' }} /> shivamsinghlkr23@gmail.com</li>
        </ul>
      </div>
      <div>
        <h3 style={{marginLeft:'25px'}}>About Me</h3>
        <div className='nav-icons'>
          <a href="https://www.linkedin.com/in/shivam-kumar-841097309?utm_source=share&utm_campaign=share_via&utm" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/iamshivam-kumar" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://drive.google.com/file/d/10rfqSPIoAMLGizfDxjEStqXJ3CXlKXiR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FaFile />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
