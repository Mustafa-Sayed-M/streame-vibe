import React from 'react';
import Landing from '../Components/Sections/Landing';
import Devices from '../Components/Sections/Devices';
import Faqs from '../Components/Sections/Faqs';
import Plans from '../Components/Sections/Plans';

function Home() {
    return (
        <div className='home-page'>
            {/* Landing Section */}
            <Landing />
            {/* Devices Section */}
            <Devices />
            {/* FAQs Section */}
            <Faqs />
            {/* Plans Sections */}
            <Plans />
        </div>
    )
}

export default Home;