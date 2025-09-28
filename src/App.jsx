import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Navigation from './components/Navigation';
import EnvironmentCheck from './components/EnvironmentCheck';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="app">
          <EnvironmentCheck />
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
