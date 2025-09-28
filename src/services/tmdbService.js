const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbService = {
  async getPopularMovies() {
    if (!API_KEY) {
      console.error('TMDB API key is not configured');
      return [];
    }
    
    try {
      const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      return [];
    }
  },

  async searchMovies(query) {
    if (!API_KEY) {
      console.error('TMDB API key is not configured');
      return [];
    }
    
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
  },

  getImageUrl(posterPath) {
    return posterPath 
      ? `https://image.tmdb.org/t/p/w500${posterPath}` 
      : null;
  }
};

export default tmdbService;