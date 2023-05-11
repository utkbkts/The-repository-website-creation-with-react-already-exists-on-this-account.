import React from 'react'
import "./card.css"
import imagecard from "../images/bg-quotes.png"
import avatar1 from "../images/profile-1.jpg";

const Card = () => {
  return (
   <section>
    <div className='card-body'>
        <div className='card-two'>
                <div className='Card-body-title'>
                    <img className='imagecard' src={imagecard} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia quidem possimus similique ad eum ipsam consequatur repudiandae animi! Itaque, obcaecati assumenda. Corrupti, harum et veniam quos aperiam voluptates ipsam aspernatur iste, suscipit consequatur reprehenderit inventore blanditiis laudantium. Iusto, molestiae?</p>
                    <div className='avatar'>
                        <img className='avatar1' src={avatar1} alt="" />
                        <div>
                        <h4>satish Patel</h4>
                        <p>Founder & CEO , Huddle</p>
                        </div>
                      
                    </div>
                </div>
                <div className='Card-body-title'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia quidem possimus similique ad eum ipsam consequatur repudiandae animi! Itaque, obcaecati assumenda. Corrupti, harum et veniam quos aperiam voluptates ipsam aspernatur iste, suscipit consequatur reprehenderit inventore blanditiis laudantium. Iusto, molestiae?</p>
                    <div className='avatar'>
                        <img className='avatar1' src={avatar1} alt="" />
                        <div>
                        <h4>satish Patel</h4>
                        <p>Founder & CEO , Huddle</p>
                        </div>
                    </div>
                </div>
                <div className='Card-body-title'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia quidem possimus similique ad eum ipsam consequatur repudiandae animi! Itaque, obcaecati assumenda. Corrupti, harum et veniam quos aperiam voluptates ipsam aspernatur iste, suscipit consequatur reprehenderit inventore blanditiis laudantium. Iusto, molestiae?</p>
                    <div  className='avatar'>
                        <img className='avatar1' src={avatar1} alt="" />
                        <div>
                        <h4>satish Patel</h4>
                        <p>Founder & CEO , Huddle</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
   </section>
  )
}

export default Card
