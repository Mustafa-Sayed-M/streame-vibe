import React from 'react';

function SlidePrevious({ swiperRef }) {
    const handlePrev = () => {
        swiperRef.current.slidePrev();
    }
    return (
        <button
            type="button"
            aria-label="Previous"
            title="Previous"
            onClick={handlePrev}
            className="py-2 px-4 rounded-md bg-black-color-6 border border-black-color-12 sm:hover:bg-black-color-10 transition"
        >
            <i className="fa-solid fa-angle-left fa-w"></i>
        </button>
    )
}

export default SlidePrevious;