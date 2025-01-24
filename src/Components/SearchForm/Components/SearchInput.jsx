import React from 'react';

const SearchInput = React.memo(({ onChange }) => {
    return (
        <div className='search-input space-y-2'>
            {/* Label */}
            <label htmlFor='search-input' className='text-grey-color-60'>Search</label>
            {/* Input Group */}
            <div className='flex items-center gap-2'>
                <input
                    required
                    id='search-input'
                    name='search-input'
                    placeholder='Search...'
                    className='focus:outline-none p-2 rounded-md flex-1 bg-black-color-12 border border-black-color-15 placeholder:text-grey-color-60'
                    onChange={onChange}
                />
                <button
                    type='submit'
                    title='Search'
                    aria-label='submit'
                    className='bg-red-color-45 py-2 px-4 rounded-md font-medium sm:hover:bg-white sm:hover:text-red-color-45 transition'
                >
                    <i className="fa-solid fa-magnifying-glass fa-fw"></i>
                    <span className='max-sm:hidden ms-2'>Search</span>
                    <span className='sr-only'>Search</span>
                </button>
            </div>
        </div>
    )
});

export default SearchInput;