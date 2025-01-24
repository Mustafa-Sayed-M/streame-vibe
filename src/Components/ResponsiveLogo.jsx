import React from 'react';
import mobileLogo from '../assets/images/logo/mobile.png';
import laptopLogo from '../assets/images/logo/laptop.png';
import desktopLogo from '../assets/images/logo/desktop.png';
import { Link } from 'react-router-dom';

const ResponsiveLogo = () => {
    return (
        <Link
            to={'/'}
            className='block'
        >
            <picture>
                {/* For Mobile */}
                <source media="(max-width: 768px)" srcSet={mobileLogo} />
                {/* For Laptop */}
                <source media="(min-width: 769px) and (max-width: 1024px)" srcSet={laptopLogo} />
                {/* For Desktop */}
                <img
                    src={desktopLogo}
                    alt="Logo"
                />
            </picture>
        </Link>
    );
};

export default ResponsiveLogo;