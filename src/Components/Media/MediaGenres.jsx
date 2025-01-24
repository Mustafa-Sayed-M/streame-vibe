import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchGenres } from '../../Utils/api';
import SliderGenres from '../Sliders/SliderGenres';

function MediaGenres({ mediaType }) {
    const genresQuery = useQuery({
        queryKey: ['genres-movies'],
        queryFn: () => fetchGenres(mediaType),
    });

    return (
        <section
            data-aos='fade-up'
            id='media-genres'
            className='media-genres'
        >
            <div className='container py-7'>
                <div className='border border-black-color-12 p-3 space-y-3 rounded-md'>
                    <p className='text-grey-color-60'>Find With Genres</p>
                    {/* Slider of Genres */}
                    <SliderGenres genresList={genresQuery.data?.genres || []} />
                </div>
            </div>
        </section>
    )
}

export default MediaGenres;