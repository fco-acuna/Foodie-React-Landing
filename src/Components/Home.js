import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt="" />
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                    Tu Comida Favorita A La Puerta De Tu Casa
                </h1>
                <p className='primary-text'>
                    Paquetes de comida pre-preparada, cortada, sazonada y lista
                    para que cocines comida fresca y de la mejora calidad 
                    en tu propia cocina
                </p>
                <button className='secondary-button'>
                    Pide Ya! <FiArrowRight/>
                </button>
            </div>
            <div className='home-image-container'>
                <img src={BannerImage} alt="" />
            </div>








        </div>
    </div>
  )
}

export default Home