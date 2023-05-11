import React from 'react'
import "./section.css"
import image3 from "../images/icon-collaboration.svg"
import image4 from "../images/icon-any-file.svg"
import image5 from "../images/icon-security.svg"
import image6 from "../images/icon-access-anywhere.svg"

const Section = () => {
  return (
    <section>
        <div className='section-head'>
          <div className='Section-Main'>
          <div className='card'>
          <img src={image3} alt="" />
            <h4>Real-time collaboration</h4>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration.No emial attachments required.</p>
          </div>
          <div className='card'>
          <img src={image4} alt="" />
            <h4>Real-time collaboration</h4>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration.No emial attachments required.</p>
          </div>
          <div className='card'>
          <img src={image5} alt="" />
            <h4>Security you can trust</h4>
            <p>2-factor authentication and user-controlled encryption are just a couple of the securtiy features we allow to help secure your files.</p>
          </div>
          <div className='card'>
          <img src={image6} alt="" />
            <h4>Access your files, anywhere</h4>
            <p>The ability to use a smartphone, tablet, or computer to access your account means your files folloy you everywhere</p>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Section
