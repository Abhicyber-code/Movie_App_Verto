# Movie Library

A simple React app to browse movies and manage your watchlist.

## Features

- Browse popular movies
- Search for movies
- Add movies to your watchlist
- View and manage your watchlist
- Responsive design

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Get a free API key from [The Movie Database](https://www.themoviedb.org/settings/api)

3. Add your API key to `.env`:
   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Deployment

### Deploy to Vercel

1. Fork this repository or push to your GitHub
2. Visit [Vercel](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Add environment variable: `VITE_TMDB_API_KEY` with your API key
5. Deploy!

### Manual Deployment

1. Build the project:
   ```
   npm run build
   ```
2. Deploy the `dist` folder to your hosting provider

## Tech Stack

- React
- React Router
- TMDB API
- CSS
- Vite

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── services/       # API and data services
├── context/        # State management
└── App.jsx         # Main app component
```
