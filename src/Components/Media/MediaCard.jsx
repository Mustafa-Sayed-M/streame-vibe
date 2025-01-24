import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { sliceYearDate } from '../../Utils/helpers';

function MediaCard({ mediaData }) {

    const {
        id,
        title,
        release_date,
        name,
        first_air_date,
        poster_path,
        vote_average,
    } = mediaData;

    return (
        <div className='media-card p-3 bg-black-color-10 border border-black-color-15 rounded-md space-y-2 aspect-[1/1.75]'>
            {/* Poster */}
            <Link
                to={`/${title ? 'movies' : 'shows'}/${id}`}
                className='aspect-[1/1.53] flex items-center justify-center'
            >
                <span className='sr-only'>{title || name}</span>
                {
                    poster_path ? (
                        <LazyLoadImage
                            effect='blur'
                            alt={"Poster Link"}
                            className='rounded-md object-cover'
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        />
                    ) : (<p className='text-grey-color-60'>No Poster Image 💔</p>)
                }
            </Link>
            {/* Title */}
            <Link
                to={`/${title ? 'movies' : 'shows'}/${id}`}
                className='block w-fit sm:hover:text-red-color-45 transition-colors'
            >
                <span className='line-clamp-1'>{title || name}</span>
            </Link>
            {/* Info */}
            <div className='flex items-center justify-between text-sm'>
                {/* Year */}
                <p className='text-grey-color-60'>{sliceYearDate(release_date || first_air_date)}</p>
                {/* Rating */}
                <div className='space-x-1'>
                    <span>( {(vote_average || 0).toFixed(1)} )</span>
                    {/* Get 5 Stars */}
                    {Array.from({ length: 5 }).map((_, index) => (<span key={index} className={`text-red-color-45 ${index !== 0 && 'max-sm:hidden'}`}><i className={`fa-solid fa-star`}></i></span>))}
                </div>
            </div>
        </div>
    )
}

export default MediaCard;