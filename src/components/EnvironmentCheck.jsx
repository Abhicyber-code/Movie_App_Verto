import React from 'react';

const EnvironmentCheck = () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  
  if (process.env.NODE_ENV === 'development') {
    console.log('API Key status:', apiKey ? 'Set' : 'Missing');
  }

  return null;
};

export default EnvironmentCheck;