import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Components/Nav';
import ResponsiveLogo from '../ResponsiveLogo';
import MenuToggler from './Components/MenuToggler';

function Header() {
    return (
        <header className='sticky top-0 left-0 z-50 bg-black-color-8 shadow-md'>
            <div className='container bg-black-color-8 py-3 flex items-center justify-between flex-wrap gap-y-3 relative'>
                {/* Responsive Logo */}
                <ResponsiveLogo />
                {/* Nav */}
                <Nav />
                {/* Box Container */}
                <div className='box-container flex items-center gap-3'>
                    {/* Search Link */}
                    <NavLink
                        to={`/search?type=multi`}
                        className={({ isActive }) => `${isActive ? 'text-red-color-45' : 'sm:hover:text-red-color-45'} text-xl transition`}
                    >
                        <span className='sr-only'>Search</span>
                        <i className="fa-solid fa-magnifying-glass fa-fw"></i>
                    </NavLink>
                    {/* Menu Toggler */}
                    <MenuToggler />
                </div>
            </div>
        </header>
    )
}

export default Header;