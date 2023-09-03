import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUpcomingMovies, searchMovies } from "../store/actions";
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';
import MovieCard from "./MovieCard";

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
      <SearchBar onSearch={handleSearch} />

      <div className="movie-list">
        {searchResults.length > 0
          ? // If there are search results, render them
            searchResults.map((movie) => (
              <Link
                to={{
                  pathname: `/movie/${movie.id}`,
                  state: { movie }, // Pass the entire movie object in the state
                }}
                key={movie.id}
              >
                <MovieCard movie={movie} />
              </Link>
            ))
          : // Otherwise, render upcoming movies
            upcomingMovies.map((movie) => (
              <Link
                to={{
                  pathname: `/movie/${movie.id}`,
                  state: { movie }, // Pass the entire movie object in the state
                }}
                key={movie.id}
              >
                <MovieCard movie={movie} />
              </Link>
            ))}
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

