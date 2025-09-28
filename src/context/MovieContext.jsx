import React, { createContext, useContext, useState, useEffect } from 'react';
import watchlistService from '../services/watchlistService';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setWatchlist(watchlistService.get());
  }, []);

  const addToWatchlist = (movie) => {
    if (watchlistService.add(movie)) {
      setWatchlist(watchlistService.get());
    }
  };

  const removeFromWatchlist = (movieId) => {
    watchlistService.remove(movieId);
    setWatchlist(watchlistService.get());
  };

  const isInWatchlist = (movieId) => {
    return watchlistService.includes(movieId);
  };

  const value = {
    movies,
    setMovies,
    searchResults,
    setSearchResults,
    watchlist,
    loading,
    setLoading,
    searchQuery,
    setSearchQuery,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovies must be used within MovieProvider');
  }
  return context;
};