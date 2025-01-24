import React from 'react';
import SearchForm from '../Components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchSearch, fetchTrending } from '../Utils/api';
import MediaGrid from '../Components/Media/MediaGrid';
import MediaGridSkeleton from '../Components/Skeletons/MediaGridSkeleton';

function Search() {
    const [searchParams] = useSearchParams();
    // Get Params:
    const queryParam = searchParams.get('query');
    const typeParam = searchParams.get('type');
    const yearParam = searchParams.get('year');
    const languageParam = searchParams.get('language');
    // Search Query:
    const searchQuery = useQuery({
        queryKey: ['search', typeParam, queryParam, yearParam, languageParam],
        queryFn: () => fetchSearch(typeParam, { query: queryParam, year: yearParam, first_air_date_year: yearParam, language: languageParam }),
        enabled: Boolean(queryParam)
    });
    // Trending Query:
    const trendingQuery = useQuery({
        queryKey: [`trending-movie`],
        queryFn: () => fetchTrending('movie')
    });

    return (
        <div className='search-page'>
            <div className='container py-7 space-y-7'>
                {/* Search Form */}
                <SearchForm />
                {/* Show Media */}
                {
                    (trendingQuery.isLoading || searchQuery.isLoading) ? (
                        <MediaGridSkeleton />
                    ) : searchQuery.data ?
                        searchQuery.data.results.length > 0 ? (
                            <div className='space-y-3'>
                                <p className='text-grey-color-60'>Search Results</p>
                                <MediaGrid mediaList={searchQuery.data.results} />
                            </div>
                        ) : <p className='text-center font-medium text-grey-color-60'>No Search Results 💔</p> : (
                            <div className='space-y-3'>
                                <p className='text-grey-color-60'>Trending Now</p>
                                <MediaGrid mediaList={trendingQuery.data.results} />
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default Search;