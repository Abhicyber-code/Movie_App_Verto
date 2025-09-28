import React from 'react';
import { useMovies } from '../context/MovieContext';
import tmdbService from '../services/tmdbService';
import './MovieCard.css';

const MovieCard = ({ movie, showRemove = false }) => {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useMovies();
  
  const inWatchlist = isInWatchlist(movie.id);
  const imageUrl = tmdbService.getImageUrl(movie.poster_path);

  const handleAdd = () => {
    addToWatchlist(movie);
  };

  const handleRemove = () => {
    removeFromWatchlist(movie.id);
  };

  return (
    <div className="movie-card">
      <div className="poster">
        {imageUrl ? (
          <img src={imageUrl} alt={movie.title} />
        ) : (
          <div className="no-poster">No Image</div>
        )}
      </div>
      
      <div className="info">
        <h3>{movie.title}</h3>
        <p className="year">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'TBA'}
        </p>
        <p className="rating">★ {movie.vote_average?.toFixed(1) || 'N/A'}</p>
        
        <div className="button-container">
          {showRemove ? (
            <button onClick={handleRemove} className="remove-btn">
              Remove
            </button>
          ) : (
            <button 
              onClick={handleAdd} 
              disabled={inWatchlist}
              className={inWatchlist ? 'added' : 'add-btn'}
            >
              {inWatchlist ? 'Added' : 'Add to Watchlist'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;