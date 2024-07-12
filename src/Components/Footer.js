import React from 'react';
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';



const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt="" />
            </div>
            <div className='footer-icons'>
                <BsTwitter/>
                <BsYoutube/>
                <FaFacebook/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Calidad</span>
                <span>Ayuda</span>
                <span>Compartir</span>
                <span>Carreras</span>
                <span>Testimonios</span>
                <span>Trabajo</span>
            </div>
            <div className='footer-section-columns'>
                <span>+524777890987</span>
                <span>hola@comidasaludable.org</span>
                <span>contacto@comidasaludable.org</span>
            </div>
            <div className='footer-section-columns'>
                <span>Términos y Condiciones</span>
                <span>Política de Privacidad</span>
            </div>
        </div>
    </div>
  );
};

export default Footer