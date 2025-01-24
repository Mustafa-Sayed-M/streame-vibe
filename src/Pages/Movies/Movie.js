import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RecommendationsMedia from '../../Components/Sections/RecommendationsMedia';
import Backdrop from '../../Components/Sections/Backdrop';
import ContentInfoGrid from '../../Components/Sections/ContentInfoGrid/ContentInfoGrid';

function Movie() {
    const mediaType = 'movie';
    const { movieId } = useParams();
    const [backdropPath, setBackdropPath] = useState(null);

    return (
        <div className='movie-page'>
            <div className='container py-7'>
                {/* Backdrop */}
                <Backdrop backdropPath={backdropPath} />
                {/* Content Info Grid */}
                <ContentInfoGrid mediaType={mediaType} mediaId={movieId} setBackdropPath={setBackdropPath} />
            </div>
            {/* Recommendations Media */}
            <RecommendationsMedia mediaType={mediaType} mediaId={movieId} />
        </div>
    )
}

export default Movie;