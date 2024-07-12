import React from 'react';
import AboutBackground from "../Assets/about-background.png"; 
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs"

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'> 
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>Una Comida Balanceada Es Vital Para Una Mejor Vida</h1>
            <p className='primary-text'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. At amet fuga, assumenda omnis vel ex, obcaecati veritatis dolorum sint ut dolor expedita maiores eum odit.</p>
            <p className='primary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, architecto. Officia accusantium excepturi minima blanditiis!</p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Aprende Más</button>
                <button className='watch-video-button'> <BsFillPlayCircleFill/> Ve el video</button>
            </div>
        </div>
    </div>
  )
}

export default About