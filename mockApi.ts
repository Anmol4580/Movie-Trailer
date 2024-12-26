import { Movie, MovieVideo } from '../types/movie';
import { mockMovies, mockTrailers } from '../data/mockMovies';

export const searchMovies = async (query: string): Promise<Movie[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const normalizedQuery = query.toLowerCase();
  return mockMovies.filter(movie => 
    movie.title.toLowerCase().includes(normalizedQuery) ||
    movie.overview.toLowerCase().includes(normalizedQuery)
  );
};

export const getMovieTrailer = async (movieId: number): Promise<MovieVideo | null> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockTrailers[movieId as keyof typeof mockTrailers] || null;
};