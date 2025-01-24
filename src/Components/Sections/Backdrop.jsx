import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Backdrop({ backdropPath }) {
    useEffect(() => {
        if (backdropPath) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = `https://image.tmdb.org/t/p/original${backdropPath}`;
            document.head.appendChild(link);
        }
    }, [backdropPath]);

    return (
        <section
            data-aos="fade-up"
            id="backdrop"
            className="backdrop rounded-md aspect-video"
        >
            <LazyLoadImage
                effect="blur"
                alt="Backdrop"
                className="rounded-md object-cover"
                src={`https://image.tmdb.org/t/p/original${backdropPath}`}
            />
        </section>
    );
}

export default Backdrop;