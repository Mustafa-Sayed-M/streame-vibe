import React from 'react'

function SlideNext({ swiperRef }) {
    const handleNext = () => {
        swiperRef.current.slideNext();
    }
    return (
        <button
            type="button"
            aria-label="Next"
            title="Next"
            onClick={handleNext}
            className="py-2 px-4 rounded-md bg-black-color-6 border border-black-color-12 sm:hover:bg-black-color-10 transition"
        >
            <i className="fa-solid fa-angle-right fa-w"></i>
        </button>
    )
}

export default SlideNext
