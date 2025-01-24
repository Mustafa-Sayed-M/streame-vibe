import React from 'react';
import MediaCard from '../Media/MediaCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeadSection from '../Sections/Components/HeadSection';
import SlidePrevious from './Components/SlidePrevious';
import SlideNext from './Components/SlideNext';
import 'swiper/css';

function SliderCards({ mediaList, title }) {
    const swiperRef = React.useRef(null);
    return (
        <div className='slider-container space-y-3'>
            {/* Head Section */}
            <HeadSection
                textData={{
                    title,
                }}
            >
                <div className='slider-controllers flex items-center gap-3'>
                    {/* Slide Previous */}
                    <SlidePrevious swiperRef={swiperRef} />
                    {/* Slide Next */}
                    <SlideNext swiperRef={swiperRef} />
                </div>
            </HeadSection>
            {/* Slider */}
            <Swiper
                spaceBetween={15}
                slidesPerView={3}
                breakpoints={{
                    0: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1280: {
                        slidesPerView: 4
                    },
                    1440: {
                        slidesPerView: 5
                    }
                }}
                onSwiper={swiper => swiperRef.current = swiper}
            >
                {
                    (mediaList || []).map((media, index) => <SwiperSlide key={index}>
                        <MediaCard mediaData={media} />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default SliderCards;