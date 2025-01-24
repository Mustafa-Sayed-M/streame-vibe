import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RecommendationsMedia from '../../Components/Sections/RecommendationsMedia';
import ContentInfoGrid from '../../Components/Sections/ContentInfoGrid/ContentInfoGrid';
import Backdrop from '../../Components/Sections/Backdrop';

function Series() {
    const mediaType = 'tv';
    const { seriesId } = useParams();
    const [backdropPath, setBackdropPath] = useState(null);

    return (
        <div className='series-page'>
            <div className='container py-7'>
                {/* Backdrop */}
                <Backdrop backdropPath={backdropPath} />
                <ContentInfoGrid mediaType={mediaType} mediaId={seriesId} setBackdropPath={setBackdropPath} />
            </div>
            {/* Recommendations Media */}
            <RecommendationsMedia mediaType={mediaType} mediaId={seriesId} />
        </div>
    )
}

export default Series;