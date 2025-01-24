import React from 'react';
import MediaCardSkeleton from './MediaCardSkeleton';

function MediaGridSkeleton() {
    return (
        <div className='media-grid-skeleton grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
            <MediaCardSkeleton />
            <MediaCardSkeleton />
            <MediaCardSkeleton />
            <MediaCardSkeleton />
            <MediaCardSkeleton />

            <MediaCardSkeleton />
            <MediaCardSkeleton />
            <MediaCardSkeleton />
            <MediaCardSkeleton />
            <MediaCardSkeleton />

            <MediaCardSkeleton />
            <MediaCardSkeleton />
            <MediaCardSkeleton />
            <MediaCardSkeleton />
            <MediaCardSkeleton />

            <MediaCardSkeleton />
            <MediaCardSkeleton />
            <MediaCardSkeleton />
            <MediaCardSkeleton />
            <MediaCardSkeleton />
        </div>
    )
}

export default MediaGridSkeleton;