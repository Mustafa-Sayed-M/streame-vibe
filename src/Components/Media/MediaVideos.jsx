import React from 'react';
import SliderVideos from '../Sliders/SliderVideos';

function MediaVideos({ videosData }) {
    if (videosData.length === 0) return;
    return (
        <div className="media-videos p-3 rounded-md bg-black-color-10 border border-black-color-15 lg:col-span-2">
            <h4 className="text-grey-color-60 mb-2">Videos</h4>
            {/* Slider Videos */}
            <SliderVideos videosList={videosData} />
        </div>
    );
}

export default MediaVideos;