import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './logo.png'
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  function handleClick(event) {
    event.preventDefault();
    const target = event.target.hash;
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo}/>
        </a>
        <div className="menu-icon" onClick={handleToggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" className="nav-links">
            Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">
            About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">
            Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">
            Hobbies/Passions
            </a>
          </li>
          <li className="nav-item">
            <a href="#Peojects" className="nav-links">
            Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
