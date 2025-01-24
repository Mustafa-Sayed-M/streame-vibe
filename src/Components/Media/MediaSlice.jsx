import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const Actions = ({ mediaData }) => {
    const sharedButtonStyles = `rounded-md py-2 px-4 font-medium transition`;
    const sameStyles = `bg-black-color-6 border border-black-color-12 sm:hover:bg-black-color-10`;
    const buttonsData = [
        {
            'aria-label': 'Add',
            fontAwesomeIconClass: 'plus',
            className: `${sameStyles} ${sharedButtonStyles}`
        },
        {
            'aria-label': 'Like',
            fontAwesomeIconClass: 'thumbs-up',
            className: `${sameStyles} ${sharedButtonStyles}`
        },
        {
            'aria-label': 'Volume',
            fontAwesomeIconClass: 'volume-high',
            className: `${sameStyles} ${sharedButtonStyles}`
        },
    ]
    return (
        <div className='actions flex flex-wrap items-center justify-center gap-2'>
            <Link
                to={`/${mediaData.title ? 'movies' : 'shows'}/${mediaData.id}`}
                className={`bg-red-color-45 sm:hover:bg-white sm:hover:text-red-color-45 ${sharedButtonStyles}`}
            >
                <i className='fa-solid fa-exclamation fa-fw'></i>
                {'Details'}
            </Link>
            {
                buttonsData.map((button, index) => {
                    const { fontAwesomeIconClass, text, ...attributes } = button;
                    return (
                        <button
                            key={index}
                            {...attributes}
                            type='button'
                        >
                            <i className={`fa-solid fa-${fontAwesomeIconClass} fa-fw`}></i>
                            {text && (<span className='max-sm:hidden'>{text}</span>)}
                        </button>
                    )
                })
            }
        </div>
    )
};

function MediaSlice({ mediaData }) {

    const {
        title,
        name,
        backdrop_path,
        overview,
    } = mediaData;

    return (
        <div className='media-slice relative aspect-video'>
            <LazyLoadImage
                effect='blur'
                alt={title || name}
                className='rounded-md object-cover'
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            />
            <div className='absolute left-0 top-0 z-10 rounded-md h-full w-full p-4 md:p-6 xl:p-8 2xl:p-10 flex flex-col gap-y-3 justify-end'>
                {/* Text */}
                <div className='space-y-2 text-center'>
                    <h2 className='font-semibold text-xl sm:text-2xl md:text-3xl 2xl:text-4xl'>{title || name}</h2>
                    <p className='text-grey-color-60 line-clamp-1 sm:line-clamp-2 lg:line-clamp-3 xl:line-clamp-4 2xl:line-clamp-none'>{overview}</p>
                </div>
                {/* Actions */}
                <Actions mediaData={mediaData} />
            </div>
        </div>
    )
}

export default MediaSlice;