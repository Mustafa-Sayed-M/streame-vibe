import React from 'react';
import { NavLink } from 'react-router-dom';
import useNavbarMenu from '../../../Hooks/useNavbarMenu';

const links = [
    { to: '/', text: 'Home' },
    { to: '/movies', text: 'Movies' },
    { to: '/shows', text: 'Shows' }
]

function Nav() {
    const { openMenu, toggleMenu } = useNavbarMenu();
    return (
        <nav className={`bg-black-color-6 border-2 border-black-color-12 rounded-md p-2 max-md:w-full max-md:order-1 max-md:absolute left-0 mx-auto top-[65px] max-md:-z-10 transition ${!openMenu && 'max-md:-translate-y-[400px]'}`}>
            <ul className='md:flex md:items-center md:gap-1 max-md:space-y-1'>
                {
                    links.map((link, index) => <li key={index}>
                        <NavLink
                            onClick={() => toggleMenu(false)}
                            to={link.to}
                            className={({ isActive }) => `${isActive ? 'bg-black-color-10' : 'sm:hover:bg-black-color-10'} py-2 px-4 rounded-md block transition`}
                        >
                            {link.text}
                        </NavLink>
                    </li>)
                }
            </ul>
        </nav>
    )
}

export default Nav;