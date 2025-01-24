import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchPopular } from '../../Utils/api';
import SliderCards from '../Sliders/SliderCards';
import { useIntersectionObserver } from '@uidotdev/usehooks';

function PopularMedia({ mediaType }) {
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
    const popularQuery = useQuery({
        queryKey: [`popular-${mediaType}`],
        queryFn: () => fetchPopular(mediaType),
        enabled: hasBeenIntersected,
    });

    return (
        <section className='popular-media' id='popular-media' ref={ref}>
            <div className='container py-7 space-y-3'>
                {
                    (popularQuery.data && !popularQuery.isLoading) ? (
                        <SliderCards mediaList={popularQuery.data.results} title={'Popular'} />
                    ) : (
                        'Loading...'
                    )
                }
            </div>
        </section>
    )
}

export default PopularMedia;