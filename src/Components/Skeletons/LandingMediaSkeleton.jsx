import React from 'react';

function LandingMediaSkeleton() {
    const mainColor = `bg-grey-color-60/10`;
    const secondColor = `bg-grey-color-60/40`;
    const actionStyle1 = `w-24 h-4`;
    const actionStyle2 = `w-10 h-4`;
    const radios = `rounded-md`;
    return (
        <div className={`landing-media-skeleton ${mainColor} ${radios} animate-pulse aspect-video flex flex-col justify-end gap-y-5 p-4 md:p-6 xl:p-8 2xl:p-10`}>
            <div className='space-y-2 *:mx-auto'>
                <div className={`${secondColor} ${radios} w-36 h-4 animate-pulse`}></div>
                <div className={`${secondColor} ${radios} w-96 h-3 animate-pulse`}></div>
                <div className={`${secondColor} ${radios} w-60 h-3 animate-pulse`}></div>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <div className={`${secondColor} ${actionStyle1} ${radios} animate-pulse`}></div>
                <div className={`${secondColor} ${actionStyle2} ${radios} animate-pulse`}></div>
                <div className={`${secondColor} ${actionStyle2} ${radios} animate-pulse`}></div>
                <div className={`${secondColor} ${actionStyle2} ${radios} animate-pulse`}></div>
            </div>
        </div>
    )
}

export default LandingMediaSkeleton;