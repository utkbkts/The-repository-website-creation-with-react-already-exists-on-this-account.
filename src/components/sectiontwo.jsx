import React from 'react'
import "./sectiontwo.css"
import image8 from "../images/illustration-stay-productive.png"
import image10 from "../images/icon-arrow.svg";

const Sectiontwo = () => {
  return (
    <section>
        <div className='sectiontwo'>
            <div className='sectiontwoimage'>
                <img className='imageeight' src={image8} alt="" />
                <div className='sectiontwotitle'>
                    <h2>Stay productive wherever you are</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, exercitationem?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, pariatur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestiae?</p>
                    <div className='icon'>
                    <a href="#">See how fylo works  <img className='icons' src={image10} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sectiontwo
