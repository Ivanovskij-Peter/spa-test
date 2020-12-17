import React, { useState} from 'react';
import '../search/SearchForm.css';

const SearchForm = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    const handleChange = (evt) => setQuery(evt.currentTarget.value);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(query);
        setQuery('');
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
        <input type='text' value={query} onChange={handleChange} placeholder='Введите название города' className="input" />
        <button type="submit">Найти</button>
        </form>
    );
   
};
export default SearchForm;