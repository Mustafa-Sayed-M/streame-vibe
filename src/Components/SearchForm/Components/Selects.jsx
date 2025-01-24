import React from 'react';
import languages from '../../../Data/languages.json';
import { useSearchParams } from 'react-router-dom';

const SelectItem = ({ label, options, ...selectData }) => {
    return (
        <div className='select-item flex-1 space-y-2 max-md:w-full'>
            {/* Label */}
            <label htmlFor={selectData.id} className='block text-grey-color-60'>{label}</label>
            {/* Select */}
            <select
                {...selectData}
                className={`${selectData.className} w-full focus:outline-none p-2 rounded-md bg-black-color-12 border border-black-color-15 transition`}
            >
                {
                    options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)
                }
            </select>
        </div>
    )
};

function Selects() {
    const [searchParams, setSearchparams] = useSearchParams();
    // Current Year:
    const currentYear = new Date().getFullYear();
    // Generate years:
    const generateYears = (startYear, endYear) => {
        const years = [];
        for (let year = startYear; year >= endYear; year--) {
            years.push({ value: year.toString(), text: year.toString() });
        }
        return years;
    };
    // Generate language:
    const generateLanguages = () => {
        return languages.map(language => ({ value: language.iso_639_1, text: language.name }));
    };
    // Get Params:
    const typeParam = searchParams.get('type');
    const yearParam = searchParams.get('year');
    const languageParam = searchParams.get('language');

    const selectsData = [
        {
            id: 'type',
            name: 'type',
            label: 'Media Type',
            defaultValue: typeParam,
            className: 'cursor-pointer',
            options: [
                { value: 'multi', text: 'Multi' },
                { value: 'tv', text: 'Shows' },
                { value: 'movie', text: 'Movies' },
            ]
        },
        {
            id: 'year',
            name: 'year',
            label: 'Year',
            defaultValue: yearParam,
            disabled: typeParam === 'multi',
            className: typeParam === 'multi' ? 'cursor-not-allowed' : 'cursor-pointer',
            title: typeParam === 'multi' ? 'Not allowed in multi type' : '',
            options: [{ value: '', text: 'Select Year' }, ...generateYears(currentYear, 1900)],
        },
        {
            id: 'language',
            name: 'language',
            label: 'Language',
            className: 'cursor-pointer',
            defaultValue: languageParam || 'en',
            options: generateLanguages()
        },
    ];

    const handleChange = (e) => {
        const newSearchParams = new URLSearchParams(searchParams);
        if (e.target.value) {
            newSearchParams.set(e.target.name, e.target.value);
        } else {
            newSearchParams.delete(e.target.name);
        }
        setSearchparams(newSearchParams);
    };

    return (
        <div className='selects flex items-center gap-3 max-md:flex-col'>
            {
                selectsData.map((select, index) => <SelectItem key={index} {...{ ...select, onChange: handleChange }} />)
            }
        </div>
    )
}

export default Selects;