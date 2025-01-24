import React from 'react';
import landingBg from '../../assets/images/landing-bg.webp';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <section
            id='landing'
            style={{
                backgroundImage: `url(${landingBg})`,
                backgroundSize: 'cover',
                boxShadow: '#141414 0px 0px 20px 20px inset',
            }}
            className='landing aspect-video'
        >
            <div className='h-full bg-black/50'>
                <div className='container h-full flex items-center justify-center'>
                    <div className='space-y-3 text-center'>
                        <h2 className='font-semibold text-xl md:text-3xl xl:text-4xl'>The Best Streaming Experience</h2>
                        <p className='text-grey-color-60 line-clamp-2 md:line-clamp-3 xl:line-clamp-4 2xl:line-clamp-none'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand,
                            anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows,
                            and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                        <Link
                            to={'/movies'}
                            className='block mx-auto w-fit py-2 px-4 rounded-md bg-red-color-45 sm:hover:bg-white sm:hover:text-red-color-45 transition font-medium'
                        >
                            <i className="fa-solid fa-play me-2"></i>
                            {'Start Watching Now'}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;