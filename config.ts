export const config = {
  tmdbApiKey: import.meta.env.VITE_TMDB_API_KEY,
  tmdbBaseUrl: 'https://api.themoviedb.org/3'
} as const;

export const isConfigValid = () => {
  return config.tmdbApiKey && config.tmdbApiKey !== 'your_tmdb_api_key';
};