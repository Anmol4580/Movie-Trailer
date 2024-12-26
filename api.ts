import axios from 'axios';
import { Movie, MovieVideo } from '../types/movie';
import { config } from './config';

const api = axios.create({
  baseURL: config.tmdbBaseUrl,
  params: {
    api_key: config.tmdbApiKey
  }
});

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await api.get('/search/movie', {
      params: { query }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getMovieTrailer = async (movieId: number): Promise<MovieVideo | null> => {
  try {
    const response = await api.get(`/movie/${movieId}/videos`);
    const videos = response.data.results;
    return videos.find((video: MovieVideo) => 
      video.type === 'Trailer' && 
      video.site === 'YouTube' && 
      video.official
    ) || null;
  } catch (error) {
    console.error('Error fetching movie trailer:', error);
    return null;
  }
};