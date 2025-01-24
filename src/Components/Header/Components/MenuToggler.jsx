import React from 'react';
import useNavbarMenu from '../../../Hooks/useNavbarMenu';

function MenuToggler() {
    const { openMenu, toggleMenu } = useNavbarMenu();
    return (
        <button
            type='button'
            aria-label='Menu Toggler'
            className='text-2xl md:hidden'
            onClick={() => toggleMenu(!openMenu)}
        >
            <i className="fa-solid fa-bars fa-fw"></i>
        </button>
    )
}

export default MenuToggler;