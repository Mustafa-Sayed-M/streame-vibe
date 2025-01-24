import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const VideoItem = ({ video }) => {
    const { name, key, site } = video;
    if (site !== "YouTube") return null;
    return (
        <div className="video-item rounded-md overflow-hidden shadow-md bg-black-color-15 p-3">
            <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${key}`}
                title={name}
                className='rounded-md'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <p className="text-grey-color-60 text-sm mt-2 line-clamp-1">{name}</p>
        </div>
    );
};

function SliderVideos({ videosList }) {
    return (
        <Swiper
            spaceBetween={15}
            slidesPerView={3}
            breakpoints={{
                0: {
                    slidesPerView: 1.5
                },
                575: {
                    slidesPerView: 2
                }
            }}
        >
            {
                (videosList || []).map((video, index) => <SwiperSlide key={index}>
                    <VideoItem video={video} />
                </SwiperSlide>)
            }
        </Swiper>
    )
}

export default SliderVideos;