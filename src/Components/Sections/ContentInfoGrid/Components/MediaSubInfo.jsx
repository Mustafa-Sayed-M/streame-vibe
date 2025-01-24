import React from 'react';
import { Link } from 'react-router-dom';
import { formateRuntime, sliceYearDate } from '../../../../Utils/helpers';

const SpokenLanguages = ({ spokenLanguages }) => {
    return (
        <div className='spoken-languages space-y-2'>
            <p className='text-grey-color-60'>
                <i className="fa-solid fa-language fa-fw me-2"></i>
                <span className='font-medium'>Spoken Languages</span>
            </p>
            <ul className='flex flex-wrap items-center gap-2'>
                {(spokenLanguages || []).map((lang, index) => <li key={index}>
                    <Link
                        to={`/search?type=${'multi'}&language=${lang.iso_639_1}`}
                        title={`Search With ${lang.name} Language`}
                        className='py-2 px-4 block bg-black-color-8 border border-black-color-15 rounded-md sm:hover:bg-black-color-10 transition'
                    >{lang.name}</Link>
                </li>)}
            </ul>
        </div>
    )
};
const Genres = ({ mediaData }) => {
    const { release_date, genres } = mediaData;
    return (
        <div className='genres space-y-2'>
            <p className='text-grey-color-60'>
                <i className="fa-solid fa-table-cells-large fa-fw me-2"></i>
                <span className='font-medium'>Genres</span>
            </p>
            <ul className='flex flex-wrap items-center gap-2'>
                {(genres || []).map((genre, index) => <li key={index}>
                    <Link
                        to={`/${release_date ? 'movies' : 'shows'}?genre=${genre.id}`}
                        title={`Find With ${genre.name} Genre`}
                        className='py-2 px-4 block bg-black-color-8 border border-black-color-15 rounded-md sm:hover:bg-black-color-10 transition'
                    >{genre.name}</Link>
                </li>)}
            </ul>
        </div>
    )
};
const Runtime = ({ runtime }) => {
    return (
        <div className='runtime space-y-2'>
            <p className='text-grey-color-60'>
                <i className="fa-solid fa-clock fa-fw me-2"></i>
                <span className='font-medium'>Runtime</span>
            </p>
            <p>{formateRuntime(runtime)}</p>
        </div>
    )
};

function MediaSubInfo({ mediaData }) {

    const {
        release_date,
        first_air_date,
        spoken_languages,
        runtime,
    } = mediaData;

    return (
        // When Add More Element in Parent Div, Don't Forget Increase Row Span in This Div.
        <div data-aos='fade-up' className='media-sub-info p-3 rounded-md bg-black-color-10 border border-black-color-15 space-y-3 lg:row-span-4'>
            {/* Year */}
            <div className='year space-y-2'>
                <p className='text-grey-color-60'>
                    <i className="fa-solid fa-calendar fa-fw me-2"></i>
                    <span className='font-medium'>Released Year</span>
                </p>
                <p className='font-semibold'>{sliceYearDate(release_date || first_air_date)}</p>
            </div>
            {/* Spoken Languages */}
            <SpokenLanguages spokenLanguages={spoken_languages} />
            {/* Genres */}
            <Genres mediaData={mediaData} />
            {/* Runtime */}
            {release_date && <Runtime runtime={runtime} />}
        </div>
    )
}

export default MediaSubInfo;