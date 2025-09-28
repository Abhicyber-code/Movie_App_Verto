import React from 'react';
import { Link } from 'react-router-dom';
import { useMovies } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import './Watchlist.css';

const Watchlist = () => {
  const { watchlist } = useMovies();

  if (watchlist.length === 0) {
    return (
      <div className="watchlist">
        <div className="empty-state">
          <h1>Your Watchlist</h1>
          <p>No movies in your watchlist yet.</p>
          <Link to="/">Browse Movies</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="watchlist">
      <div className="header">
        <h1>My Watchlist</h1>
        <p>{watchlist.length} movies</p>
      </div>

      <div className="movie-grid">
        {watchlist.map((movie) => (
          <MovieCard key={movie.id} movie={movie} showRemove={true} />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;