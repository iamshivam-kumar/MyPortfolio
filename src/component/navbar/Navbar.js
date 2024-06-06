import React, { useState } from 'react';
import './Navbar.css';
import { FaHome, FaPhoneAlt, FaFile, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='nav-container'>
            <div className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/skill">Skill</Link>
                <Link to="/project" onClick={() => {
                    const element = document.getElementById('project-section');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }}>Project</Link>

                <Link to="/contact">Contact</Link>
            </div>
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
    );
};

export default Navbar;