import React from 'react';
import SliderReviews from '../../../Sliders/SliderReviews';

function MediaReviews({ reviewsData }) {
    if (reviewsData.length === 0) return;
    return (
        <div data-aos='fade-up' data-aos-delay={200} className='media-reviews p-3 rounded-md bg-black-color-10 border border-black-color-15 lg:col-span-2'>
            <h4 className='text-grey-color-60 mb-2'>Reviews</h4>
            {/* Slider */}
            <SliderReviews reviewsList={reviewsData || []} />
        </div>
    )
}

export default MediaReviews;