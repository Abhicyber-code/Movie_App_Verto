const STORAGE_KEY = 'watchlist';

const watchlistService = {
  get() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  add(movie) {
    const watchlist = this.get();
    if (!watchlist.find(item => item.id === movie.id)) {
      watchlist.push(movie);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
      return true;
    }
    return false;
  },

  remove(movieId) {
    const watchlist = this.get();
    const filtered = watchlist.filter(movie => movie.id !== movieId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },

  includes(movieId) {
    return this.get().some(movie => movie.id === movieId);
  }
};

export default watchlistService;