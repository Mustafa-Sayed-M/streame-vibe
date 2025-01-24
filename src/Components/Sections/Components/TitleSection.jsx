import React from 'react';

function TitleSection({ titleText, fontAwesomeIconClass }) {
    return (
        <h2 className='font-semibold text-lg'>
            <i className={`${fontAwesomeIconClass} fa-fw text-red-color-45 me-2`}></i>
            <span className='text-grey-color-60 me-2'>{titleText}</span>
        </h2>
    )
}

export default TitleSection;