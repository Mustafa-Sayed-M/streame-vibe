import React from 'react';
import SliderImages from '../../../Sliders/SliderImages';

function MediaImages({ imagesData }) {
    if (imagesData.length === 0) return;
    return (
        <div data-aos='fade-up' className='media-images p-3 rounded-md bg-black-color-10 border border-black-color-15 lg:col-span-2'>
            <h4 className='text-grey-color-60 mb-2'>Images</h4>
            {/* Slider Images */}
            <SliderImages imagesList={imagesData} />
        </div>
    )
}

export default MediaImages;