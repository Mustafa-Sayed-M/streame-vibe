import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchTopRated } from '../../Utils/api';
import SliderCards from '../Sliders/SliderCards';
import { useIntersectionObserver } from '@uidotdev/usehooks';

function TopRatedMedia({ mediaType }) {
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
    const topRatedQuery = useQuery({
        queryKey: [`top-rated-${mediaType}`],
        queryFn: () => fetchTopRated(mediaType),
        enabled: hasBeenIntersected,
    });
    return (
        <section className='top-rated-media' id='top-rated-media' ref={ref}>
            <div className='container py-7 space-y-3'>
                {
                    (topRatedQuery.data && !topRatedQuery.isLoading) ? (
                        <SliderCards mediaList={topRatedQuery.data.results} title={'Top Rated'} />
                    ) : (
                        'Loading...'
                    )
                }
            </div>
        </section>
    )
}

export default TopRatedMedia;