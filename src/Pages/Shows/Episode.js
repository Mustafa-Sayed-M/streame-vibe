import React from 'react';
import { useParams } from 'react-router-dom';

function Episode() {
  const { seriesId, seasonNumber, episodeNumber } = useParams();

  return (
    <div className='episode-page'>
      <div className='container'>
        Series Id: {seriesId}
        <br />
        Season: {seasonNumber}
        <br />
        Episode: {episodeNumber}
      </div>
    </div>
  )
}

export default Episode;