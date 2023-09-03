import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-500 p-2 text-white text-center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="h-32 mx-auto rounded-t-lg"
        />
      </div>
      {/* Card Body */}
      <div className="p-4">
      <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{movie.title}</h3>
          <p className="text-gray-500">Rating: {movie.vote_average}</p>
        </div>
        <p className="text-gray-700 mt-2">
          {movie.overview.length > 100
            ? `${movie.overview.substring(0, 100)}...`
            : movie.overview}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
