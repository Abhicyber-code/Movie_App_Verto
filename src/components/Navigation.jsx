import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMovies } from '../context/MovieContext';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const { watchlist } = useMovies();

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        Movie Library
      </Link>
      
      <div className="nav-links">
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
        >
          Browse
        </Link>
        <Link 
          to="/watchlist" 
          className={location.pathname === '/watchlist' ? 'active' : ''}
        >
          Watchlist ({watchlist.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;