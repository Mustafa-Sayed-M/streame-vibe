import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchOnAir } from '../../Utils/api';
import SliderCards from '../Sliders/SliderCards';
import { useIntersectionObserver } from '@uidotdev/usehooks';

function OnAirMedia({ mediaType }) {
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
    const onAirQuery = useQuery({
        queryKey: [`now-playing-${mediaType}`],
        queryFn: () => fetchOnAir(mediaType),
        enabled: hasBeenIntersected,
    });
    return (
        <section className='on-air-media' id='on-air-media' ref={ref}>
            <div className='container py-7 space-y-3'>
                {
                    (onAirQuery.data && !onAirQuery.isLoading) ? (
                        <SliderCards mediaList={onAirQuery.data.results} title={'On The Air'} />
                    ) : (
                        'Loading...'
                    )
                }
            </div>
        </section>
    )
}

export default OnAirMedia;