import React from 'react';
import smartphoneIcon from '../../assets/images/devices/smartphones.png';
import tabletIcon from '../../assets/images/devices/tablet.png';
import smartTvIcon from '../../assets/images/devices/smart-tv.png';
import laptopsIcon from '../../assets/images/devices/laptops.png';
import gamingConsolesIcon from '../../assets/images/devices/gaming-consoles.png';
import vrHeadsetsIcon from '../../assets/images/devices/vr-headsets.png';
import HeadSection from './Components/HeadSection';
const devicesData = [
    {
        id: 1,
        icon: smartphoneIcon,
        name: 'Smartphones',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    },
    {
        id: 2,
        icon: tabletIcon,
        name: 'Tablet',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    },
    {
        id: 3,
        icon: smartTvIcon,
        name: 'Smart TV',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    },
    {
        id: 4,
        icon: laptopsIcon,
        name: 'Laptops',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    },
    {
        id: 5,
        icon: gamingConsolesIcon,
        name: 'Gaming Consoles',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    },
    {
        id: 6,
        icon: vrHeadsetsIcon,
        name: 'VR Headsets',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    },
];
const DeviceItem = ({ deviceData }) => {
    const { icon, name, description } = deviceData;
    return (
        <div className='device-item bg-gradient-to-tr from-[#0F0F0F] via-[#0F0F0F] to-[#E50000]/10 border border-black-color-15 rounded-md p-5 space-y-2'>
            <div className='flex items-center gap-2'>
                {/* Icon */}
                <div className='w-12 h-12 flex items-center justify-center rounded-md bg-black-8 border border-black-color-12 p-1'>
                    <img src={icon} alt={`${name} icon`} />
                </div>
                <h3>{name}</h3>
            </div>
            <p className='text-grey-color-60'>{description}</p>
        </div>
    )
};

function Devices() {
    return (
        <section className='devices' id='devices'>
            <div className='container space-y-7 py-7'>
                {/* Head Section */}
                <HeadSection
                    textData={{
                        title: `We Provide you streaming experience across various devices.`,
                        description: `With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.`,
                    }}
                />
                {/* Devices Grid */}
                <div className='devices-grid grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {devicesData.map((device, index) => (
                        <DeviceItem key={index} deviceData={device} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Devices;