import React, { useEffect } from 'react';
import { useMovies } from '../context/MovieContext';
import tmdbService from '../services/tmdbService';
import Search from '../components/Search';
import MovieGrid from '../components/MovieGrid';
import './Home.css';

const Home = () => {
  const { 
    movies, 
    searchResults, 
    searchQuery, 
    loading, 
    setMovies, 
    setLoading
  } = useMovies();

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      try {
        const popularMovies = await tmdbService.getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error('Failed to load movies:', error);
      } finally {
        setLoading(false);
      }
    };

    if (movies.length === 0) {
      loadPopularMovies();
    }
  }, [movies.length, setMovies, setLoading]);

  const displayMovies = searchQuery ? searchResults : movies;
  const title = searchQuery ? `Search Results` : 'Popular Movies';

  return (
    <div className="home">
      <div className="header">
        <h1>{title}</h1>
        {searchQuery && (
          <p>{searchResults.length} results for "{searchQuery}"</p>
        )}
        {!loading && !searchQuery && movies.length === 0 && (
          <p style={{ color: '#dc3545' }}>
            Unable to load movies. Please check if the API key is configured.
          </p>
        )}
      </div>

      <Search />
      <MovieGrid movies={displayMovies} loading={loading} />
    </div>
  );
};

export default Home;