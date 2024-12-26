import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { MovieCard } from './components/MovieCard';
import { TrailerModal } from './components/TrailerModal';
import { searchMovies, getMovieTrailer } from './utils/mockApi';
import { Movie, MovieVideo } from './types/movie';

export function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<MovieVideo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      setError('Failed to search movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleMovieSelect = async (movie: Movie) => {
    try {
      const trailer = await getMovieTrailer(movie.id);
      setSelectedVideo(trailer);
    } catch (err) {
      setError('Failed to load trailer. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Movie Trailer Generator
        </h1>
        
        <div className="mb-8 flex justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>

        {error && (
          <div className="text-center text-red-600 mb-4">{error}</div>
        )}

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelect={handleMovieSelect}
              />
            ))}
          </div>
        )}

        {selectedVideo && (
          <TrailerModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </div>
    </div>
  );
}