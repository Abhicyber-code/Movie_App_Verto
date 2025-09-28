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

## Tech Stack

- React
- React Router
- TMDB API
- CSS

## Project Structure

````
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── services/       # API and data services
├── context/        # State management
└── App.jsx         # Main app component
```+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
````
