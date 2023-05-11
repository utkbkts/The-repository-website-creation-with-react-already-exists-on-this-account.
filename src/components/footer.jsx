import React from 'react';
import "./footer.css";
import image15 from "../images/logo.svg";


const Footer = () => {
  return (
    
    <footer>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className='Footer'>
            <div className='footer-kapsams'>
                <div className='footer-image'>
                <img src={image15} alt="" />
            <div className='footer-title'>
            <i class="fa-solid fa-location-dot"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, magnam! Veritatis, odio? Ipsam saepe laboriosam, commodi id doloribus quod maiores!</p>
            </div>
                </div>
          
            <div className='iconfolid'>
                <p>
                <i class="fa-solid fa-phone"></i>
                +1-543-123-4567
                </p>
            <p>
            <i class="fa-solid fa-envelope"></i>
                example@fylo.com
            </p>
            </div>
            <div className='about-kapsam'>
            <div className='aboutone'>
                <p>About Us</p>
                <p>Jobs</p>
                <p>Press</p>
                <p>Blog</p>
            </div>
            <div className='abouttwo'>
                <p>Contact Us</p>
                <p>Terms</p>
                <p>Privacy</p>
                </div>
            </div>
            <div className='icon-footer'>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
