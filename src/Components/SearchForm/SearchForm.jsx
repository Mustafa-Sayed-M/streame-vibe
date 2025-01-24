import React, { useCallback, useState } from 'react';
import SearchInput from './Components/SearchInput';
import Selects from './Components/Selects';
import { useSearchParams } from 'react-router-dom';

function SearchForm() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState(null);
    const handleSearchInputChange = useCallback((e) => { // Use callback to forbid re-rendering search input.
        const value = e.target.value;
        if (value) setSearchValue(value);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newSearchParams = new URLSearchParams(searchParams);
        if (searchValue) {
            newSearchParams.set('query', searchValue);
            setSearchParams(newSearchParams);
        } else {
            newSearchParams.delete('query');
            setSearchParams(newSearchParams);
        }
    }

    return (
        <form className='search-form space-y-3' onSubmit={handleSubmit}>
            {/* Search Input */}
            <SearchInput onChange={handleSearchInputChange} />
            {/* Selects */}
            <Selects />
        </form>
    )
}

export default SearchForm;