import React from 'react';
import background from '../assets/images/subscribe.webp';

function Subscribe() {
    return (
        <div className='subscribe'>
            <div className='container py-7'>
                <div
                    style={{
                        backgroundImage: `url(${background})`
                    }}
                    className='h-[200px] bg-red-400 rounded-md'
                >
                    <div className='h-full bg-gradient-to-r from-[#0F0F0F] via-black/80 to-[#E50000]/40 rounded-md md:flex space-y-5 max-md:text-center items-center justify-between p-5'>
                        {/* Text */}
                        <div className='md:w-3/4 space-y-2'>
                            <h2 className='sm:text-xl md:text-2xl font-semibold'>Start your free trial today!</h2>
                            <p className='text-grey-color-60'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                        </div>
                        <button
                            type='button'
                            className='bg-red-color-45 py-2 px-4 rounded-md font-medium sm:hover:bg-white sm:hover:text-red-color-45 transition'
                        >Start Free Trial</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;