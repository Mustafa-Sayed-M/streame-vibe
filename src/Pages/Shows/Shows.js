import React from 'react';
import DiscoverMedia from '../../Components/Sections/DiscoverMedia';
import PopularMedia from '../../Components/Sections/PopularMedia';
import TopRatedMedia from '../../Components/Sections/TopRatedMedia';
import OnAirMedia from '../../Components/Sections/OnAirMedia';
import LandingMedia from '../../Components/Sections/LandingMedia';
import MediaGenres from '../../Components/Media/MediaGenres';

function Shows() {
    const mediaType = 'tv';

    return (
        <div className='shows-page'>
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
            {/* On Air Media */}
            <OnAirMedia mediaType={mediaType} />
        </div>
    )
}

export default Shows;