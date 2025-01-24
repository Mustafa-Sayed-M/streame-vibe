import React from 'react';
import MediaDescription from '../../Media/MediaDescription';
// import MediaVideos from '../Media/MediaVideos';
import { useQuery } from '@tanstack/react-query';
import { fetchImages, fetchReviews, fetchSingleMedia } from '../../../Utils/api';
import MediaSubInfo from './Components/MediaSubInfo';
import MediaImages from './Components/MediaImages';
import MediaReviews from './Components/MediaReviews';
import MediaSeasons from './Components/MediaSeasons';
// import {fetchVideos } from '../../Utils/api';

function ContentInfoGrid({ mediaType, mediaId, setBackdropPath }) {
  // Queries:
  const mediaQuery = useQuery({
    queryKey: [`${mediaType}-${mediaId}`],
    queryFn: () => fetchSingleMedia(mediaType, mediaId),
  });
  console.log(mediaQuery.data);

  const mediaImagesQuery = useQuery({
    queryKey: [`${mediaType}-images-${mediaId}`],
    queryFn: () => fetchImages(mediaType, mediaId),
  });
  // const mediaVideosQuery = useQuery({
  //   queryKey: [`${mediaType}-videos-${mediaId}`],
  //   queryFn: () => fetchVideos(mediaType, mediaId),
  // });
  const mediaReviewsQuery = useQuery({
    queryKey: [`${mediaType}-reviews-${mediaId}`],
    queryFn: () => fetchReviews(mediaType, mediaId),
  });
  React.useEffect(() => {
    if (mediaQuery.data) {
      setBackdropPath(mediaQuery.data.backdrop_path)
    };
  }, [mediaQuery.data, mediaQuery.isLoading, setBackdropPath]);
  return (
    // When Add More Elements Don't Forget Increase Row Span in ( MediaSubInfo ) Component.
    <div
      style={{
        boxShadow: '#141414 0px -20px 20px 20px'
      }}
      className='content-info-grid grid grid-cols-1 lg:grid-cols-3 items-start gap-3 relative bg-black-color-8'
    >
      {/* Media Seasons */}
      {mediaType === 'tv' && (<MediaSeasons seasonsData={mediaQuery.data?.seasons || []} />)}
      {/* Media SubInfo */}
      <MediaSubInfo mediaData={mediaQuery.data || {}} />
      {/* Media Description */}
      <MediaDescription description={mediaQuery.data?.overview} />
      {/* Media Images */}
      <MediaImages imagesData={mediaImagesQuery.data?.backdrops || []} />
      {/* Media Videos */}
      {/* <MediaVideos videosData={mediaVideosQuery.data?.results || []} /> */}
      {/* Media Reviews */}
      <MediaReviews reviewsData={mediaReviewsQuery.data?.results || []} />
    </div>
  )
}

export default ContentInfoGrid;