import React, { useState } from 'react';
import { useMovies } from '../context/MovieContext';
import tmdbService from '../services/tmdbService';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const { setSearchResults, setSearchQuery, setLoading } = useMovies();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setSearchQuery(query);
    
    try {
      const results = await tmdbService.searchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
        {query && (
          <button type="button" onClick={clearSearch}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;