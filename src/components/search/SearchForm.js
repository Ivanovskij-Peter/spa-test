import React, { useState} from 'react';

const SearchForm = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    const handleChange = (evt) => setQuery(evt.currentTarget.value);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(query);
        setQuery('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type='text' value={query} onChange={handleChange} />
        <button type="submit">Найти</button>
        </form>
    );
   
};
export default SearchForm;