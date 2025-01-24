import React from 'react';

function MediaCardSkeleton() {
    return (
        <div className='media-card-skeleton p-3 rounded-md bg-grey-color-60/10 animate-pulse aspect-[1/1.5] space-y-2'>
            <div className='bg-grey-color-60/15 animate-pulse rounded-md h-full'></div>
            <div className='bg-grey-color-60/15 animate-pulse rounded-md h-4 w-3/4'></div>
            <div className='bg-grey-color-60/15 animate-pulse rounded-md h-4 w-2/4'></div>
        </div>
    )
}

export default MediaCardSkeleton;