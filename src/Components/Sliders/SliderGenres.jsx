import React, { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlidePrevious from './Components/SlidePrevious';
import SlideNext from './Components/SlideNext';
import { Link, useSearchParams } from 'react-router-dom';
import 'swiper/css';

function SliderGenres({ genresList }) {
  const swiperRef = React.useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // Handle click to update genre in URL
  const handleClick = useCallback((e) => {
    e.preventDefault();
    const genreId = e.target.dataset.genreId;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('genre', genreId);
    setSearchParams(newSearchParams);
  }, [searchParams, setSearchParams]);

  // Active genre
  const activeGenreId = +searchParams.get('genre');
  const initialSlideIndex = genresList.findIndex((genre) => genre.id === activeGenreId);

  return (
    <div className="slider-container flex items-center gap-3">
      {/* Slide Previous */}
      <SlidePrevious swiperRef={swiperRef} />

      {/* Slider */}
      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        initialSlide={initialSlideIndex !== -1 ? initialSlideIndex : 0} // Default to the first slide if no match
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1440: { slidesPerView: 5 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="flex-1"
      >
        {(genresList || []).map((genre) => {
          const { id, name } = genre;
          const isActiveSlide = activeGenreId === id;

          return (
            <SwiperSlide key={id}>
              <Link
                to="/"
                onClick={handleClick}
                data-genre-id={id}
                className={`block py-2 px-4 rounded-full ${isActiveSlide
                  ? 'bg-white text-red-color-45'
                  : 'bg-red-color-45'
                  } transition text-center font-semibold`}
              >
                {name}
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Slide Next */}
      <SlideNext swiperRef={swiperRef} />
    </div>
  );
}

export default SliderGenres;