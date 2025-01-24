import React from 'react';
import { Link } from 'react-router-dom';

function Links({ title, linksData }) {
    return (
        <div className='links'>
            <h3 className='font-semibold mb-2'>{title}</h3>
            <ul>
                {
                    linksData.map((link, index) => (
                        <li key={index}>
                            <Link to={link.to} className='text-grey-color-60 block py-1 sm:hover:text-white transition'>{link.text}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Links;