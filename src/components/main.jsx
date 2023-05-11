import React from 'react';
import image2 from "../images/bg-curvy-desktop.svg";
import image3 from "../images/illustration-intro.png"
import "./main.css";

const Main = () => {
  return (
    <main>
        <div className='main-header'>
          <div className='kapsam'>
            <img className='imagetwo' src={image2} alt=""/>
            <div className='main-logo'>
                <img className='logomain' src={image3} alt="" />
                <div className='title'>
                    <h3>All your files in one secure location. accessible anywhere</h3>
                    <p>Fylo stores all your most important files in one secure location.Access them wherever you need, share and collaborate with friends family, and co-workers</p>
                    <button className='btn'>Get Started</button>
                </div>
            </div>
            </div>
        </div>
    </main>
  )
}

export default Main
