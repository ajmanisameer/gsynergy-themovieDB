import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../store/actions";

const MovieDetails = ({ movie, fetchMovieDetails }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetails(id); // Fetch movie details based on the 'id' parameter from the URL
  }, [fetchMovieDetails, id]);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Rating: {movie.vote_average}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movies.movieDetails,
});

export default connect(mapStateToProps, { fetchMovieDetails })(MovieDetails);
