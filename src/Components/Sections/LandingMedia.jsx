import React from 'react';
import SliderSlices from '../Sliders/SliderSlices';
import { useQuery } from '@tanstack/react-query';
import { fetchTrending } from '../../Utils/api';
import LandingMediaSkeleton from '../Skeletons/LandingMediaSkeleton';

function LandingMedia({ mediaType }) {
    const trendingQuery = useQuery({
        queryKey: [`trending-${mediaType}`],
        queryFn: () => fetchTrending(mediaType)
    });

    React.useEffect(() => {
        if (trendingQuery.data && trendingQuery.data.results.length > 0) {
            const firstImage = trendingQuery.data.results[0]?.backdrop_path;
            if (firstImage) {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = `https://image.tmdb.org/t/p/original${firstImage}`;
                document.head.appendChild(link);
            }
        }
    }, [trendingQuery.data]);

    return (
        <section
            data-aos='fade-up'
            id='landing-media'
            className='landing-media'
        >
            <div className='container py-7'>
                {
                    (trendingQuery.data && !trendingQuery.isLoading) ? (
                        <SliderSlices mediaList={trendingQuery.data.results} />
                    ) : (
                        <div className='space-y-3'>
                            <LandingMediaSkeleton />
                            {/* # Clear Controllers For Enhance UI # */}
                            <div className='h-[42px]'></div>
                        </div>
                    )
                }
            </div>
        </section>
    );
}

export default LandingMedia;