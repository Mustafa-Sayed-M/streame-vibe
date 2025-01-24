import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchNowPlaying } from '../../Utils/api';
import SliderCards from '../Sliders/SliderCards';
import { useIntersectionObserver } from '@uidotdev/usehooks';

function NowPlayingMedia({ mediaType }) {
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
    const nowPlayingQuery = useQuery({
        queryKey: [`now-playing-${mediaType}`],
        queryFn: () => fetchNowPlaying(mediaType),
        enabled: hasBeenIntersected,
    });
    return (
        <section className='now-playing-media' id='now-playing-media' ref={ref}>
            <div className='container py-7'>
                {
                    (nowPlayingQuery.data && !nowPlayingQuery.isLoading) ? (
                        <SliderCards mediaList={nowPlayingQuery.data.results} title={'Now Playing'} />
                    ) : (
                        'Loading...'
                    )
                }
            </div>
        </section>
    )
}

export default NowPlayingMedia;