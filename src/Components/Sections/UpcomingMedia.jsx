import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchUpcoming } from '../../Utils/api';
import SliderCards from '../Sliders/SliderCards';
import { useIntersectionObserver } from '@uidotdev/usehooks';

function UpcomingMedia({ mediaType }) {
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
    const upcomingQuery = useQuery({
        queryKey: [`upcoming-${mediaType}`],
        queryFn: () => fetchUpcoming(mediaType),
        enabled: hasBeenIntersected,
    });
    return (
        <section className='upcoming-media' id='upcoming-media' ref={ref}
        >
            <div className='container py-7'>
                {
                    (upcomingQuery.data && !upcomingQuery.isLoading) ? (
                        <SliderCards mediaList={upcomingQuery.data.results} title={'Upcoming'} />
                    ) : (
                        'Loading...'
                    )
                }
            </div>
        </section>
    )
}

export default UpcomingMedia;