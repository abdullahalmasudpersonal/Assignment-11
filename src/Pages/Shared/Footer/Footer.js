import React from 'react';
import './Footer.css';
import logo from '../../../image/warehouse-logo.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer'>
            <div className='footer-img '>
                <img className='mt-5' src={logo} height='50px' alt='' />
            </div>

            <div className='footer-copy'>
                <p className='mt-5'>Copyright&copy;{year}</p>
            </div>
        </div>
    );
};

export default Footer;