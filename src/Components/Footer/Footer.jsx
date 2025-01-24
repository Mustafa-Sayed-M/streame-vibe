import React from 'react';
import Links from './Components/Links';
import SocialProfiles from './Components/SocialProfiles';

const linksData = [
    {
        title: 'Home',
        linksData: [
            { to: '', text: 'Categories' },
            { to: '', text: 'Devices' },
            { to: '', text: 'Pricing' },
            { to: '', text: 'FAQ' }
        ]
    },
    {
        title: 'Movies',
        linksData: [
            { to: '', text: 'Genres' },
            { to: '', text: 'Trending' },
            { to: '', text: 'New Release' },
            { to: '', text: 'Popular' }
        ]
    },
    {
        title: 'Shows',
        linksData: [
            { to: '', text: 'Genres' },
            { to: '', text: 'Trending' },
            { to: '', text: 'New Release' },
            { to: '', text: 'Popular' }
        ]
    },
    {
        title: 'Support',
        linksData: [
            { to: '', text: 'Support' }
        ]
    },
    {
        title: 'Subscription',
        linksData: [
            { to: '', text: 'Plans' },
            { to: '', text: 'Features' }
        ]
    },
];

function Footer() {
    return (
        <footer className='bg-black-color-6'>
            <div className='container py-7'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3'>
                    {
                        linksData.map((item, index) => (
                            <Links key={index} title={item.title} linksData={item.linksData} />
                        ))
                    }
                    {/* Connect With Us */}
                    <SocialProfiles />
                </div>
            </div>
        </footer>
    )
}

export default Footer;