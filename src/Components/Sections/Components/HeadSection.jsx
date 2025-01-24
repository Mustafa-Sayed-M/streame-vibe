import React from 'react';

function HeadSection({ textData, children }) {
    return (
        <div className='head-section flex max-md:flex-col md:items-center justify-between gap-5'>
            {/* Text */}
            <div className='md:w-3/4'>
                <h2 className='sm:text-xl md:text-2xl font-semibold uppercase'>{textData.title}</h2>
                <p className='text-grey-color-60 mt-2'>{textData.description}</p>
            </div>
            {/* Additional Component */}
            <div className='extra-content'>
                {children}
            </div>
        </div>
    )
}

export default HeadSection;