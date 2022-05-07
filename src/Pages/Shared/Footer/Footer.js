import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <p className=''>Copyright © {(new Date().getFullYear())}</p>
        </div>
    );
};

export default Footer;