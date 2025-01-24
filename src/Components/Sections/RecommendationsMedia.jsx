import React from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { useQuery } from '@tanstack/react-query';
import { fetchRecommendations } from '../../Utils/api';
import SliderCards from '../Sliders/SliderCards';

function RecommendationsMedia({ mediaType, mediaId }) {
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
    const recommendationsQuery = useQuery({
        queryKey: [`recommendations-${mediaType}-${mediaId}`],
        queryFn: () => fetchRecommendations(mediaType, mediaId),
        enabled: hasBeenIntersected,
    });
    return (
        <section className='recommendations-media' id='recommendations-media' ref={ref}>
            <div className='container py-7 space-y-3'>
                {
                    (recommendationsQuery.data && !recommendationsQuery.isLoading) ? (
                        <SliderCards mediaList={recommendationsQuery.data.results} title={'Recommendations'} />
                    ) : (
                        'Loading...'
                    )
                }
            </div>
        </section>
    )
}

export default RecommendationsMedia;