import React from 'react';

const linksData = [
    { href: 'https://www.facebook.com/sh3dowone1/', fontAwesomeIconClass: 'facebook' },
    { href: 'https://www.linkedin.com/in/sh3dowone1/', fontAwesomeIconClass: 'linkedin' },
    { href: 'https://www.instagram.com/sh3dowone1/', fontAwesomeIconClass: 'instagram' },
    { href: 'https://github.com/Mustafa-Sayed-M', fontAwesomeIconClass: 'github' },
    { href: 'https://x.com/sh3dowone1', fontAwesomeIconClass: 'x-twitter' },
]

function SocialProfiles() {
    return (
        <div className='social-profiles'>
            <h3 className='font-semibold mb-2'>Connect With Us</h3>
            <ul className='flex flex-wrap items-center gap-2'>
                {
                    linksData.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                target='_blank'
                                rel="noreferrer"
                                className='p-1 w-10 h-10 leading-10 text-center rounded-md bg-black-color-10 border border-black-color-15 sm:hover:bg-black-color-15 transition'
                            >
                                <span className='sr-only'>{link.fontAwesomeIconClass}</span>
                                <i className={`fa-brands fa-${link.fontAwesomeIconClass} fa-fw`}></i>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialProfiles;