import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { fetchSeasonEpisodes } from '../../../../Utils/api';
import { Link, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { formateRuntime } from '../../../../Utils/helpers';

const EpisodeItem = ({ episodeData }) => {

    const {
        episode_number,
        name,
        still_path,
        runtime,
        overview,
        season_number,
        show_id
    } = episodeData;

    return (
        <Link to={`/shows/${show_id}/season/${season_number}/episode/${episode_number}`} className='episode-item border-t border-t-black-color-15 py-3 flex items-center gap-3'>
            {/* Episode Number */}
            <h2 className='text-grey-color-60 text-xl'>{episode_number.toString().padStart(2, '0')}</h2>
            {/* Episode Content */}
            <div className='episode-content flex-1 flex max-sm:flex-col items-center gap-3'>
                {/* Episode Image */}
                <div className='episode-image'>
                    <LazyLoadImage
                        src={`https://image.tmdb.org/t/p/w500${still_path}`}
                        alt={name}
                        effect='blur'
                        className='rounded-md'
                    />
                </div>
                {/* Episode Text */}
                <div className='episode-text space-y-3 w-full'>
                    {/* Header */}
                    <div className='header flex items-center justify-between'>
                        {/* Episode Name */}
                        <h3 className='font-semibold line-clamp-1'>{name}</h3>
                        {/* Runtime */}
                        <div className='font-medium text-ms bg-black-color-8 border border-black-color-15 rounded-md p-2 text-grey-color-60 text-nowrap'>
                            <i className="fa-regular fa-clock me-2"></i>
                            <span>{formateRuntime(runtime)}</span>
                        </div>
                    </div>
                    {/* Episode Overview */}
                    <p className='text-grey-color-60 max-sm:hidden'>{overview}</p>
                </div>
            </div>
        </Link>
    )
};

const SeasonItem = ({ seasonData }) => {

    const { seriesId } = useParams();

    const {
        season_number,
        episode_count
    } = seasonData;

    const [discoverEpisodes, setDiscoverEpisodes] = useState(false);

    const seasonQuery = useQuery({
        queryKey: ['season', season_number],
        queryFn: () => fetchSeasonEpisodes(seriesId, season_number),
        enabled: Boolean(discoverEpisodes)
    });

    const handleOpen = () => {
        setDiscoverEpisodes(!discoverEpisodes)
    };

    return (
        <div className='season-item select-none p-3 space-y-3 rounded-md bg-black-color-6 border border-black-color-15 cursor-pointer' onClick={handleOpen}>
            {/* Header */}
            <div className='header flex items-center justify-between'>
                {/* Season Title */}
                <h3>
                    <span>Season {(season_number).toString().padStart(2, '0')} </span>
                    <span className='text-grey-color-60 text-sm'>{episode_count} Episodes</span>
                </h3>
                {/* Open State */}
                <i className={`fa-solid fa-chevron-down ${discoverEpisodes && 'rotate-180'} transition`}></i>
            </div>
            {/* Seasons Episodes */}
            {
                (discoverEpisodes && !seasonQuery.isLoading) && (
                    <div className='seasons-episodes max-h-[800px] overflow-y-auto pe-3' onClick={e => e.stopPropagation()}>
                        {
                            (seasonQuery.data?.episodes || []).map((episode, index) => <EpisodeItem key={index} episodeData={episode} />)
                        }
                    </div>
                )
            }
        </div>
    )
};

function MediaSeasons({ seasonsData }) {
    return (
        <div className='media-seasons p-3 rounded-md bg-black-color-10 border border-black-color-15 lg:col-span-2'>
            <h4 className='text-grey-color-60 mb-2'>Seasons and Episodes</h4>
            {/* Seasons */}
            <div className='seasons space-y-3'>
                {
                    seasonsData.map((season, index) => <SeasonItem key={index} seasonData={season} />)
                }
            </div>
        </div>
    )
}

export default MediaSeasons;