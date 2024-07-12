import React from 'react';
import { AiFillStar } from "react-icons/ai";


const Testimonials = () => {
  return (
    <div className=' work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonials</p>
            <h1 className='primary-heading'>What Are They Saying</h1>
            <p className='primary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse nostrum, corporis odit quibusdam quae.</p>
        </div>
        <div className='testimonial-section-bottom'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit totam voluptatibus earum alias ratione nemo.</p>
            <div className='testimonials-stars-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>Francisco Acuña</h2>
        </div>
    </div>
  );
};

export default Testimonials;