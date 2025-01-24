import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SlidePrevious from './Components/SlidePrevious';
import SlideNext from './Components/SlideNext';
import 'swiper/css';

const ImageItem = ({ image }) => {
    const { file_path, width, height } = image;
    return (
        <div className={`image-item`}>
            <LazyLoadImage
                src={`https://image.tmdb.org/t/p/w500${file_path}`}
                alt=''
                title={`Width ( ${width}px ) and Height ( ${height}px )`}
                effect='blur'
                className={`rounded-md`}
            />
        </div>
    )
};

function SliderImages({ imagesList }) {
    const swiperRef = React.useRef(null);
    return (
        <div className='slider-container flex items-center gap-3'>
            {/* Slider */}
            <Swiper
                spaceBetween={15}
                slidesPerView={3}
                breakpoints={{
                    0: {
                        slidesPerView: 1.5
                    },
                    575: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2.5
                    }
                }}
                onSwiper={swiper => swiperRef.current = swiper}
                className='flex-1'
            >
                {
                    (imagesList || []).map((image, index) => <SwiperSlide key={index}>
                        <ImageItem image={image} />
                    </SwiperSlide>)
                }
            </Swiper>
            {/* Slider Controllers */}
            <div className='flex flex-col gap-3 text-center'>
                {/* Slide Previous */}
                <SlidePrevious swiperRef={swiperRef} />
                {/* Slider Length */}
                <p className='text-grey-color-60 line-clamp-1'>( {imagesList.length} )</p>
                {/* Slide Next */}
                <SlideNext swiperRef={swiperRef} />
            </div>
        </div>
    )
}

export default SliderImages;