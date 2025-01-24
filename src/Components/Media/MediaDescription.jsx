import React from 'react';

function MediaDescription({ description }) {
    if (!description) return;
    return (
        <div data-aos='fade-up' className='media-description p-3 rounded-md bg-black-color-10 border border-black-color-15 lg:col-span-2'>
            <h4 className='text-grey-color-60 mb-2'>Description</h4>
            <p>{description}</p>
        </div>
    )
}

export default MediaDescription;