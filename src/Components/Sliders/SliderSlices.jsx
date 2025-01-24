import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import MediaSlice from '../Media/MediaSlice';
import SlidePrevious from './Components/SlidePrevious';
import SlideNext from './Components/SlideNext';
import 'swiper/css';

const SliderControllers = ({ currentSlideNum, slidesLength, swiperRef }) => {
    return (
        <div className="slider-controllers flex items-center justify-between">
            {/* Prev Button */}
            <SlidePrevious swiperRef={swiperRef} />
            {/* Active Index */}
            <p className="text-grey-color-60">
                {currentSlideNum} of {slidesLength}
            </p>
            {/* Next Button */}
            <SlideNext swiperRef={swiperRef} />
        </div>
    );
};

function SliderSlices({ mediaList }) {
    const swiperRef = React.useRef(null);
    const [currentSlideNum, setCurrentSlideNum] = React.useState(1);
    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setCurrentSlideNum(swiper.activeIndex + 1)} // Update active index
                className="mb-3"
            >
                {(mediaList || []).map((media, index) => (
                    <SwiperSlide key={index}>
                        <MediaSlice mediaData={media} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Slider Controllers */}
            <SliderControllers
                currentSlideNum={currentSlideNum}
                slidesLength={mediaList.length || 0}
                swiperRef={swiperRef}
            />
        </>
    );
}

export default SliderSlices;