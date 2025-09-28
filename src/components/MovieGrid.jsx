import React from 'react';
import MovieCard from './MovieCard';
import './MovieGrid.css';

const MovieGrid = ({ movies, loading }) => {
  if (loading) {
    return <div className="loading">Loading movies...</div>;
  }

  if (!movies || movies.length === 0) {
    return <div className="empty">No movies found</div>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;