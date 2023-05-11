import React from 'react';
import image1 from "../images/logo.svg";
import "./navbar.css";

function Navbar() {

  function toggleMenu() {
    const hamburger = document.querySelector(".hamburger");
    const Navlogo = document.querySelector(".Nav-logo");

    hamburger.classList.toggle("active");
    Navlogo.classList.toggle("active");
  }

  return (
    <nav>
      <div className='Nav-logo'>
        <img src={image1} alt=""/>
        <div className='navbar'>
          <ul className='navlink'>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </nav>
  );
}

export default Navbar;
