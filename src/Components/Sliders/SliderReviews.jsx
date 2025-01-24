import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlidePrevious from './Components/SlidePrevious';
import SlideNext from './Components/SlideNext';
import 'swiper/css';

const ReviewItem = ({ reviewData }) => {
    const {
        author,
        author_details: {
            avatar_path,
            name,
            rating,
            username
        },
        content } = reviewData;
    return (
        <div className='review-item p-3 bg-black-color-12 border border-black-color-15 rounded-md space-y-3'>
            {/* Author Info */}
            <div className='author-info flex items-center justify-between'>
                {/* Avatar */}
                {
                    avatar_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${avatar_path}`}
                            alt={username || author || name}
                            className='w-10 h-10 object-cover rounded-full'
                        />
                    ) : username || author || name
                }
                {/* Rating */}
                <div className='rating text-sm text-red-color-45 space-x-1'>
                    {/* Rate Number */}
                    <span>( {rating} )</span>
                    {/* Star Icon */}
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
            </div>
            <p className='line-clamp-4 text-grey-color-60'>{content}</p>
        </div>
    )
}

function SliderReviews({ reviewsList }) {
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
                    768: {
                        slidesPerView: 2
                    }
                }}
                onSwiper={swiper => swiperRef.current = swiper}
                className='flex-1'
            >
                {
                    (reviewsList || []).map((review, index) => <SwiperSlide key={index}>
                        <ReviewItem reviewData={review} />
                    </SwiperSlide>)
                }
            </Swiper>
            {/* Slider Controllers */}
            <div className='flex flex-col gap-3 text-center'>
                {/* Slide Previous */}
                <SlidePrevious swiperRef={swiperRef} />
                {/* Slider Length */}
                <p className='text-grey-color-60 line-clamp-1'>( {reviewsList.length} )</p>
                {/* Slide Next */}
                <SlideNext swiperRef={swiperRef} />
            </div>
        </div>
    )
}

export default SliderReviews;