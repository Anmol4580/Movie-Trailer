import React from 'react';
import { MovieVideo } from '../types/movie';

interface TrailerModalProps {
  video: MovieVideo | null;
  onClose: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-lg">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
        >
          Close
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/${video.key}`}
            title="Movie Trailer"
            className="w-full h-full rounded-lg"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};