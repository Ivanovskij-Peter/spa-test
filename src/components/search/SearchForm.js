import React, { useState } from 'react';
import '../search/SearchForm.css';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => setQuery(evt.currentTarget.value);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (query === '') {
      return alert('Enter the name of the city');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="
        Enter the name of the city"
        className="input"
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
