import React from 'react';
import MediaGrid from '../Media/MediaGrid';
import { useQuery } from '@tanstack/react-query';
import { discoverMedia } from '../../Utils/api';
import TitleSection from './Components/TitleSection';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import MediaGridSkeleton from '../Skeletons/MediaGridSkeleton';
import { useSearchParams } from 'react-router-dom';

function DiscoverMedia({ mediaType }) {
    const [hasBeenIntersected, setHasBeenIntersected] = React.useState(false);
    const [ref, entry] = useIntersectionObserver({
        threshold: 0.2,
        root: null,
        rootMargin: "0px",
    });
    React.useEffect(() => {
        if (entry?.isIntersecting && !hasBeenIntersected) {
            setHasBeenIntersected(true);
        }
    }, [entry, hasBeenIntersected]);
    const [searchParams] = useSearchParams();
    const genreParam = searchParams.get('genre');
    const discoverQuery = useQuery({
        queryKey: [`discover-${mediaType}`, genreParam],
        queryFn: () => discoverMedia(mediaType, genreParam && { with_genres: genreParam }),
        enabled: hasBeenIntersected,
    });
    return (
        <section
            ref={ref}
            id='discover-media'
            className='discover-media'
        >
            <div className='container py-7 space-y-3'>
                <TitleSection
                    titleText={`Discover`}
                    fontAwesomeIconClass={`fa-solid fa-clapperboard`}
                />
                {
                    (discoverQuery.data && !discoverQuery.isLoading) ? (
                        <MediaGrid mediaList={discoverQuery.data.results} />
                    ) : (
                        <MediaGridSkeleton />
                    )
                }
            </div>
        </section>
    )
}

export default DiscoverMedia;