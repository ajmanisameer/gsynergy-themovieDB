import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUpcomingMovies, searchMovies } from "../store/actions";

const MovieList = ({
  upcomingMovies,
  searchResults,
  fetchUpcomingMovies,
  searchMovies,
}) => {
  useEffect(() => {
    fetchUpcomingMovies();
  }, [fetchUpcomingMovies]);

  const handleSearch = (query) => {
    searchMovies(query);
  };

  return (
    <div>
      <h1>Upcoming Movies</h1>
      {/* SearchBar component */}

      <div className="movie-list">
        {searchResults.length > 0 ? (
          // If there are search results, render them
          searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          // Otherwise, render upcoming movies
          upcomingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  upcomingMovies: state.movies.upcomingMovies,
  searchResults: state.movies.searchResults,
});

export default connect(mapStateToProps, { fetchUpcomingMovies, searchMovies })(
  MovieList
);




function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Rating: {movie.vote_average}</p>
      <p>{movie.overview}</p>
    </div>
  );
}
