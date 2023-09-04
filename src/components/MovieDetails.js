import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../store/actions";
import { Link } from "react-router-dom";

const MovieDetails = ({ movie, fetchMovieDetails }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetails(id); // Fetch movie details based on the 'id' parameter from the URL
  }, [fetchMovieDetails, id]);

  if (!movie) {
    return <div>Movie not found.</div>;
  } else {
    console.log(movie);
  }

  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center w-1/2">
            <p className="text-white text-2xl font-semibold mr-4">
              Movie Detail
            </p>
          </div>
          <Link to="/" className="text-white text-2xl font-semibold mr-4">
            Home
          </Link>
        </div>
      </nav>

      <div className="flex items-start container mx-auto py-8">
        <div className="w-1/5">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="w-4/5 p-4">
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <p className="text-lg">Rating: {movie.vote_average}</p>

          <p className="text-lg">
            Year of Release: {movie.release_date.slice(0, 4)}
          </p>
          <p className="text-lg">
            Length: {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}min
          </p>
          <p className="text-lg">Director: {movie.director}</p>

          <div className="mt-4">
            <h2 className="text-xl font-semibold">Cast:</h2>
            {/* <p>{movie.cast.join(', ')}</p> */}
          </div>

          {/* Description */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Description:</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movies.movieDetails,
});

export default connect(mapStateToProps, { fetchMovieDetails })(MovieDetails);
