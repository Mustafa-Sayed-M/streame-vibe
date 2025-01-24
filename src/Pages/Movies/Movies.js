import React from 'react';
import LandingMedia from '../../Components/Sections/LandingMedia';
import DiscoverMedia from '../../Components/Sections/DiscoverMedia';
import PopularMedia from '../../Components/Sections/PopularMedia';
import UpcomingMedia from '../../Components/Sections/UpcomingMedia';
import NowPlayingMedia from '../../Components/Sections/NowPlayingMedia';
import TopRatedMedia from '../../Components/Sections/TopRatedMedia';
import MediaGenres from '../../Components/Media/MediaGenres';

function Movies() {
    const mediaType = 'movie';

    return (
        <div className='movies-page'>
            {/* Landing Media */}
            <LandingMedia mediaType={mediaType} />
            {/* Media Genres */}
            <MediaGenres mediaType={mediaType} />
            {/* Discover Media */}
            <DiscoverMedia mediaType={mediaType} />
            {/* Popular Media */}
            <PopularMedia mediaType={mediaType} />
            {/* Top Rated Media */}
            <TopRatedMedia mediaType={mediaType} />
            {/* Now Playing Media */}
            <NowPlayingMedia mediaType={mediaType} />
            {/* Upcoming Media */}
            <UpcomingMedia mediaType={mediaType} />
        </div>
    )
}

export default Movies;